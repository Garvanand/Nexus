'use client';

import React from 'react';

export const Statement: React.FC = () => {
  return (
    <section className="section statement-section" id="statement" aria-label="Brand Statement">
      <div className="container">
        <div className="statement-asymmetric">
          {/* Left Column: Typography & Honest Club Metrics */}
          <div className="statement-asymmetric__left">
            <div className="eyebrow" style={{ marginBottom: '1.5rem', color: 'var(--nexus-yellow)' }}>
              <span className="eyebrow-line"></span>
              <span>THE NEXUS PHILOSOPHY</span>
            </div>

            <h2 className="statement-asymmetric__title">
              MORE THAN<br />A GYM.
            </h2>

            <p className="statement-asymmetric__desc">
              We focus on what actually drives progress: solid equipment, dedicated lifting areas, high-energy group studios, and an active training community. Nexus was built across Greater Faridabad to give you an authentic club experience without distractions.
            </p>

            <p style={{ color: 'var(--nexus-grey-2)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Whether your focus is heavy barbell training, high-cadence Zumba, restorative yoga, or weekend cricket on the rooftop turf, Nexus is built around the work.
            </p>

            {/* Factual Club Metrics */}
            <div className="statement-metrics">
              <div className="statement-metric">
                <div className="statement-metric__num">02</div>
                <div className="statement-metric__label">LOCATIONS</div>
                <div className="statement-metric__sub">Sector 85 & 86</div>
              </div>
              <div className="statement-metric">
                <div className="statement-metric__num" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)' }}>STRENGTH</div>
                <div className="statement-metric__label">FREE WEIGHTS & BAYS</div>
                <div className="statement-metric__sub">Cages & Dumbbells</div>
              </div>
              <div className="statement-metric">
                <div className="statement-metric__num" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)' }}>STUDIOS</div>
                <div className="statement-metric__label">& ROOFTOP TURF</div>
                <div className="statement-metric__sub">Classes & Outdoor Play</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Atmosphere Photo */}
          <div className="statement-asymmetric__right">
            <div className="statement-frame">
              <img
                src="/assets/images/space_ambience.jpg"
                alt="Nexus Club Environment in Greater Faridabad"
                className="statement-frame__img"
              />
              <div className="statement-frame__overlay"></div>
              <div className="statement-frame__caption">
                <span className="dot"></span>
                <span>CLUB ATMOSPHERE // GREATER FARIDABAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
