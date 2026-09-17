'use client';

import React from 'react';
import Link from 'next/link';

export const FacilitiesSection: React.FC = () => {
  return (
    <section className="section facilities-section" id="experience" aria-label="Facilities & Experience">
      <div className="container">
        <div className="facilities-header">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span className="eyebrow-line"></span>
            <span>EXPERIENCE & ARCHITECTURE</span>
          </div>
          <h2 className="heading-section">
            EVERYTHING YOU NEED.<br />ONE CLUB.
          </h2>
          <p className="text-lead" style={{ marginTop: '1rem' }}>
            A curated ecosystem of physical disciplines under one membership. Built with uncompromising materials and spatial clarity.
          </p>
        </div>

        {/* Editorial Collage (No generic icon boxes) */}
        <div className="facilities-collage">
          {/* Dominant Feature: Barbell & Machine Floor */}
          <div className="facility-block facility-block--featured">
            <img
              src="/assets/images/photo4.webp"
              alt="Nexus Barbell & Heavy Strength Floor"
              className="facility-block__img"
            />
            <div className="facility-block__overlay"></div>
            <div className="facility-block__content">
              <div className="eyebrow eyebrow--yellow" style={{ marginBottom: '0.5rem' }}>
                SECTOR 85 & 86
              </div>
              <h3 className="facility-block__title">STRENGTH FLOOR & POWER BAYS</h3>
              <p className="facility-block__desc">
                Heavy competition barbells, calibrated steel drop platforms, Scandinavian selectorized pin-loaded stations, and free weights up to 50kg+.
              </p>
            </div>
          </div>

          {/* Feature: Floodlit Rooftop Cricket Turf */}
          <div className="facility-block">
            <img
              src="/assets/images/space_cricket.jpg"
              alt="Open Air Rooftop Cricket Arena Sector 86"
              className="facility-block__img"
            />
            <div className="facility-block__overlay"></div>
            <div className="facility-block__content">
              <div className="eyebrow eyebrow--yellow" style={{ marginBottom: '0.5rem' }}>
                SECTOR 86 EXCLUSIVE
              </div>
              <h3 className="facility-block__title">ROOFTOP CRICKET ARENA</h3>
              <p className="facility-block__desc">
                Greater Faridabad’s only open-air floodlit rooftop cricket arena for match play and explosive conditioning.
              </p>
            </div>
          </div>

          {/* Feature: Group Kinetic Studios */}
          <div className="facility-block">
            <img
              src="/assets/images/space_studio.jpg"
              alt="Acoustic Sprung Movement Studio"
              className="facility-block__img"
            />
            <div className="facility-block__overlay"></div>
            <div className="facility-block__content">
              <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>
                STUDIO DISCIPLINE
              </div>
              <h3 className="facility-block__title">GROUP MOVEMENT SANCTUARY</h3>
              <p className="facility-block__desc">
                Sprung timber hardwood flooring with concert-grade acoustics for high-energy Zumba, Aerobics, and restorative Yoga.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid var(--nexus-border)', paddingTop: '2rem' }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--nexus-grey-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Executive Rain Showers · Biometric Access · Secure Timber Lockers
          </span>
          <Link href="/classes" className="btn-link">
            Explore All Classes & Schedules →
          </Link>
        </div>
      </div>
    </section>
  );
};
