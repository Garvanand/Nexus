'use client';

import React from 'react';

interface InstagramItem {
  id: string;
  type: string;
  url: string;
  thumbnail: string;
  caption: string;
  label: string;
}

export const InstagramCarousel: React.FC = () => {
  const socialPosts: InstagramItem[] = [
    {
      id: 'ig-1',
      type: 'REEL',
      label: 'STRENGTH // SECTOR 85',
      caption: 'Deadlift sessions on the platform. Hard work, every day.',
      thumbnail: '/assets/images/reel_deadlift.jpg',
      url: 'https://www.instagram.com/nexusliftingclub/',
    },
    {
      id: 'ig-2',
      type: 'COMMUNITY',
      label: 'MEMBERS // SESSIONS',
      caption: 'The people who show up and push each other forward.',
      thumbnail: '/assets/images/reel_community.jpg',
      url: 'https://www.instagram.com/nexusliftingclub/',
    },
    {
      id: 'ig-3',
      type: 'TURF',
      label: 'ROOFTOP CRICKET // SECTOR 86',
      caption: 'Evening games under the lights on our rooftop cricket turf.',
      thumbnail: '/assets/images/space_cricket.jpg',
      url: 'https://www.instagram.com/nexusliftingclub/',
    },
    {
      id: 'ig-4',
      type: 'TRAINING',
      label: 'DAILY WORK // SESSIONS',
      caption: 'Consistent effort on the training floor across both clubs.',
      thumbnail: '/assets/images/photo6.webp',
      url: 'https://www.instagram.com/nexusliftingclub/',
    },
  ];

  return (
    <section className="section social-editorial-section" id="instagram" aria-label="Nexus Instagram Feed">
      <div className="container">
        <div className="social-editorial__header">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="eyebrow-line"></span>
              <span>FROM INSTAGRAM</span>
            </div>
            <h2 className="heading-section">
              NEXUS ON INSTAGRAM.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/nexusliftingclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Follow @nexusliftingclub ↗
          </a>
        </div>

        {/* Curated Social Media Highlights */}
        <div className="social-row">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
              title={`View on Instagram: ${post.caption}`}
            >
              <img src={post.thumbnail} alt={post.caption} className="social-item__img" />
              <div className="social-item__overlay"></div>
              <div className="social-item__meta">
                <div className="social-item__handle">{post.label}</div>
                <p className="social-item__caption">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
