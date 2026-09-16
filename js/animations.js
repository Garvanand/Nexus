/**
 * NEXUS — THE LIFTING CLUB
 * Animations Module
 * 
 * Handles: Intersection Observer reveals, counter animation,
 * image lazy load states, parallax effects.
 */

(function () {
  'use strict';

  // ============================================================
  // INTERSECTION OBSERVER — Scroll Reveals
  // ============================================================

  function initRevealObserver() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Immediately show everything
      document.querySelectorAll('.reveal, .reveal-stagger, .reveal-clip').forEach(el => {
        el.classList.add('is-visible', 'revealed');
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible', 'revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-stagger, .reveal-clip').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // ============================================================
  // COUNTER ANIMATION
  // ============================================================

  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const suffix = element.getAttribute('data-suffix') || '';
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      const current = Math.round(start + (target - start) * easeOut);

      element.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  function initCounterAnimation() {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    let hasAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          const counters = statsSection.querySelectorAll('[data-count]');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            animateCounter(counter, target);
          });

          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterObserver.observe(statsSection);
  }

  // ============================================================
  // IMAGE LAZY LOAD STATES
  // ============================================================

  function initImageLoadStates() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    images.forEach(img => {
      // Add loading state
      const parent = img.parentElement;
      if (parent) {
        parent.classList.add('img-loading');
      }

      // Handle load
      if (img.complete) {
        onImageLoaded(img);
      } else {
        img.addEventListener('load', () => onImageLoaded(img));
        img.addEventListener('error', () => onImageError(img));
      }
    });
  }

  function onImageLoaded(img) {
    const parent = img.parentElement;
    if (parent) {
      parent.classList.remove('img-loading');
    }
    img.classList.add('img-loaded');
  }

  function onImageError(img) {
    const parent = img.parentElement;
    if (parent) {
      parent.classList.remove('img-loading');
      // Graceful degradation — just leave the dark background
      parent.style.backgroundColor = 'var(--clr-black-soft)';
    }
    // Hide broken image icon
    img.style.display = 'none';
  }

  // ============================================================
  // HERO PARALLAX (subtle)
  // ============================================================

  function initHeroParallax() {
    const heroImg = document.querySelector('.hero__bg img');
    if (!heroImg) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      const heroHeight = document.getElementById('hero')?.offsetHeight || 600;

      // Only apply parallax when hero is in view
      if (scrollY < heroHeight) {
        const translate = scrollY * 0.15; // 15% parallax
        heroImg.style.transform = `translateY(${translate}px) scale(1.05)`;
      }
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // MARQUEE PAUSE ON HOVER (handled in CSS, but add keyboard)
  // ============================================================

  function initMarquee() {
    const marquee = document.querySelector('.statement__marquee, .manifesto__marquee');
    if (!marquee) return;

    // Pause on focus within (keyboard accessibility)
    marquee.addEventListener('focusin', () => {
      marquee.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('focusout', () => {
      marquee.style.animationPlayState = 'running';
    });
  }

  // ============================================================
  // GALLERY IMAGE HOVER EFFECT (touch enhancement)
  // ============================================================

  function initGalleryTouch() {
    if (window.innerWidth >= 768) return;

    const items = document.querySelectorAll('.space__item');
    items.forEach(item => {
      item.addEventListener('click', function () {
        // Remove active from all
        items.forEach(i => i.classList.remove('space__item--active'));
        this.classList.add('space__item--active');
      });
    });
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {
    initRevealObserver();
    initCounterAnimation();
    initImageLoadStates();
    initHeroParallax();
    initMarquee();
    initGalleryTouch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
