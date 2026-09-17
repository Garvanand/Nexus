'use client';

import React from 'react';
import Link from 'next/link';
import { useBranch } from '../context/BranchContext';

export const TrainingExperience: React.FC = () => {
  const { getWhatsAppUrl } = useBranch();

  const chapters = [
    {
      num: '01',
      tag: 'STRENGTH',
      headline: 'BUILD WHAT LASTS.',
      desc: 'Free weights, power racks, barbells, and dedicated lifting areas. Built for progressive strength and daily workouts.',
      image: '/assets/images/training_strength.jpg',
      branch: 'Sector 85 & 86',
      link: '/training',
      whatsappContext: "Hi Nexus, I'm interested in strength training & gym access at the club.",
    },
    {
      num: '02',
      tag: 'ZUMBA',
      headline: 'ENERGY IN MOTION.',
      desc: 'High-tempo group dance cardio with energetic music and structured routines in our dedicated studio.',
      image: '/assets/images/training_zumba.jpg',
      branch: 'Sector 86 Studio Wing',
      link: '/classes',
      whatsappContext: "Hi Nexus, I'd like to check timings for Zumba batches at Sector 86.",
    },
    {
      num: '03',
      tag: 'YOGA',
      headline: 'MOVE WITH CONTROL.',
      desc: 'Guided stretching, breathwork, and mobility sessions to build flexibility, recover well, and balance your training.',
      image: '/assets/images/training_yoga.jpg',
      branch: 'Sector 86 Studio Wing',
      link: '/classes',
      whatsappContext: "Hi Nexus, I'm interested in yoga & mobility sessions at Sector 86.",
    },
    {
      num: '04',
      tag: 'AEROBICS',
      headline: 'KEEP MOVING.',
      desc: 'Cardiovascular interval training, step routines, and full-body conditioning circuits designed to build stamina.',
      image: '/assets/images/training_aerobics.jpg',
      branch: 'Sector 86 Studio Wing',
      link: '/classes',
      whatsappContext: "Hi Nexus, I'd like to enquire about aerobics and conditioning batches.",
    },
  ];

  return (
    <section className="section training-exp-section" id="disciplines" aria-label="Training Disciplines">
      <div className="container">
        <div className="training-exp-header">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="eyebrow-line"></span>
              <span>CORE DISCIPLINES</span>
            </div>
            <h2 className="heading-section">
              TRAIN YOUR WAY.
            </h2>
          </div>
          <p className="text-lead">
            Four primary training disciplines across our Greater Faridabad facilities. Choose your primary focus or combine them into your routine.
          </p>
        </div>

        {/* 4-Chapter Asymmetrical Grid */}
        <div className="training-chapters-grid">
          {chapters.map((ch) => (
            <div key={ch.num} className="training-chapter-card">
              <div className="training-chapter-card__bg">
                <img src={ch.image} alt={ch.headline} className="training-chapter-card__img" />
                <div className="training-chapter-card__overlay"></div>
              </div>

              <div className="training-chapter-card__content">
                <div className="training-chapter-card__top">
                  <span className="chapter-num">{ch.num} // {ch.tag}</span>
                  <span className="chapter-branch">{ch.branch}</span>
                </div>

                <h3 className="training-chapter-card__title">{ch.headline}</h3>
                <p className="training-chapter-card__desc">{ch.desc}</p>

                <div className="training-chapter-card__actions">
                  <Link href={ch.link} className="btn-link">
                    Explore Details →
                  </Link>
                  <a
                    href={getWhatsAppUrl(ch.whatsappContext)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chapter-wa-link"
                  >
                    WhatsApp ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
