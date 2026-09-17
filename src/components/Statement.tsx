'use client';

import React from 'react';

export const Statement: React.FC = () => {
  return (
    <section className="statement-section" id="statement" aria-label="Brand Statement">
      <div className="container">
        <div className="statement-layout">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>
              <span className="eyebrow-line"></span>
              <span>THE NEXUS PHILOSOPHY</span>
            </div>
            <h2 className="statement-headline">
              MORE THAN<br />A GYM.
            </h2>
          </div>

          <div className="statement-body">
            <p className="statement-paragraph">
              We do not believe in half-hearted effort or decorative gym gimmicks. Every square foot at Nexus is calibrated for pure athletic progression—from competition Olympic barbell platforms to sprung movement studios and open-air rooftop turf.
            </p>
            <p style={{ color: 'var(--nexus-grey-2)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Founded in Greater Faridabad to provide serious lifters, functional athletes, and wellness practitioners with an authentic, focused training ground.
            </p>

            <div className="statement-meta">
              <div>
                <div className="statement-stat-num">02</div>
                <div className="statement-stat-label">FLAGSHIP CLUBS</div>
              </div>
              <div>
                <div className="statement-stat-num">50KG+</div>
                <div className="statement-stat-label">CALIBRATED STEEL</div>
              </div>
              <div>
                <div className="statement-stat-num">100%</div>
                <div className="statement-stat-label">PURPOSEFUL EQUIPMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
