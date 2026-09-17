import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { NEXUS_COACH_SYSTEM_PROMPT } from '@/data/nexusCoach';

// Ensure this route runs in Node.js / edge runtime on server only
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_USER_MESSAGE_LENGTH = 1200;
const MAX_CONTEXT_MESSAGES = 10; // Keep conversation history compact

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'Nexus Coach service is currently unconfigured. Please WhatsApp the club team at +91 95823 33003.',
        },
        { status: 503 }
      );
    }

    let body: { messages?: ChatMessage[] };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body format.' },
        { status: 400 }
      );
    }

    const rawMessages = body.messages;
    if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required and must not be empty.' },
        { status: 400 }
      );
    }

    // Sanitize and slice recent messages
    const validMessages: ChatMessage[] = [];
    for (const msg of rawMessages) {
      if (
        msg &&
        (msg.role === 'user' || msg.role === 'assistant') &&
        typeof msg.content === 'string'
      ) {
        const trimmed = msg.content.trim();
        if (trimmed.length > 0) {
          validMessages.push({
            role: msg.role,
            content: trimmed.slice(0, MAX_USER_MESSAGE_LENGTH),
          });
        }
      }
    }

    if (validMessages.length === 0) {
      return NextResponse.json(
        { error: 'No valid user messages provided.' },
        { status: 400 }
      );
    }

    // Keep the most recent N messages
    const trimmedHistory = validMessages.slice(-MAX_CONTEXT_MESSAGES);

    // Assemble the complete messages payload with verified system prompt
    const conversationPayload = [
      { role: 'system' as const, content: NEXUS_COACH_SYSTEM_PROMPT },
      ...trimmedHistory,
    ];

    const groq = new Groq({ apiKey });

    // Primary model requested: openai/gpt-oss-120b or env override, with ultra-reliable fallback
    const primaryModel = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';
    const fallbackModel = 'llama-3.3-70b-versatile';

    let stream;
    try {
      stream = await groq.chat.completions.create({
        model: primaryModel,
        messages: conversationPayload,
        stream: true,
        temperature: 0.5,
        max_tokens: 650,
      });
    } catch (primaryErr: any) {
      // If the specific model identifier is unrecognized on Groq, gracefully fall back to llama-3.3-70b-versatile
      if (primaryModel !== fallbackModel) {
        try {
          stream = await groq.chat.completions.create({
            model: fallbackModel,
            messages: conversationPayload,
            stream: true,
            temperature: 0.5,
            max_tokens: 650,
          });
        } catch (fallbackErr: any) {
          throw fallbackErr;
        }
      } else {
        throw primaryErr;
      }
    }

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
          controller.close();
        } catch (streamError) {
          controller.error(streamError);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error: any) {
    // Return friendly error without leaking internal details or credentials
    const isRateLimit = error?.status === 429;
    const clientMessage = isRateLimit
      ? 'Nexus Coach is receiving high volume right now. Please wait a moment or WhatsApp the team directly.'
      : 'Nexus Coach is taking a quick break. Please try again or WhatsApp the Nexus team at +91 95823 33003.';

    return NextResponse.json(
      { error: clientMessage },
      { status: isRateLimit ? 429 : 500 }
    );
  }
}
