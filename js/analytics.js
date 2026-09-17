/**
 * ============================================================
 * NEXUS — THE LIFTING CLUB
 * Analytics Abstraction Layer (/js/analytics.js)
 * 
 * Pluggable event tracking bus for conversion actions,
 * WhatsApp clicks, lead generation, and branch switches.
 * Supports Console, LocalStorage, Google Analytics (gtag),
 * Meta Pixel (fbq), and Custom Webhooks.
 * ============================================================
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAnalytics = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  // --- PROVIDER INTERFACE ---
  class AnalyticsProvider {
    track(eventName, properties) {
      throw new Error('AnalyticsProvider must implement track(eventName, properties)');
    }
  }

  // 1. Console Logger (transparent for debugging)
  class ConsoleAnalyticsProvider extends AnalyticsProvider {
    constructor(options = {}) {
      super();
      this.enabled = options.enabled ?? true;
    }

    track(eventName, properties) {
      if (!this.enabled) return;
      const time = new Date().toLocaleTimeString();
      console.log(
        `%c[NEXUS ANALYTICS] %c${eventName} %c@ ${time}`,
        'color: #C8B830; font-weight: bold; background: #181818; padding: 2px 6px; border-radius: 2px;',
        'color: #FAF9F6; font-weight: 600;',
        'color: #888;',
        properties
      );
    }
  }

  // 2. LocalStorage Store (audit trail of the last 50 events)
  class LocalStorageAnalyticsProvider extends AnalyticsProvider {
    constructor(storageKey = 'nexus_analytics_events', maxEvents = 50) {
      super();
      this.storageKey = storageKey;
      this.maxEvents = maxEvents;
    }

    track(eventName, properties) {
      try {
        if (typeof window === 'undefined' || !window.localStorage) return;
        const raw = window.localStorage.getItem(this.storageKey);
        const list = raw ? JSON.parse(raw) : [];
        const entry = {
          event: eventName,
          properties,
          timestamp: new Date().toISOString()
        };
        list.push(entry);
        if (list.length > this.maxEvents) {
          list.splice(0, list.length - this.maxEvents);
        }
        window.localStorage.setItem(this.storageKey, JSON.stringify(list));
      } catch (err) {
        console.warn('LocalStorageAnalyticsProvider error:', err);
      }
    }

    getEvents() {
      try {
        if (typeof window === 'undefined' || !window.localStorage) return [];
        const raw = window.localStorage.getItem(this.storageKey);
        return raw ? JSON.parse(raw) : [];
      } catch (err) {
        return [];
      }
    }

    clear() {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.removeItem(this.storageKey);
        }
      } catch (err) {}
    }
  }

  // 3. Google Analytics 4 (gtag)
  class GtagAnalyticsProvider extends AnalyticsProvider {
    track(eventName, properties) {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', eventName, properties);
      }
    }
  }

  // 4. Meta Pixel (fbq)
  class MetaPixelAnalyticsProvider extends AnalyticsProvider {
    track(eventName, properties) {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName, properties);
      }
    }
  }

  // 5. Webhook Provider (Optional CRM / Zapier integration)
  class WebhookAnalyticsProvider extends AnalyticsProvider {
    constructor(endpointUrl) {
      super();
      this.endpointUrl = endpointUrl;
    }

    track(eventName, properties) {
      if (!this.endpointUrl || typeof fetch === 'undefined') return;
      try {
        fetch(this.endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: eventName,
            properties,
            timestamp: new Date().toISOString()
          }),
          keepalive: true
        }).catch(() => {});
      } catch (e) {}
    }
  }

  // --- ANALYTICS BUS / SINGLETON ---
  class AnalyticsBus {
    constructor() {
      this.providers = [];
      this.defaultProperties = {};
      
      // Default built-in providers
      this.localStore = new LocalStorageAnalyticsProvider();
      this.addProvider(new ConsoleAnalyticsProvider());
      this.addProvider(this.localStore);
      this.addProvider(new GtagAnalyticsProvider());
      this.addProvider(new MetaPixelAnalyticsProvider());
    }

    addProvider(provider) {
      if (provider instanceof AnalyticsProvider || typeof provider?.track === 'function') {
        this.providers.push(provider);
      }
      return this;
    }

    setDefaultProperty(key, value) {
      this.defaultProperties[key] = value;
    }

    track(eventName, properties = {}) {
      const pageInfo = typeof window !== 'undefined' ? {
        path: window.location.pathname,
        search: window.location.search,
        title: document.title
      } : {};

      const payload = {
        ...this.defaultProperties,
        ...pageInfo,
        ...properties,
        timestamp: new Date().toISOString()
      };

      for (const provider of this.providers) {
        try {
          provider.track(eventName, payload);
        } catch (err) {
          console.error('[NEXUS ANALYTICS] Provider error:', err);
        }
      }

      // Also dispatch custom DOM event for other listeners
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        try {
          window.dispatchEvent(new CustomEvent('nexus:analytics', {
            detail: { event: eventName, properties: payload }
          }));
        } catch (e) {}
      }

      return payload;
    }

    getRecentEvents() {
      return this.localStore.getEvents();
    }
  }

  const instance = new AnalyticsBus();
  instance.AnalyticsProvider = AnalyticsProvider;
  instance.ConsoleAnalyticsProvider = ConsoleAnalyticsProvider;
  instance.LocalStorageAnalyticsProvider = LocalStorageAnalyticsProvider;
  instance.GtagAnalyticsProvider = GtagAnalyticsProvider;
  instance.MetaPixelAnalyticsProvider = MetaPixelAnalyticsProvider;
  instance.WebhookAnalyticsProvider = WebhookAnalyticsProvider;

  return instance;
});
