import { Facility } from '../types';

export const NEXUS_FACILITIES: Facility[] = [
  {
    id: 'gym',
    name: 'The Strength Floor',
    subtitle: 'FREE WEIGHTS & POWER RACKS',
    category: 'arena',
    categoryLabel: 'Training Area',
    layout: 'large-image',
    image: '/assets/images/photo10.webp',
    tag: 'STRENGTH GROUND',
    badge: 'Sector 85 & Sector 86',
    lead: 'Solid barbells, reinforced power cages, and dedicated lifting platforms built for serious strength and progressive overload.',
    specs: [
      { icon: '◼', text: 'Dedicated Lifting Platforms & Squat Bays' },
      { icon: '◼', text: 'Full Range of Cast Iron Plates & Bumpers' },
      { icon: '◼', text: 'Heavy-Duty Power Cages with J-Hooks & Safety Spotters' },
      { icon: '◼', text: 'Complete Free-Weight Dumbbell Selection' }
    ],
    branchAvailability: 'Available at Sector 85 & Sector 86',
    verifiedBadge: 'Strength Ground',
    ctaText: 'Enquire About Strength Floor',
    inquiryTag: 'strength'
  },
  {
    id: 'lockers',
    name: 'Personal Lockers',
    subtitle: 'STORAGE // PEACE OF MIND',
    category: 'amenities',
    categoryLabel: 'Club Amenities',
    layout: 'compact-typography',
    image: '/assets/images/photo7.webp',
    tag: 'MEMBER STORAGE',
    badge: 'Both Branches',
    lead: 'Spacious locker units built for member peace of mind while training. Clean, organized changing spaces across both branches.',
    specs: [
      { icon: '🔒', text: 'Spacious Lockers for Gym Bags & Essentials' },
      { icon: '🛡️', text: 'Secure Shackle for Personal Padlocks' },
      { icon: '🧹', text: 'Clean Changing Room Environment' },
      { icon: '⏱️', text: 'Maintained Daily by Housekeeping' }
    ],
    branchAvailability: 'Available at Sector 85 & Sector 86',
    verifiedBadge: 'Club Amenity',
    ctaText: 'Enquire Amenities',
    inquiryTag: 'visit',
    highlightStat: { val: 'Secure', label: 'Locker Storage' }
  },
  {
    id: 'cricket',
    name: 'Rooftop Cricket Turf',
    subtitle: 'OUTDOOR CRICKET & PLAY EXPERIENCE',
    category: 'turf',
    categoryLabel: 'Rooftop Turf',
    layout: 'featured-banner',
    image: '/assets/images/space_cricket.jpg',
    tag: 'ROOFTOP EXPERIENCE',
    badge: 'Sector 86',
    lead: 'An enclosed synthetic turf perched atop the Sector 86 club. Equipped with evening floodlights—train heavy downstairs, bowl 6 overs with friends upstairs.',
    specs: [
      { icon: '🏏', text: 'All-Weather Synthetic Playing Turf' },
      { icon: '💡', text: 'Evening Floodlights for Night Matches' },
      { icon: '🕸️', text: 'Enclosed Perimeter Safety Netting' },
      { icon: '👥', text: 'Available for Member Matches & Friendly Innings' }
    ],
    branchAvailability: 'Sector 86 Club (Rooftop Deck)',
    verifiedBadge: 'Rooftop Deck',
    ctaText: 'Enquire About Rooftop Turf',
    inquiryTag: 'turf'
  },
  {
    id: 'zumba',
    name: 'Zumba Studio',
    subtitle: 'RHYTHM & CARDIO SESSIONS',
    category: 'studios',
    categoryLabel: 'Group Studios',
    layout: 'medium-image',
    image: '/assets/images/photo2.webp',
    tag: 'STUDIO 01',
    badge: 'Sector 86 Studio Wing',
    lead: 'Wooden flooring designed for joint comfort during high-energy dance choreography and cardiovascular conditioning.',
    specs: [
      { icon: '⚡', text: 'Wooden Flooring for Joint Comfort' },
      { icon: '🔊', text: 'Dedicated Sound Setup' },
      { icon: '🔥', text: 'High-Energy Cardio Batches' },
      { icon: '👥', text: 'Certified Zumba Instructors' }
    ],
    branchAvailability: 'Sector 86 Studio Wing',
    verifiedBadge: 'Studio Wing',
    ctaText: 'Enquire Zumba Batches',
    inquiryTag: 'zumba'
  },
  {
    id: 'yoga',
    name: 'Yoga & Mobility Studio',
    subtitle: 'BREATHWORK & MOBILITY',
    category: 'studios',
    categoryLabel: 'Group Studios',
    layout: 'medium-image',
    image: '/assets/images/photo2.webp',
    tag: 'STUDIO 02',
    badge: 'Sector 86 Studio Wing',
    lead: 'A dedicated studio environment for breathwork, spine decompression, and active mobility training.',
    specs: [
      { icon: '🧘', text: 'Quiet Studio Environment' },
      { icon: '🕯️', text: 'Calm Atmosphere' },
      { icon: '🌀', text: 'Guided Alignment & Flow Sessions' },
      { icon: '🧱', text: 'Yoga Mats & Blocks Available' }
    ],
    branchAvailability: 'Sector 86 Studio Wing',
    verifiedBadge: 'Studio Wing',
    ctaText: 'Enquire Yoga Sessions',
    inquiryTag: 'yoga'
  },
  {
    id: 'aerobics',
    name: 'Aerobics & Conditioning Studio',
    subtitle: 'INTERVAL & CARDIO CONDITIONING',
    category: 'studios',
    categoryLabel: 'Group Studios',
    layout: 'medium-image',
    image: '/assets/images/photo9.webp',
    tag: 'STUDIO 03',
    badge: 'Sector 86 Studio Wing',
    lead: 'Full-body cardiovascular workouts using steps, bodyweight stations, and interval circuits for stamina.',
    specs: [
      { icon: '⏱️', text: 'Interval Training Stations' },
      { icon: '📦', text: 'Aerobic Steps & Conditioning Gear' },
      { icon: '⚡', text: 'Stamina & Agility Focus' },
      { icon: '🎯', text: 'Encouraging Group Cohorts' }
    ],
    branchAvailability: 'Sector 86 Studio Wing',
    verifiedBadge: 'Studio Wing',
    ctaText: 'Enquire Aerobics Batches',
    inquiryTag: 'aerobics'
  },
  {
    id: 'washrooms',
    name: 'Washrooms & Showers',
    subtitle: 'CLEAN // INDIVIDUAL SHOWERS',
    category: 'amenities',
    categoryLabel: 'Club Amenities',
    layout: 'compact-typography',
    image: '/assets/images/photo4.webp',
    tag: 'CLUB AMENITY',
    badge: 'Both Branches',
    lead: 'Clean private shower stalls, hot water systems, and grooming vanity mirrors maintained daily.',
    specs: [
      { icon: '🚿', text: 'Hot Water Showers' },
      { icon: '🧼', text: 'Individual Privacy Stalls' },
      { icon: '🪞', text: 'Well-Lit Grooming Mirrors' },
      { icon: '✨', text: 'Cleaned Regularly Throughout the Day' }
    ],
    branchAvailability: 'Available at Sector 85 & Sector 86',
    verifiedBadge: 'Club Amenity',
    ctaText: 'Enquire Club Facilities',
    inquiryTag: 'visit',
    highlightStat: { val: 'Daily', label: 'Housekeeping Cycle' }
  }
];
