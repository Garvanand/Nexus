'use client';

import React from 'react';
import Link from 'next/link';

export const TrainingStory: React.FC = () => {
  const stories = [
    {
      num: '01 // STRENGTH',
      title: 'STRENGTH',
      desc: 'Built around serious resistance training, quality barbells, dumbbells, and lifting platforms without clutter.',
      image: '/assets/images/photo1.webp',
      link: '/training',
    },
    {
      num: '02 // MOVEMENT',
      title: 'MOVE',
      desc: 'Dedicated group movement studios with wooden flooring for high-energy Zumba, athletic Aerobics, and restorative Yoga.',
      image: '/assets/images/photo9.webp',
      link: '/classes',
    },
    {
      num: '03 // PLAY',
      title: 'PLAY',
      desc: 'An outdoor rooftop cricket turf atop Sector 86. Switch off from routine, compete, and play under the open sky.',
      image: '/assets/images/space_cricket.jpg',
      link: '/locations/sector-86',
    },
  ];

  return (
    <section className="section story-section" id="story" aria-label="Training Story">
      <div className="container">
        <div className="story-header">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span className="eyebrow-line"></span>
            <span>THREE ATHLETIC PILLARS</span>
          </div>
          <h2 className="heading-section">
            ENGINEERED FOR PROGRESS.
          </h2>
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <Link key={story.title} href={story.link} className="story-card">
              <div className="story-card__img-wrap">
                <img src={story.image} alt={story.title} className="story-card__img" />
                <div className="story-card__overlay"></div>
              </div>
              <div className="story-card__content">
                <div className="story-card__num">{story.num}</div>
                <h3 className="story-card__title">{story.title}</h3>
                <p className="story-card__desc">{story.desc}</p>
                <div style={{ marginTop: '1.25rem' }}>
                  <span className="btn-link">Explore Discipline →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
