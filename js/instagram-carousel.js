/**
 * NEXUS — THE LIFTING CLUB
 * Instagram Editorial Carousel Controller
 * 
 * Implements:
 * - Desktop horizontal drag with velocity / threshold
 * - Mobile CSS scroll-snap
 * - Keyboard navigation (Arrow keys)
 * - Category filtering (All, Reels, Atmosphere, Classes, Community, Facilities)
 * - Scroll progress indicator & pagination counter
 * - Single-video modal lightbox (no autoplay clutter)
 * - Skeleton loading & graceful fallback boundary
 */

(function () {
  'use strict';

  const InstagramCarousel = {
    container: null,
    carousel: null,
    progressBar: null,
    counter: null,
    prevBtn: null,
    nextBtn: null,
    filterBtns: [],
    modal: null,

    // State
    currentFilter: 'all',
    activePosts: [],
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    isDragging: false,
    dragThreshold: 6,
    activePostInModal: null,

    init: function () {
      this.container = document.getElementById('instagram') || document.getElementById('instagram-feed-section');
      if (!this.container) return;

      this.carousel = document.getElementById('ig-carousel');
      this.progressBar = document.getElementById('ig-progress-bar');
      this.counter = document.getElementById('ig-counter');
      this.prevBtn = document.getElementById('ig-prev-btn');
      this.nextBtn = document.getElementById('ig-next-btn');
      this.filterBtns = document.querySelectorAll('.ig-filter-btn');
      this.modal = document.getElementById('ig-modal');

      this.bindControls();
      this.bindDrag();
      this.bindKeyboard();
      this.loadFeed('all');
    },

    /**
     * Bind button clicks & filter controls
     */
    bindControls: function () {
      // Prev & Next navigation
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.scrollByCards(-1));
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.scrollByCards(1));
      }

      // Filter pills
      this.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const filter = e.currentTarget.getAttribute('data-filter') || 'all';
          this.filterBtns.forEach(b => b.classList.remove('ig-filter-btn--active'));
          e.currentTarget.classList.add('ig-filter-btn--active');
          this.loadFeed(filter);
        });
      });

      // Scroll event for progress bar
      if (this.carousel) {
        let ticking = false;
        this.carousel.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              this.updateProgress();
              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });
      }

      // Modal close handlers
      if (this.modal) {
        const closeBtn = this.modal.querySelector('.ig-modal__close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => this.closeModal());
        }
        this.modal.addEventListener('click', (e) => {
          if (e.target === this.modal) {
            this.closeModal();
          }
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && this.modal.classList.contains('ig-modal--open')) {
            this.closeModal();
          }
        });
      }
    },

    /**
     * Desktop drag-to-scroll interaction
     */
    bindDrag: function () {
      if (!this.carousel) return;

      const el = this.carousel;

      el.addEventListener('mousedown', (e) => {
        // Ignore clicks on links if not dragging
        this.isDown = true;
        this.isDragging = false;
        this.startX = e.pageX - el.offsetLeft;
        this.scrollLeft = el.scrollLeft;
        el.style.scrollBehavior = 'auto'; // Instant during drag
      });

      window.addEventListener('mouseup', () => {
        if (!this.isDown) return;
        this.isDown = false;
        if (this.carousel) {
          this.carousel.style.scrollBehavior = 'smooth';
        }
      });

      el.addEventListener('mousemove', (e) => {
        if (!this.isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - this.startX) * 1.25; // 1.25x speed multiplier

        if (Math.abs(walk) > this.dragThreshold) {
          this.isDragging = true;
        }

        el.scrollLeft = this.scrollLeft - walk;
      });

      // Intercept link clicks if user was dragging
      el.addEventListener('click', (e) => {
        if (this.isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);
    },

    /**
     * Keyboard navigation for accessibility
     */
    bindKeyboard: function () {
      if (!this.carousel) return;

      this.carousel.setAttribute('tabindex', '0');
      this.carousel.setAttribute('role', 'region');
      this.carousel.setAttribute('aria-label', 'Instagram carousel of Nexus Lifting Club');

      this.carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.scrollByCards(1);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.scrollByCards(-1);
        }
      });
    },

    /**
     * Scroll track by N card units
     */
    scrollByCards: function (direction) {
      if (!this.carousel) return;
      const card = this.carousel.querySelector('.ig-card');
      const cardWidth = card ? card.offsetWidth + 24 : 340;
      this.carousel.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
      });
    },

    /**
     * Update progress indicator and counter
     */
    updateProgress: function () {
      if (!this.carousel || !this.progressBar) return;

      const maxScroll = this.carousel.scrollWidth - this.carousel.clientWidth;
      const currentScroll = this.carousel.scrollLeft;

      let progress = 0;
      if (maxScroll > 0) {
        progress = Math.min(100, Math.max(0, (currentScroll / maxScroll) * 100));
      }

      this.progressBar.style.width = `${Math.max(15, progress)}%`;

      // Update Nav buttons disabled states
      if (this.prevBtn) {
        this.prevBtn.disabled = currentScroll <= 4;
      }
      if (this.nextBtn) {
        this.nextBtn.disabled = currentScroll >= maxScroll - 4;
      }

      // Update counter
      if (this.counter && this.activePosts.length > 0) {
        const cardWidth = 340;
        const activeIdx = Math.min(
          this.activePosts.length,
          Math.max(1, Math.round(currentScroll / cardWidth) + 1)
        );
        const pad = (n) => String(n).padStart(2, '0');
        this.counter.textContent = `${pad(activeIdx)} / ${pad(this.activePosts.length)}`;
      }
    },

    /**
     * Fetch feed through InstagramProvider adapter
     */
    loadFeed: async function (filter = 'all') {
      this.currentFilter = filter;
      this.renderSkeletons(4);

      if (!window.InstagramProvider) {
        this.renderFallback('Instagram Provider could not be loaded.');
        return;
      }

      const response = await window.InstagramProvider.getFeed({ filter, limit: 10 });

      if (!response.success || !response.data || response.data.length === 0) {
        this.renderFallback(response.error);
        return;
      }

      this.activePosts = response.data;
      this.renderCards(this.activePosts);
    },

    /**
     * Render skeleton cards during initial loading
     */
    renderSkeletons: function (count = 4) {
      if (!this.carousel) return;
      let skeletons = '';
      for (let i = 0; i < count; i++) {
        skeletons += `<div class="ig-skeleton-card" aria-hidden="true"></div>`;
      }
      this.carousel.innerHTML = skeletons;
    },

    /**
     * Render card markup
     */
    renderCards: function (posts) {
      if (!this.carousel) return;

      const typeBadge = {
        reel: `<span class="ig-card__type-pill"><svg viewBox="0 0 24 24" fill="currentColor" style="width:12px;height:12px;"><polygon points="5 3 19 12 5 21 5 3"/></svg> Reel</span>`,
        carousel: `<span class="ig-card__type-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><rect x="2" y="2" width="16" height="16" rx="2"/><rect x="6" y="6" width="16" height="16" rx="2"/></svg> Series</span>`,
        image: `<span class="ig-card__type-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> Photo</span>`
      };

      const html = posts.map(post => {
        const isReel = post.type === 'reel';
        const statsHtml = post.stats ? `
          <div class="ig-card__stats">
            ${post.stats.views ? `<span>▶ ${post.stats.views}</span>` : ''}
            <span>♥ ${post.stats.likes}</span>
          </div>
        ` : '';

        return `
          <article class="ig-card" data-id="${post.id}" role="group" aria-label="${post.title}">
            <div class="ig-card__bg">
              <img src="${post.poster}" alt="${post.title}" class="ig-card__img" loading="lazy">
            </div>
            <div class="ig-card__overlay"></div>

            <div class="ig-card__top">
              ${typeBadge[post.type] || typeBadge.image}
              <span class="ig-card__category-tag">${post.category}</span>
            </div>

            ${isReel ? `
              <div class="ig-card__play" aria-label="Play Reel preview">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            ` : ''}

            <div class="ig-card__bottom">
              ${statsHtml}
              <h3 class="ig-card__title">${post.title}</h3>
              <p class="ig-card__caption">${post.caption}</p>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <a href="${post.permalink}" target="_blank" rel="noopener noreferrer" class="ig-card__link" data-link="ig">
                  View On Instagram <span class="arrow">↗</span>
                </a>
                <button type="button" class="btn btn-icon ig-card__preview-btn" data-preview="${post.id}" title="Preview" style="width:32px;height:32px;padding:0;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('');

      this.carousel.innerHTML = html;
      this.carousel.scrollLeft = 0;
      this.updateProgress();

      // Attach card preview clicks
      this.carousel.querySelectorAll('[data-preview]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const id = btn.getAttribute('data-preview');
          const post = this.activePosts.find(p => p.id === id);
          if (post) this.openModal(post);
        });
      });

      // Card whole-area click opens preview if not dragging
      this.carousel.querySelectorAll('.ig-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('a, button')) return; // let buttons handle themselves
          if (this.isDragging) return;
          const id = card.getAttribute('data-id');
          const post = this.activePosts.find(p => p.id === id);
          if (post) this.openModal(post);
        });
      });
    },

    /**
     * Fallback UI if Instagram API or data store is unavailable
     */
    renderFallback: function (errorMessage) {
      if (!this.carousel) return;

      this.carousel.innerHTML = `
        <div class="ig-fallback-container">
          <span class="ig-fallback__badge">
            <span class="dot-live"></span> Official Instagram Hub
          </span>
          <h3 class="ig-fallback__title">FOLLOW @nexusliftingclub</h3>
          <p class="ig-fallback__desc">
            Discover daily heavy lift sessions, member transformations, real class clips, and club culture directly on Instagram.
          </p>
          <div style="display:flex; gap:16px; margin-top:12px; flex-wrap:wrap; justify-content:center;">
            <a href="https://www.instagram.com/nexusliftingclub/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Open @nexusliftingclub On Instagram ↗
            </a>
            <button type="button" class="btn btn-secondary" onclick="window.NexusInstagramCarousel.loadFeed('all')">
              Reload Feed
            </button>
          </div>
        </div>
      `;

      if (this.progressBar) this.progressBar.style.width = '100%';
      if (this.counter) this.counter.textContent = 'FOLLOW';
    },

    /**
     * Lightbox Modal to inspect a single Reel or post safely without multiple audios
     */
    openModal: function (post) {
      if (!this.modal) return;
      this.activePostInModal = post;

      const mediaCol = this.modal.querySelector('.ig-modal__media-col');
      const contentCol = this.modal.querySelector('.ig-modal__content-col');

      mediaCol.innerHTML = `
        <img src="${post.poster}" alt="${post.title}" style="max-height:85vh; width:100%; object-fit:contain;">
        ${post.type === 'reel' ? `
          <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(0,0,0,0.35); pointer-events:none;">
            <div class="ig-card__play" style="position:static; transform:none; width:64px; height:64px;">
              <svg viewBox="0 0 24 24" style="width:24px;height:24px;fill:#FAF9F6;transform:translateX(2px);"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
            <span style="font-family:var(--ff-display); font-size:0.75rem; letter-spacing:var(--tracking-wider); text-transform:uppercase; color:#FAF9F6; margin-top:12px;">
              Reel Video Preview
            </span>
          </div>
        ` : ''}
      `;

      contentCol.innerHTML = `
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-16);">
            <span style="font-family:var(--ff-display); font-size:0.75rem; font-weight:bold; letter-spacing:var(--tracking-wider); text-transform:uppercase; color:var(--accent);">
              ${post.category} · ${post.type.toUpperCase()}
            </span>
            <span style="font-size:0.8125rem; color:var(--text-tertiary);">
              ${post.date}
            </span>
          </div>

          <h3 style="font-family:var(--ff-display); font-size:1.5rem; text-transform:uppercase; color:var(--text-primary); margin-bottom:var(--space-12);">
            ${post.title}
          </h3>

          <p style="color:var(--text-secondary); line-height:var(--leading-relaxed); font-size:0.9375rem; margin-bottom:var(--space-20);">
            ${post.caption}
          </p>

          <div style="border-top:1px solid var(--border-subtle); padding-top:var(--space-16); margin-bottom:var(--space-24);">
            <div style="font-size:0.8125rem; color:var(--text-tertiary); margin-bottom:4px;">
              📍 ${post.location}
            </div>
            <div style="font-family:var(--ff-display); font-size:0.8125rem; color:var(--accent); font-weight:600;">
              @nexusliftingclub
            </div>
          </div>
        </div>

        <div style="display:flex; gap:var(--space-12); flex-wrap:wrap;">
          <a href="${post.permalink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex:1; justify-content:center;">
            Open Post on Instagram ↗
          </a>
          <button type="button" class="btn btn-secondary" onclick="window.NexusInstagramCarousel.closeModal()">
            Close
          </button>
        </div>
      `;

      this.modal.classList.add('ig-modal--open');
      this.modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    },

    closeModal: function () {
      if (!this.modal) return;
      this.modal.classList.remove('ig-modal--open');
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      this.activePostInModal = null;
    }
  };

  window.NexusInstagramCarousel = InstagramCarousel;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => InstagramCarousel.init());
  } else {
    InstagramCarousel.init();
  }
})();
