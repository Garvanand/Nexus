'use client';

import React from 'react';
import Link from 'next/link';
import { useBranch } from '../context/BranchContext';

export const Hero: React.FC = () => {
  const { branch, branchId, setBranch, getWhatsAppUrl } = useBranch();

  return (
    <section className="hero-editorial" id="hero" aria-label="Nexus Hero">
      {/* Full Bleed Dominant Photography */}
      <div className="hero-editorial__bg">
        <img
          src={branch.heroImage || '/assets/images/photo8.webp'}
          alt={`Nexus The Lifting Club — ${branch.name}`}
          className="hero-editorial__img"
        />
        <div className="hero-editorial__overlay"></div>
      </div>

      <div className="container hero-editorial__content">
        {/* Editorial Eyebrow */}
        <div className="eyebrow" style={{ marginBottom: '1.5rem', color: 'var(--nexus-yellow)' }}>
          <span className="eyebrow-line"></span>
          <span>NEXUS // THE LIFTING CLUB</span>
        </div>

        {/* Large Iconic Heading */}
        <h1 className="hero-editorial__title">
          TRAIN<br />
          WITH<br />
          PURPOSE.
        </h1>

        {/* Very Short Editorial Subtext */}
        <p className="hero-editorial__lead">
          Strength · Movement · Community across Greater Faridabad. Two dedicated training facilities for barbell lifting, group fitness, and rooftop cricket.
        </p>

        {/* Disciplined Actions */}
        <div className="hero-editorial__actions">
          <Link href="/join" className="btn btn-primary">
            Start Your Journey
          </Link>
          <a
            href={getWhatsAppUrl(`Hi Nexus, I'd like to visit the ${branch.shortName} club.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            WhatsApp {branch.shortName}
          </a>
        </div>

        {/* Subtle Bottom Metadata & Integrated Branch Switcher */}
        <div className="hero-editorial__meta">
          <div className="hero-editorial__branches">
            <span>LOCATION:</span>
            <button
              type="button"
              onClick={() => setBranch('sector-85')}
              className={`hero-editorial__branch-btn ${
                branchId === 'sector-85' ? 'hero-editorial__branch-btn--active' : ''
              }`}
            >
              <span className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: branchId === 'sector-85' ? 'var(--nexus-yellow)' : 'var(--nexus-grey-3)' }}></span>
              <span>SECTOR 85</span>
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setBranch('sector-86')}
              className={`hero-editorial__branch-btn ${
                branchId === 'sector-86' ? 'hero-editorial__branch-btn--active' : ''
              }`}
            >
              <span className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: branchId === 'sector-86' ? 'var(--nexus-yellow)' : 'var(--nexus-grey-3)' }}></span>
              <span>SECTOR 86</span>
            </button>
          </div>

          <a href="#statement" className="hero-editorial__scroll" style={{ color: 'inherit' }}>
            <span>SCROLL</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
