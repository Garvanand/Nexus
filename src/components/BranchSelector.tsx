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
            <span>TWO FLAGSHIP DESTINATIONS // GREATER FARIDABAD</span>
          </div>
          <h2 className="heading-section">
            CHOOSE YOUR GROUND.
          </h2>
          <p className="text-lead" style={{ marginTop: '1rem' }}>
            Two distinct training environments engineered for serious progress. Experience pure barbell strength at Sector 85, or combine heavy lifting, group studios, and rooftop cricket at Sector 86.
          </p>
        </div>

        <div className="destinations-grid">
          {/* Sector 85 Flagship */}
          <div
            className="destination-panel"
            style={{
              borderColor: branchId === 'sector-85' ? 'var(--nexus-yellow)' : undefined,
            }}
          >
            <div className="destination-panel__bg">
              <img
                src={branch85.heroImage}
                alt="Nexus Sector 85 Flagship Arena"
                className="destination-panel__img"
              />
              <div className="destination-panel__overlay"></div>
            </div>

            <div className="destination-panel__content">
              <div className="destination-panel__badge">
                <span className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--nexus-yellow)' }}></span>
                <span>FLAGSHIP LIFTING ARENA</span>
              </div>

              <h3 className="destination-panel__title">SECTOR 85</h3>
              <p className="destination-panel__location">
                Sector 85, Greater Faridabad · Mon–Sat 6AM–10PM, Sun 7AM–8PM
              </p>

              <div className="destination-panel__features">
                {branch85.highlights.slice(0, 3).map((item) => (
                  <span key={item} className="destination-feature">
                    <span className="dot"></span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              <div className="destination-panel__actions">
                <Link
                  href="/locations/sector-85"
                  className="btn btn-primary"
                  onClick={() => setBranch('sector-85')}
                >
                  Explore Sector 85 →
                </Link>
                <a
                  href={getWhatsAppUrl("Hi Nexus, I'd like to enquire about membership at the Sector 85 Flagship club.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  WhatsApp Club
                </a>
              </div>
            </div>
          </div>

          {/* Sector 86 Performance */}
          <div
            className="destination-panel"
            style={{
              borderColor: branchId === 'sector-86' ? 'var(--nexus-yellow)' : undefined,
            }}
          >
            <div className="destination-panel__bg">
              <img
                src={branch86.heroImage}
                alt="Nexus Sector 86 Performance Club"
                className="destination-panel__img"
              />
              <div className="destination-panel__overlay"></div>
            </div>

            <div className="destination-panel__content">
              <div className="destination-panel__badge">
                <span className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--nexus-yellow)' }}></span>
                <span>PERFORMANCE & ROOFTOP TURF</span>
              </div>

              <h3 className="destination-panel__title">SECTOR 86</h3>
              <p className="destination-panel__location">
                Sector 86, Greater Faridabad · Mon–Sat 6AM–10PM, Sun 7AM–8PM
              </p>

              <div className="destination-panel__features">
                {branch86.highlights.slice(0, 3).map((item) => (
                  <span key={item} className="destination-feature">
                    <span className="dot"></span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              <div className="destination-panel__actions">
                <Link
                  href="/locations/sector-86"
                  className="btn btn-primary"
                  onClick={() => setBranch('sector-86')}
                >
                  Explore Sector 86 →
                </Link>
                <a
                  href={getWhatsAppUrl("Hi Nexus, I'd like to enquire about membership at the Sector 86 Performance club.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
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
