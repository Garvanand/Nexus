'use client';

import React, { useState } from 'react';
import { Branch } from '../types';

interface BranchMapPreviewProps {
  branch: Branch;
}

export const BranchMapPreview: React.FC<BranchMapPreviewProps> = ({ branch }) => {
  const [isInteractive, setIsInteractive] = useState(false);

  const embedUrl = `https://maps.google.com/maps?q=${branch.directions.lat},${branch.directions.lng}&hl=en&z=15&output=embed`;

  return (
    <div className="branch-map-wrapper" style={{ margin: '40px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            LOCATION INTELLIGENCE // GOOGLE MAPS
          </span>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', margin: '4px 0 0 0' }}>
            FIND {branch.shortName.toUpperCase()}
          </h3>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={branch.directions.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.8125rem' }}
          >
            Open in Google Maps App ↗
          </a>
        </div>
      </div>

      <div
        className="branch-map-card"
        style={{
          position: 'relative',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '6px',
          overflow: 'hidden',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {isInteractive ? (
          <iframe
            title={`Interactive Google Map of Nexus ${branch.name}`}
            src={embedUrl}
            width="100%"
            height="380"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          /* Static Architectural Map Preview */
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '380px',
              background: 'linear-gradient(135deg, #0e0e0e 0%, #171717 50%, #0d0d0d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setIsInteractive(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsInteractive(true); }}
            aria-label="Click to load interactive Google Map"
          >
            {/* Stylized Dark Grid Lines */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.8
              }}
            />

            {/* Stylized Roads / Corridors */}
            <svg
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="180" x2="100%" y2="200" stroke="#FAF9F6" strokeWidth="6" />
              <line x1="180" y1="0" x2="320" y2="100%" stroke="#FAF9F6" strokeWidth="4" />
              <line x1="50%" y1="0" x2="52%" y2="100%" stroke="#c8b830" strokeWidth="5" strokeDasharray="6,4" />
              <circle cx="51%" cy="50%" r="90" stroke="rgba(200,184,48,0.2)" strokeWidth="1" fill="none" />
              <circle cx="51%" cy="50%" r="140" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
            </svg>

            {/* Center Nexus Pin */}
            <div style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent)',
                  color: '#0b0b0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px auto',
                  boxShadow: '0 0 28px rgba(200, 184, 48, 0.6)',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  animation: 'pulse 2s infinite'
                }}
              >
                📍
              </div>

              <div style={{ background: 'rgba(11, 11, 11, 0.9)', padding: '12px 20px', borderRadius: '4px', border: '1px solid var(--border-subtle)', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                  NEXUS {branch.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {branch.address}
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--accent)', marginTop: '4px', fontFamily: 'monospace' }}>
                  {branch.directions.lat.toFixed(4)}° N, {branch.directions.lng.toFixed(4)}° E
                </div>
              </div>

              {/* Load Interactive Map Overlay CTA */}
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: '16px', background: 'rgba(20,20,20,0.9)', borderColor: 'var(--accent)', color: 'var(--accent)', fontSize: '0.8125rem' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsInteractive(true);
                }}
              >
                ⚡ Load Interactive Google Map
              </button>
            </div>

            <div style={{ position: 'absolute', bottom: '12px', right: '14px', fontSize: '0.6875rem', color: 'var(--text-tertiary)', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '3px' }}>
              Static Preview (Zero Load Overhead) · Click to Activate
            </div>
          </div>
        )}

        {/* Quick Address Strip */}
        <div style={{ padding: '16px 20px', background: 'rgba(18, 18, 18, 0.95)', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Landmark: </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>{branch.landmark}</span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>🚗 Free Member Parking Available</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>✓ Verified Geolocation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
