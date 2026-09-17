'use client';

import React, { useState, useMemo } from 'react';
import { NEXUS_SOCIAL_PROOF } from '../data/socialProof';
import { SocialProofItem } from '../types';

export const SocialProofSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedStory, setSelectedStory] = useState<SocialProofItem | null>(null);

  const filteredStories = useMemo(() => {
    if (activeFilter === 'all') return NEXUS_SOCIAL_PROOF;
    return NEXUS_SOCIAL_PROOF.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    return {
      all: NEXUS_SOCIAL_PROOF.length,
      story: NEXUS_SOCIAL_PROOF.filter((i) => i.category === 'story').length,
      cohort: NEXUS_SOCIAL_PROOF.filter((i) => i.category === 'cohort').length,
      community: NEXUS_SOCIAL_PROOF.filter((i) => i.category === 'community').length,
      review: NEXUS_SOCIAL_PROOF.filter((i) => i.category === 'review').length,
    };
  }, []);

  const openStory = (story: SocialProofItem) => {
    setSelectedStory(story);
    document.body.style.overflow = 'hidden';
  };

  const closeStory = () => {
    setSelectedStory(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="proof-section" id="social-proof" aria-label="Member Stories and Social Proof">
      <div className="container">
        <div className="proof-header">
          <span className="proof-eyebrow">
            VERIFIED VOICES // AUTHENTIC PROGRESSION
          </span>
          <h2 className="proof-title">
            BUILT BY PEOPLE<br />WHO SHOW UP.
          </h2>
          <p className="proof-lead">
            We don’t fabricate generic 5-star badges or pay for sponsored influencers. The culture at Nexus is forged by everyday members who honor the barbell, show up consistently, and build this community across Sector 85 and Sector 86.
          </p>

          <div className="proof-filters" role="tablist">
            <button
              type="button"
              className={`proof-filter-pill ${activeFilter === 'all' ? 'proof-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ALL VOICES ({String(counts.all).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`proof-filter-pill ${activeFilter === 'story' ? 'proof-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('story')}
            >
              MEMBER STORIES ({String(counts.story).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`proof-filter-pill ${activeFilter === 'cohort' ? 'proof-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('cohort')}
            >
              STUDIO COHORTS ({String(counts.cohort).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`proof-filter-pill ${activeFilter === 'community' ? 'proof-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('community')}
            >
              COMMUNITY & TURF ({String(counts.community).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`proof-filter-pill ${activeFilter === 'review' ? 'proof-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('review')}
            >
              VERIFIED REVIEWS ({String(counts.review).padStart(2, '0')})
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="proof-grid">
          {filteredStories.map((item) => (
            <article key={item.id} className="proof-card">
              <div className="proof-card__media">
                <img src={item.photo} alt={item.name} className="proof-card__img" loading="lazy" />
                <div className="proof-card__overlay"></div>
                <span className="proof-card__badge">{item.categoryLabel}</span>
              </div>

              <div className="proof-card__content">
                <div className="proof-card__author-row">
                  <div>
                    <h3 className="proof-card__name">{item.name}</h3>
                    <span className="proof-card__discipline">{item.discipline} · {item.branch}</span>
                  </div>
                  <span className="proof-card__verified">{item.verifiedBadge}</span>
                </div>

                <h4 className="proof-card__headline">{item.headline}</h4>
                <p className="proof-card__quote">“{item.quote}”</p>

                <div className="proof-card__milestones">
                  {item.milestones.map((m, i) => (
                    <span key={i} className="proof-chip">
                      <span className="dot"></span> {m}
                    </span>
                  ))}
                </div>

                <div className="proof-card__bottom">
                  <span className="proof-card__tenure">{item.tenure}</span>
                  <button
                    type="button"
                    className="proof-card__cta"
                    onClick={() => openStory(item)}
                  >
                    Read Story →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="proof-modal proof-modal--open" role="dialog" aria-modal="true">
          <div className="proof-modal__dialog">
            <button
              type="button"
              className="proof-modal__close"
              aria-label="Close story"
              onClick={closeStory}
            >
              ✕
            </button>

            <div className="proof-modal__header">
              <span className="proof-modal__category">{selectedStory.categoryLabel}</span>
              <h3 className="proof-modal__title">{selectedStory.headline}</h3>
              <div className="proof-modal__author">
                <strong>{selectedStory.name}</strong> · {selectedStory.discipline} ({selectedStory.branch})
              </div>
              <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 600, marginTop: '4px' }}>
                {selectedStory.verifiedBadge} · {selectedStory.source}
              </div>
            </div>

            <div className="proof-modal__body">
              <p className="proof-modal__quote">“{selectedStory.quote}”</p>
              <p className="proof-modal__narrative">{selectedStory.story}</p>

              <div className="proof-modal__milestones-box">
                <h5 style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  Verified Journey Milestones
                </h5>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedStory.milestones.map((m, i) => (
                    <span key={i} className="proof-chip proof-chip--accent">
                      ✓ {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="proof-modal__footer">
              <a
                href={`https://wa.me/919582333003?text=${encodeURIComponent(`Hi Nexus, I was inspired by ${selectedStory.name}'s story at ${selectedStory.branch} and would like to start my own transformation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Start Your Journey Like {selectedStory.name} →
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeStory}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
