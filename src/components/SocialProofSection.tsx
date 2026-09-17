'use client';

import React from 'react';
import Link from 'next/link';

export const SocialProofSection: React.FC = () => {
  const communityPillars = [
    {
      tag: '01 // CULTURE',
      title: 'CONSISTENT TRAINING',
      desc: 'Lifters, athletes, and daily gym-goers training side by side. A focused environment where members respect the equipment and push their personal progress.',
      image: '/assets/images/photo1.webp',
    },
    {
      tag: '02 // ENERGY',
      title: 'GROUP SESSIONS',
      desc: 'High-cadence Zumba, athletic aerobics, and mindful yoga batches led by dedicated instructors in our Sector 86 group fitness studios.',
      image: '/assets/images/photo2.webp',
    },
    {
      tag: '03 // RECREATION',
      title: 'ROOFTOP SPORTS',
      desc: 'Competitive box cricket games and conditioning under the night lights at our Sector 86 sky turf, bringing members together beyond standard gym sessions.',
      image: '/assets/images/space_cricket.jpg',
    },
  ];

  return (
    <section className="section proof-section" id="community" aria-label="Nexus Community">
      <div className="container">
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 4.5rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="eyebrow" style={{ color: 'var(--nexus-yellow)' }}>
            <span className="eyebrow-line"></span>
            <span>BUILT BY PEOPLE WHO SHOW UP</span>
          </div>
          <h2 className="heading-section">
            THE NEXUS COMMUNITY.
          </h2>
          <p className="text-lead">
            Nexus is more than machines—it’s an active community of members across Sector 85 and Sector 86 committed to showing up and putting in the work.
          </p>
        </div>

        {/* Authentic Community Visual Pillars */}
        <div className="proof-grid">
          {communityPillars.map((item) => (
            <div key={item.title} className="proof-item">
              <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden', borderRadius: '2px', marginBottom: '1.5rem', border: '1px solid var(--nexus-border)' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) contrast(1.1)' }}
                />
              </div>

              <div className="eyebrow" style={{ fontSize: '0.6875rem', marginBottom: '0.5rem', color: 'var(--nexus-yellow)' }}>
                {item.tag}
              </div>

              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--nexus-off-white)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--nexus-grey-1)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
          <Link href="/join" className="btn btn-secondary">
            Join the Community →
          </Link>
        </div>
      </div>
    </section>
  );
};
