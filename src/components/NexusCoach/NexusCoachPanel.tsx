'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  INITIAL_QUICK_ACTIONS,
  FOLLOWUP_QUICK_ACTIONS,
  buildNexusWhatsAppUrl,
  CONTEXTUAL_WHATSAPP_TEMPLATES,
  NEXUS_CLUB_INFO,
} from '@/data/nexusCoach';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

interface NexusCoachPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_GREETING = `Hey. I’m Nexus Coach.

I can help you figure out your training, explore Nexus, or answer fitness questions.

What are you working towards?`;

export const NexusCoachPanel: React.FC<NexusCoachPanelProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-scroll to bottom on messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Delay focus slightly to avoid mobile keyboard jump
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset conversation
  const handleReset = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages([]);
    setError(null);
    setIsLoading(false);
    setInputValue('');
  };

  // Send message to API and stream response
  const sendMessage = async (userText: string) => {
    const text = userText.trim();
    if (!text || isLoading) return;

    setError(null);

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    const assistantMsgId = `asst-${Date.now()}`;
    const placeholderAssistantMsg: Message = {
      id: assistantMsgId,
      role: 'assistant',
      content: '',
      isStreaming: true,
    };

    setMessages([...newMessages, placeholderAssistantMsg]);

    try {
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      const payloadMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages }),
        signal: abortController.signal,
      });

      if (!res.ok) {
        let errJson;
        try {
          errJson = await res.json();
        } catch {
          errJson = null;
        }
        throw new Error(
          errJson?.error ||
            'Nexus Coach is taking a quick break. Please try again or WhatsApp the team.'
        );
      }

      if (!res.body) {
        throw new Error('Readable stream not supported by browser.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          accumulated += chunk;

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMsgId
                ? { ...msg, content: accumulated, isStreaming: !done }
                : msg
            )
          );
        }
      }

      // Mark streaming as complete
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMsgId ? { ...msg, isStreaming: false } : msg
        )
      );
    } catch (err: any) {
      if (err.name === 'AbortError') {
        // User aborted the stream intentionally
        return;
      }

      setError(
        err.message ||
          'Nexus Coach is taking a quick break. Please try again or WhatsApp the team.'
      );
      // Remove empty streaming placeholder if it had no content
      setMessages((prev) =>
        prev.filter((msg) => !(msg.id === assistantMsgId && !msg.content))
      );
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  // Helper to detect relevant contextual CTA buttons based on content
  const renderContextualActions = (content: string) => {
    const lower = content.toLowerCase();
    const actions = [];

    const hasPricingOrJoin =
      lower.includes('pricing') ||
      lower.includes('membership') ||
      lower.includes('cost') ||
      lower.includes('fee') ||
      lower.includes('how to join') ||
      lower.includes('whatsapp') ||
      lower.includes('enquire');

    const hasSector85 = lower.includes('sector 85') || lower.includes('strength gym');
    const hasSector86 =
      lower.includes('sector 86') ||
      lower.includes('turf') ||
      lower.includes('cricket') ||
      lower.includes('studios');
    const hasClasses =
      lower.includes('zumba') ||
      lower.includes('yoga') ||
      lower.includes('aerobic') ||
      lower.includes('hiit') ||
      lower.includes('classes');

    if (hasPricingOrJoin) {
      actions.push(
        <a
          key="wa-member"
          href={buildNexusWhatsAppUrl(CONTEXTUAL_WHATSAPP_TEMPLATES.membership)}
          target="_blank"
          rel="noopener noreferrer"
          className="coach-chip-action coach-chip-whatsapp"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          WHATSAPP NEXUS
        </a>
      );
    }

    if (hasSector85) {
      actions.push(
        <Link
          key="loc-85"
          href="/locations/sector-85"
          className="coach-chip-action coach-chip-link"
          onClick={onClose}
        >
          VIEW SECTOR 85 →
        </Link>
      );
    }

    if (hasSector86) {
      actions.push(
        <Link
          key="loc-86"
          href="/locations/sector-86"
          className="coach-chip-action coach-chip-link"
          onClick={onClose}
        >
          VIEW SECTOR 86 →
        </Link>
      );
    }

    if (hasClasses && !hasPricingOrJoin) {
      actions.push(
        <a
          key="wa-classes"
          href={buildNexusWhatsAppUrl(CONTEXTUAL_WHATSAPP_TEMPLATES.zumba)}
          target="_blank"
          rel="noopener noreferrer"
          className="coach-chip-action coach-chip-whatsapp"
        >
          ENQUIRE CLASS SCHEDULE
        </a>
      );
    }

    if (actions.length === 0 && lower.includes('nexus')) {
      actions.push(
        <a
          key="wa-general"
          href={buildNexusWhatsAppUrl(CONTEXTUAL_WHATSAPP_TEMPLATES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="coach-chip-action coach-chip-secondary"
        >
          WHATSAPP CONCIERGE
        </a>
      );
    }

    if (actions.length === 0) return null;

    return <div className="coach-msg-actions">{actions}</div>;
  };

  // Helper to format assistant markdown text cleanly
  const renderFormattedContent = (content: string) => {
    const paragraphs = content.split('\n\n');

    return paragraphs.map((paragraph, pIdx) => {
      const lines = paragraph.split('\n');
      const isBulletList = lines.every((line) => line.trim().startsWith('- ') || line.trim().startsWith('* '));

      if (isBulletList) {
        return (
          <ul key={pIdx} className="coach-bullet-list">
            {lines.map((line, lIdx) => {
              const cleanText = line.trim().replace(/^[-*]\s+/, '');
              return (
                <li key={lIdx}>
                  <FormattedLine text={cleanText} />
                </li>
              );
            })}
          </ul>
        );
      }

      return (
        <p key={pIdx} className="coach-paragraph">
          {lines.map((line, lIdx) => (
            <React.Fragment key={lIdx}>
              <FormattedLine text={line} />
              {lIdx < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Subtle backdrop on mobile / tablet */}
      <div
        className="nexus-coach-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <section
        className="nexus-coach-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nexus-coach-heading"
        aria-describedby="nexus-coach-subheading"
      >
        {/* Panel Header */}
        <header className="coach-panel-header">
          <div className="coach-header-left">
            <div className="coach-header-monogram">
              <span>N</span>
            </div>
            <div>
              <div className="coach-header-title-row">
                <h2 id="nexus-coach-heading" className="coach-header-title">
                  NEXUS COACH
                </h2>
                <span className="coach-status-pill">
                  <span className="coach-status-dot" />
                  CONCIERGE
                </span>
              </div>
              <p id="nexus-coach-subheading" className="coach-header-sub">
                Your fitness + club guide
              </p>
            </div>
          </div>

          <div className="coach-header-actions">
            {messages.length > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="coach-header-icon-btn"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="coach-header-icon-btn coach-close-btn"
              title="Close Nexus Coach (Esc)"
              aria-label="Close Nexus Coach"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </header>

        {/* Message Thread */}
        <div className="coach-panel-body">
          {/* Initial Welcome Greeting */}
          <div className="coach-msg coach-msg-assistant coach-msg-welcome">
            <div className="coach-avatar">N</div>
            <div className="coach-msg-bubble">
              <p className="coach-welcome-text">{INITIAL_GREETING}</p>

              {/* Quick Actions Grid (Shown primarily when starting) */}
              {messages.length === 0 && (
                <div className="coach-quick-actions">
                  <div className="coach-quick-actions-label">QUICK PROMPTS</div>
                  <div className="coach-quick-grid">
                    {INITIAL_QUICK_ACTIONS.map((action) => (
                      <button
                        key={action.id}
                        type="button"
                        onClick={() => sendMessage(action.prompt)}
                        className="coach-quick-btn"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Render Conversation Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`coach-msg coach-msg-${msg.role}`}
            >
              {msg.role === 'assistant' && (
                <div className="coach-avatar">N</div>
              )}
              <div className="coach-msg-bubble">
                {msg.role === 'assistant' ? (
                  <>
                    {msg.content ? (
                      renderFormattedContent(msg.content)
                    ) : (
                      <div className="coach-typing-indicator" aria-label="Nexus Coach is thinking">
                        <span />
                        <span />
                        <span />
                      </div>
                    )}
                    {!msg.isStreaming && msg.content && renderContextualActions(msg.content)}
                  </>
                ) : (
                  <p className="coach-user-text">{msg.content}</p>
                )}
              </div>
            </div>
          ))}

          {/* Error Message if any */}
          {error && (
            <div className="coach-error-card">
              <p className="coach-error-text">{error}</p>
              <div className="coach-error-actions">
                <button
                  type="button"
                  onClick={() => {
                    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
                    if (lastUser) sendMessage(lastUser.content);
                  }}
                  className="coach-chip-action coach-chip-link"
                >
                  TRY AGAIN
                </button>
                <a
                  href={buildNexusWhatsAppUrl(CONTEXTUAL_WHATSAPP_TEMPLATES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coach-chip-action coach-chip-whatsapp"
                >
                  WHATSAPP NEXUS
                </a>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Follow-up Prompts Ribbon (Visible when conversation is active) */}
        {messages.length > 0 && !isLoading && (
          <div className="coach-followup-ribbon" aria-label="Suggested Followups">
            {FOLLOWUP_QUICK_ACTIONS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => sendMessage(f.prompt)}
                className="coach-followup-pill"
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* Composer Footer */}
        <footer className="coach-panel-composer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputValue);
            }}
            className="coach-composer-form"
          >
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about training, classes, or Nexus clubs..."
              className="coach-composer-textarea"
              rows={1}
              aria-label="Message Nexus Coach"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="coach-composer-send-btn"
              aria-label="Send message to Nexus Coach"
            >
              {isLoading ? (
                <span className="coach-spinner" />
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>
          </form>
          <div className="coach-composer-disclaimer">
            <span>Educational guidance only. Not medical advice. For pricing & club tours, WhatsApp +91 95823 33003.</span>
          </div>
        </footer>
      </section>
    </>
  );
};

/**
 * Lightweight bold/italic parser for assistant responses
 */
function FormattedLine({ text }: { text: string }) {
  // Parse **bold** and *italic*
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </>
  );
}
