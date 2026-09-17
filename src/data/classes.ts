import { ClassItem } from '../types';

export const NEXUS_CLASSES: ClassItem[] = [
  {
    id: 'class-zumba',
    name: 'Zumba Fitness',
    subtitle: 'RHYTHM-DRIVEN DANCE CARDIO',
    category: 'high-energy',
    categoryLabel: 'High Energy',
    image: '/assets/images/photo2.webp',
    intensity: 'High',
    intensityLevel: 4,
    whoItIsFor: 'Anyone seeking a joyful, high-calorie cardiovascular session without repetitive treadmill running.',
    description: 'High-tempo Latin and international choreography paired with interval training coached on wooden studio flooring.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 86 Studios',
    specs: [
      { label: 'Intensity', value: 'High Energy Cardio' },
      { label: 'Surface', value: 'Wooden Studio Flooring' },
      { label: 'Coaching', value: 'Certified Zumba Instructors' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'High caloric expenditure through interval dance',
      'Cardiovascular endurance and agility',
      'Zero monotony with dynamic weekly tracks',
      'Joint-friendly wooden studio floor'
    ]
  },
  {
    id: 'class-yoga',
    name: 'Yoga & Mobility',
    subtitle: 'RESTORATIVE BREATHWORK & ALIGNMENT',
    category: 'mind-body',
    categoryLabel: 'Mind + Body',
    image: '/assets/images/photo2.webp',
    intensity: 'Adaptive',
    intensityLevel: 2,
    whoItIsFor: 'Lifters with stiff hips/shoulders, desk professionals with neck tightness, and anyone needing stress de-escalation.',
    description: 'A blend of restorative holds, flow transitions, and focused spine decompression designed to counteract heavy lifting and desk fatigue.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 86 Studios',
    specs: [
      { label: 'Intensity', value: 'Mindful Recovery / Mobility' },
      { label: 'Atmosphere', value: 'Warm Studio Environment' },
      { label: 'Equipment', value: 'Blocks & Mats Provided' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'Enhanced hip and ankle mobility for deeper squats',
      'Spinal decompression and lower-back relief',
      'Parasympathetic nervous system activation',
      'Breath control for athletic bracing'
    ]
  },
  {
    id: 'class-aerobics',
    name: 'Athletic Aerobics & HIIT',
    subtitle: 'METABOLIC CONDITIONING CIRCUITS',
    category: 'cardio',
    categoryLabel: 'Cardio',
    image: '/assets/images/photo9.webp',
    intensity: 'High',
    intensityLevel: 5,
    whoItIsFor: 'Members wanting to improve stamina, endurance, and body composition in an encouraging team environment.',
    description: 'Full-body functional interval circuits alternating between bodyweight movements, steps, and conditioning stations.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 86 Studios',
    specs: [
      { label: 'Intensity', value: 'Cardio & HIIT Conditioning' },
      { label: 'Format', value: 'Circuit & Interval Workstations' },
      { label: 'Focus', value: 'Stamina, Agility & Core Strength' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'Cardiovascular conditioning and stamina',
      'Full-body functional agility and coordination',
      'Team cohort accountability and pacing',
      'Athletic endurance development'
    ]
  },
  {
    id: 'class-group-strength',
    name: 'Strength Fundamentals',
    subtitle: 'BARBELL MECHANICS & PROGRESSION',
    category: 'strength',
    categoryLabel: 'Strength',
    image: '/assets/images/photo10.webp',
    intensity: 'Dynamic',
    intensityLevel: 4,
    whoItIsFor: 'Lifters looking to master the squat, bench, and deadlift with technical coaching and proper bracing.',
    description: 'Small-cohort barbell workshops covering bar path, hip hinge mechanics, foot rooting, and progressive overload on lifting platforms.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 85 & Sector 86',
    specs: [
      { label: 'Intensity', value: 'Barbell Strength & Form' },
      { label: 'Gear', value: 'Barbells, Plates & Power Racks' },
      { label: 'Ratio', value: 'Small Group Coached Sets' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'Clean technique on compound multi-joint movements',
      'Personalized weight selection and progression guidance',
      'Safe spotter culture and confidence under loads',
      'Transferable core stability and athletic posture'
    ]
  }
];
