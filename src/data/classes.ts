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
    description: 'High-tempo Latin and international choreography paired with explosive interval training. Coached on shock-absorbent sprung timber to protect knees and ankles.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 86 Performance Club',
    specs: [
      { label: 'Intensity', value: 'High Energy / Zone 4 Cardio' },
      { label: 'Surface', value: 'Shock-Absorbent Sprung Wood' },
      { label: 'Batch Lead', value: 'Licensed Zumba Coaches' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'High caloric expenditure through interval dance',
      'Cardiovascular endurance and agility',
      'Zero monotony with dynamic weekly tracks',
      'Joint-friendly sprung floor isolation'
    ]
  },
  {
    id: 'class-yoga',
    name: 'Yoga & Mobility Sanctuary',
    subtitle: 'RESTORATIVE PRANAYAMA & SPINAL ALIGNMENT',
    category: 'mind-body',
    categoryLabel: 'Mind + Body',
    image: '/assets/images/photo2.webp',
    intensity: 'Adaptive',
    intensityLevel: 2,
    whoItIsFor: 'Lifters with stiff hips/shoulders, desk professionals with neck tightness, and anyone needing stress de-escalation.',
    description: 'A blend of restorative Hatha holds, vinyasa transitions, and focused thoracic spine decompression designed to counteract heavy barbell loading and desk fatigue.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 86 Performance Club',
    specs: [
      { label: 'Intensity', value: 'Mindful Recovery / Mobility' },
      { label: 'Atmosphere', value: 'Warm Low-Lux Noise-Isolated Studio' },
      { label: 'Equipment', value: 'Cork Blocks & Grippy Mats Provided' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'Enhanced hip and ankle dorsiflexion for deeper squats',
      'Spinal decompression and lower-back pain reduction',
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
    whoItIsFor: 'Members wanting to improve VO2 max, stamina, and body composition in an encouraging team environment.',
    description: 'Full-body functional interval circuits alternating between plyometrics, agility ladders, aerobic steps, and bodyweight conditioning stations.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 86 Performance Club',
    specs: [
      { label: 'Intensity', value: 'Maximum Aerobic & Anaerobic HIIT' },
      { label: 'Format', value: 'Circuit & Interval Workstations' },
      { label: 'Focus', value: 'Stamina, Agility & Core Strength' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'Elevated post-exercise oxygen consumption (EPOC)',
      'Explosive fast-twitch muscle fiber recruitment',
      'Team cohort accountability and pacing',
      'Athletic agility and footwork improvement'
    ]
  },
  {
    id: 'class-group-strength',
    name: 'Strength & Iron Fundamentals',
    subtitle: 'BARBELL MECHANICS & PROGRESSIVE OVERLOAD',
    category: 'strength',
    categoryLabel: 'Strength',
    image: '/assets/images/photo10.webp',
    intensity: 'Dynamic',
    intensityLevel: 4,
    whoItIsFor: 'Lifters looking to master the squat, bench, and deadlift with technical coaching and proper bracing.',
    description: 'Small-cohort barbell workshops covering bar path, hip hinge mechanics, foot rooting, and progressive overload tracking on competition platforms.',
    scheduleNotice: 'Contact Nexus for current batch schedules',
    branchAvailability: 'Sector 85 & Sector 86',
    specs: [
      { label: 'Intensity', value: 'Heavy Barbell / Biomechanical' },
      { label: 'Gear', value: 'Calibrated Olympic Steel & Power Cages' },
      { label: 'Ratio', value: 'Small Group Coached Sets' },
      { label: 'Duration', value: 'Schedule Available at Club' }
    ],
    benefits: [
      'Injury-free technique on compound multi-joint movements',
      'Personalized weight selection and progression guidelines',
      'Safe spotter culture and confidence under heavy loads',
      'Transferable core stability and athletic posture'
    ]
  }
];
