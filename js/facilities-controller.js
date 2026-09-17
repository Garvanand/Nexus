/**
 * ============================================================
 * NEXUS — THE LIFTING CLUB
 * Facilities Controller Layer (/js/facilities-controller.js)
 * 
 * Dynamic asymmetric layout rendering, category filtering,
 * and WhatsApp conversion integration.
 * ============================================================
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NexusFacilities = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  class FacilitiesController {
    constructor() {
      this.items = [];
      this.activeCategory = 'all';
      this.gridEl = null;
      this.filtersEl = null;
      this.initialized = false;
    }

    init(data) {
      if (this.initialized) return;
      this.initialized = true;

      this.items = Array.isArray(data) ? data : 
                   (typeof window !== 'undefined' && window.NEXUS_FACILITIES) || [];

      this.gridEl = document.getElementById('facilities-grid');
      this.filtersEl = document.getElementById('facilities-filters');

      if (!this.gridEl) {
        console.warn('[NexusFacilities] #facilities-grid element not found.');
        return;
      }

      this.renderGrid();
      this.setupFilters();

      console.log(`%c[NexusFacilities] Initialized with ${this.items.length} verified facilities.`, 'color:#C8B830; font-weight:bold;');
    }

    renderGrid() {
      if (!this.gridEl) return;
      this.gridEl.innerHTML = '';

      this.items.forEach(item => {
        const card = document.createElement('article');
        const styleClass = `facility-card--${item.layoutStyle}`;
        card.className = `facility-card ${styleClass}`;
        card.setAttribute('data-id', item.id);
        card.setAttribute('data-category', item.category);

        // Context mapping for WhatsApp CTA
        const waContextMap = {
          'facility-gym': 'strength',
          'facility-cricket-turf': 'turf',
          'facility-zumba': 'zumba',
          'facility-yoga': 'yoga',
          'facility-aerobics': 'aerobics',
          'facility-lockers': 'visit',
          'facility-washrooms': 'visit'
        };
        const waContext = waContextMap[item.id] || 'default';
        const waMsg = `Hi Nexus, I'd like to know more about the ${item.name} at ${item.branch}.`;
        const waUrl = `https://wa.me/919582333003?text=${encodeURIComponent(waMsg)}`;

        // Render Specs
        const specsHtml = (Array.isArray(item.specs) && item.specs.length > 0) ? `
          <div class="facility-card__specs">
            ${item.specs.map(spec => `<span class="facility-spec-chip">${spec}</span>`).join('')}
          </div>
        ` : '';

        // Conditional Layout: Image-led vs Typography-led
        if (item.layoutStyle === 'compact-typography') {
          // Typography-Led Card (Lockers / Washrooms)
          card.innerHTML = `
            <div class="facility-card__body">
              <div class="facility-card__top">
                <span class="facility-card__category">${item.categoryLabel}</span>
                <span class="facility-card__badge-branch">${item.branch}</span>
              </div>
              <h3 class="facility-card__headline">${item.headline}</h3>
              <p class="facility-card__desc">${item.description}</p>
              ${specsHtml}
              <div class="facility-card__footer">
                <span class="facility-card__notice">✓ ${item.verifiedNotice}</span>
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="facility-card__cta" data-whatsapp-cta data-whatsapp-source="facility_${item.id}" data-whatsapp-context="${waContext}">
                  Inquire Details →
                </a>
              </div>
            </div>
          `;
        } else {
          // Image-Led Card (Gym, Turf, Zumba, Yoga, Aerobics)
          card.innerHTML = `
            <div class="facility-card__visual">
              <img src="${item.photo}" alt="${item.name} at Nexus Lifting Club" class="facility-card__img" loading="lazy">
              <div class="facility-card__overlay"></div>
              <div class="facility-card__badges">
                <span class="facility-card__badge-tag">${item.badge}</span>
                <span class="facility-card__badge-branch">${item.branch}</span>
              </div>
            </div>
            <div class="facility-card__body">
              <span class="facility-card__category">${item.categoryLabel}</span>
              <h3 class="facility-card__headline">${item.headline}</h3>
              <p class="facility-card__desc">${item.description}</p>
              ${specsHtml}
              <div class="facility-card__footer">
                <span class="facility-card__notice">✓ ${item.verifiedNotice}</span>
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="facility-card__cta" data-whatsapp-cta data-whatsapp-source="facility_${item.id}" data-whatsapp-context="${waContext}">
                  Inquire Facility →
                </a>
              </div>
            </div>
          `;
        }

        this.gridEl.appendChild(card);
      });

      // Bind newly injected CTAs to NexusWhatsApp if initialized
      if (typeof window !== 'undefined' && window.NexusWhatsApp && typeof window.NexusWhatsApp.bindDeclarativeCTAs === 'function') {
        window.NexusWhatsApp.bindDeclarativeCTAs();
      }
    }

    setupFilters() {
      if (!this.filtersEl) return;

      const categoryCounts = {
        all: this.items.length,
        training: this.items.filter(i => i.category === 'training').length,
        outdoor: this.items.filter(i => i.category === 'outdoor').length,
        studios: this.items.filter(i => i.category === 'studios').length,
        amenities: this.items.filter(i => i.category === 'amenities').length
      };

      const pills = this.filtersEl.querySelectorAll('[data-facility-filter]');
      pills.forEach(pill => {
        const cat = pill.getAttribute('data-facility-filter');
        const countSpan = pill.querySelector('.facilities-pill__count');
        if (countSpan && categoryCounts[cat] !== undefined) {
          countSpan.textContent = `(${String(categoryCounts[cat]).padStart(2, '0')})`;
        }

        pill.addEventListener('click', () => {
          this.filterCategory(cat, pill);
        });
      });
    }

    filterCategory(category, activePillEl) {
      this.activeCategory = category;

      if (this.filtersEl) {
        const pills = this.filtersEl.querySelectorAll('[data-facility-filter]');
        pills.forEach(p => p.classList.remove('facilities-pill--active'));
        if (activePillEl) {
          activePillEl.classList.add('facilities-pill--active');
        }
      }

      const cards = this.gridEl ? this.gridEl.querySelectorAll('.facility-card') : [];
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('facility-card--hidden');
        } else {
          card.classList.add('facility-card--hidden');
        }
      });
    }
  }

  const instance = new FacilitiesController();

  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        instance.init(window.NEXUS_FACILITIES);
      });
    } else {
      instance.init(window.NEXUS_FACILITIES);
    }
  }

  return instance;
});
