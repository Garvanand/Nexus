import { ExperienceChapter } from '../types';

export const NEXUS_EXPERIENCES: ExperienceChapter[] = [
  {
    id: 'gym',
    num: '01',
    name: 'Gym Arena',
    category: 'TRAIN // STRENGTH ARENA',
    headline: 'HEAVY IRON. COMPETITION GRADE.',
    oneLiner: 'Calibrated steel discs, Olympic drop platforms, and heavy-gauge power cages engineered for progressive overload without compromise.',
    image: '/assets/images/photo10.webp',
    alt: 'Olympic Power Cages and Deadlift Platforms at Nexus Sector 85',
    badge: 'Flagship Arena · Sector 85 & 86',
    location: 'Available across Sector 85 and Sector 86',
    specs: [
      { label: 'Drop Platforms', val: 'Full Olympic Spec Shock Timber' },
      { label: 'Plates', val: 'Calibrated Cast Steel & Bumpers' },
      { label: 'Dumbbell Array', val: 'Progressive up to 50kg+' },
      { label: 'Power Cages', val: 'Reinforced J-Hooks & Spotter Arms' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know more about the strength floor and powerlifting platforms.'
  },
  {
    id: 'zumba',
    num: '02',
    name: 'Kinetic Studio',
    category: 'MOVE // KINETIC STUDIO',
    headline: 'RHYTHM WITHOUT RESTRAINT.',
    oneLiner: 'Shock-absorbent sprung hardwood flooring and concert acoustics that turn high-calorie cardiovascular sweat into collective euphoria.',
    image: '/assets/images/photo2.webp',
    alt: 'Acoustic Mirrored Movement & Dance Studio at Nexus',
    badge: 'Studio Arena · Sector 86 & 85',
    location: 'Available at Sector 86 & Sector 85',
    specs: [
      { label: 'Studio Floor', val: 'Sprung Hardwood Shock System' },
      { label: 'Sound System', val: 'High-Fidelity Tuned Acoustic Array' },
      { label: 'Cadence', val: '60-Minute Choreographed Batches' },
      { label: 'Coaching', val: 'Licensed Zumba Specialists' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know about Zumba classes and batch schedules.'
  },
  {
    id: 'yoga',
    num: '03',
    name: 'Sanctuary',
    category: 'RECOVER // MINDFULNESS',
    headline: 'BALANCE IN THE NOISE.',
    oneLiner: 'Warm low-lux illumination, guided pranayama breathwork, and deep myofascial mobility designed to lower cortisol and restore spinal alignment.',
    image: '/assets/images/photo2.webp',
    alt: 'Serene Yoga Studio Sanctuary at Nexus',
    badge: 'Mindfulness Sanctuary · Sector 86',
    location: 'Sector 86 Performance Club',
    specs: [
      { label: 'Illumination', val: 'Low-Lux Warm Luminescence' },
      { label: 'Disciplines', val: 'Hatha, Vinyasa & Spinal Mobility' },
      { label: 'Acoustics', val: 'Noise-Isolated Studio Zone' },
      { label: 'Gear', val: 'Non-Slip Mats & Natural Cork Blocks' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know about Yoga sessions and mobility classes.'
  },
  {
    id: 'aerobics',
    num: '04',
    name: 'Conditioning',
    category: 'MOVE // ATHLETIC HIIT',
    headline: 'SWEAT WITH PURPOSE.',
    oneLiner: 'Functional athletic circuits and high-tempo interval conditioning that elevate cardiovascular threshold alongside an accountability cohort.',
    image: '/assets/images/photo9.webp',
    alt: 'Athletic Aerobics and Cardio Selectorized Grid at Nexus',
    badge: 'Cardio Conditioning · Sector 86 & 85',
    location: 'Available across both branches',
    specs: [
      { label: 'Workout Style', val: 'Metabolic & Cardiovascular HIIT' },
      { label: 'Intensity', val: 'Structured Heart Rate Zones' },
      { label: 'Equipment', val: 'Plyo Boxes, Agility Ladders, Steps' },
      { label: 'Atmosphere', val: 'Coached Group Accountability' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know about Aerobics and athletic conditioning batches.'
  },
  {
    id: 'cricket',
    num: '05',
    name: 'Rooftop Turf',
    category: 'PLAY // ROOFTOP TURF',
    headline: 'TRAIN HARD. SWITCH OFF. PLAY.',
    oneLiner: 'Greater Faridabad’s only floodlit rooftop cricket arena situated atop Nexus Sector 86. The ultimate antidote to training fatigue.',
    image: '/assets/images/space_cricket.jpg',
    alt: 'Rooftop Cricket Turf Under Night Floodlights',
    badge: 'Flagship Lifestyle Differentiator · Sector 86',
    location: 'Sector 86 Performance Club (Open Sky Deck)',
    specs: [
      { label: 'Turf Spec', val: 'High-Density All-Weather Synthetic' },
      { label: 'Lighting', val: 'Calibrated Night Floodlights' },
      { label: 'Safety Netting', val: 'Full High-Tension Perimeter Netting' },
      { label: 'Access', val: 'Private Member Bookings & Intra-Club Friendlies' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to inquire about booking the Rooftop Cricket Turf.',
    isCenterpiece: true
  },
  {
    id: 'lockers',
    num: '06',
    name: 'Lockers',
    category: 'COMFORT // SECURITY',
    headline: 'SECURED AT EVERY SECOND.',
    oneLiner: 'Spacious personal storage lockers engineered for peace of mind while you focus purely on the barbell.',
    image: '/assets/images/photo7.webp',
    alt: 'Executive Matte Charcoal Timber Lockers at Nexus Sector 85',
    badge: 'Both Branches · Sector 85 & 86',
    location: 'Sector 85 & Sector 86',
    specs: [
      { label: 'Lock Systems', val: 'Digital Pin / Personal Padlock Ready' },
      { label: 'Capacity', val: 'Spacious Gym Bags & Work Apparel' },
      { label: 'Cleanliness', val: 'Dedicated Facility Attendants' },
      { label: 'Zones', val: 'Segregated Changing Lounges' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to ask about member locker facilities.'
  },
  {
    id: 'washrooms',
    num: '07',
    name: 'Washrooms',
    category: 'HYGIENE // REFRESH',
    headline: 'PRISTINE PRIVATE SUITES.',
    oneLiner: 'Continuous sanitization routines, hot high-pressure rain showers, and well-lit executive grooming mirrors.',
    image: '/assets/images/photo4.webp',
    alt: 'Luxury Ambient Halo Vanity and Shower Suites at Nexus Sector 85',
    badge: 'Both Branches · Sector 85 & 86',
    location: 'Sector 85 & Sector 86',
    specs: [
      { label: 'Showers', val: 'High-Pressure Continuous Hot Water' },
      { label: 'Hygiene Audit', val: 'Hourly Sanitation Inspections' },
      { label: 'Grooming', val: 'Power Outlets & Luxury Halo Mirrors' },
      { label: 'Privacy', val: 'Individual Enclosed Shower Stalls' }
    ],
    whatsappMsg: 'Hi Nexus, I would like details about club hygiene and changing amenities.'
  },
  {
    id: 'community',
    num: '08',
    name: 'Community',
    category: 'CULTURE // TRIBE',
    headline: 'THE POWER OF SHOWING UP.',
    oneLiner: 'No ego, no judgment. An uplifting culture of lifters, athletes, and beginners who respect consistency above all.',
    image: '/assets/images/photo6.webp',
    alt: 'Nexus Lifters Community and Equipment Layout',
    badge: 'The Nexus Collective',
    location: 'Both Branches',
    specs: [
      { label: 'Culture', val: 'Mutual Spotting & Work Ethic' },
      { label: 'Events', val: 'Friendly Lift Meets & Workshops' },
      { label: 'Atmosphere', val: 'Zero Influencer Distractions' },
      { label: 'Cohorts', val: 'Morning, Evening & Weekend Squads' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to know more about the member community and culture.'
  },
  {
    id: 'training',
    num: '09',
    name: 'Coaching',
    category: 'COACHING // EVOLUTION',
    headline: 'RESULTS ROOTED IN SCIENCE.',
    oneLiner: 'Certified strength and conditioning specialists committed to bio-mechanics, injury-free movement, and steady progression.',
    image: '/assets/images/photo1.webp',
    alt: 'Precision Free Weights and Technique Coaching at Nexus Sector 85',
    badge: 'Certified Coaching Staff',
    location: 'Available across both branches',
    specs: [
      { label: 'Staff Creds', val: 'Certified Strength & Exercise Science' },
      { label: 'Specialties', val: 'Hypertrophy, Powerlifting & Fat Loss' },
      { label: 'Assessments', val: 'Movement Screen & Spinal Mechanics' },
      { label: 'Plans', val: 'Periodized Progressive Programs' }
    ],
    whatsappMsg: 'Hi Nexus, I would like to inquire about personal coaching and trainer availability.'
  }
];
