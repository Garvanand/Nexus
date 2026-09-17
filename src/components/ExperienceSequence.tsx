'use client';

import React, { useState, useRef } from 'react';
import { NEXUS_EXPERIENCES } from '../data/experience';
import { ExperienceChapter } from '../types';

export const ExperienceSequence: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>('gym');
  const [selectedModal, setSelectedModal] = useState<ExperienceChapter | null>(null);
  const navScrollerRef = useRef<HTMLDivElement>(null);

  const scrollToPanel = (id: string) => {
    setActiveChapterId(id);
    const target = document.getElementById(`exp-${id}`);
    if (target) {
      const navOffset = 135;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }

    // Scroll active pill into view horizontally without touching window
    if (navScrollerRef.current) {
      const activeBtn = navScrollerRef.current.querySelector(`[data-target="${id}"]`) as HTMLElement;
      if (activeBtn) {
        const leftPos = activeBtn.offsetLeft - (navScrollerRef.current.clientWidth / 2) + (activeBtn.clientWidth / 2);
        navScrollerRef.current.scrollTo({
          left: Math.max(0, leftPos),
          behavior: 'smooth'
        });
      }
    }
  };

  const openModal = (chapter: ExperienceChapter) => {
    setSelectedModal(chapter);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedModal(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="exp-section" id="experience" aria-label="The Nexus Experience">
      <div className="container">
        <div className="exp-opener">
          <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700 }}>
            FLAGSHIP STORYTELLING SEQUENCE
          </span>
          <h2 className="display-title" style={{ marginTop: '12px' }}>
            THE NEXUS EXPERIENCE
          </h2>
          <p className="exp-opener__lead">
            Not a sterile checklist of gym amenities, but an immersive multi-discipline club engineered for hard training, mental decompression, and social camaraderie.
          </p>
        </div>
      </div>

      {/* Sticky Horizontal Experience Navigator */}
      <div className="exp-nav-wrapper">
        <div className="container">
          <div className="exp-nav" ref={navScrollerRef} role="tablist">
            {NEXUS_EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                type="button"
                role="tab"
                data-target={exp.id}
                aria-selected={activeChapterId === exp.id}
                className={`exp-nav__pill ${activeChapterId === exp.id ? 'exp-nav__pill--active' : ''} ${exp.isCenterpiece ? 'exp-nav__pill--flagship' : ''}`}
                onClick={() => scrollToPanel(exp.id)}
              >
                <span className="dot"></span> {exp.num} {exp.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="exp-sequence">
          {NEXUS_EXPERIENCES.map((exp, idx) => {
            if (exp.isCenterpiece) {
              return (
                <section
                  key={exp.id}
                  className="exp-centerpiece"
                  id={`exp-${exp.id}`}
                  data-exp={exp.id}
                >
                  <div className="exp-centerpiece__bg">
                    <img src={exp.image} alt={exp.alt} className="exp-centerpiece__img" loading="lazy" />
                  </div>
                  <div className="exp-centerpiece__gradient"></div>

                  <div className="exp-centerpiece__inner">
                    <div className="exp-centerpiece__badge">
                      <span className="spec-dot"></span> {exp.num} // {exp.badge}
                    </div>

                    <h3 className="exp-centerpiece__title">
                      TRAIN HARD.<br />SWITCH OFF.<br /><span>PLAY.</span>
                    </h3>

                    <p className="exp-centerpiece__desc">{exp.oneLiner}</p>

                    <div className="exp-centerpiece__pillars">
                      <div className="exp-lifestyle-card">
                        <div className="exp-lifestyle-card__num">01 / ATMOSPHERE</div>
                        <h4 className="exp-lifestyle-card__title">Open Sky & Floodlights</h4>
                        <p className="exp-lifestyle-card__desc">All-weather synthetic turf high above city noise, illuminated by evening floodlights.</p>
                      </div>
                      <div className="exp-lifestyle-card">
                        <div className="exp-lifestyle-card__num">02 / DECOMPRESSION</div>
                        <h4 className="exp-lifestyle-card__title">The Post-Lift Switch-Off</h4>
                        <p className="exp-lifestyle-card__desc">Finish heavy barbell squats downstairs, take the elevator straight to the rooftop, and bowl a 6-over spell.</p>
                      </div>
                      <div className="exp-lifestyle-card">
                        <div className="exp-lifestyle-card__num">03 / SOCIAL PLAY</div>
                        <h4 className="exp-lifestyle-card__title">Club Tournaments</h4>
                        <p className="exp-lifestyle-card__desc">Intra-club leagues, private weekend friendlies, and open net practice sessions.</p>
                      </div>
                    </div>

                    <div className="exp-centerpiece__actions">
                      <a
                        href={`https://wa.me/919582333003?text=${encodeURIComponent(exp.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Book Turf Slot On WhatsApp →
                      </a>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => openModal(exp)}
                      >
                        View Turf Specifications
                      </button>
                    </div>
                  </div>
                </section>
              );
            }

            const isReverse = idx % 2 === 1;

            return (
              <article
                key={exp.id}
                className={`exp-panel ${isReverse ? 'exp-panel--reverse' : ''}`}
                id={`exp-${exp.id}`}
                data-exp={exp.id}
              >
                <div className="exp-panel__visual">
                  <img src={exp.image} alt={exp.alt} className="exp-panel__img" loading="lazy" />
                  <div className="exp-panel__overlay"></div>
                  <span className="exp-panel__tag-badge">{exp.badge}</span>
                </div>

                <div className="exp-panel__content">
                  <div className="exp-panel__eyebrow">
                    <span className="exp-panel__num">{exp.num}</span>
                    <span className="exp-panel__category">{exp.category}</span>
                  </div>

                  <h3 className="exp-panel__title">{exp.headline}</h3>

                  <p className="exp-panel__oneliner">{exp.oneLiner}</p>

                  <div className="exp-panel__specs-preview">
                    {exp.specs.map((s, i) => (
                      <span key={i} className="exp-panel__spec-tag">
                        <span className="spec-dot"></span> {s.label}: {s.val}
                      </span>
                    ))}
                  </div>

                  <div className="exp-panel__actions">
                    <button
                      type="button"
                      className="exp-explore-btn"
                      onClick={() => openModal(exp)}
                    >
                      Explore Details <span className="arrow">→</span>
                    </button>
                    <a
                      href={`https://wa.me/919582333003?text=${encodeURIComponent(exp.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-tertiary"
                    >
                      Inquire On WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedModal && (
        <div className="exp-modal exp-modal--open" role="dialog" aria-modal="true">
          <div className="exp-modal__dialog">
            <button
              type="button"
              className="exp-modal__close"
              aria-label="Close modal"
              onClick={closeModal}
            >
              ✕
            </button>

            <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {selectedModal.num} // {selectedModal.category}
            </div>

            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.75rem', fontWeight: 800, margin: '8px 0 16px 0', textTransform: 'uppercase' }}>
              {selectedModal.headline}
            </h3>

            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '16px' }}>
              📍 {selectedModal.location}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.6, borderLeft: '2px solid var(--accent)', paddingLeft: '16px', marginBottom: '24px' }}>
              {selectedModal.oneLiner}
            </p>

            <div className="exp-modal__specs-grid">
              {selectedModal.specs.map((s, i) => (
                <div key={i} className="exp-spec-item">
                  <div className="exp-spec-item__label">{s.label}</div>
                  <div className="exp-spec-item__val">{s.val}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919582333003?text=${encodeURIComponent(selectedModal.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Inquire On WhatsApp →
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
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
