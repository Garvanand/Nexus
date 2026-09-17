import { Facility } from '../types';

export const NEXUS_FACILITIES: Facility[] = [
  {
    id: 'gym',
    name: 'The Arena — Strength Floor',
    subtitle: 'HEAVY IRON & OLYMPIC PLATFORMS',
    category: 'arena',
    categoryLabel: 'Training Arena',
    layout: 'large-image',
    image: '/assets/images/photo10.webp',
    tag: 'FLAGSHIP IRON GROUND',
    badge: 'Sector 85 & Sector 86',
    lead: 'Calibrated steel plates, competition-grade power racks, and dedicated Olympic drop platforms built for serious progression without fluff.',
    specs: [
      { icon: '◼', text: '4 Olympic Drop Platforms with Timber Inset' },
      { icon: '◼', text: 'Calibrated Competition Cast Iron & Bumpers' },
      { icon: '◼', text: 'Heavy-Duty Power Cages with J-Hooks & Spotters' },
      { icon: '◼', text: 'Dumbbell Array Escalating from 2.5kg to 50kg+' }
    ],
    branchAvailability: 'Verified at Sector 85 & Sector 86',
    verifiedBadge: '✓ Verified Facility',
    ctaText: 'Inquire Strength Arena',
    inquiryTag: 'strength'
  },
  {
    id: 'lockers',
    name: 'Secure Personal Lockers',
    subtitle: 'SECURITY // PEACE OF MIND',
    category: 'amenities',
    categoryLabel: 'Club Amenities',
    layout: 'compact-typography',
    image: '/assets/images/photo7.webp',
    tag: 'MEMBER SECURITY',
    badge: 'Both Branches',
    lead: 'Spacious matte charcoal timber locker units built for peace of mind. Bring your own padlock or use assigned lockers while you train undistracted on the floor.',
    specs: [
      { icon: '🔒', text: 'Spacious Interior for Large Duffle Bags' },
      { icon: '🛡️', text: 'RFID / Personal Padlock Ready Shackle' },
      { icon: '🧹', text: 'Dedicated Changing Room Attendants' },
      { icon: '⏱️', text: 'Sanitized Hourly by Housekeeping' }
    ],
    branchAvailability: 'Verified at Sector 85 & Sector 86',
    verifiedBadge: '✓ Verified Amenity',
    ctaText: 'Inquire Amenities',
    inquiryTag: 'visit',
    highlightStat: { val: '100%', label: 'Dedicated Bag Space' }
  },
  {
    id: 'cricket',
    name: 'Rooftop Cricket Turf',
    subtitle: 'GREATER FARIDABAD’S ONLY FLOODLIT SKY TURF',
    category: 'turf',
    categoryLabel: 'Rooftop Turf',
    layout: 'featured-banner',
    image: '/assets/images/space_cricket.jpg',
    tag: 'FLAGSHIP DIFFERENTIATOR',
    badge: 'Exclusive to Sector 86',
    lead: 'A high-tension enclosed synthetic turf perched atop the Sector 86 club. Floodlit for dusk and night innings—train heavy downstairs, bowl 6 overs with friends upstairs.',
    specs: [
      { icon: '🏏', text: 'High-Density All-Weather Synthetic Playing Surface' },
      { icon: '💡', text: 'Night-Rated Floodlights for Sunset & Evening Matches' },
      { icon: '🕸️', text: 'Full 360° High-Tension Safety Boundary Netting' },
      { icon: '👥', text: 'Available for Member Matches & Friendly Bookings' }
    ],
    branchAvailability: 'Exclusive to Sector 86 Club (Open-Air Deck)',
    verifiedBadge: '✓ Verified Differentiator',
    ctaText: 'Inquire Turf Booking',
    inquiryTag: 'turf'
  },
  {
    id: 'zumba',
    name: 'Kinetic Zumba Studio',
    subtitle: 'RHYTHM & CARDIO ENERGY',
    category: 'studios',
    categoryLabel: 'Group Studios',
    layout: 'medium-image',
    image: '/assets/images/photo2.webp',
    tag: 'STUDIO 01',
    badge: 'Sector 86 Studio Hub',
    lead: 'Shock-absorbent sprung hardwood floor designed to protect joints during high-impact dance choreography and cardiovascular conditioning.',
    specs: [
      { icon: '⚡', text: 'Sprung Timber Flooring for Joint Protection' },
      { icon: '🔊', text: 'Tuned Acoustic Sound Array' },
      { icon: '🔥', text: 'High-Cadence Caloric Burn' },
      { icon: '👥', text: 'Certified Zumba Instructors' }
    ],
    branchAvailability: 'Verified at Sector 86 Studio Wing',
    verifiedBadge: '✓ Verified Studio',
    ctaText: 'Inquire Zumba Batches',
    inquiryTag: 'zumba'
  },
  {
    id: 'yoga',
    name: 'Mobility & Flow Sanctuary',
    subtitle: 'BREATHWORK & RECOVERY',
    category: 'studios',
    categoryLabel: 'Group Studios',
    layout: 'medium-image',
    image: '/assets/images/photo2.webp',
    tag: 'STUDIO 02',
    badge: 'Sector 86 Studio Hub',
    lead: 'A low-lux, acoustically isolated environment dedicated to pranayama breathwork, spine decompression, and active mobility.',
    specs: [
      { icon: '🧘', text: 'Acoustic Sound Isolation from Iron Floor' },
      { icon: '🕯️', text: 'Warm Low-Lux Luminescence' },
      { icon: '🌀', text: 'Hatha & Vinyasa Guided Flows' },
      { icon: '🧱', text: 'Cork Blocks & Grippy Mats Provided' }
    ],
    branchAvailability: 'Verified at Sector 86 Studio Wing',
    verifiedBadge: '✓ Verified Studio',
    ctaText: 'Inquire Yoga Sessions',
    inquiryTag: 'yoga'
  },
  {
    id: 'aerobics',
    name: 'Aerobics & HIIT Studio',
    subtitle: 'ATHLETIC INTERVAL CONDITIONING',
    category: 'studios',
    categoryLabel: 'Group Studios',
    layout: 'medium-image',
    image: '/assets/images/photo9.webp',
    tag: 'STUDIO 03',
    badge: 'Sector 86 Studio Hub',
    lead: 'Full-body cardiovascular conditioning circuits using plyo boxes, agility ladders, and interval steps for endurance and body composition.',
    specs: [
      { icon: '⏱️', text: 'Structured Heart-Rate Interval Stations' },
      { icon: '📦', text: 'Step Platforms & Conditioning Gear' },
      { icon: '⚡', text: 'Metabolic & Stamina Development' },
      { icon: '🎯', text: 'Coached Group Accountability' }
    ],
    branchAvailability: 'Verified at Sector 86 Studio Wing',
    verifiedBadge: '✓ Verified Studio',
    ctaText: 'Inquire Aerobics Batches',
    inquiryTag: 'aerobics'
  },
  {
    id: 'washrooms',
    name: 'Immaculate Washrooms & Showers',
    subtitle: 'HYGIENE // INDIVIDUAL STALLS',
    category: 'amenities',
    categoryLabel: 'Club Amenities',
    layout: 'compact-typography',
    image: '/assets/images/photo4.webp',
    tag: 'CLUB HYGIENE',
    badge: 'Both Branches',
    lead: 'Executive-grade private shower stalls, high-pressure hot water systems, and groomed halo vanity mirrors maintained with strict hourly sanitation audits.',
    specs: [
      { icon: '🚿', text: 'High-Pressure Continuous Hot Water Rain Showers' },
      { icon: '🧼', text: 'Enclosed Individual Privacy Stalls' },
      { icon: '🪞', text: 'Luxury Halo-Illuminated Grooming Mirrors' },
      { icon: '✨', text: 'Dedicated Sanitation Logs Maintained Daily' }
    ],
    branchAvailability: 'Verified at Sector 85 & Sector 86',
    verifiedBadge: '✓ Verified Amenity',
    ctaText: 'Inquire Club Standards',
    inquiryTag: 'visit',
    highlightStat: { val: '60 Min', label: 'Sanitation Inspection Cycle' }
  }
];
