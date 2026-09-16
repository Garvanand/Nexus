/**
 * NEXUS — THE LIFTING CLUB
 * Experience Data Store
 * 
 * Detailed specifications, branch locations, and metadata for the 9 core
 * experiences of The Nexus Experience.
 */

const NEXUS_EXPERIENCES = {
  'gym': {
    id: 'gym',
    num: '01',
    category: 'TRAIN',
    name: 'Strength & Lifting Arena',
    headline: 'HEAVY IRON. COMPETITION GRADE.',
    oneLiner: 'Calibrated steel discs, Olympic drop platforms, and heavy-gauge power racks engineered for progressive overload without compromise.',
    location: 'Sector 85 (Flagship Arena) & Sector 86',
    image: 'assets/images/space_lifting.jpg',
    specs: [
      { label: 'Power Racks', val: 'Heavy-gauge commercial steel cages with safety straps' },
      { label: 'Weight Discs', val: 'Calibrated competition bumper & steel plates' },
      { label: 'Barbells', val: 'Olympic standard, power bars, deadlift bars, and EZ curl' },
      { label: 'Dumbbell Range', val: 'Commercial urethane pairs scaling to 50kg+' },
      { label: 'Drop Platforms', val: 'Acoustic vibration-dampening high-density rubber' },
      { label: 'Conditioning', val: 'Turf sled track with push/pull prowler sleds' }
    ],
    whatsappMsg: 'Hi Nexus! I would like to inquire about the strength and lifting floor at Sector 85.'
  },

  'zumba': {
    id: 'zumba',
    num: '02',
    category: 'MOVE',
    name: 'Zumba Kinetic Studio',
    headline: 'RHYTHM WITHOUT RESTRAINT.',
    oneLiner: 'Shock-absorbent sprung hardwood flooring and concert-grade acoustics that turn high-calorie cardiovascular conditioning into pure euphoria.',
    location: 'Sector 86 Studio Arena',
    image: 'assets/images/training_zumba.jpg',
    specs: [
      { label: 'Floor System', val: 'Shock-absorbent sprung timber to protect joint health' },
      { label: 'Acoustics', val: 'Treated sound isolation with club-grade bass fidelity' },
      { label: 'Instructors', val: 'Licensed, certified international rhythm leaders' },
      { label: 'Format', val: '60-minute high-cadence Latin, Hip-Hop, and Global tracks' },
      { label: 'Level', val: 'Beginner-friendly to high-intensity advanced dancers' }
    ],
    whatsappMsg: 'Hi Nexus! I would like to know the weekly schedule for Zumba classes at Sector 86.'
  },

  'yoga': {
    id: 'yoga',
    num: '03',
    category: 'RECOVER',
    name: 'Mindfulness & Yoga Sanctuary',
    headline: 'BALANCE IN THE NOISE.',
    oneLiner: 'Warm low-lux illumination, guided pranayama breathwork, and deep myofascial mobility designed to lower cortisol and restore spinal alignment.',
    location: 'Sector 86 Studio Arena',
    image: 'assets/images/training_yoga.jpg',
    specs: [
      { label: 'Atmosphere', val: 'Acoustically insulated calm zone with warm recessed light' },
      { label: 'Practices', val: 'Vinyasa Flow, Hatha Yoga, Deep Mobility, and Yin' },
      { label: 'Recovery Impact', val: 'Decompresses tight hips, thoracic spine, and lowers stress' },
      { label: 'Instruction', val: 'Master practitioners focusing on breath and anatomical form' },
      { label: 'Props Provided', val: 'High-density natural cork mats, blocks, and straps' }
    ],
    whatsappMsg: 'Hi Nexus! Please share the Yoga and mindfulness session timings at Sector 86.'
  },

  'aerobics': {
    id: 'aerobics',
    num: '04',
    category: 'MOVE',
    name: 'Aerobics & Athletic HIIT',
    headline: 'SWEAT WITH PURPOSE.',
    oneLiner: 'Functional athletic circuits and high-tempo interval conditioning that elevate cardiovascular threshold alongside an accountability cohort.',
    location: 'Sector 86 Studio Arena',
    image: 'assets/images/training_aerobics.jpg',
    specs: [
      { label: 'Discipline', val: 'High-Intensity Interval Training & Athletic Step Aerobics' },
      { label: 'Metabolic Goal', val: 'Elevated EPOC calorie burn and aerobic capacity' },
      { label: 'Equipment', val: 'Aerobic steps, agility ladders, kettlebells, and bodyweight' },
      { label: 'Pacing', val: 'Interval rounds synchronized to motivating up-tempo playlists' }
    ],
    whatsappMsg: 'Hi Nexus! I want to join the Aerobics / HIIT sessions at Sector 86.'
  },

  'cricket': {
    id: 'cricket',
    num: '05',
    category: 'PLAY · FLAGSHIP LIFESTYLE',
    name: 'Rooftop Cricket Arena',
    headline: 'TRAIN HARD. SWITCH OFF. PLAY.',
    oneLiner: 'Greater Faridabad’s only floodlit rooftop cricket arena atop Sector 86—a social athletic playground where members unwind under open skies.',
    location: 'Sector 86 Rooftop (Open Sky)',
    image: 'assets/images/space_cricket.jpg',
    isFlagship: true,
    specs: [
      { label: 'Surface', val: 'All-weather, high-traction professional synthetic turf' },
      { label: 'Enclosure', val: 'High-tensile heavy-gauge safety boundary netting' },
      { label: 'Lighting', val: 'Stadium-grade floodlights calibrated for night vision' },
      { label: 'Usage Formats', val: 'Net batting/bowling practice, box cricket, weekend friendlies' },
      { label: 'Atmosphere', val: 'Panoramic skyline view over Greater Faridabad' },
      { label: 'Booking', val: 'Exclusive slots for members and organized private cohorts' }
    ],
    whatsappMsg: 'Hi Nexus! I would like to book a slot at the Rooftop Cricket Turf at Sector 86.'
  },

  'lockers': {
    id: 'lockers',
    num: '06',
    category: 'COMFORT',
    name: 'Private Digital Lockers',
    headline: 'ZERO FRICTION TRANSITIONS.',
    oneLiner: 'Keyless biometric and digital PIN lockers providing seamless security for your personal gear, business bag, and devices while you train.',
    location: 'Sector 85 & Sector 86',
    image: 'assets/images/space_locker.jpg',
    specs: [
      { label: 'Access Control', val: 'Keyless digital code and biometric lock mechanisms' },
      { label: 'Capacity', val: 'Spacious dimensions accommodating gym duffels and laptops' },
      { label: 'Security', val: '24/7 access control monitored entry zone' },
      { label: 'Dressing Zone', val: 'Architectural seating benches and full-length mirrors' }
    ],
    whatsappMsg: 'Hi Nexus! Do you offer dedicated annual locker rentals at Sector 85 or 86?'
  },

  'washrooms': {
    id: 'washrooms',
    num: '07',
    category: 'RECOVERY',
    name: 'Hotel-Spec Showers & Washrooms',
    headline: 'CLEANSE & RECHARGE.',
    oneLiner: 'Continuous high-pressure hot water, individual privacy shower stalls, vanity grooming stations, and uncompromising hourly hygiene maintenance.',
    location: 'Sector 85 & Sector 86',
    image: 'assets/images/space_ambience.jpg',
    specs: [
      { label: 'Water Supply', val: 'Continuous high-pressure hot water via dedicated boilers' },
      { label: 'Privacy', val: 'Floor-to-ceiling private individual shower cubicles' },
      { label: 'Hygiene Protocol', val: 'Hourly sanitization and dry-floor maintenance' },
      { label: 'Grooming', val: 'Lit vanity mirrors, hair dryers, and grooming countertops' }
    ],
    whatsappMsg: 'Hi Nexus! Tell me more about the member shower and dressing facilities.'
  },

  'community': {
    id: 'community',
    num: '08',
    category: 'CULTURE',
    name: 'The Lifter Community',
    headline: 'YOU DO NOT TRAIN ALONE.',
    oneLiner: 'An unpretentious cohort of serious lifters, everyday athletes, and driven beginners who respect consistency and foster camaraderie.',
    location: 'The Nexus Clubhouse (Both Locations)',
    image: 'assets/images/reel_community.jpg',
    specs: [
      { label: 'Vibe', val: 'Focused, supportive, and free of intimidation' },
      { label: 'Events', val: 'Intra-club mock meets, cricket tournaments, and fitness challenges' },
      { label: 'Network', val: 'Connect with local professionals, lifters, and fitness leads' },
      { label: 'Culture', val: 'Members rerack weights, spot each other, and celebrate PRs' }
    ],
    whatsappMsg: 'Hi Nexus! I would like to visit the club and experience the community atmosphere.'
  },

  'training': {
    id: 'training',
    num: '09',
    category: 'COACHING',
    name: 'Elite Coaching & Mentorship',
    headline: 'PRECISION BIOMECHANICS.',
    oneLiner: 'Certified strength and movement mentors who prioritize movement quality, bar velocity, and progressive overload over generic cookie-cutter routines.',
    location: 'Sector 85 & Sector 86',
    image: 'assets/images/training_strength.jpg',
    specs: [
      { label: 'Credentials', val: 'Certified strength & conditioning specialists (CSCS / ACE)' },
      { label: 'Approach', val: 'Individualized biomechanics assessment & periodization' },
      { label: 'Form Auditing', val: 'Hands-on cueing for squat, bench, deadlift, and cleans' },
      { label: 'Progress Tracking', val: 'Objective strength, body composition, and recovery metrics' }
    ],
    whatsappMsg: 'Hi Nexus! I want to inquire about 1-on-1 coaching and training mentorship.'
  }
};

if (typeof window !== 'undefined') {
  window.NEXUS_EXPERIENCES = NEXUS_EXPERIENCES;
}
