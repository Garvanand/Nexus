import { ToolGoal, StarterGuideChecklist } from '../types';

export const NEXUS_GOALS: ToolGoal[] = [
  {
    id: 'strength',
    label: 'STRENGTH',
    tagline: 'Pure force production & neuromuscular power',
    description:
      'Engineered for lifters who prioritize calibrated barbell movements, raw mechanical tension, and measurable progressive overload on the platform.',
    focusZones: [
      'Calibrated Olympic Drop Platforms',
      'Heavy-Gauge Power Cages & Squat Racks',
      'Competition Steel Plates & Barbells'
    ],
    recommendedBranch: 'sector-85',
    recommendedServices: [
      'Barbell Compound Technique Screening',
      'Linear Progression Strength Programming',
      'Powerlifting Platform Access'
    ],
    recommendedClasses: ['Strength & Power Foundations', 'Personal Coach Walkthrough'],
    startingProtocol: '3 to 4 days/week: Squat, Bench, Deadlift, Overhead Press foundations with 72h recovery pacing.',
    weeklyScheduleTemplate: 'Mon: Heavy Lower (Squat focus) · Wed: Upper Bench/Press · Fri: Platform Deadlift & Pulls · Sat: Accessory & Core',
    coachArchetype: 'Strength & Powerlifting Specialist'
  },
  {
    id: 'fat-loss',
    label: 'FAT LOSS',
    tagline: 'High metabolic output & lean mass retention',
    description:
      'Designed to maximize daily caloric expenditure and cardiovascular conditioning while preserving your hard-earned muscle tissue through structured resistance work.',
    focusZones: [
      'Turf Sled & Prowler Push Track',
      'High-Output Curve Treadmills & Rowers',
      'High-Cadence Studio Aerobics Hall'
    ],
    recommendedBranch: 'both',
    recommendedServices: [
      'Metabolic Conditioning Circuits',
      'Progressive Resistance Deficit Preservation',
      'Studio Dance & Aerobic Batches'
    ],
    recommendedClasses: ['Kinetic Zumba Dance Studio', 'Athletic Aerobics & Metabolic HIIT'],
    startingProtocol: '3 strength resistance sessions + 2 high-energy studio or sled cardio intervals per week.',
    weeklyScheduleTemplate: 'Mon: Full-Body Resistance · Tue: Kinetic Zumba Studio · Thu: Full-Body Compound · Fri: Sled & Metabolic HIIT · Sun: Recovery Walk',
    coachArchetype: 'Metabolic Conditioning & Body Transformation Coach'
  },
  {
    id: 'muscle',
    label: 'MUSCLE',
    tagline: 'Hypertrophy, volume accumulation & shape',
    description:
      'Engineered for aesthetics, symmetrical muscle growth, and progressive volume using heavy dumbbells, multi-cable stations, and full-range compound lifts.',
    focusZones: [
      'Calibrated Dumbbells Up to 50kg+',
      'Multi-Angle Adjustable Benches',
      'Multi-Grip Dual Cable Cross Stations'
    ],
    recommendedBranch: 'both',
    recommendedServices: [
      'Hypertrophy Volume Periodization',
      'Time-Under-Tension Coaching',
      'Symmetry & Weak Point Analysis'
    ],
    recommendedClasses: ['Strength Floor Coaching', 'Upper Body Hypertrophy Workshop'],
    startingProtocol: '4 to 5 sessions/week on an Upper/Lower or Push/Pull/Legs rotation with controlled eccentric tempos.',
    weeklyScheduleTemplate: 'Mon: Push (Chest/Shoulders/Triceps) · Tue: Pull (Back/Biceps) · Thu: Legs & Posterior · Fri: Upper Focus · Sat: Arm & Core Detailing',
    coachArchetype: 'Physique & Functional Hypertrophy Coach'
  },
  {
    id: 'fitness',
    label: 'FITNESS',
    tagline: 'Work capacity, stamina & multi-sport agility',
    description:
      'A multi-discipline path blending gym resistance, dynamic studio movement, and Greater Faridabad’s only floodlit rooftop cricket arena for total athletic capability.',
    focusZones: [
      'Floodlit All-Weather Rooftop Cricket Arena',
      'Sprung-Floor Kinetic Dance Studio',
      'Functional Conditioning Track'
    ],
    recommendedBranch: 'sector-86',
    recommendedServices: [
      'Rooftop Sports & Agility Sessions',
      'Group Studio Class Passes',
      'Total Athletic Conditioning'
    ],
    recommendedClasses: ['Rooftop Cricket Net Practice', 'Kinetic Zumba', 'Athletic Aerobics'],
    startingProtocol: '2 gym strength sessions + 2 studio/sports sessions per week for well-rounded energy.',
    weeklyScheduleTemplate: 'Tue: Athletic Compound Strength · Thu: Aerobics Conditioning · Sat: Rooftop Cricket League / Social Match · Sun: Yoga Decompression',
    coachArchetype: 'Multi-Sport Athletic Performance Trainer'
  },
  {
    id: 'mobility',
    label: 'MOBILITY',
    tagline: 'Range of motion, joint recovery & alignment',
    description:
      'Focused on decompressing tight joints, eliminating desk fatigue, improving rotational flexibility, and restoring thoracic and hip mobility.',
    focusZones: [
      'Mindfulness Yoga & Mobility Sanctuary',
      'Dedicated Stretching & Soft-Tissue Bay',
      'Warm-Up & Movement Screening Floor'
    ],
    recommendedBranch: 'both',
    recommendedServices: [
      'Postural Assessment & Movement Screening',
      'Guided Yogic Breathing & Alignment',
      'Spinal Decompression & Hip Opening'
    ],
    recommendedClasses: ['Mindfulness Yoga Sanctuary', 'Mobility & Joint Prep Protocol'],
    startingProtocol: '2 dedicated 60-minute yoga/mobility sanctuary sessions + 10-minute daily pre-lift activation.',
    weeklyScheduleTemplate: 'Mon: Lower Hip/Hamstring Mobility · Wed: Thoracic & Shoulder Flow · Fri: Full-Body Yoga Sanctuary · Sun: Long Restorative Session',
    coachArchetype: 'Holistic Yoga & Movement Specialist'
  },
  {
    id: 'consistency',
    label: 'CONSISTENCY',
    tagline: 'Sustainable habits, zero intimidation & support',
    description:
      'Designed specifically for people who want to break the cycle of starting and stopping. No intimidating atmosphere, just clear steps, friendly coaches, and a welcoming community.',
    focusZones: [
      'Clean Guided Strength Area',
      'Private Digital Lockers & Grooming Bay',
      'Supportive Member Community Space'
    ],
    recommendedBranch: 'both',
    recommendedServices: [
      '1-on-1 Beginner Orientation Walkthrough',
      'Habit Anchor Planning (30-min workouts)',
      'Accountability Check-In with Nexus Coach'
    ],
    recommendedClasses: ['Beginner Starter Walkthrough', 'Light Group Circuit'],
    startingProtocol: '3 days per week, 45 minutes each. Master 3 basic compound movements and celebrate showing up.',
    weeklyScheduleTemplate: 'Mon: 40-Min Full Body Intro · Wed: 40-Min Movement & Light Cardio · Fri: 40-Min Upper Body & Stretch',
    coachArchetype: 'Beginner Transition & Onboarding Mentor'
  }
];

export const STARTER_GUIDE_ITEMS: StarterGuideChecklist[] = [
  {
    id: 'shoes',
    title: 'Clean Indoor Training Footwear',
    description: 'Carry a clean pair of flat-soled shoes (Converse, barefoot shoes, or lifting shoes) to maintain platform traction and hygiene.',
    essential: true,
    category: 'kit'
  },
  {
    id: 'bottle',
    title: 'Hydration Shaker / Water Bottle',
    description: 'Stay hydrated through your sets. Water stations are accessible across both Sector 85 and Sector 86 grounds.',
    essential: true,
    category: 'kit'
  },
  {
    id: 'towel',
    title: 'Personal Training Towel',
    description: 'Wipe benches and equipment down after heavy sets as part of standard club etiquette.',
    essential: true,
    category: 'kit'
  },
  {
    id: 'lock',
    title: 'Personal Padlock (Optional)',
    description: 'Digital lockers are provided, but personal padlocks can be used on executive lockers for added security.',
    essential: false,
    category: 'kit'
  },
  {
    id: 'day1',
    title: 'Day 1: Ground Orientation & Coach Walkthrough',
    description: 'Check in at the concierge desk. Have a senior trainer guide you through equipment placement, emergency pins, and gym layout.',
    essential: true,
    category: 'first-week'
  },
  {
    id: 'day2',
    title: 'Day 2: Movement Baseline & Warm-Up Pattern',
    description: 'Learn the 5-minute dynamic warm-up (glute bridges, arm circles, hip airplanes) and test empty bar mechanics.',
    essential: true,
    category: 'first-week'
  },
  {
    id: 'day3',
    title: 'Day 3: Safe Re-Racking & Weight Management',
    description: 'Master re-racking plates in ascending order, securing bar collars on every set, and adjusting safety spotter arms.',
    essential: true,
    category: 'first-week'
  },
  {
    id: 'day5',
    title: 'Day 5: First Group Studio Experience',
    description: 'Try a studio class (Zumba, Yoga, or Aerobics) or book a casual session at the Sector 86 rooftop cricket turf.',
    essential: false,
    category: 'first-week'
  },
  {
    id: 'rerack',
    title: 'Rule 1: Always Strip Your Plates & Re-Rack',
    description: 'Leaving 100kg on a leg press is unfair to the next lifter. Return plates to their designated tree pins.',
    essential: true,
    category: 'etiquette'
  },
  {
    id: 'collars',
    title: 'Rule 2: Always Use Barbell Collars',
    description: 'Even on warm-up sets, collars prevent plates from sliding and protecting yourself and nearby athletes.',
    essential: true,
    category: 'etiquette'
  },
  {
    id: 'space',
    title: 'Rule 3: Respect Platform Boundaries',
    description: 'Never walk across an Olympic platform or directly in front of someone actively performing a heavy set.',
    essential: true,
    category: 'etiquette'
  }
];

export const TOOL_DISCLAIMERS = {
  scientificNotice:
    'All calculations, estimates, and training paths provided on Nexus Tools are general educational benchmarks derived from standard sports science equations (Mifflin-St Jeor metabolic expenditure and World Health Organization body composition indexes). They are intended solely for athletic guidance and do not constitute medical, clinical, or diagnostic advice.',
  noHealthClaims:
    'Nexus does not claim to diagnose, treat, cure, or prevent any medical condition. Individual metabolic rates, muscle mass, and recovery capacity vary widely. Always consult a licensed medical physician prior to initiating any new intense lifting regimen or caloric modification program.'
};
