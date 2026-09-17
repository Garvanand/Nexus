/**
 * NEXUS — THE LIFTING CLUB
 * Classes Data Store (/classes)
 * 
 * Future-proof schema ready for schedule batches/timetables.
 * Does not invent schedules; defaults to verified club batch notice.
 */

const NEXUS_CLASSES = [
  {
    id: 'zumba',
    name: 'Zumba Fitness',
    subtitle: 'High-Cadence Rhythm & Dance Cardio',
    categories: ['all', 'high-energy', 'cardio'],
    intensity: 'High Intensity · High Cadence',
    duration: '60 Minutes',
    branchAvailability: ['Sector 86 (Studio Arena)'],
    scheduleNotice: 'Contact Nexus for current batch timings',
    scheduleSlots: null, // Ready for [{ day: 'Mon/Wed/Fri', time: '7:00 AM' }]
    image: '../assets/images/photo2.webp',
    description: 'A dynamic, rhythm-driven dance cardio workout combining Latin, Hip-Hop, and world beats in our acoustic mirrored studio. Built on shock-absorbent sprung timber to protect knees and ankles while torching calories.',
    whoItIsFor: 'Anyone seeking high-energy calorie burn without the monotony of stationary cardio machines. Welcomes beginners, dance enthusiasts, and lifters wanting active recovery.',
    focusAreas: ['Aerobic Capacity', 'Rhythm & Coordination', 'Calorie Burn', 'Endorphin Release'],
    whatsappMsg: 'Hi Nexus! I would like to inquire about the current Zumba class batches and timings at Sector 86.'
  },

  {
    id: 'yoga',
    name: 'Mindfulness & Flow Yoga',
    subtitle: 'Mobility, Alignment & Breathwork',
    categories: ['all', 'mind-body'],
    intensity: 'Moderate · Restorative',
    duration: '60 Minutes',
    branchAvailability: ['Sector 86 (Mindfulness Sanctuary)'],
    scheduleNotice: 'Contact Nexus for current batch timings',
    scheduleSlots: null,
    image: '../assets/images/training_yoga.jpg',
    description: 'A restorative sanctuary session blending Vinyasa flow, deep myofascial mobility, and pranayama breathwork. Designed to lower systemic cortisol, align the spine, and unlock tight hips after heavy lifting or office desk fatigue.',
    whoItIsFor: 'Lifters needing thoracic and hip mobility, working professionals seeking stress relief, and practitioners of all flexibility levels.',
    focusAreas: ['Spinal Alignment', 'Hip Mobility', 'Stress Reduction', 'Core Stability'],
    whatsappMsg: 'Hi Nexus! I would like to know the current Yoga & mindfulness class schedule at Sector 86.'
  },

  {
    id: 'aerobics',
    name: 'Athletic Aerobics & HIIT',
    subtitle: 'Metabolic Cadence & Interval Conditioning',
    categories: ['all', 'high-energy', 'cardio'],
    intensity: 'High Intensity · Athletic Interval',
    duration: '60 Minutes',
    branchAvailability: ['Sector 86 (Studio Arena)'],
    scheduleNotice: 'Contact Nexus for current batch timings',
    scheduleSlots: null,
    image: '../assets/images/training_aerobics.jpg',
    description: 'Up-tempo functional conditioning combining step cadences, bodyweight intervals, agility drills, and core work. Driven by motivating cohort energy that challenges your cardiovascular threshold.',
    whoItIsFor: 'Members looking to build cardiovascular endurance, burn fat, and push lactate threshold in a motivating team cohort.',
    focusAreas: ['Metabolic Rate', 'Stamina & Agility', 'Cardiovascular Health', 'Team Motivation'],
    whatsappMsg: 'Hi Nexus! I am interested in joining the Aerobics & HIIT batches at Sector 86.'
  },

  {
    id: 'strength-group',
    name: 'Group Strength & Conditioning',
    subtitle: 'Progressive Overload & Barbell Mechanics',
    categories: ['all', 'strength'],
    intensity: 'Moderate to High · Progressive',
    duration: '60 Minutes',
    branchAvailability: ['Sector 85 (Flagship Arena) & Sector 86'],
    scheduleNotice: 'Batch slots available at the club',
    scheduleSlots: null,
    image: '../assets/images/photo10.webp',
    description: 'Small-cohort strength clinics focusing on the fundamental human movements: squat, bench press, deadlift, overhead press, and sled work. Form auditing by certified mentors ensures progressive overload without injury risk.',
    whoItIsFor: 'Lifters looking to master competition lifts, beginners seeking hands-on coaching, and athletes breaking through strength plateaus.',
    focusAreas: ['Barbell Technique', 'Progressive Overload', 'Core Bracing', 'Injury Prevention'],
    whatsappMsg: 'Hi Nexus! I want to inquire about group strength coaching and clinic batches.'
  }
];

if (typeof window !== 'undefined') {
  window.NEXUS_CLASSES = NEXUS_CLASSES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NEXUS_CLASSES;
}
