/**
 * ============================================================
 * NEXUS — THE LIFTING CLUB
 * Facilities & Amenities Data Layer (/js/facilities-data.js)
 * 
 * STRICT VERIFICATION POLICY:
 * Verified facilities only (Gym, Rooftop Cricket Turf, Zumba,
 * Yoga, Aerobics, Lockers, Washrooms).
 * Zero fabricated amenities.
 * 
 * Extensible: new verified facilities can be added directly here
 * without modifying UI templates or CSS.
 * ============================================================
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NEXUS_FACILITIES = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  const facilities = [
    {
      id: 'facility-gym',
      name: 'The Arena — Strength Floor',
      category: 'training',
      categoryLabel: 'TRAINING ARENA // STRENGTH & FREE WEIGHTS',
      headline: 'HEAVY IRON & COMPETITION RIGS.',
      description: 'Olympic power cages, calibrated steel plates, heavy competition benches, dumbbell racks scaling to 50kg+, and rubber drop platforms engineered for progressive overload without commercial clutter.',
      branch: 'Sector 85 & Sector 86',
      badge: 'Flagship Lifting Floors',
      layoutStyle: 'large-image', // spans 8 columns on desktop
      photo: 'assets/images/photo10.webp',
      specs: [
        'Olympic Deadlift Drop Bay',
        'Plate-Loaded Leg Press',
        'Competition Barbells & Discs',
        'Scandinavian Design Pin-Loaded Rigs'
      ],
      verifiedNotice: 'Verified on-site at Sector 85 Flagship Arena'
    },
    {
      id: 'facility-cricket-turf',
      name: 'Rooftop Cricket Turf',
      category: 'outdoor',
      categoryLabel: 'OUTDOOR & TURF // NIGHT PLAY',
      headline: 'TRAIN HARD. SWITCH OFF. PLAY.',
      description: 'An open-air synthetic turf pitch under high-lux floodlights perched on the rooftop of Sector 86. Built for box cricket, net sessions, and post-workout athletic play under the open sky.',
      branch: 'Sector 86 Exclusive',
      badge: 'Open-Air Rooftop Turf',
      layoutStyle: 'featured-banner', // spans 12 columns (full width featured differentiator)
      photo: 'assets/images/space_cricket.jpg',
      specs: [
        'High-Traction Synthetic Turf',
        'Night LED Floodlighting',
        'Enclosed Safety Netting',
        'Panoramic Skyline Views'
      ],
      verifiedNotice: 'Sector 86 exclusive flagship lifestyle amenity'
    },
    {
      id: 'facility-zumba',
      name: 'Kinetic Movement & Studio',
      category: 'studios',
      categoryLabel: 'STUDIOS // DANCE & CALISTHENICS',
      headline: 'ACOUSTIC DANCE & MOVEMENT.',
      description: 'A dedicated studio with wall-to-wall mirrors, shock-absorbing wooden sprung flooring, track lighting, and an acoustically tuned sound system for Zumba, Yoga, Aerobics, and functional movement.',
      branch: 'Sector 85 & Sector 86',
      badge: 'Sprung Timber Mirrored Studio',
      layoutStyle: 'medium-image', // spans 4 columns
      photo: 'assets/images/photo2.webp',
      specs: [
        'Wooden Sprung Floor',
        'Full-Length Wall Mirrors',
        'Track Illumination System',
        'Climate Controlled'
      ],
      verifiedNotice: 'Active member sessions at Nexus'
    },
    {
      id: 'facility-yoga',
      name: 'Mobility & Flow Sanctuary',
      category: 'studios',
      categoryLabel: 'STUDIOS // MOBILITY & FLOW',
      headline: 'DECOMPRESS & RESTORE.',
      description: 'An acoustically isolated sanctuary featuring low-lux warm illumination, natural cork mats, and guided mobility sequences to decompress axial spine loading and restore joint longevity after heavy lifting.',
      branch: 'Sector 86 Sanctuary',
      badge: 'Quiet Acoustic Sanctuary',
      layoutStyle: 'medium-image', // spans 4 columns
      photo: 'assets/images/training_yoga.jpg',
      specs: [
        'Acoustic Sound Isolation',
        'Natural Cork Mats & Props',
        'Low-Lux Ambient Lighting',
        'Spinal Reset Protocols'
      ],
      verifiedNotice: 'Morning and evening flow batches'
    },
    {
      id: 'facility-aerobics',
      name: 'High-Output Cardio & Machine Grid',
      category: 'training',
      categoryLabel: 'CARDIO & RESISTANCE // METABOLIC BURN',
      headline: 'CARDIO & SELECTORIZED CIRCUIT.',
      description: 'Commercial treadmill banks, spin bikes, and precision selectorized resistance machines lined along signature backlit arched mirrors for high-efficiency conditioning.',
      branch: 'Sector 85 & Sector 86',
      badge: 'Commercial Cardio Hall',
      layoutStyle: 'medium-image', // spans 4 columns
      photo: 'assets/images/photo9.webp',
      specs: [
        'Scandinavian Design Selectorized Rigs',
        'Commercial Treadmill Banks',
        'Spin Bike Cadence Stations',
        'Arched Backlit Mirrors'
      ],
      verifiedNotice: 'Available full-hours across branches'
    },
    {
      id: 'facility-lockers',
      name: 'Custom Timber Member Lockers',
      category: 'amenities',
      categoryLabel: 'AMENITIES // DRESSING & STORAGE',
      headline: 'CUSTOM TIMBER LOCKER ROOM.',
      description: 'Private, secure wooden member lockers with integrated shoe cubbies and cushioned bench seating over pristine marble flooring.',
      branch: 'Sector 85 & Sector 86',
      badge: 'Custom Timber Lockers',
      layoutStyle: 'medium-image',
      photo: 'assets/images/photo7.webp',
      specs: [
        'Custom Wooden Cabinetry',
        'Built-in Cushioned Seating',
        'Dedicated Footwear Bays',
        'Pristine Marble Flooring'
      ],
      verifiedNotice: 'Complimentary secure lockers for all active members'
    },
    {
      id: 'facility-washrooms',
      name: 'Luxury Halo Vanity & Showers',
      category: 'amenities',
      categoryLabel: 'AMENITIES // HYGIENE & GROOMING',
      headline: 'GOLDEN BASINS & HALO LIGHTING.',
      description: 'Circular glowing halo mirrors, metallic gold vessel basins, and individual private hot shower cubicles kept under continuous inspection standards.',
      branch: 'Sector 85 & Sector 86',
      badge: 'Luxury Halo Grooming',
      layoutStyle: 'medium-image',
      photo: 'assets/images/photo4.webp',
      specs: [
        'Dual Circular Halo Backlit Mirrors',
        'Metallic Gold Vessel Sinks',
        'Private Hot Shower Stalls',
        'Hourly Sanitization Protocol'
      ],
      verifiedNotice: 'Maintained to hospital-grade cleanliness standards'
    }
  ];

  return facilities;
});
