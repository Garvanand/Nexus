'use client';

import React from 'react';
import { NEXUS_SOCIAL_PROOF } from '../data/socialProof';

export const SocialProofSection: React.FC = () => {
  const verifiedStories = NEXUS_SOCIAL_PROOF.slice(0, 3);

  return (
    <section className="section proof-section" id="community" aria-label="Member Stories">
      <div className="container">
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span className="eyebrow-line"></span>
            <span>VERIFIED MEMBERS // REAL WORK</span>
          </div>
          <h2 className="heading-section">
            STANDARDS OVER GIMMICKS.
          </h2>
        </div>

        {/* Minimal Editorial Quote Columns */}
        <div className="proof-grid">
          {verifiedStories.map((item) => (
            <div key={item.id} className="proof-item">
              <blockquote className="proof-quote">
                “{item.quote}”
              </blockquote>

              <div className="proof-author">
                <span className="proof-name">{item.name}</span>
                <span className="proof-role">{item.discipline} · {item.branch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
