'use client';

import React, { useState, useMemo } from 'react';
import { NEXUS_FACILITIES } from '../data/facilities';
import { Facility } from '../types';

export const FacilitiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredFacilities = useMemo(() => {
    if (activeFilter === 'all') return NEXUS_FACILITIES;
    return NEXUS_FACILITIES.filter((f) => f.category === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    return {
      all: NEXUS_FACILITIES.length,
      arena: NEXUS_FACILITIES.filter((f) => f.category === 'arena').length,
      turf: NEXUS_FACILITIES.filter((f) => f.category === 'turf').length,
      studios: NEXUS_FACILITIES.filter((f) => f.category === 'studios').length,
      amenities: NEXUS_FACILITIES.filter((f) => f.category === 'amenities').length,
    };
  }, []);

  const getWhatsAppMessage = (item: Facility) => {
    return encodeURIComponent(`Hi Nexus, I would like to inquire about the ${item.name} facility.`);
  };

  return (
    <section className="facilities-section" id="facilities" aria-label="Club Facilities">
      <div className="container">
        <div className="facilities-header">
          <span className="facilities-eyebrow">
            CLUB INFRASTRUCTURE // VERIFIED AMENITIES
          </span>
          <h2 className="facilities-title">
            EVERYTHING YOU NEED.<br />IN ONE CLUB.
          </h2>
          <p className="facilities-lead">
            A complete club ecosystem architected for dedicated lifting, group movement, and rooftop recreation across Greater Faridabad. No fabricated claims—strictly verified facilities.
          </p>

          {/* Interactive Filters */}
          <div className="facilities-filters" role="tablist">
            <button
              type="button"
              className={`facilities-filter-pill ${activeFilter === 'all' ? 'facilities-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ALL FACILITIES ({String(counts.all).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`facilities-filter-pill ${activeFilter === 'arena' ? 'facilities-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('arena')}
            >
              TRAINING ARENA ({String(counts.arena).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`facilities-filter-pill ${activeFilter === 'turf' ? 'facilities-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('turf')}
            >
              ROOFTOP TURF ({String(counts.turf).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`facilities-filter-pill ${activeFilter === 'studios' ? 'facilities-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('studios')}
            >
              STUDIOS ({String(counts.studios).padStart(2, '0')})
            </button>
            <button
              type="button"
              className={`facilities-filter-pill ${activeFilter === 'amenities' ? 'facilities-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter('amenities')}
            >
              AMENITIES ({String(counts.amenities).padStart(2, '0')})
            </button>
          </div>
        </div>

        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="facilities-grid" id="facilities-grid">
          {filteredFacilities.map((f) => (
            <article
              key={f.id}
              className={`facility-card facility-card--${f.layout}`}
              data-category={f.category}
            >
              {f.image && (
                <div className="facility-card__visual">
                  <img src={f.image} alt={f.name} className="facility-card__img" loading="lazy" />
                  <div className="facility-card__overlay"></div>
                </div>
              )}

              <div className="facility-card__inner">
                <div className="facility-card__top">
                  <span className="facility-card__tag">{f.tag}</span>
                  <span className="facility-card__badge">{f.badge}</span>
                </div>

                <div className="facility-card__middle">
                  <span className="facility-card__subtitle">{f.subtitle}</span>
                  <h3 className="facility-card__name">{f.name}</h3>
                  <p className="facility-card__lead">{f.lead}</p>

                  <ul className="facility-card__specs">
                    {f.specs.map((s, i) => (
                      <li key={i} className="facility-card__spec-item">
                        <span className="spec-bullet">{s.icon}</span>
                        <span>{s.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="facility-card__bottom">
                  <div className="facility-card__verified">
                    <span className="verified-dot"></span>
                    <span>{f.verifiedBadge}</span>
                    <span className="branch-meta">· {f.branchAvailability}</span>
                  </div>

                  <a
                    href={`https://wa.me/919582333003?text=${getWhatsAppMessage(f)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facility-card__cta"
                  >
                    <span>{f.ctaText}</span>
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
