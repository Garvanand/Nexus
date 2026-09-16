/**
 * NEXUS — THE LIFTING CLUB
 * Global Branch Context & State Manager
 * 
 * Manages active branch selection across all components:
 * Hero pill selector, Split selector, Sticky bar, Walkthrough scheduler,
 * and persistent storage.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'nexus_selected_branch';
  const DEFAULT_BRANCH = 'sector-85';

  const BranchContext = {
    currentId: DEFAULT_BRANCH,

    /**
     * Initialize context from URL parameter, storage, or default
     */
    init: function () {
      const urlParams = new URLSearchParams(window.location.search);
      const urlBranch = urlParams.get('branch');
      const stored = sessionStorage.getItem(STORAGE_KEY);

      if (urlBranch && window.NEXUS_BRANCHES && window.NEXUS_BRANCHES[urlBranch]) {
        this.currentId = urlBranch;
      } else if (stored && window.NEXUS_BRANCHES && window.NEXUS_BRANCHES[stored]) {
        this.currentId = stored;
      } else {
        this.currentId = DEFAULT_BRANCH;
      }

      this.syncUI(this.currentId, false);
      this.attachListeners();
    },

    /**
     * Get current branch object
     */
    get: function () {
      return (window.NEXUS_BRANCHES && window.NEXUS_BRANCHES[this.currentId]) || null;
    },

    /**
     * Set active branch globally
     */
    set: function (branchId, updateUrl = true) {
      if (!window.NEXUS_BRANCHES || !window.NEXUS_BRANCHES[branchId]) return;

      this.currentId = branchId;
      sessionStorage.setItem(STORAGE_KEY, branchId);

      if (updateUrl && window.history && window.history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set('branch', branchId);
        window.history.replaceState({}, '', url.toString());
      }

      this.syncUI(branchId, true);

      // Dispatch global event
      window.dispatchEvent(new CustomEvent('nexus:branchChanged', {
        detail: {
          branchId: branchId,
          branch: window.NEXUS_BRANCHES[branchId]
        }
      }));
    },

    /**
     * Synchronize DOM components across the site
     */
    syncUI: function (branchId, animate = false) {
      const branch = window.NEXUS_BRANCHES[branchId];
      if (!branch) return;

      // 1. Update Hero Pills
      const pill85 = document.getElementById('hero-pill-85');
      const pill86 = document.getElementById('hero-pill-86');
      const heroSummary = document.getElementById('hero-branch-summary');

      if (pill85 && pill86) {
        if (branchId === 'sector-85') {
          pill85.classList.add('hero__branch-pill--active');
          pill85.setAttribute('aria-selected', 'true');
          pill86.classList.remove('hero__branch-pill--active');
          pill86.setAttribute('aria-selected', 'false');
        } else {
          pill86.classList.add('hero__branch-pill--active');
          pill86.setAttribute('aria-selected', 'true');
          pill85.classList.remove('hero__branch-pill--active');
          pill85.setAttribute('aria-selected', 'false');
        }
      }

      if (heroSummary) {
        heroSummary.textContent = branchId === 'sector-85'
          ? 'Flagship Lifting Floor · Power Racks · Dedicated Turf Track'
          : 'Group Studios · Zumba & Yoga Arena · Rooftop Cricket Turf';
      }

      // 2. Update Split Selector Panels
      const panel85 = document.querySelector('.branch-split__panel[data-branch="sector-85"]');
      const panel86 = document.querySelector('.branch-split__panel[data-branch="sector-86"]');

      if (panel85 && panel86) {
        if (branchId === 'sector-85') {
          panel85.classList.add('branch-split__panel--active');
          panel86.classList.remove('branch-split__panel--active');
        } else {
          panel86.classList.add('branch-split__panel--active');
          panel85.classList.remove('branch-split__panel--active');
        }
      }

      // 3. Update Walkthrough Scheduler Option
      const visitBranchBtns = document.querySelectorAll('#visit-branch-options .visit__btn-option');
      visitBranchBtns.forEach(btn => {
        const val = btn.getAttribute('data-val') || '';
        if (
          (branchId === 'sector-85' && val.includes('85')) ||
          (branchId === 'sector-86' && val.includes('86'))
        ) {
          btn.classList.add('visit__btn-option--active');
        } else {
          btn.classList.remove('visit__btn-option--active');
        }
      });

      // 4. Update Sticky Mobile Bar WhatsApp message
      const stickyWhatsapp = document.getElementById('sticky-whatsapp');
      if (stickyWhatsapp) {
        const text = encodeURIComponent(`Hi Nexus! I am interested in ${branch.name} membership details.`);
        stickyWhatsapp.href = `https://wa.me/919582333003?text=${text}`;
      }
    },

    /**
     * Attach click handlers for components
     */
    attachListeners: function () {
      // Hero pills
      const pill85 = document.getElementById('hero-pill-85');
      const pill86 = document.getElementById('hero-pill-86');

      if (pill85) {
        pill85.addEventListener('click', () => this.set('sector-85'));
      }
      if (pill86) {
        pill86.addEventListener('click', () => this.set('sector-86'));
      }

      // Split panels click
      const panels = document.querySelectorAll('.branch-split__panel');
      panels.forEach(panel => {
        panel.addEventListener('click', (e) => {
          // If clicked on an interactive link/button, let it navigate
          if (e.target.closest('a, button')) return;

          const branchId = panel.getAttribute('data-branch');
          if (branchId) {
            this.set(branchId);
          }
        });
      });
    }
  };

  window.NexusBranchContext = BranchContext;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => BranchContext.init());
  } else {
    BranchContext.init();
  }
})();
