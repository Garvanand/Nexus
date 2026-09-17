/**
 * NEXUS — THE LIFTING CLUB
 * Classes Controller (/classes)
 * 
 * Manages:
 * - Editorial category filtering without page reloads or dropdowns
 * - Future-proof schedule slots rendering vs verified club notice
 * - Quick Book / Enquire modal and pre-filled WhatsApp links
 */

(function () {
  'use strict';

  const ClassesController = {
    filterPills: [],
    classCards: [],
    counterEl: null,
    modal: null,

    init: function () {
      this.filterPills = document.querySelectorAll('.classes-filter-pill');
      this.classCards = document.querySelectorAll('.class-spread');
      this.counterEl = document.getElementById('classes-count');
      this.modal = document.getElementById('class-modal');

      if (!this.classCards.length) return;

      this.bindFilters();
      this.bindModal();
      this.updateCount('all');
      this.handleDeepLinks();
    },

    /**
     * Support deep-linking via query parameters (e.g. ?filter=mind-body or ?inquire=zumba)
     */
    handleDeepLinks: function () {
      try {
        const params = new URLSearchParams(window.location.search);
        const initialFilter = params.get('filter');
        const initialInquire = params.get('inquire') || params.get('modal');

        if (initialFilter) {
          const matchingPill = Array.from(this.filterPills).find(p => p.getAttribute('data-filter') === initialFilter);
          if (matchingPill) {
            matchingPill.click();
          }
        }

        if (initialInquire) {
          this.openModal(initialInquire);
        }
      } catch (err) {
        console.warn('URL parameter handling skipped:', err);
      }
    },

    /**
     * Bind editorial filter pills
     */
    bindFilters: function () {
      this.filterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          const filter = e.currentTarget.getAttribute('data-filter') || 'all';

          // Update active pill
          this.filterPills.forEach(p => p.classList.remove('classes-filter-pill--active'));
          e.currentTarget.classList.add('classes-filter-pill--active');

          this.applyFilter(filter);
        });
      });
    },

    applyFilter: function (filterKey) {
      let visibleCount = 0;

      this.classCards.forEach(card => {
        const categories = (card.getAttribute('data-categories') || '').split(' ');
        const matches = filterKey === 'all' || categories.includes(filterKey);

        if (matches) {
          card.classList.remove('class-spread--hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 60);
          visibleCount++;
        } else {
          card.classList.add('class-spread--hidden');
        }
      });

      this.updateCount(visibleCount);
    },

    updateCount: function (count) {
      if (!this.counterEl) return;
      const num = typeof count === 'number' ? count : this.classCards.length;
      const pad = String(num).padStart(2, '0');
      this.counterEl.textContent = `(${pad} ${num === 1 ? 'class' : 'classes'})`;
    },

    /**
     * Booking & Inquiry Modal
     */
    bindModal: function () {
      // Trigger buttons
      document.querySelectorAll('[data-enquire-class]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const classId = btn.getAttribute('data-enquire-class');
          this.openModal(classId);
        });
      });

      if (!this.modal) return;

      // Close button
      const closeBtn = this.modal.querySelector('.class-modal__close');
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
        if (e.key === 'Escape' && this.modal.classList.contains('class-modal--open')) {
          this.closeModal();
        }
      });
    },

    openModal: function (classId) {
      if (!this.modal || !window.NEXUS_CLASSES) return;

      const data = window.NEXUS_CLASSES.find(c => c.id === classId);
      if (!data) return;

      const titleEl = this.modal.querySelector('#modal-class-title');
      const badgeEl = this.modal.querySelector('#modal-class-badge');
      const branchEl = this.modal.querySelector('#modal-class-branch');
      const descEl = this.modal.querySelector('#modal-class-desc');
      const whatsappBtn = this.modal.querySelector('#modal-class-whatsapp');

      if (titleEl) titleEl.textContent = data.name;
      if (badgeEl) badgeEl.textContent = `${data.intensity} · ${data.duration}`;
      if (branchEl) branchEl.textContent = `📍 Available at: ${data.branchAvailability.join(', ')}`;
      if (descEl) descEl.textContent = data.description;

      if (whatsappBtn) {
        const text = encodeURIComponent(data.whatsappMsg || `Hi Nexus! I would like to book or inquire about ${data.name}.`);
        whatsappBtn.href = `https://wa.me/919582333003?text=${text}`;
      }

      this.modal.classList.add('class-modal--open');
      this.modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    },

    closeModal: function () {
      if (!this.modal) return;
      this.modal.classList.remove('class-modal--open');
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  window.NexusClasses = ClassesController;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ClassesController.init());
  } else {
    ClassesController.init();
  }
})();
