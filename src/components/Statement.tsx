import React from 'react';

export const Statement: React.FC = () => {
  return (
    <section className="statement" id="statement" aria-label="Club Manifesto">
      <div className="container">
        <div className="statement__inner">
          <span className="statement__eyebrow">THE NEXUS MANIFESTO</span>
          <h2 className="statement__text">
            WE DO NOT BELIEVE IN HALF-HEARTED EFFORT. WE DO NOT BELIEVE IN DISTRACTIONS. WE BUILD STRENGTH THAT CARRIES OUTSIDE THE GYM WALLS.
          </h2>
        </div>
      </div>

      <div className="manifesto__ticker" aria-hidden="true" style={{ overflow: 'hidden', padding: '18px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: '#070707' }}>
        <div className="manifesto__marquee" style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 30s linear infinite', gap: '32px' }}>
          <span>HEAVY IRON</span>
          <span>·</span>
          <span>OLYMPIC PLATFORMS</span>
          <span>·</span>
          <span>ROOFTOP CRICKET TURF</span>
          <span>·</span>
          <span>KINETIC ZUMBA</span>
          <span>·</span>
          <span>MINDFUL YOGA</span>
          <span>·</span>
          <span>ATHLETIC AEROBICS</span>
          <span>·</span>
          <span>PRIVATE LOCKERS</span>
          <span>·</span>
          <span>GREATER FARIDABAD</span>
          <span>·</span>
          <span>HEAVY IRON</span>
          <span>·</span>
          <span>OLYMPIC PLATFORMS</span>
          <span>·</span>
          <span>ROOFTOP CRICKET TURF</span>
        </div>
      </div>
    </section>
  );
};
