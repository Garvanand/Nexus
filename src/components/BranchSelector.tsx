'use client';

import React from 'react';
import Link from 'next/link';
import { NEXUS_BRANCHES } from '../data/branches';
import { useBranch } from '../context/BranchContext';

export const BranchSelector: React.FC = () => {
  const { branchId, setBranch, getWhatsAppUrl } = useBranch();
  const branch85 = NEXUS_BRANCHES['sector-85'];
  const branch86 = NEXUS_BRANCHES['sector-86'];

  return (
    <section className="section destinations-section" id="locations" aria-label="Nexus Locations">
      <div className="container">
        <div className="destinations-header">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span className="eyebrow-line"></span>
            <span>TWO LOCATIONS // GREATER FARIDABAD</span>
          </div>
          <h2 className="heading-section">
            CHOOSE YOUR GROUND.
          </h2>
          <p className="text-lead" style={{ marginTop: '1rem' }}>
            Two distinct training spaces in Greater Faridabad. Focused barbell strength and free weights at Sector 85, or group fitness studios and rooftop cricket at Sector 86.
          </p>
        </div>

        <div className="destinations-grid">
          {/* Sector 85 Club */}
          <div
            className={`destination-panel ${branchId === 'sector-85' ? 'destination-panel--active' : ''}`}
            onClick={() => setBranch('sector-85')}
          >
            <div className="destination-panel__bg">
              <img
                src={branch85.heroImage}
                alt="Nexus Sector 85 Strength Gym"
                className="destination-panel__img"
              />
              <div className="destination-panel__overlay"></div>
            </div>

            <div className="destination-panel__content">
              <div className="destination-panel__badge">
                <span className="dot"></span>
                <span>SECTOR 85 // STRENGTH GYM</span>
              </div>

              <h3 className="destination-panel__title">SECTOR 85</h3>
              <p className="destination-panel__location">
                Sector 85, Greater Faridabad · Mon–Sat 6AM–10PM, Sun 7AM–8PM
              </p>

              <div className="destination-panel__features">
                <span className="destination-feature">
                  <span className="dot"></span>
                  <span>Power Racks & Squat Bays</span>
                </span>
                <span className="destination-feature">
                  <span className="dot"></span>
                  <span>Free Weights & Dumbbells</span>
                </span>
                <span className="destination-feature">
                  <span className="dot"></span>
                  <span>Selectorized & Cardio Machines</span>
                </span>
              </div>

              <div className="destination-panel__actions">
                <Link
                  href="/locations/sector-85"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBranch('sector-85');
                  }}
                >
                  View Sector 85 Details →
                </Link>
                <a
                  href={getWhatsAppUrl("Hi Nexus, I'd like to enquire about membership for the Sector 85 club.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  WhatsApp Club
                </a>
              </div>
            </div>
          </div>

          {/* Sector 86 Club */}
          <div
            className={`destination-panel ${branchId === 'sector-86' ? 'destination-panel--active' : ''}`}
            onClick={() => setBranch('sector-86')}
          >
            <div className="destination-panel__bg">
              <img
                src={branch86.heroImage}
                alt="Nexus Sector 86 Studios and Turf"
                className="destination-panel__img"
              />
              <div className="destination-panel__overlay"></div>
            </div>

            <div className="destination-panel__content">
              <div className="destination-panel__badge">
                <span className="dot"></span>
                <span>SECTOR 86 // STUDIOS & TURF</span>
              </div>

              <h3 className="destination-panel__title">SECTOR 86</h3>
              <p className="destination-panel__location">
                Sector 86, Greater Faridabad · Mon–Sat 6AM–10PM, Sun 7AM–8PM
              </p>

              <div className="destination-panel__features">
                <span className="destination-feature">
                  <span className="dot"></span>
                  <span>Enclosed Rooftop Cricket Turf</span>
                </span>
                <span className="destination-feature">
                  <span className="dot"></span>
                  <span>Group Fitness Studio (Zumba / Yoga)</span>
                </span>
                <span className="destination-feature">
                  <span className="dot"></span>
                  <span>Strength & Cardio Training Floor</span>
                </span>
              </div>

              <div className="destination-panel__actions">
                <Link
                  href="/locations/sector-86"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBranch('sector-86');
                  }}
                >
                  View Sector 86 Details →
                </Link>
                <a
                  href={getWhatsAppUrl("Hi Nexus, I'd like to enquire about membership for the Sector 86 club.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  WhatsApp Club
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
