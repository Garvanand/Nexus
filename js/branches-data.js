/**
 * NEXUS — THE LIFTING CLUB
 * Reusable Branch Data Architecture
 * 
 * Central source of truth for all club locations.
 * Adding a new branch here automatically updates the selector,
 * dynamic branch routes, and global contact flows.
 */

const NEXUS_BRANCHES = {
  'sector-85': {
    id: 'sector-85',
    slug: 'sector-85',
    name: 'Nexus Sector 85',
    shortName: 'Sector 85',
    tagline: 'The Flagship Strength & Powerlifting Arena',
    locality: 'Sector 85, Greater Faridabad',
    fullAddress: 'Sector 85, Greater Faridabad, Haryana 121002',
    phone: '9582333003',
    phoneDisplay: '95823 33003',
    whatsapp: '919582333003',
    mapQuery: 'Sector+85+Greater+Faridabad+Haryana',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.5!2d77.37!3d28.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSector+85+Faridabad!5e0!3m2!1sen!2sin!4v1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+85+Greater+Faridabad+Haryana',
    hours: {
      weekdays: 'Mon – Sat: 6:00 AM – 10:00 PM',
      sunday: 'Sun: 7:00 AM – 2:00 PM',
      peak: 'Peak: 6:30 AM – 9:00 AM & 6:00 PM – 9:00 PM'
    },
    heroImage: 'assets/images/photo8.webp',
    splitImage: 'assets/images/photo10.webp',
    badge: 'Flagship Lifting Arena',
    description: 'Our premier strength training club engineered for serious lifters, powerlifters, and athletes in Greater Faridabad. Equipped with Olympic deadlift platforms, competition barbells, Scandinavian Design machines, and panoramic daylight windows.',
    facilities: [
      { name: 'Olympic Deadlift Platform', desc: 'Acoustic rubber & hardwood drop platform with competition barbells' },
      { name: 'Scandinavian Design Machines', desc: 'Precision selectorized pin-loaded stations along illuminated arched mirrors' },
      { name: 'Olympic Flat & Incline Benches', desc: 'Heavy-gauge steel competition bench press stations overlooking skyline windows' },
      { name: 'High-Output Cardio Grid', desc: 'Commercial treadmill banks, spin bikes, and metabolic conditioning zone' },
      { name: 'Mirrored Movement Studio', desc: 'Sprung hardwood floor for calisthenics, mobility, and group sessions' },
      { name: 'Custom Timber Member Lockers', desc: 'Spacious secure wooden lockers with cushioned bench seating & shoe storage' },
      { name: 'Luxury Halo Vanity & Showers', desc: 'Circular backlit halo mirrors, metallic gold vessel basins, and private hot showers' },
      { name: 'Outdoor Landscaped Terrace', desc: 'Fresh-air club balcony with lush plants and architectural dark stone facade' }
    ],
    highlights: [
      {
        title: 'Zero Gimmick Atmosphere',
        desc: 'No crowded gimmicks. Every square foot is engineered for authentic athletic discipline and progressive overload.'
      },
      {
        title: 'Competition Specs & Platforms',
        desc: 'Olympic wooden deadlift platforms, precision steel discs, and heavy-duty commercial racks.'
      },
      {
        title: 'Elite Coaching Cadre',
        desc: 'On-floor coaches specializing in biomechanics, compound bar path, and structured progression.'
      }
    ],
    gallery: [
      { src: 'assets/images/photo8.webp', alt: 'Nexus Sector 85 — Sunlit Strength Floor with Olympic Benches' },
      { src: 'assets/images/photo10.webp', alt: 'Nexus Sector 85 — Olympic Deadlift Platform & Competition Bars' },
      { src: 'assets/images/photo1.webp', alt: 'Nexus Sector 85 — Panoramic Training Arena & Cable Stations' },
      { src: 'assets/images/photo9.webp', alt: 'Nexus Sector 85 — Scandinavian Design Machines & Cardio Grid' },
      { src: 'assets/images/photo2.webp', alt: 'Nexus Sector 85 — Mirrored Group Movement & Calisthenics Studio' },
      { src: 'assets/images/photo4.webp', alt: 'Nexus Sector 85 — Luxury Member Vanity with Halo Mirrors & Gold Basins' },
      { src: 'assets/images/photo7.webp', alt: 'Nexus Sector 85 — Custom Timber Lockers & Dressing Lounge' },
      { src: 'assets/images/photo6.webp', alt: 'Nexus Sector 85 — Grand Arrival Hallway with Wood Slat Paneling' },
      { src: 'assets/images/photo5.webp', alt: 'Nexus Sector 85 — Outdoor Landscaped Club Terrace & Balcony' },
      { src: 'assets/images/photo3.webp', alt: 'Nexus Sector 85 — Executive Grooming & Private Shower Suites' }
    ],
    whatsappMessages: {
      general: 'Hi Nexus! I am interested in Sector 85 membership details.',
      visit: 'Hi! I would like to book a walkthrough at Nexus Sector 85.',
      strength: 'Hi! I want to know more about the Sector 85 lifting floor.'
    }
  },

  'sector-86': {
    id: 'sector-86',
    slug: 'sector-86',
    name: 'Nexus Sector 86',
    shortName: 'Sector 86',
    tagline: 'Group Fitness Studios & Rooftop Cricket Arena',
    locality: 'Sector 86, Greater Faridabad',
    fullAddress: 'Sector 86, Greater Faridabad, Haryana 121002',
    phone: '9582333003',
    phoneDisplay: '95823 33003',
    whatsapp: '919582333003',
    mapQuery: 'Sector+86+Greater+Faridabad+Haryana',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.5!2d77.38!3d28.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSector+86+Faridabad!5e0!3m2!1sen!2sin!4v1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sector+86+Greater+Faridabad+Haryana',
    hours: {
      weekdays: 'Mon – Sat: 6:00 AM – 10:00 PM',
      sunday: 'Sun: 7:00 AM – 2:00 PM',
      peak: 'Peak: 6:30 AM – 9:00 AM & 6:00 PM – 9:00 PM'
    },
    heroImage: 'assets/images/space_cricket.jpg',
    splitImage: 'assets/images/space_cricket.jpg',
    badge: 'Studios & Rooftop Turf',
    description: 'Our multi-discipline athletic hub combining dedicated mirrored dance/yoga studios, a complete gym floor, and Greater Faridabad’s only floodlit rooftop cricket arena under the open sky.',
    facilities: [
      { name: 'Rooftop Cricket Turf', desc: 'All-weather synthetic turf with high-tensile safety netting' },
      { name: 'Acoustic Zumba Studio', desc: 'Shock-absorbent sprung floor with immersive concert sound' },
      { name: 'Mindfulness Yoga Sanctuary', desc: 'Serene warm-lit studio for mobility, vinyasa, and decompression' },
      { name: 'Cardio & HIIT Studio', desc: 'Dedicated space for athletic interval conditioning and aerobic endurance' },
      { name: 'Full Resistance Floor', desc: 'Free weights, cable stations, and functional conditioning gear' },
      { name: 'Private Lockers & Showers', desc: 'Keyless secure lockers and premium hot showers' }
    ],
    highlights: [
      {
        title: 'Rooftop Sports Arena',
        desc: 'Play under night floodlights with panoramic views over Greater Faridabad.'
      },
      {
        title: 'Group Class Energy',
        desc: 'Energizing Zumba, Aerobics, and restorative Yoga taught by certified leads.'
      },
      {
        title: 'Holistic Fitness Spectrum',
        desc: 'Seamlessly shift between heavy strength, high-energy dance, and rooftop play.'
      }
    ],
    gallery: [
      { src: 'assets/images/space_cricket.jpg', alt: 'Rooftop Cricket Turf at Sunset' },
      { src: 'assets/images/photo2.webp', alt: 'Acoustic Mirrored Movement Studio' },
      { src: 'assets/images/training_yoga.jpg', alt: 'Serene Mindfulness Yoga Studio' },
      { src: 'assets/images/photo9.webp', alt: 'Cardio & Selectorized Conditioning Grid' }
    ],
    whatsappMessages: {
      general: 'Hi Nexus! I am interested in Sector 86 membership details.',
      visit: 'Hi! I would like to book a walkthrough at Nexus Sector 86.',
      turf: 'Hi! I want to book a cricket turf slot at Sector 86.'
    }
  }
};

if (typeof window !== 'undefined') {
  window.NEXUS_BRANCHES = NEXUS_BRANCHES;
}
