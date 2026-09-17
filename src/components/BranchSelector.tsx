'use client';

import React from 'react';
import Link from 'next/link';
import { useBranch } from '../context/BranchContext';
import { NEXUS_BRANCHES } from '../data/branches';

export const BranchSelector: React.FC = () => {
  const { setBranch, branchId } = useBranch();
  const branch85 = NEXUS_BRANCHES['sector-85'];
  const branch86 = NEXUS_BRANCHES['sector-86'];

  return (
    <section className="branches-section" id="branches" aria-label="Branch Locations">
      <div className="container">
        <div className="branches-header">
          <span className="branches-eyebrow">TWO FLAGSHIP CLUBS // GREATER FARIDABAD</span>
          <h2 className="branches-title">CHOOSE YOUR GROUND.</h2>
          <p className="branches-subtitle">
            Two distinct environments engineered for serious progress. Experience pure barbell strength at Sector 85, or combine heavy lifting, group studios, and rooftop cricket at Sector 86.
          </p>
        </div>

        {/* Editorial Split Screen Selector */}
        <div className="branches-split">
          {/* Sector 85 Panel */}
          <div
            className={`branch-panel ${branchId === 'sector-85' ? 'branch-panel--active' : ''}`}
            onMouseEnter={() => setBranch('sector-85')}
          >
            <div className="branch-panel__bg">
              <img src={branch85.heroImage} alt="Nexus Sector 85 Flagship" className="branch-panel__img" />
              <div className="branch-panel__overlay"></div>
            </div>

            <div className="branch-panel__content">
              <div className="branch-panel__badge">{branch85.badge}</div>
              <h3 className="branch-panel__name">
                SECTOR 85<br /><span>FLAGSHIP</span>
              </h3>
              <p className="branch-panel__locality">Greater Faridabad · Haryana 121002</p>

              <div className="branch-panel__facilities">
                {branch85.highlights.map((h, i) => (
                  <span key={i} className="branch-spec-tag">
                    <span className="dot"></span> {h}
                  </span>
                ))}
              </div>

              <div className="branch-panel__hours">
                <span className="hours-label">Operating Hours:</span> Mon–Sat 6AM–10PM · Sun 7AM–8PM
              </div>

              <div className="branch-panel__actions">
                <Link href="/locations/sector-85" className="btn btn-primary">
                  Explore Sector 85 →
                </Link>
                <a
                  href={`https://wa.me/919582333003?text=${encodeURIComponent(branch85.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  WhatsApp
                </a>
                <a
                  href={branch85.directions.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-tertiary"
                >
                  Directions ↗
                </a>
              </div>
            </div>
          </div>

          {/* Sector 86 Panel */}
          <div
            className={`branch-panel ${branchId === 'sector-86' ? 'branch-panel--active' : ''}`}
            onMouseEnter={() => setBranch('sector-86')}
          >
            <div className="branch-panel__bg">
              <img src={branch86.heroImage} alt="Nexus Sector 86 Performance Club" className="branch-panel__img" />
              <div className="branch-panel__overlay"></div>
            </div>

            <div className="branch-panel__content">
              <div className="branch-panel__badge">{branch86.badge}</div>
              <h3 className="branch-panel__name">
                SECTOR 86<br /><span>PERFORMANCE</span>
              </h3>
              <p className="branch-panel__locality">Greater Faridabad · Haryana 121002</p>

              <div className="branch-panel__facilities">
                {branch86.highlights.map((h, i) => (
                  <span key={i} className="branch-spec-tag">
                    <span className="dot"></span> {h}
                  </span>
                ))}
              </div>

              <div className="branch-panel__hours">
                <span className="hours-label">Operating Hours:</span> Mon–Sat 6AM–10PM · Sun 7AM–8PM
              </div>

              <div className="branch-panel__actions">
                <Link href="/locations/sector-86" className="btn btn-primary">
                  Explore Sector 86 →
                </Link>
                <a
                  href={`https://wa.me/919582333003?text=${encodeURIComponent(branch86.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  WhatsApp
                </a>
                <a
                  href={branch86.directions.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-tertiary"
                >
                  Directions ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
