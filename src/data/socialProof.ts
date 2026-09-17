import { SocialProofItem } from '../types';

export const NEXUS_SOCIAL_PROOF: SocialProofItem[] = [
  {
    id: 'community-strength',
    category: 'community',
    categoryLabel: 'Club Culture // Discipline',
    name: 'The Lifting Community',
    headline: 'SHOW UP. PUT THE WORK IN.',
    quote: 'At Nexus, training is built around serious work ethic. Quality equipment, dedicated platforms, and lifters who respect the process.',
    story: 'From morning lifters to evening cohorts, members support each other with spotting, encouragement, and shared discipline.',
    photo: '/assets/images/photo8.webp',
    discipline: 'Strength Training',
    branch: 'Sector 85',
    tenure: 'Nexus Member Community',
    verifiedBadge: 'Nexus Community',
    verifiedLifter: true,
    milestones: ['Barbell Training', 'Safe Spotter Culture', 'Zero Distractions'],
    source: 'The Nexus Collective'
  },
  {
    id: 'community-studios',
    category: 'cohort',
    categoryLabel: 'Studio Energy // Group Sessions',
    name: 'Studio Cohorts',
    headline: 'ENERGY IN NUMBERS.',
    quote: 'High-tempo Zumba batches and conditioning sessions bring high energy and consistency to weekly fitness routines.',
    story: 'Group sessions bring members together for joyful, high-intensity workouts on dedicated wooden flooring.',
    photo: '/assets/images/photo2.webp',
    discipline: 'Zumba & Aerobics',
    branch: 'Sector 86',
    tenure: 'Studio Batches',
    verifiedBadge: 'Studio Community',
    verifiedLifter: false,
    milestones: ['Group Energy', 'Weekly Batches', 'Joint Comfort'],
    source: 'The Nexus Collective'
  },
  {
    id: 'community-turf',
    category: 'community',
    categoryLabel: 'Rooftop Play // Community Matches',
    name: 'Rooftop Cricket Evenings',
    headline: 'SQUATS DOWNSTAIRS. CRICKET UPSTAIRS.',
    quote: 'The rooftop cricket turf gives lifters and friends a place to switch off from work, play friendly innings, and enjoy the open sky.',
    story: 'Evening matches under the floodlights bring friendly competition and camaraderie to the Sector 86 rooftop.',
    photo: '/assets/images/space_cricket.jpg',
    discipline: 'Rooftop Cricket Turf',
    branch: 'Sector 86',
    tenure: 'Rooftop Sessions',
    verifiedBadge: 'Rooftop Community',
    verifiedLifter: false,
    milestones: ['Outdoor Turf', 'Evening Lights', 'Friendly Matches'],
    source: 'The Nexus Collective'
  }
];
