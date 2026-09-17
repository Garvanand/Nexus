'use client';

import React from 'react';
import Link from 'next/link';
import { NEXUS_BRANCHES } from '../data/branches';

export const Footer: React.FC = () => {
  const branch85 = NEXUS_BRANCHES['sector-85'];
  const branch86 = NEXUS_BRANCHES['sector-86'];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div>
            <div className="footer-brand__name">NEXUS</div>
            <div className="eyebrow" style={{ marginBottom: '1.25rem', color: 'var(--nexus-yellow)' }}>
              THE LIFTING CLUB // GREATER FARIDABAD
            </div>
            <p className="footer-brand__desc">
              Two fitness clubs in Greater Faridabad focused on strength training, group fitness studios, and rooftop sports. Built for consistent training.
            </p>
          </div>

          {/* Branch 85 */}
          <div>
            <div className="footer-col__title">01 // SECTOR 85</div>
            <div className="footer-branch-item">
              <div className="footer-branch-name">Sector 85 Club</div>
              <div className="footer-branch-detail">
                {branch85.address}
              </div>
              <div className="footer-branch-detail" style={{ marginTop: '0.4rem', color: 'var(--nexus-off-white)' }}>
                Mon–Sat 6:00 AM – 10:00 PM · Sun 7:00 AM – 8:00 PM
              </div>
              <div style={{ marginTop: '0.6rem' }}>
                <a
                  href={`tel:${branch85.contact.phone}`}
                  style={{ color: 'var(--nexus-grey-1)', fontSize: '0.8125rem' }}
                >
                  {branch85.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Branch 86 */}
          <div>
            <div className="footer-col__title">02 // SECTOR 86</div>
            <div className="footer-branch-item">
              <div className="footer-branch-name">Sector 86 Club</div>
              <div className="footer-branch-detail">
                {branch86.address}
              </div>
              <div className="footer-branch-detail" style={{ marginTop: '0.4rem', color: 'var(--nexus-off-white)' }}>
                Mon–Sat 6:00 AM – 10:00 PM · Sun 7:00 AM – 8:00 PM
              </div>
              <div style={{ marginTop: '0.6rem' }}>
                <a
                  href={`tel:${branch86.contact.phone}`}
                  style={{ color: 'var(--nexus-grey-1)', fontSize: '0.8125rem' }}
                >
                  {branch86.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} NEXUS THE LIFTING CLUB. GREATER FARIDABAD, HARYANA.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/training">Training</Link>
            <Link href="/classes">Classes</Link>
            <Link href="/locations">Locations</Link>
            <a
              href="https://www.instagram.com/nexusliftingclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
