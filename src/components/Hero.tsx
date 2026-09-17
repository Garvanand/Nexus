'use client';

import React from 'react';
import Link from 'next/link';
import { useBranch } from '../context/BranchContext';

export const Hero: React.FC = () => {
  const { branch, branchId, setBranch, getWhatsAppUrl } = useBranch();

  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="hero__bg">
        <img
          src={branch.heroImage}
          alt={`Nexus The Lifting Club — ${branch.name}`}
          className="hero__img"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__content">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line"></span>
          <span className="hero__eyebrow-text">GREATER FARIDABAD · TWO LOCATIONS</span>
        </div>

        <h1 className="hero__title">
          BUILT FOR<br />
          <span className="hero__title--accent">PEOPLE WHO</span><br />
          SHOW UP.
        </h1>

        <p className="hero__lead">
          An unapologetic lifting club. Calibrated iron, Olympic drop platforms, shock-absorbent group studios, and Greater Faridabad’s only floodlit rooftop cricket arena.
        </p>

        {/* Hero Interactive Branch Selector */}
        <div className="hero__branches" style={{ marginTop: '24px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--ff-display)', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Select Branch:</span>
            <button
              type="button"
              onClick={() => setBranch('sector-85')}
              className={`hero__branch-pill ${branchId === 'sector-85' ? 'hero__branch-pill--active' : ''}`}
              style={{
                background: branchId === 'sector-85' ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                color: branchId === 'sector-85' ? '#0b0b0b' : 'var(--text-primary)',
                border: '1px solid ' + (branchId === 'sector-85' ? 'var(--accent)' : 'var(--border-subtle)'),
                padding: '8px 18px',
                borderRadius: '999px',
                fontFamily: 'var(--ff-display)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              SECTOR 85 · FLAGSHIP
            </button>
            <button
              type="button"
              onClick={() => setBranch('sector-86')}
              className={`hero__branch-pill ${branchId === 'sector-86' ? 'hero__branch-pill--active' : ''}`}
              style={{
                background: branchId === 'sector-86' ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                color: branchId === 'sector-86' ? '#0b0b0b' : 'var(--text-primary)',
                border: '1px solid ' + (branchId === 'sector-86' ? 'var(--accent)' : 'var(--border-subtle)'),
                padding: '8px 18px',
                borderRadius: '999px',
                fontFamily: 'var(--ff-display)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              SECTOR 86 · ROOFTOP TURF
            </button>
          </div>

          <div
            className="hero__branch-summary"
            style={{
              marginTop: '16px',
              padding: '16px 20px',
              background: 'rgba(18, 18, 18, 0.75)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px',
              maxWidth: '680px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div>
              <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {branch.badge}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '2px' }}>
                {branch.address}
              </div>
            </div>
            <Link
              href={`/locations/${branchId}`}
              style={{
                color: 'var(--accent)',
                fontSize: '0.8125rem',
                fontFamily: 'var(--ff-display)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              Explore {branch.shortName} →
            </Link>
          </div>
        </div>

        <div className="hero__actions">
          <Link href="/locations" className="btn btn-primary">
            Explore Both Branches
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            WhatsApp {branch.shortName}
          </a>
          <Link href="/join" className="btn btn-tertiary">
            Start Journey →
          </Link>
        </div>
      </div>
    </section>
  );
};
