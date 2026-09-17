'use client';

import React from 'react';
import Link from 'next/link';
import { useBranch } from '../context/BranchContext';

export const RooftopCricketFeature: React.FC = () => {
  const { getWhatsAppUrl } = useBranch();

  return (
    <section className="section rooftop-cricket-section" id="cricket" aria-label="Rooftop Cricket Turf">
      <div className="container">
        <div className="rooftop-cricket-card">
          {/* Background Visual */}
          <div className="rooftop-cricket-card__bg">
            <img
              src="/assets/images/space_cricket.jpg"
              alt="Nexus Sector 86 Rooftop Cricket Turf"
              className="rooftop-cricket-card__img"
            />
            <div className="rooftop-cricket-card__overlay"></div>
          </div>

          <div className="rooftop-cricket-card__content">
            <div className="eyebrow eyebrow--yellow" style={{ marginBottom: '1.25rem' }}>
              <span className="eyebrow-line"></span>
              <span>SECTOR 86 CLUB // ROOFTOP TURF</span>
            </div>

            <h2 className="rooftop-cricket-card__title">
              ROOFTOP CRICKET.<br />
              TRAIN HARD. PLAY HARDER.
            </h2>

            <p className="rooftop-cricket-card__desc">
              An outdoor training and play experience right at Nexus. An enclosed synthetic turf arena on the rooftop of our Sector 86 club for box cricket, conditioning circuits, and evening games with friends.
            </p>

            <div className="rooftop-cricket-specs">
              <span className="rooftop-spec-item">
                <span className="dot"></span>
                <span>Enclosed Netting Structure</span>
              </span>
              <span className="rooftop-spec-item">
                <span className="dot"></span>
                <span>Evening Lighting</span>
              </span>
              <span className="rooftop-spec-item">
                <span className="dot"></span>
                <span>Synthetic Turf Surface</span>
              </span>
            </div>

            <div className="rooftop-cricket-actions">
              <a
                href={getWhatsAppUrl("Hi Nexus, I'd like to enquire about availability and access for the Sector 86 Rooftop Cricket Turf.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enquire About Rooftop Turf →
              </a>
              <Link href="/locations/sector-86" className="btn btn-secondary">
                Sector 86 Location Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
