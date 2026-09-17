/**
 * NEXUS — THE LIFTING CLUB
 * The Nexus Experience Controller
 * 
 * Manages:
 * - Sticky navigation pill scroll jumps & scroll-spy active state
 * - "Explore Detail" modal trigger, data population, and keyboard controls
 */

(function () {
  'use strict';

  const ExperienceController = {
    navPills: [],
    panels: [],
    modal: null,
    activePill: null,

    init: function () {
      this.navPills = document.querySelectorAll('.exp-nav__pill');
      this.panels = document.querySelectorAll('.exp-panel, .exp-centerpiece');
      this.modal = document.getElementById('exp-modal');

      if (!this.navPills.length) return;

      this.bindNav();
      this.initScrollSpy();
      this.bindModal();
    },

    /**
     * Bind click handlers to the 9 experience pills
     */
    bindNav: function () {
      this.navPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = pill.getAttribute('data-target');
          const targetEl = document.getElementById(targetId);

          if (targetEl) {
            const navOffset = 135; // Sticky top offset
            const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;

            window.scrollTo({
              top: targetPos,
              behavior: 'smooth'
            });

            this.setActivePill(pill);
          }
        });
      });
    },

    setActivePill: function (activeEl) {
      if (this.activePill === activeEl) return;
      this.activePill = activeEl;

      this.navPills.forEach(p => p.classList.remove('exp-nav__pill--active'));
      if (activeEl) {
        activeEl.classList.add('exp-nav__pill--active');
        // Scroll the pill into view ONLY horizontally within the nav scroller (never scroll window)
        const navContainer = activeEl.closest('.exp-nav');
        if (navContainer) {
          const targetLeft = activeEl.offsetLeft - (navContainer.clientWidth / 2) + (activeEl.clientWidth / 2);
          navContainer.scrollTo({
            left: Math.max(0, targetLeft),
            behavior: 'smooth'
          });
        }
      }
    },

    /**
     * Scroll-spy using IntersectionObserver
     */
    initScrollSpy: function () {
      if (!('IntersectionObserver' in window)) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const matchingPill = document.querySelector(`.exp-nav__pill[data-target="${id}"]`);
            if (matchingPill) {
              this.setActivePill(matchingPill);
            }
          }
        });
      }, {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      });

      this.panels.forEach(p => observer.observe(p));
    },

    /**
     * Explore Detail Modal handlers
     */
    bindModal: function () {
      // Explore trigger buttons
      document.querySelectorAll('[data-exp-explore]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const expId = btn.getAttribute('data-exp-explore');
          this.openModal(expId);
        });
      });

      if (!this.modal) return;

      // Close button
      const closeBtn = this.modal.querySelector('.exp-modal__close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal());
      }

      // Backdrop click
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });

      // ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('exp-modal--open')) {
          this.closeModal();
        }
      });
    },

    openModal: function (expId) {
      if (!this.modal || !window.NEXUS_EXPERIENCES) return;

      const data = window.NEXUS_EXPERIENCES[expId];
      if (!data) return;

      const titleEl = this.modal.querySelector('#exp-modal-title');
      const badgeEl = this.modal.querySelector('#exp-modal-badge');
      const locationEl = this.modal.querySelector('#exp-modal-location');
      const onelinerEl = this.modal.querySelector('#exp-modal-oneliner');
      const specsGridEl = this.modal.querySelector('#exp-modal-specs');
      const whatsappBtn = this.modal.querySelector('#exp-modal-whatsapp');

      if (titleEl) titleEl.textContent = data.headline;
      if (badgeEl) badgeEl.textContent = `${data.num} // ${data.category} · ${data.name}`;
      if (locationEl) locationEl.textContent = `📍 ${data.location}`;
      if (onelinerEl) onelinerEl.textContent = data.oneLiner;

      if (specsGridEl && data.specs) {
        specsGridEl.innerHTML = data.specs.map(s => `
          <div class="exp-spec-item">
            <div class="exp-spec-item__label">${s.label}</div>
            <div class="exp-spec-item__val">${s.val}</div>
          </div>
        `).join('');
      }

      if (whatsappBtn) {
        const text = encodeURIComponent(data.whatsappMsg || `Hi! I want details about ${data.name} at Nexus.`);
        whatsappBtn.href = `https://wa.me/919582333003?text=${text}`;
      }

      this.modal.classList.add('exp-modal--open');
      this.modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    },

    closeModal: function () {
      if (!this.modal) return;
      this.modal.classList.remove('exp-modal--open');
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  window.NexusExperience = ExperienceController;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ExperienceController.init());
  } else {
    ExperienceController.init();
  }
})();
