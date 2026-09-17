'use client';

import React, { useRef } from 'react';
import { NEXUS_INSTAGRAM_POSTS } from '../data/instagram';

export const InstagramCarousel: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollerRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    scrollerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="ig-section" id="instagram" aria-label="Instagram Feed">
      <div className="container">
        <div className="ig-header">
          <div>
            <div className="ig-header__eyebrow">
              <span className="ig-dot"></span> LIVE DISPATCHES // DAILY CULTURE
            </div>
            <h2 className="ig-header__title">
              THE CLUB IN REAL TIME.
            </h2>
          </div>

          <div className="ig-header__actions">
            <a
              href="https://www.instagram.com/nexusliftingclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-channel-btn"
            >
              <span>@nexusliftingclub</span>
              <span className="arrow">↗</span>
            </a>

            <div className="ig-nav-buttons">
              <button
                type="button"
                className="ig-nav-btn"
                aria-label="Scroll left"
                onClick={() => scrollByAmount('left')}
              >
                ←
              </button>
              <button
                type="button"
                className="ig-nav-btn"
                aria-label="Scroll right"
                onClick={() => scrollByAmount('right')}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ig-carousel-container">
        <div className="ig-carousel" ref={scrollerRef}>
          {NEXUS_INSTAGRAM_POSTS.map((post) => (
            <article key={post.id} className="ig-card">
              <div className="ig-card__visual">
                <img src={post.mediaUrl} alt={post.caption} className="ig-card__img" loading="lazy" />
                <div className="ig-card__overlay"></div>

                <div className="ig-card__badges">
                  <span className="ig-card__category">{post.category}</span>
                  {post.type === 'reel' && (
                    <span className="ig-card__type-pill">
                      ▶ Reel {post.duration}
                    </span>
                  )}
                  {post.type === 'carousel' && (
                    <span className="ig-card__type-pill">
                      ☷ Carousel
                    </span>
                  )}
                </div>

                <div className="ig-card__stats">
                  <span>♥ {post.engagement.likes}</span>
                  <span>💬 {post.engagement.comments}</span>
                </div>
              </div>

              <div className="ig-card__body">
                <div className="ig-card__meta">
                  <span className="ig-card__author">{post.author}</span>
                  <span className="ig-card__verified">✓</span>
                </div>

                <p className="ig-card__caption">{post.caption}</p>

                <a
                  href={post.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-card__link"
                >
                  View On Instagram ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
