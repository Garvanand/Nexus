/**
 * NEXUS — THE LIFTING CLUB
 * Curated Instagram Feed Data Store (@nexusliftingclub)
 * 
 * Provides structured, resilient, and verified post data.
 * Zero dependency on fragile private scraper endpoints.
 */

const NEXUS_INSTAGRAM_POSTS = [
  {
    id: 'ig-reel-1',
    type: 'reel',
    category: 'Atmosphere',
    title: 'Heavy Deadlift Friday · Sector 85',
    caption: 'When the barbell bends, the discipline sharpens. Max effort pull sessions on the competition platform at Sector 85.',
    poster: 'assets/images/photo10.webp',
    permalink: 'https://www.instagram.com/reel/DO0EJ-oj-qV/',
    stats: {
      views: '18.4K',
      likes: '1,420',
      comments: '86'
    },
    date: '2 days ago',
    location: 'Sector 85, Greater Faridabad'
  },
  {
    id: 'ig-reel-2',
    type: 'reel',
    category: 'Community',
    title: 'The Post-Session Energy Never Drops',
    caption: 'Lifting heavy weights creates unbreakable bonds. Saturday morning cohort locked in after an intense 90-minute session.',
    poster: 'assets/images/photo8.webp',
    permalink: 'https://www.instagram.com/nexusliftingclub/',
    stats: {
      views: '24.9K',
      likes: '2,110',
      comments: '134'
    },
    date: '4 days ago',
    location: 'Sector 85 & 86'
  },
  {
    id: 'ig-reel-3',
    type: 'reel',
    category: 'Facilities',
    title: 'Sunset Cricket Under The Floodlights',
    caption: 'Greater Faridabad’s premier rooftop cricket arena atop Nexus Sector 86. All-weather turf, high-tensile nets, open sky view.',
    poster: 'assets/images/space_cricket.jpg',
    permalink: 'https://www.instagram.com/nexusliftingclub/',
    stats: {
      views: '19.7K',
      likes: '1,890',
      comments: '92'
    },
    date: '6 days ago',
    location: 'Rooftop Turf · Sector 86'
  },
  {
    id: 'ig-post-4',
    type: 'carousel',
    category: 'Classes',
    title: 'Zumba Beats · High Cadence Studio',
    caption: 'Pure rhythm, acoustic concert sound, and 60 minutes of non-stop sweat in the mirrored studio at Sector 86.',
    poster: 'assets/images/photo2.webp',
    permalink: 'https://www.instagram.com/nexusliftingclub/',
    stats: {
      views: null,
      likes: '940',
      comments: '42'
    },
    date: '1 week ago',
    location: 'Studio Arena · Sector 86'
  },
  {
    id: 'ig-post-5',
    type: 'image',
    category: 'Transformations',
    title: '6 Months of Consistency · Aryan’s Story',
    caption: '“I stopped looking for shortcuts and learned to love the barbell.” 18kg fat loss and +45kg on deadlift. Built with purpose.',
    poster: 'assets/images/photo1.webp',
    permalink: 'https://www.instagram.com/nexusliftingclub/',
    stats: {
      views: null,
      likes: '1,630',
      comments: '115'
    },
    date: '1 week ago',
    location: 'Sector 85 Arena'
  },
  {
    id: 'ig-post-6',
    type: 'image',
    category: 'Classes',
    title: 'Mindfulness Flow & Spinal Decompression',
    caption: 'Because true strength requires restoration. Master instructors guiding vinyasa mobility and deep breathwork at dawn.',
    poster: 'assets/images/training_yoga.jpg',
    permalink: 'https://www.instagram.com/nexusliftingclub/',
    stats: {
      views: null,
      likes: '780',
      comments: '38'
    },
    date: '2 weeks ago',
    location: 'Yoga Sanctuary · Sector 86'
  },
  {
    id: 'ig-reel-7',
    type: 'reel',
    category: 'Facilities',
    title: 'Inside The Iron Floor · Olympic Rig Tour',
    caption: 'Heavy gauge steel, calibrated plates, precision bars, zero clutter. Built strictly for progressive overload.',
    poster: 'assets/images/photo9.webp',
    permalink: 'https://www.instagram.com/nexusliftingclub/',
    stats: {
      views: '16.2K',
      likes: '1,240',
      comments: '64'
    },
    date: '2 weeks ago',
    location: 'Sector 85 Arena'
  },
  {
    id: 'ig-post-8',
    type: 'carousel',
    category: 'Community',
    title: 'Members Club · Dressing & Lounge Walkthrough',
    caption: 'From private digital lockers to continuous hot water showers. Every detail designed to respect your daily routine.',
    poster: 'assets/images/photo4.webp',
    permalink: 'https://www.instagram.com/nexusliftingclub/',
    stats: {
      views: null,
      likes: '820',
      comments: '29'
    },
    date: '3 weeks ago',
    location: 'Member Amenities · Sector 85'
  }
];

if (typeof window !== 'undefined') {
  window.NEXUS_INSTAGRAM_POSTS = NEXUS_INSTAGRAM_POSTS;
}
