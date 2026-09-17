'use client';

import React from 'react';

export const InstagramCarousel: React.FC = () => {
  const socialPosts = [
    {
      id: 'post-1',
      type: 'REEL // LIFTING',
      caption: 'Heavy pulls on calibrated steel. Sector 85 power bays.',
      image: '/assets/images/reel_deadlift.jpg',
      url: 'https://www.instagram.com/nexus_the_lifting_club/',
    },
    {
      id: 'post-2',
      type: 'COMMUNITY // SATURDAY',
      caption: 'Post-session brotherhood. Building strength together.',
      image: '/assets/images/reel_community.jpg',
      url: 'https://www.instagram.com/nexus_the_lifting_club/',
    },
    {
      id: 'post-3',
      type: 'RECREATION // CRICKET',
      caption: 'Night lights under the Greater Faridabad sky at Sector 86.',
      image: '/assets/images/space_cricket.jpg',
      url: 'https://www.instagram.com/nexus_the_lifting_club/',
    },
    {
      id: 'post-4',
      type: 'DISCIPLINE // MORNING',
      caption: '6:00 AM cadence. The floor belongs to those who show up.',
      image: '/assets/images/photo6.webp',
      url: 'https://www.instagram.com/nexus_the_lifting_club/',
    },
  ];

  return (
    <section className="section social-editorial-section" id="social" aria-label="Social Feed">
      <div className="container">
        <div className="social-editorial__header">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="eyebrow-line"></span>
              <span>LIVE ATMOSPHERE</span>
            </div>
            <h2 className="heading-section">
              THIS IS WHAT NEXUS FEELS LIKE.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/nexus_the_lifting_club/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Follow @nexus_the_lifting_club ↗
          </a>
        </div>

        {/* High-Impact Portrait Editorial Row */}
        <div className="social-row">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <img src={post.image} alt={post.caption} className="social-item__img" />
              <div className="social-item__overlay"></div>
              <div className="social-item__meta">
                <div className="social-item__handle">{post.type}</div>
                <p className="social-item__caption">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
