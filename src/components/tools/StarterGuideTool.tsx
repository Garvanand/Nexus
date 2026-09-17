'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { STARTER_GUIDE_ITEMS } from '../../data/tools';
import { useBranch } from '../../context/BranchContext';

export const StarterGuideTool: React.FC = () => {
  const { getWhatsAppUrl } = useBranch();
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    shoes: true,
    bottle: true
  });
  const [activeCategory, setActiveCategory] = useState<'all' | 'kit' | 'first-week' | 'etiquette'>('all');

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = STARTER_GUIDE_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const totalChecked = Object.values(checkedIds).filter(Boolean).length;

  const whatsappMsg = `Hi Nexus, I'm getting started with lifting and reviewed the Beginner Starter Guide on your website. I'd like to claim my first-timer coach walkthrough.`;

  return (
    <div className="starter-tool" id="starter-guide">
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Step 5: Beginner Gym Starter Guide &amp; Protocol
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          An actionable, zero-intimidation roadmap for gym newcomers. Check off your training kit, master the first 7 days, and learn club etiquette.
        </p>
      </div>

      {/* Category Pills & Progress Counter */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            type="button"
            className={`tool-segment-btn ${activeCategory === 'all' ? 'tool-segment-btn--active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Items
          </button>
          <button
            type="button"
            className={`tool-segment-btn ${activeCategory === 'kit' ? 'tool-segment-btn--active' : ''}`}
            onClick={() => setActiveCategory('kit')}
          >
            Kit Essentials
          </button>
          <button
            type="button"
            className={`tool-segment-btn ${activeCategory === 'first-week' ? 'tool-segment-btn--active' : ''}`}
            onClick={() => setActiveCategory('first-week')}
          >
            First 7 Days
          </button>
          <button
            type="button"
            className={`tool-segment-btn ${activeCategory === 'etiquette' ? 'tool-segment-btn--active' : ''}`}
            onClick={() => setActiveCategory('etiquette')}
          >
            Club Etiquette
          </button>
        </div>

        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ff-display)', fontWeight: 700, color: 'var(--accent)' }}>
          {totalChecked} OF {STARTER_GUIDE_ITEMS.length} CHECKED
        </div>
      </div>

      {/* Checklist List */}
      <div className="starter-checklist">
        {filteredItems.map((item) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              className={`starter-item ${isChecked ? 'starter-item--checked' : ''}`}
              onClick={() => toggleCheck(item.id)}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleCheck(item.id);
                }
              }}
            >
              <div className="starter-check">
                {isChecked && (
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0b0b0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="starter-title">{item.title}</span>
                  {item.essential && (
                    <span style={{ fontSize: '0.5625rem', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', background: 'rgba(230,195,76,0.1)', color: 'var(--accent)', padding: '2px 6px', borderRadius: '2px' }}>
                      Essential
                    </span>
                  )}
                </div>
                <p className="starter-desc">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="tool-actions-strip">
        <Link href="/join?starter=true" className="tool-cta-primary">
          CLAIM FIRST-TIMER ONBOARDING → START JOURNEY
        </Link>
        <a href={getWhatsAppUrl(whatsappMsg)} target="_blank" rel="noopener noreferrer" className="tool-cta-whatsapp">
          Book Beginner Walkthrough on WhatsApp
        </a>
      </div>
    </div>
  );
};
