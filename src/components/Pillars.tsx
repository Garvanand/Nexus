import React from 'react';
import Link from 'next/link';

export const Pillars: React.FC = () => {
  return (
    <section className="pillars" id="pillars" aria-label="Training Pillars">
      <div className="container">
        <div className="pillars__header">
          <span className="pillars__eyebrow">THE THREE PILLARS</span>
          <h2 className="pillars__title">HOW WE OPERATE.</h2>
          <p className="pillars__subtitle">
            Every square foot at Nexus is purposeful. No fluff machines or decorative gimmicks.
          </p>
        </div>

        <div className="pillars__grid">
          <div className="pillar-card">
            <span className="pillar-card__num">01</span>
            <h3 className="pillar-card__title">STRENGTH</h3>
            <p className="pillar-card__desc">
              Progressive overload on competition barbells, calibrated steel discs, and heavy dumbbells. Rooted in biomechanics.
            </p>
            <ul className="pillar-card__list">
              <li>Olympic Drop Platforms</li>
              <li>Heavy-Gauge Power Racks</li>
              <li>Calibrated Steel & Dumbbells to 50kg+</li>
            </ul>
          </div>

          <div className="pillar-card pillar-card--featured">
            <span className="pillar-card__num">02</span>
            <h3 className="pillar-card__title">CONDITIONING & STUDIOS</h3>
            <p className="pillar-card__desc">
              High-cadence cardiovascular threshold development through Zumba, Aerobics, and metabolic functional turf circuits.
            </p>
            <ul className="pillar-card__list">
              <li>Sprung Timber Hardwood Floor</li>
              <li>Acoustically Tuned Studios</li>
              <li>Athletic HIIT Interval Stations</li>
            </ul>
          </div>

          <div className="pillar-card">
            <span className="pillar-card__num">03</span>
            <h3 className="pillar-card__title">RECREATION & RECOVERY</h3>
            <p className="pillar-card__desc">
              Greater Faridabad’s only floodlit rooftop cricket arena, guided spinal mobility sanctuary, and executive private rain showers.
            </p>
            <ul className="pillar-card__list">
              <li>Open-Air Rooftop Cricket Turf</li>
              <li>Hatha & Mobility Yoga Sanctuary</li>
              <li>Immaculate Private Showers</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/training" className="btn btn-secondary">
            Explore Training Zones & Quiz →
          </Link>
        </div>
      </div>
    </section>
  );
};
