/**
 * NEXUS — THE LIFTING CLUB
 * InstagramProvider Adapter
 * 
 * Clean architectural abstraction decoupling UI from Instagram data sources.
 * Supports:
 * 1. Curated Local Feed (Primary, instant, offline-capable, zero fragile scraping)
 * 2. Official On-Demand Embed Loader (Loads Instagram embed.js on demand without layout shift)
 * 3. Resilient Error Fallback Boundary ("FOLLOW @nexusliftingclub" state)
 */

(function () {
  'use strict';

  // ============================================================
  // ADAPTER 1: Curated Local Data Provider
  // ============================================================
  const CuratedFeedAdapter = {
    name: 'curated-local',

    async fetchPosts(options = {}) {
      const { filter = 'all', limit = 12 } = options;

      // Simulate fast network retrieval for skeleton testing (50ms)
      await new Promise(resolve => setTimeout(resolve, 60));

      if (!window.NEXUS_INSTAGRAM_POSTS || !Array.isArray(window.NEXUS_INSTAGRAM_POSTS)) {
        throw new Error('NEXUS_INSTAGRAM_POSTS data store not found');
      }

      let posts = [...window.NEXUS_INSTAGRAM_POSTS];

      if (filter && filter.toLowerCase() !== 'all') {
        const lowerFilter = filter.toLowerCase();
        posts = posts.filter(post => {
          if (lowerFilter === 'reels') return post.type === 'reel';
          return post.category.toLowerCase() === lowerFilter;
        });
      }

      return posts.slice(0, limit);
    },

    async getPostById(id) {
      if (!window.NEXUS_INSTAGRAM_POSTS) return null;
      return window.NEXUS_INSTAGRAM_POSTS.find(p => p.id === id) || null;
    }
  };

  // ============================================================
  // ADAPTER 2: Official Instagram Embed Loader (On-Demand)
  // ============================================================
  const OfficialEmbedAdapter = {
    scriptLoaded: false,
    loadingPromise: null,

    /**
     * Lazy-load the official Instagram embed script only when explicitly requested
     */
    ensureScript() {
      if (this.scriptLoaded && window.instgrm) {
        return Promise.resolve(window.instgrm);
      }

      if (this.loadingPromise) {
        return this.loadingPromise;
      }

      this.loadingPromise = new Promise((resolve, reject) => {
        if (window.instgrm) {
          this.scriptLoaded = true;
          return resolve(window.instgrm);
        }

        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.scriptLoaded = true;
          resolve(window.instgrm);
        };
        script.onerror = () => {
          reject(new Error('Official Instagram embed script failed to load.'));
        };
        document.head.appendChild(script);
      });

      return this.loadingPromise;
    },

    /**
     * Process an embed block without blocking page rendering
     */
    async processEmbeds() {
      try {
        const instgrm = await this.ensureScript();
        if (instgrm && instgrm.Embeds) {
          instgrm.Embeds.process();
        }
      } catch (err) {
        console.warn('Instagram Embed script processing note:', err.message);
      }
    }
  };

  // ============================================================
  // CORE PROVIDER INTERFACE
  // ============================================================
  const InstagramProvider = {
    activeAdapter: CuratedFeedAdapter,
    embedAdapter: OfficialEmbedAdapter,
    isFallbackActive: false,

    /**
     * Configure active adapter
     */
    useAdapter(adapter) {
      this.activeAdapter = adapter;
    },

    /**
     * Retrieve feed items with robust fallback boundary
     */
    async getFeed(options = {}) {
      try {
        const posts = await this.activeAdapter.fetchPosts(options);
        this.isFallbackActive = false;
        return {
          success: true,
          data: posts,
          isFallback: false
        };
      } catch (err) {
        console.error('InstagramProvider error:', err);
        this.isFallbackActive = true;
        return {
          success: false,
          error: err.message,
          isFallback: true,
          data: []
        };
      }
    },

    /**
     * Get single post by ID
     */
    async getPost(id) {
      if (this.activeAdapter.getPostById) {
        return await this.activeAdapter.getPostById(id);
      }
      return null;
    },

    /**
     * Activate official on-demand embed
     */
    async loadEmbed() {
      return await this.embedAdapter.processEmbeds();
    }
  };

  window.InstagramProvider = InstagramProvider;
})();
