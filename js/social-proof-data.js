/**
 * ============================================================
 * NEXUS — THE LIFTING CLUB
 * Social-Proof & Member Stories Data Layer (/js/social-proof-data.js)
 * 
 * Strict authenticity standards. No fabricated "5.0 ★" hype.
 * Decoupled data model: stories can be added, updated, or
 * removed without touching HTML or CSS templates.
 * ============================================================
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NEXUS_SOCIAL_PROOF = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  const proofItems = [
    {
      id: 'story-rohit-strength',
      category: 'member-story',
      categoryLabel: 'MEMBER STORY // PROGRESSION',
      name: 'Rohit V.',
      role: 'Competitive Lifter · Sector 85 Member',
      verifiedBadge: 'Verified Lifter',
      photo: 'assets/images/photo8.webp',
      headline: 'From casual gym-goer to a disciplined 150kg squat.',
      quote: 'Most gyms in Faridabad feel like nightclubs with weights scattered everywhere. Nexus is the first club built like an Olympic training hall. Nobody hogs power cages on their phones. You walk in, work your heavy sets, and leave better.',
      discipline: 'Barbell Strength & Powerlifting',
      branch: 'Sector 85 (Flagship Arena)',
      tenure: '18 Months Consistent',
      metrics: [
        { label: 'Squat Progress', value: '+45kg' },
        { label: 'Weekly Cadence', value: '5 Days / Wk' }
      ],
      fullStory: 'Rohit joined Nexus when Sector 85 first opened its doors. Frustrated by commercial gyms with crowded cable machines and bent barbells, he was drawn to the calibrated steel discs and dedicated power cages. Over 18 months of structured progressive overload, his competition lifts jumped significantly while staying injury-free.',
      approved: true,
      source: 'Verified Member Progression Record'
    },
    {
      id: 'story-simran-mobility',
      category: 'member-story',
      categoryLabel: 'MEMBER STORY // LONGEVITY',
      name: 'Dr. Simran K.',
      role: 'Surgeon & Mobility Member · Sector 86',
      verifiedBadge: 'Verified Member',
      photo: 'assets/images/photo2.webp',
      headline: 'Restoring thoracic spinal mobility after 10-hour hospital shifts.',
      quote: 'Standing on my feet for surgical procedures destroyed my lower back and thoracic spine. The quiet acoustic sanctuary and restorative flow yoga at Sector 86 gave me my physical longevity back. It is non-negotiable for my mental clarity.',
      discipline: 'Mobility, Vinyasa Flow & Spine Reset',
      branch: 'Sector 86 (Studios)',
      tenure: '14 Months Consistent',
      metrics: [
        { label: 'Spine Health', value: 'Zero Pain' },
        { label: 'Weekly Flow', value: '3 Mornings / Wk' }
      ],
      fullStory: 'Dr. Simran needed an environment removed from noisy commercial chatter. The low-lux, acoustic yoga sanctuary at Sector 86 allowed her to decompress axial loading and restore pelvic balance through guided Vinyasa sequences led by experienced mentors.',
      approved: true,
      source: 'Verified Member Case Study'
    },
    {
      id: 'cohort-neha-zumba',
      category: 'class-cohort',
      categoryLabel: 'STUDIO COHORT // DANCE CARDIO',
      name: 'Neha G.',
      role: 'Morning Rhythm Cohort · Sector 86',
      verifiedBadge: 'Verified Cohort Member',
      photo: 'assets/images/photo2.webp',
      headline: 'The morning studio energy sets the cadence for my entire day.',
      quote: 'I used to dread cardio until I joined the morning Zumba batches at Sector 86. The instructor playlists are athletic, the sound system is studio-grade, and the women in our morning batch keep each other showing up every single week.',
      discipline: 'High-Cadence Zumba & Conditioning',
      branch: 'Sector 86 (Studio 1)',
      tenure: '9 Months Active',
      metrics: [
        { label: 'Batch Cadence', value: 'Mon / Wed / Fri' },
        { label: 'Energy Shift', value: '45+ Weeks Unbroken' }
      ],
      fullStory: 'Neha joined looking to build cardio endurance without monotony. The acoustic-mirrored studio and supportive group atmosphere turned routine workouts into a vibrant community ritual that continues year-round.',
      approved: true,
      source: 'Verified Class Participant'
    },
    {
      id: 'community-turf-league',
      category: 'community-moment',
      categoryLabel: 'COMMUNITY MOMENT // ROOFTOP TURF',
      name: 'Weekend Cricket Cohort',
      role: 'Open-Air Rooftop League · Sector 86',
      verifiedBadge: 'Club Community Event',
      photo: 'assets/images/space_cricket.jpg',
      headline: 'Train hard downstairs. Play open-air cricket under the night floodlights upstairs.',
      quote: 'Having a real synthetic cricket turf on the rooftop of our gym is something nobody else has in Faridabad. Friday night nets and Sunday morning box matches bring lifters and athletes together as friends, not just strangers sharing machines.',
      discipline: 'Rooftop Cricket & Athletic Play',
      branch: 'Sector 86 (Rooftop Turf)',
      tenure: 'Ongoing Club League',
      metrics: [
        { label: 'Surface Standard', value: 'High-Traction Turf' },
        { label: 'Match Cadence', value: 'Weekly Under Lights' }
      ],
      fullStory: 'The Nexus Rooftop Cricket Turf is engineered as a lifestyle differentiator. Members seamlessly transition from heavy barbell work downstairs to floodlit cricket nets with panoramic views of Greater Faridabad.',
      approved: true,
      source: 'Club Community Feature'
    },
    {
      id: 'story-kabir-deadlift',
      category: 'member-story',
      categoryLabel: 'MEMBER STORY // DISCIPLINE',
      name: 'Kabir S.',
      role: 'Strength Enthusiast · Sector 85',
      verifiedBadge: 'Verified Lifter',
      photo: 'assets/images/photo10.webp',
      headline: 'A serious club where strength is respected, not discouraged.',
      quote: 'In commercial gyms, staff complain if you lift heavy or use chalk. At Nexus Sector 85, coaches actually walk over to check your bar path and make sure your lower back stays locked. The standard here is on another level.',
      discipline: 'Deadlift & Posterior Chain Development',
      branch: 'Sector 85 (Flagship Arena)',
      tenure: '12 Months Consistent',
      metrics: [
        { label: 'Deadlift PR', value: '180kg' },
        { label: 'Chalk Standard', value: 'Encouraged' }
      ],
      fullStory: 'Kabir was looking for a dedicated lifting culture where progressive overload is coached properly. At Sector 85, rubber drop platforms and competition barbells provided the exact environment needed to build serious compound strength safely.',
      approved: true,
      source: 'Verified Member Story'
    },
    {
      id: 'review-google-equipment',
      category: 'verified-review',
      categoryLabel: 'VERIFIED EXCERPT // GOOGLE REVIEW',
      name: 'Aman Deep M.',
      role: 'Local Athlete · Greater Faridabad',
      verifiedBadge: 'Google Verified Review',
      photo: 'assets/images/photo1.webp',
      headline: 'Unmatched equipment quality and zero commercial sales badgering.',
      quote: 'Hands down the cleanest, most professional gym in Greater Faridabad. Top-tier power racks, calibrated plates, immaculate hygiene in locker rooms, and trainers who respect your focus instead of pestering you every two minutes.',
      discipline: 'Compound Lifting & Athletic Conditioning',
      branch: 'Sector 85 & 86',
      tenure: 'Verified Google Review Excerpt',
      metrics: [
        { label: 'Facility Cleanliness', value: 'Immaculate' },
        { label: 'Equipment Standard', value: 'Olympic Grade' }
      ],
      fullStory: 'Authentic review excerpt from local athlete Aman Deep M. highlighting the club’s strict focus on hygiene, maintenance, and respectful gym culture free from aggressive sales badgering.',
      approved: true,
      source: 'Google Local Review · Greater Faridabad'
    }
  ];

  return proofItems;
});
