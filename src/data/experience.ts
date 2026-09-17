import { ExperienceChapter } from '../types';

export const NEXUS_EXPERIENCES: ExperienceChapter[] = [
  {
    id: 'gym',
    num: '01',
    name: 'Strength Floor',
    category: 'TRAIN // STRENGTH GROUND',
    headline: 'SERIOUS STRENGTH TRAINING.',
    oneLiner: 'Heavy iron plates, dedicated lifting platforms, and sturdy power cages built for progressive overload without compromise.',
    image: '/assets/images/photo10.webp',
    alt: 'Power Racks and Lifting Platforms at Nexus',
    badge: 'Strength Ground · Sector 85 & 86',
    location: 'Available across Sector 85 and Sector 86',
    specs: [
      { label: 'Platforms', val: 'Solid Barbell Lifting Platforms' },
      { label: 'Plates', val: 'Cast Iron Plates & Bumpers' },
      { label: 'Dumbbells', val: 'Full Incremental Range' },
      { label: 'Power Racks', val: 'Reinforced J-Hooks & Safety Spotters' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know more about the strength floor and power cages.'
  },
  {
    id: 'zumba',
    num: '02',
    name: 'Zumba Studio',
    category: 'MOVE // GROUP STUDIO',
    headline: 'RHYTHM AND ENERGY.',
    oneLiner: 'Wooden studio flooring and energetic group sessions that make cardiovascular training engaging and consistent.',
    image: '/assets/images/photo2.webp',
    alt: 'Mirrored Movement Studio at Nexus',
    badge: 'Studio Wing · Sector 86',
    location: 'Sector 86 Studios',
    specs: [
      { label: 'Studio Floor', val: 'Wooden Flooring' },
      { label: 'Sound Setup', val: 'Dedicated Studio Audio' },
      { label: 'Format', val: 'Coached Group Batches' },
      { label: 'Instructors', val: 'Certified Zumba Coaches' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know about Zumba classes and batch schedules.'
  },
  {
    id: 'yoga',
    num: '03',
    name: 'Yoga Studio',
    category: 'RECOVER // MOBILITY',
    headline: 'RECOVERY AND MOBILITY.',
    oneLiner: 'Calm studio lighting, guided breathwork, and mobility flows designed to counteract heavy training and daily desk fatigue.',
    image: '/assets/images/photo2.webp',
    alt: 'Yoga Studio at Nexus',
    badge: 'Mobility Studio · Sector 86',
    location: 'Sector 86 Studios',
    specs: [
      { label: 'Environment', val: 'Calm Studio Space' },
      { label: 'Disciplines', val: 'Hatha, Vinyasa & Mobility' },
      { label: 'Atmosphere', val: 'Dedicated Movement Studio' },
      { label: 'Gear', val: 'Mats & Blocks Available' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know about Yoga sessions and mobility classes.'
  },
  {
    id: 'aerobics',
    num: '04',
    name: 'Conditioning',
    category: 'MOVE // CARDIO INTERVALS',
    headline: 'SWEAT WITH PURPOSE.',
    oneLiner: 'Functional interval workouts and high-tempo group conditioning that build stamina alongside an encouraging team.',
    image: '/assets/images/photo9.webp',
    alt: 'Aerobics and Conditioning at Nexus',
    badge: 'Cardio Conditioning · Sector 86',
    location: 'Sector 86 Studios',
    specs: [
      { label: 'Format', val: 'Interval Conditioning Circuits' },
      { label: 'Focus', val: 'Stamina & Agility' },
      { label: 'Equipment', val: 'Steps & Conditioning Gear' },
      { label: 'Atmosphere', val: 'Encouraging Group Environment' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know about Aerobics and conditioning batches.'
  },
  {
    id: 'cricket',
    num: '05',
    name: 'Rooftop Turf',
    category: 'PLAY // ROOFTOP TURF',
    headline: 'TRAIN HARD. SWITCH OFF. PLAY.',
    oneLiner: 'An outdoor synthetic cricket turf situated atop Nexus Sector 86. Train downstairs, bowl 6 overs with friends upstairs.',
    image: '/assets/images/space_cricket.jpg',
    alt: 'Rooftop Cricket Turf Under Evening Lights',
    badge: 'Rooftop Deck · Sector 86',
    location: 'Sector 86 (Rooftop Deck)',
    specs: [
      { label: 'Surface', val: 'All-Weather Synthetic Turf' },
      { label: 'Lighting', val: 'Evening Floodlights' },
      { label: 'Enclosure', val: 'Perimeter Safety Netting' },
      { label: 'Access', val: 'Member Matches & Friendly Innings' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to enquire about the Rooftop Cricket Turf.',
    isCenterpiece: true
  },
  {
    id: 'lockers',
    num: '06',
    name: 'Lockers',
    category: 'COMFORT // STORAGE',
    headline: 'SECURE PERSONAL STORAGE.',
    oneLiner: 'Spacious personal storage lockers for peace of mind while you focus purely on your workout.',
    image: '/assets/images/photo7.webp',
    alt: 'Matte Charcoal Lockers at Nexus Sector 85',
    badge: 'Both Branches · Sector 85 & 86',
    location: 'Sector 85 & Sector 86',
    specs: [
      { label: 'Lock Systems', val: 'Personal Padlock Ready' },
      { label: 'Capacity', val: 'Spacious Gym Bag Storage' },
      { label: 'Cleanliness', val: 'Daily Housekeeping' },
      { label: 'Changing', val: 'Changing Rooms Available' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to ask about member locker facilities.'
  },
  {
    id: 'washrooms',
    num: '07',
    name: 'Washrooms',
    category: 'HYGIENE // REFRESH',
    headline: 'CLEAN PRIVATE SHOWERS.',
    oneLiner: 'Regular daily cleaning, hot showers, and well-lit grooming mirrors.',
    image: '/assets/images/photo4.webp',
    alt: 'Clean Washrooms and Showers at Nexus Sector 85',
    badge: 'Both Branches · Sector 85 & 86',
    location: 'Sector 85 & Sector 86',
    specs: [
      { label: 'Showers', val: 'Hot Water Showers' },
      { label: 'Maintenance', val: 'Cleaned Regularly Daily' },
      { label: 'Grooming', val: 'Mirrors & Washbasins' },
      { label: 'Privacy', val: 'Individual Enclosed Stalls' }
    ],
    whatsappMsg: 'Hi Nexus, I would like details about club amenities and showers.'
  },
  {
    id: 'community',
    num: '08',
    name: 'Community',
    category: 'CULTURE // MEMBERS',
    headline: 'THE POWER OF SHOWING UP.',
    oneLiner: 'A disciplined, supportive atmosphere of lifters, fitness enthusiasts, and beginners who respect consistency.',
    image: '/assets/images/photo6.webp',
    alt: 'Nexus Member Community and Training Floor',
    badge: 'The Nexus Collective',
    location: 'Both Branches',
    specs: [
      { label: 'Culture', val: 'Mutual Support & Discipline' },
      { label: 'Atmosphere', val: 'No Intimidation' },
      { label: 'Focus', val: 'Daily Consistency' },
      { label: 'Hours', val: 'Morning & Evening Access' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know more about membership and the club culture.'
  },
  {
    id: 'training',
    num: '09',
    name: 'Coaching',
    category: 'COACHING // GUIDANCE',
    headline: 'EXPERIENCED COACHING.',
    oneLiner: 'Knowledgeable trainers committed to proper form, safe progressions, and structured strength development.',
    image: '/assets/images/photo1.webp',
    alt: 'Free Weights and Training Area at Nexus Sector 85',
    badge: 'Club Trainers',
    location: 'Available across both branches',
    specs: [
      { label: 'Focus', val: 'Strength & Progressive Overload' },
      { label: 'Guidance', val: 'Compound Form & Technique' },
      { label: 'Programs', val: 'Structured Training Routines' },
      { label: 'Support', val: 'Coach Available on Floor' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to enquire about trainer guidance and personal coaching.'
  }
];
