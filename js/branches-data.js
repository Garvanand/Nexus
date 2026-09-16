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
    heroImage: 'assets/images/space_lifting.jpg',
    splitImage: 'assets/images/space_lifting.jpg',
    badge: 'Flagship Lifting Arena',
    description: 'Our premier strength training club engineered for serious lifters, powerlifters, and athletes. Equipped with calibrated competition barbells, heavy-duty power cages, and vibration-dampening deadlift platforms.',
    facilities: [
      { name: 'Olympic Power Cages', desc: 'Heavy-gauge steel racks with safety straps and pull-up grips' },
      { name: 'Calibrated Steel Plates', desc: 'Precision-tolerance weight discs for progressive overload' },
      { name: 'Deadlift Platforms', desc: 'Dedicated drop platforms with high-density acoustic rubber' },
      { name: 'Dumbbells Up To 50kg+', desc: 'Full commercial urethane dumbbell rack with minimal jumps' },
      { name: 'Sled Sprint Track', desc: 'High-traction turf lane for sled pushes, drags, and carries' },
      { name: 'Private Digital Lockers', desc: 'Keyless biometric and PIN lockers for member belongings' },
      { name: 'Luxury Hotel Showers', desc: 'Private shower stalls with continuous hot water and grooming' }
    ],
    highlights: [
      {
        title: 'Zero Gimmick Atmosphere',
        desc: 'No crowded cardio circuits. Every square foot is optimized for athletic strength.'
      },
      {
        title: 'Competition Specs',
        desc: 'Power bars, deadlift bars, and squat stands matching international lifting dimensions.'
      },
      {
        title: 'Elite Coaching Cadre',
        desc: 'Coaches specialized in biomechanics, powerlifting form, and injury prevention.'
      }
    ],
    gallery: [
      { src: 'assets/images/space_lifting.jpg', alt: 'Sector 85 Main Lifting Arena Floor' },
      { src: 'assets/images/training_strength.jpg', alt: 'Olympic Barbells and Plates at Sector 85' },
      { src: 'assets/images/space_ambience.jpg', alt: 'Architectural Wood Slat Detailing' },
      { src: 'assets/images/space_locker.jpg', alt: 'Private Member Lockers and Dressing Area' }
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
      { src: 'assets/images/training_zumba.jpg', alt: 'High Energy Zumba Session' },
      { src: 'assets/images/training_yoga.jpg', alt: 'Serene Mindfulness Yoga Studio' },
      { src: 'assets/images/space_studio.jpg', alt: 'Mirrored Studio Interior' }
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
