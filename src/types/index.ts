export type BranchId = 'sector-85' | 'sector-86';

export interface Branch {
  id: BranchId;
  name: string;
  slug: string;
  shortName: string;
  badge: string;
  locality: string;
  city: string;
  address: string;
  landmark: string;
  description: string;
  heroImage: string;
  accent: string;
  hours: {
    status: 'verified' | 'unverified';
    notice: string;
    schedule: { days: string; time: string }[];
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappPhone: string;
    whatsappDisplay: string;
    whatsappMessage: string;
  };
  directions: {
    url: string;
    label: string;
    lat: number;
    lng: number;
  };
  highlights: string[];
  facilities: string[];
  specs: { label: string; value: string }[];
  gallery: { src: string; caption: string; tag: string }[];
}

export interface ExperienceChapter {
  id: string;
  num: string;
  name: string;
  category: string;
  headline: string;
  oneLiner: string;
  image: string;
  alt: string;
  badge: string;
  location: string;
  specs: { label: string; val: string }[];
  whatsappMsg: string;
  isCenterpiece?: boolean;
}

export interface Facility {
  id: string;
  name: string;
  subtitle: string;
  category: 'arena' | 'turf' | 'studios' | 'amenities';
  categoryLabel: string;
  layout: 'large-image' | 'featured-banner' | 'medium-image' | 'compact-typography';
  image?: string;
  tag: string;
  badge: string;
  lead: string;
  specs: { icon: string; text: string }[];
  branchAvailability: string;
  verifiedBadge: string;
  ctaText: string;
  inquiryTag: string;
  highlightStat?: { val: string; label: string };
}

export interface SocialProofItem {
  id: string;
  category: 'story' | 'cohort' | 'community' | 'review';
  categoryLabel: string;
  name: string;
  headline: string;
  quote: string;
  story: string;
  photo: string;
  discipline: string;
  branch: string;
  tenure: string;
  verifiedBadge: string;
  verifiedLifter: boolean;
  milestones: string[];
  source: string;
}

export interface ClassItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'high-energy' | 'mind-body' | 'cardio' | 'strength';
  categoryLabel: string;
  image: string;
  intensity: 'High' | 'Medium' | 'Adaptive' | 'Dynamic';
  intensityLevel: number;
  whoItIsFor: string;
  description: string;
  scheduleNotice: string;
  branchAvailability: string;
  specs: { label: string; value: string }[];
  benefits: string[];
}

export interface InstagramPost {
  id: string;
  type: 'reel' | 'image' | 'carousel';
  caption: string;
  excerpt: string;
  category: string;
  author: string;
  verified: boolean;
  mediaUrl: string;
  duration?: string;
  engagement: { likes: string; comments: string };
  instagramUrl: string;
}

/* ============================================================
   NEXUS TOOLS TYPES
   ============================================================ */

export type GoalKey = 'strength' | 'fat-loss' | 'muscle' | 'fitness' | 'mobility' | 'consistency';

export interface ToolGoal {
  id: GoalKey;
  label: string;
  tagline: string;
  description: string;
  focusZones: string[];
  recommendedBranch: 'sector-85' | 'sector-86' | 'both';
  recommendedServices: string[];
  recommendedClasses: string[];
  startingProtocol: string;
  weeklyScheduleTemplate: string;
  coachArchetype: string;
}

export interface MacroSplit {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
  proteinCalories: number;
  carbsCalories: number;
  fatsCalories: number;
  proteinPct: number;
  carbsPct: number;
  fatsPct: number;
  bmr: number;
  tdee: number;
}

export interface BmiResult {
  bmi: number;
  category: 'Underweight' | 'Normal' | 'Overweight' | 'Athletic Heavy / Obese Class';
  color: string;
  athleticInterpretation: string;
}

export interface StarterGuideChecklist {
  id: string;
  title: string;
  description: string;
  essential: boolean;
  category: 'kit' | 'first-week' | 'etiquette';
}

