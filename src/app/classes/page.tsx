'use client';

import React, { useState, useMemo } from 'react';
import { NEXUS_CLASSES } from '../../data/classes';
import { ClassItem } from '../../types';

export default function ClassesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  const filteredClasses = useMemo(() => {
    if (activeCategory === 'all') return NEXUS_CLASSES;
    return NEXUS_CLASSES.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const openClassModal = (cls: ClassItem) => {
    setSelectedClass(cls);
    document.body.style.overflow = 'hidden';
  };

  const closeClassModal = () => {
    setSelectedClass(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="classes-page" style={{ paddingTop: '100px', backgroundColor: 'var(--surface-primary)' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0 50px 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700 }}>
            STUDIO DISCIPLINES // GROUP ENERGY
          </span>
          <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, textTransform: 'uppercase', margin: '16px 0', letterSpacing: '-0.02em' }}>
            CLASSES AT NEXUS.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Sprung hardwood flooring, tuned acoustic arrays, and licensed coaching. Small cohorts that hold each other accountable without ego.
          </p>

          {/* Editorial Filters */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '36px' }}>
            <button
              type="button"
              className={`classes-filter-pill ${activeCategory === 'all' ? 'classes-filter-pill--active' : ''}`}
              onClick={() => setActiveCategory('all')}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid ' + (activeCategory === 'all' ? 'var(--accent)' : 'var(--border-subtle)'),
                background: activeCategory === 'all' ? 'var(--accent)' : 'transparent',
                color: activeCategory === 'all' ? '#0b0b0b' : 'var(--text-secondary)',
                fontFamily: 'var(--ff-display)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                letterSpacing: '0.05em',
                cursor: 'pointer'
              }}
            >
              ALL CLASSES
            </button>
            <button
              type="button"
              className={`classes-filter-pill ${activeCategory === 'high-energy' ? 'classes-filter-pill--active' : ''}`}
              onClick={() => setActiveCategory('high-energy')}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid ' + (activeCategory === 'high-energy' ? 'var(--accent)' : 'var(--border-subtle)'),
                background: activeCategory === 'high-energy' ? 'var(--accent)' : 'transparent',
                color: activeCategory === 'high-energy' ? '#0b0b0b' : 'var(--text-secondary)',
                fontFamily: 'var(--ff-display)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                letterSpacing: '0.05em',
                cursor: 'pointer'
              }}
            >
              HIGH ENERGY
            </button>
            <button
              type="button"
              className={`classes-filter-pill ${activeCategory === 'mind-body' ? 'classes-filter-pill--active' : ''}`}
              onClick={() => setActiveCategory('mind-body')}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid ' + (activeCategory === 'mind-body' ? 'var(--accent)' : 'var(--border-subtle)'),
                background: activeCategory === 'mind-body' ? 'var(--accent)' : 'transparent',
                color: activeCategory === 'mind-body' ? '#0b0b0b' : 'var(--text-secondary)',
                fontFamily: 'var(--ff-display)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                letterSpacing: '0.05em',
                cursor: 'pointer'
              }}
            >
              MIND + BODY
            </button>
            <button
              type="button"
              className={`classes-filter-pill ${activeCategory === 'cardio' ? 'classes-filter-pill--active' : ''}`}
              onClick={() => setActiveCategory('cardio')}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid ' + (activeCategory === 'cardio' ? 'var(--accent)' : 'var(--border-subtle)'),
                background: activeCategory === 'cardio' ? 'var(--accent)' : 'transparent',
                color: activeCategory === 'cardio' ? '#0b0b0b' : 'var(--text-secondary)',
                fontFamily: 'var(--ff-display)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                letterSpacing: '0.05em',
                cursor: 'pointer'
              }}
            >
              CARDIO
            </button>
            <button
              type="button"
              className={`classes-filter-pill ${activeCategory === 'strength' ? 'classes-filter-pill--active' : ''}`}
              onClick={() => setActiveCategory('strength')}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid ' + (activeCategory === 'strength' ? 'var(--accent)' : 'var(--border-subtle)'),
                background: activeCategory === 'strength' ? 'var(--accent)' : 'transparent',
                color: activeCategory === 'strength' ? '#0b0b0b' : 'var(--text-secondary)',
                fontFamily: 'var(--ff-display)',
                fontWeight: 700,
                fontSize: '0.8125rem',
                letterSpacing: '0.05em',
                cursor: 'pointer'
              }}
            >
              STRENGTH
            </button>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {filteredClasses.map((cls) => (
              <article
                key={cls.id}
                className="class-card"
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '240px' }}>
                  <img src={cls.image} alt={cls.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(11,11,11,0.85) 100%)' }}></div>
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px' }}>
                    <span style={{ background: 'rgba(11,11,11,0.85)', color: 'var(--accent)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700 }}>
                      {cls.categoryLabel}
                    </span>
                    <span style={{ background: 'rgba(11,11,11,0.85)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)' }}>
                      ⚡ Intensity: {cls.intensity}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {cls.subtitle}
                  </div>
                  <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
                    {cls.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                    {cls.description}
                  </p>

                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                      📍 {cls.branchAvailability}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      🕒 {cls.scheduleNotice}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ flex: 1, minWidth: '130px', textAlign: 'center' }}
                      onClick={() => openClassModal(cls)}
                    >
                      View Details
                    </button>
                    <a
                      href={`https://wa.me/919582333003?text=${encodeURIComponent(`Hi Nexus, I would like to know about ${cls.name} class batches and weekly schedule.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, minWidth: '130px', textAlign: 'center' }}
                    >
                      Book / Inquire →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Class Modal */}
      {selectedClass && (
        <div className="class-modal exp-modal--open" style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(11,11,11,0.92)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: '6px', maxWidth: '640px', width: '100%', padding: '36px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button
              type="button"
              onClick={closeClassModal}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer' }}
            >
              ✕
            </button>

            <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {selectedClass.categoryLabel} // {selectedClass.intensity} Intensity
            </span>

            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', margin: '8px 0 16px 0' }}>
              {selectedClass.name}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {selectedClass.description}
            </p>

            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                WHO THIS CLASS IS FOR
              </h5>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', borderLeft: '2px solid var(--accent)', paddingLeft: '12px' }}>
                {selectedClass.whoItIsFor}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h5 style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                KEY PHYSIOLOGICAL BENEFITS
              </h5>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                {selectedClass.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919582333003?text=${encodeURIComponent(`Hi Nexus, I want to attend ${selectedClass.name}. Please share current batch timings and trial availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Inquire Batch Timings On WhatsApp →
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeClassModal}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
