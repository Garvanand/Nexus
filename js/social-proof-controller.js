/**
 * ============================================================
 * NEXUS — THE LIFTING CLUB
 * Social-Proof & Member Stories Controller (/js/social-proof-controller.js)
 * 
 * Dynamic rendering engine, category filtering, live counter
 * updates, and accessible modal dialogs.
 * ============================================================
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NexusSocialProof = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  class SocialProofController {
    constructor() {
      this.items = [];
      this.activeCategory = 'all';
      this.gridEl = null;
      this.filtersEl = null;
      this.modalEl = null;
      this.initialized = false;
    }

    init(data) {
      if (this.initialized) return;
      this.initialized = true;

      this.items = Array.isArray(data) ? data : 
                   (typeof window !== 'undefined' && window.NEXUS_SOCIAL_PROOF) || [];

      this.gridEl = document.getElementById('social-proof-grid');
      this.filtersEl = document.getElementById('social-proof-filters');
      this.modalEl = document.getElementById('social-proof-modal');

      if (!this.gridEl) {
        console.warn('[NexusSocialProof] #social-proof-grid element not found.');
        return;
      }

      this.renderGrid();
      this.setupFilters();
      this.setupModal();
      this.checkUrlParams();

      console.log(`%c[NexusSocialProof] Initialized with ${this.items.length} verified member stories.`, 'color:#C8B830; font-weight:bold;');
    }

    renderGrid() {
      if (!this.gridEl) return;
      this.gridEl.innerHTML = '';

      this.items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'proof-card';
        card.setAttribute('data-id', item.id);
        card.setAttribute('data-category', item.category);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Read story: ${item.headline}`);

        // Journey Metrics HTML
        let metricsHtml = '';
        if (Array.isArray(item.metrics) && item.metrics.length > 0) {
          metricsHtml = `
            <div class="proof-card__metrics">
              ${item.metrics.map(m => `
                <div class="proof-metric-chip">
                  <span class="proof-metric-chip__label">${m.label}:</span>
                  <span class="proof-metric-chip__val">${m.value}</span>
                </div>
              `).join('')}
            </div>
          `;
        }

        card.innerHTML = `
          <div class="proof-card__visual">
            <img src="${item.photo}" alt="${item.headline}" class="proof-card__img" loading="lazy">
            <div class="proof-card__overlay"></div>
            <div class="proof-card__badges">
              <span class="proof-card__tag">${item.categoryLabel || item.category}</span>
              <span class="proof-card__verified">${item.verifiedBadge || 'Verified Member'}</span>
            </div>
          </div>
          <div class="proof-card__body">
            <h3 class="proof-card__headline">${item.headline}</h3>
            <p class="proof-card__quote">“${item.quote}”</p>
            ${metricsHtml}
            <div class="proof-card__author">
              <div class="proof-card__author-info">
                <span class="proof-card__author-name">${item.name}</span>
                <span class="proof-card__author-role">${item.role}</span>
              </div>
              <span class="proof-card__read-link">Read Story →</span>
            </div>
          </div>
        `;

        // Card Click & Keyboard Trigger
        card.addEventListener('click', () => this.openModal(item.id));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openModal(item.id);
          }
        });

        this.gridEl.appendChild(card);
      });
    }

    setupFilters() {
      if (!this.filtersEl) return;

      // Update counters
      const categoryCounts = {
        all: this.items.length,
        'member-story': this.items.filter(i => i.category === 'member-story').length,
        'class-cohort': this.items.filter(i => i.category === 'class-cohort').length,
        'community-moment': this.items.filter(i => i.category === 'community-moment').length,
        'verified-review': this.items.filter(i => i.category === 'verified-review').length
      };

      const pills = this.filtersEl.querySelectorAll('[data-proof-filter]');
      pills.forEach(pill => {
        const cat = pill.getAttribute('data-proof-filter');
        const countSpan = pill.querySelector('.social-proof-pill__count');
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

      // Update active pill styling
      if (this.filtersEl) {
        const pills = this.filtersEl.querySelectorAll('[data-proof-filter]');
        pills.forEach(p => p.classList.remove('social-proof-pill--active'));
        if (activePillEl) {
          activePillEl.classList.add('social-proof-pill--active');
        }
      }

      // Filter visible cards
      const cards = this.gridEl ? this.gridEl.querySelectorAll('.proof-card') : [];
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('proof-card--hidden');
        } else {
          card.classList.add('proof-card--hidden');
        }
      });
    }

    setupModal() {
      if (!this.modalEl) return;

      const backdrop = this.modalEl.querySelector('.proof-modal__backdrop');
      const closeBtn = this.modalEl.querySelector('.proof-modal__close');

      if (backdrop) {
        backdrop.addEventListener('click', () => this.closeModal());
      }
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal());
      }

      // ESC key listener
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modalEl.classList.contains('proof-modal--open')) {
          this.closeModal();
        }
      });
    }

    openModal(storyId) {
      const item = this.items.find(i => i.id === storyId);
      if (!item || !this.modalEl) return;

      const imgEl = this.modalEl.querySelector('#proof-modal-img');
      const tagEl = this.modalEl.querySelector('#proof-modal-tag');
      const titleEl = this.modalEl.querySelector('#proof-modal-title');
      const quoteEl = this.modalEl.querySelector('#proof-modal-quote');
      const storyEl = this.modalEl.querySelector('#proof-modal-story');
      const metaBranch = this.modalEl.querySelector('#proof-modal-branch');
      const metaDiscipline = this.modalEl.querySelector('#proof-modal-discipline');
      const metaTenure = this.modalEl.querySelector('#proof-modal-tenure');
      const metaSource = this.modalEl.querySelector('#proof-modal-source');
      const waBtn = this.modalEl.querySelector('#proof-modal-whatsapp');

      if (imgEl) imgEl.src = item.photo;
      if (tagEl) tagEl.textContent = `${item.categoryLabel || item.category} · ${item.verifiedBadge}`;
      if (titleEl) titleEl.textContent = item.headline;
      if (quoteEl) quoteEl.textContent = `“${item.quote}”`;
      if (storyEl) storyEl.textContent = item.fullStory || item.quote;
      if (metaBranch) metaBranch.textContent = item.branch || 'Sector 85 & 86';
      if (metaDiscipline) metaDiscipline.textContent = item.discipline || 'General Conditioning';
      if (metaTenure) metaTenure.textContent = item.tenure || 'Active Member';
      if (metaSource) metaSource.textContent = item.source || 'Verified Member Record';

      // Dynamic WhatsApp inquiry link
      if (waBtn) {
        const branchContext = item.branch && item.branch.includes('86') ? 'sector-86' : 'sector-85';
        const msg = `Hi Nexus, I read ${item.name}'s story about ${item.discipline} and would like to start my transformation.`;
        waBtn.href = `https://wa.me/919582333003?text=${encodeURIComponent(msg)}`;
        waBtn.setAttribute('data-whatsapp-context', branchContext);
      }

      this.modalEl.classList.add('proof-modal--open');
      document.body.classList.add('modal-open');

      // Track modal open in analytics
      if (typeof window !== 'undefined' && window.NexusAnalytics) {
        window.NexusAnalytics.track('social_proof_view', {
          storyId: item.id,
          name: item.name,
          category: item.category
        });
      }
    }

    closeModal() {
      if (!this.modalEl) return;
      this.modalEl.classList.remove('proof-modal--open');
      document.body.classList.remove('modal-open');
    }

    checkUrlParams() {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      const storyId = params.get('proof');
      if (storyId) {
        setTimeout(() => this.openModal(storyId), 300);
      }
    }
  }

  const instance = new SocialProofController();

  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        instance.init(window.NEXUS_SOCIAL_PROOF);
      });
    } else {
      instance.init(window.NEXUS_SOCIAL_PROOF);
    }
  }

  return instance;
});
