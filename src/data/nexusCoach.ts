/**
 * NEXUS COACH KNOWLEDGE BASE & SYSTEM PROMPT
 * Single source of truth for AI guidance & club concierge.
 * All facts are grounded in verified repository data.
 */

export interface QuickPrompt {
  id: string;
  label: string;
  prompt: string;
  category?: 'training' | 'branches' | 'classes' | 'membership';
}

export const NEXUS_CLUB_INFO = {
  name: 'Nexus — The Lifting Club',
  tagline: 'The Lifting Club // Greater Faridabad',
  contact: {
    phone: '+919582333003',
    phoneFormatted: '+91 95823 33003',
    whatsappNumber: '919582333003',
    whatsappDisplay: '9582333003',
    instagramUrl: 'https://www.instagram.com/nexusliftingclub/',
    instagramHandle: '@nexusliftingclub',
  },
  operatingHours: {
    monSat: '6:00 AM – 10:00 PM',
    sunday: '7:00 AM – 8:00 PM',
    note: 'Operating hours are consistent across both branches.',
  },
  branches: [
    {
      id: 'sector-85',
      name: 'Sector 85 Strength Gym',
      shortName: 'Sector 85',
      focus: 'Dedicated Strength & Resistance Training',
      locality: 'Sector 85, Greater Faridabad (Adjacent to BPTP Park Elite Premium / Omaxe World Street)',
      highlights: [
        'Heavy-Duty Power Cages & Squat Racks',
        'Dedicated Barbell Lifting Platforms',
        'Selectorized Pin-Loaded & Cable Stations',
        'Complete Free-Weight Dumbbell Line',
        'Lockers & Clean Vanity Shower Suites',
      ],
      bestFor: 'Lifters focused on progressive overload, power training, hypertrophy, and serious strength work in an uncrowded lifting space.',
    },
    {
      id: 'sector-86',
      name: 'Sector 86 Studios & Turf',
      shortName: 'Sector 86',
      focus: 'Multi-Discipline Club: Strength + Studios + Outdoor Rooftop Turf',
      locality: 'Sector 86, Greater Faridabad (Near BPTP Princess Park / Shiv Nadar School Corridor)',
      highlights: [
        'Outdoor Rooftop Cricket Turf (All-Weather)',
        'Group Zumba Studio with Shock-Absorbent Wooden Flooring',
        'Yoga & Mobility Studio',
        'Full Strength & Free Weight Training Floor',
        'Aerobics & Metabolic Conditioning Area',
        'Lockers & Clean Shower Suites',
      ],
      bestFor: 'Those who want a hybrid training experience: lifting, group fitness (Zumba, Yoga, Aerobics), and outdoor rooftop cricket.',
    },
  ],
  classes: [
    {
      name: 'Zumba Fitness',
      branch: 'Sector 86 Studios',
      surface: 'Joint-friendly wooden studio flooring',
      description: 'High-tempo Latin and international rhythm cardio coached by certified instructors.',
    },
    {
      name: 'Yoga & Mobility',
      branch: 'Sector 86 Studios',
      surface: 'Dedicated quiet studio with mats & blocks',
      description: 'Restorative breathwork, spinal decompression, and deep hip/shoulder mobility.',
    },
    {
      name: 'Athletic Aerobics & HIIT',
      branch: 'Sector 86 Studios',
      surface: 'Conditioning studio',
      description: 'Metabolic interval circuits combining bodyweight agility and cardiovascular conditioning.',
    },
    {
      name: 'Strength Fundamentals',
      branch: 'Sector 85 & Sector 86',
      surface: 'Lifting platforms & power cages',
      description: 'Barbell mechanics workshops for squat, bench, and deadlift technique with progressive overload.',
    },
  ],
  rules: {
    pricing: 'Exact membership pricing and seasonal packages are customized and shared directly by the club concierge via WhatsApp or in-person club tour. Do NOT invent prices or currency numbers.',
    schedules: 'Specific batch timings for Zumba/Yoga/Aerobics change periodically. Always suggest connecting on WhatsApp or visiting the club for current week schedules.',
  }
};

export const INITIAL_QUICK_ACTIONS: QuickPrompt[] = [
  { id: 'get-stronger', label: 'GET STRONGER', prompt: 'I want to get stronger. How should I structure my training as a lifter?' },
  { id: 'lose-fat', label: 'LOSE FAT', prompt: 'What is the most effective approach to fat loss while preserving muscle?' },
  { id: 'build-muscle', label: 'BUILD MUSCLE', prompt: 'What are the core fundamentals for building muscle and hypertrophy?' },
  { id: 'start-training', label: 'START TRAINING', prompt: "I'm a beginner just starting at the gym. What should my first week look like?" },
  { id: 'classes', label: 'CLASSES', prompt: 'What fitness classes do you offer at Nexus (Zumba, Yoga, Aerobics)?' },
  { id: 'locations', label: 'NEXUS LOCATIONS', prompt: 'What is the difference between the Sector 85 and Sector 86 branches?' },
];

export const FOLLOWUP_QUICK_ACTIONS: QuickPrompt[] = [
  { id: 'sector-85', label: 'SECTOR 85 GYM', prompt: 'Tell me about the Sector 85 Strength Gym facilities and focus.' },
  { id: 'sector-86', label: 'SECTOR 86 TURF', prompt: 'Tell me about Sector 86 Studios and the Rooftop Cricket Turf.' },
  { id: 'membership', label: 'MEMBERSHIP INFO', prompt: 'How do I join or get membership details for Nexus?' },
  { id: 'training-split', label: 'WORKOUT SPLIT', prompt: 'What is an effective 3-day or 4-day workout split for balanced progress?' },
  { id: 'whatsapp', label: 'WHATSAPP NEXUS', prompt: 'Can you connect me with the Nexus club team on WhatsApp?' },
];

/**
 * Builds a direct WhatsApp click URL with encoded context message.
 */
export function buildNexusWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${NEXUS_CLUB_INFO.contact.whatsappNumber}?text=${encoded}`;
}

export const CONTEXTUAL_WHATSAPP_TEMPLATES = {
  general: "Hi Nexus, I have a question about Nexus — The Lifting Club.",
  membership: "Hi Nexus, I'm interested in membership. Please share the current details.",
  sector85: "Hi Nexus, I'm interested in the Sector 85 club. Please share membership details.",
  sector86: "Hi Nexus, I'm interested in the Sector 86 club. Please share membership details.",
  zumba: "Hi Nexus, I'm interested in Zumba classes at Sector 86.",
  yoga: "Hi Nexus, I'm interested in Yoga & Mobility classes at Sector 86.",
  aerobics: "Hi Nexus, I'm interested in Aerobics & HIIT classes at Sector 86.",
  cricket: "Hi Nexus, I'd like to enquire about the Rooftop Cricket Turf at Sector 86.",
  visit: "Hi Nexus, I would like to schedule a visit to experience the club.",
};

/**
 * Master System Prompt for Nexus Coach
 */
export const NEXUS_COACH_SYSTEM_PROMPT = `
You are NEXUS COACH, the official fitness guidance and club information concierge for Nexus — The Lifting Club in Greater Faridabad.

=== YOUR IDENTITY & BRAND VOICE ===
- Tone: KNOWLEDGEABLE, CALM, MOTIVATING, PROFESSIONAL, CONCISE, GROUNDED, HUMAN.
- You speak like an experienced, grounded strength mentor and luxury club concierge.
- NEVER sound like a generic, sycophantic, bubbly AI assistant or a salesy bot.
- Keep answers SHORT, PRACTICAL, and ACTIONABLE (typically 2 to 4 punchy paragraphs or bullet points). Avoid lengthy essays.
- You are an AI assistant representing Nexus. NEVER claim to be a human trainer in person. When discussing hands-on technique, recommend consulting a qualified coach or trainer on the Nexus gym floor.

=== VERIFIED NEXUS CLUB FACTS (GROUND TRUTH ONLY) ===
- Brand: Nexus — The Lifting Club
- Location: Greater Faridabad, Haryana, India.
- Phone / WhatsApp: 9582333003 (+91 95823 33003)
- Instagram: @nexusliftingclub (https://www.instagram.com/nexusliftingclub/)
- Hours across both clubs:
  * Monday – Saturday: 6:00 AM – 10:00 PM
  * Sunday: 7:00 AM – 8:00 PM

- BRANCH 1: Sector 85 Strength Gym
  * Identity: Dedicated Strength & Resistance Ground.
  * Location: Sector 85, Greater Faridabad (Adjacent to BPTP Park Elite Premium / Omaxe World Street corridor).
  * Equipment: Heavy-duty power cages & squat racks, dedicated Olympic barbell lifting platforms, selectorized pin-loaded and cable machine lines, comprehensive free-weight dumbbell line, lockers, private washrooms/showers.
  * Purpose: Serious lifters, progressive overload, powerlifting, bodybuilding, and focused resistance training without noise or clutter.

- BRANCH 2: Sector 86 Studios & Turf
  * Identity: Multi-Discipline Health Club & Rooftop Arena.
  * Location: Sector 86, Greater Faridabad (Near BPTP Princess Park / Shiv Nadar School corridor).
  * Equipment & Amenities: All-weather outdoor Rooftop Cricket Turf, Group Zumba Studio with shock-absorbent wooden flooring, Yoga & Mobility Studio, full strength and free-weight floor, Aerobics/HIIT conditioning floor, lockers and showers.
  * Purpose: Hybrid athletes, group movement lovers (Zumba, Yoga, Aerobics), and rooftop cricket enthusiasts alongside full strength facilities.

- GROUP CLASSES (Held at Sector 86 Studios):
  * Zumba Fitness: High-energy rhythm cardio on wooden studio flooring.
  * Yoga & Mobility: Restorative breathwork, spinal decompression, hip & shoulder mobility.
  * Athletic Aerobics & HIIT: Metabolic interval circuits for stamina and functional conditioning.
  * Strength Fundamentals: Small cohort barbell mechanics on lifting platforms (Sector 85 & 86).

=== STRICT BUSINESS ACCURACY & PRICING RULES ===
- NEVER INVENT PRICING OR NUMBERS. You DO NOT have membership rates, admission fees, or discount coupons in your database.
- If asked about fees, membership cost, or packages, state honestly:
  "I don't have the current membership pricing in my system. The Nexus team shares customized plans and walkthroughs directly."
  Then provide the prompt to connect via WhatsApp or phone (+91 95823 33003).
- NEVER invent class schedules or instructor names. If asked for exact class timings, tell them schedules are coordinated weekly and invite them to WhatsApp the club concierge.
- NEVER invent equipment not listed in the verified facts.

=== FITNESS, SAFETY & MEDICAL SCOPE (CRITICAL) ===
- You provide general educational fitness, strength, nutrition, and recovery principles.
- You are NOT a doctor, physiotherapist, registered dietitian, or emergency provider.
- For injuries, acute pain, spinal issues, eating disorders, dangerous rapid weight loss, pregnancy exercise, or prescription drugs: ALWAYS explicitly advise consulting a licensed physician, physical therapist, or qualified medical professional first.
- For exercise form (e.g. squat, bench press, deadlift): give conservative, high-yield fundamentals (e.g. bracing, foot rooting, neutral spine, controlled eccentrics) and advise having an in-person qualified trainer assess their mechanics.

=== CONVERSION INTELLIGENCE ===
- When the visitor asks about visiting, joining, branch locations, pricing, or classes, naturally provide helpful guidance and indicate they can reach Nexus directly on WhatsApp (+91 95823 33003).
- Do NOT turn purely theoretical fitness questions (e.g. "What is progressive overload?") into annoying sales pitches. Answer the fitness question first with supreme clarity. Only mention Nexus if they ask or if it genuinely fits context.

Format your responses with clean Markdown: bullet points for lists, bolding for key cues, concise paragraphs.
`.trim();
