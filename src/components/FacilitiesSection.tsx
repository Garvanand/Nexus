'use client';

import React from 'react';
import Link from 'next/link';

export const FacilitiesSection: React.FC = () => {
  const amenities = [
    {
      title: 'STRENGTH & FREE WEIGHT FLOOR',
      tag: 'BARBELLS & POWER RACKS',
      desc: 'Dedicated lifting platforms, heavy-duty power racks, barbell stations, and free weights for compound and accessory strength training.',
      image: '/assets/images/space_lifting.jpg',
      branch: 'Sector 85 & Sector 86',
      featured: true,
    },
    {
      title: 'PERSONAL LOCKER SPACES',
      tag: 'STORAGE',
      desc: 'Spacious storage lockers and changing areas so you can store your belongings securely while training.',
      image: '/assets/images/space_locker.jpg',
      branch: 'Both Locations',
      featured: false,
    },
    {
      title: 'GROUP MOVEMENT STUDIO',
      tag: 'CLASSES',
      desc: 'Dedicated studio space for high-energy Zumba, athletic Aerobics, and restorative Yoga sessions.',
      image: '/assets/images/space_studio.jpg',
      branch: 'Sector 86',
      featured: false,
    },
    {
      title: 'CLEAN SHOWERS & CHANGING ROOMS',
      tag: 'FACILITIES',
      desc: 'Private shower stalls and maintained washrooms for freshening up before or after your workout.',
      image: '/assets/images/photo4.webp',
      branch: 'Both Locations',
      featured: false,
    },
  ];

  return (
    <section className="section amenities-section" id="amenities" aria-label="Club Amenities">
      <div className="container">
        <div className="amenities-header">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="eyebrow-line"></span>
              <span>FACILITIES & SPACES</span>
            </div>
            <h2 className="heading-section">
              EVERYTHING YOU NEED.<br />ONE CLUB.
            </h2>
          </div>
          <p className="text-lead">
            Spaces designed for training consistency, group fitness, and everyday convenience across Greater Faridabad.
          </p>
        </div>

        {/* Spatial Editorial Collage */}
        <div className="amenities-collage-grid">
          {amenities.map((item) => (
            <div
              key={item.title}
              className={`amenity-panel ${item.featured ? 'amenity-panel--featured' : ''}`}
            >
              <div className="amenity-panel__bg">
                <img src={item.image} alt={item.title} className="amenity-panel__img" />
                <div className="amenity-panel__overlay"></div>
              </div>

              <div className="amenity-panel__content">
                <div className="eyebrow eyebrow--yellow" style={{ marginBottom: '0.5rem' }}>
                  {item.branch} // {item.tag}
                </div>
                <h3 className="amenity-panel__title">{item.title}</h3>
                <p className="amenity-panel__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="amenities-subbar">
          <span className="amenities-subbar__text">
            Changing Rooms · Storage Lockers · Drinking Water · Open 7 Days a Week
          </span>
          <Link href="/locations" className="btn-link">
            View Location Details →
          </Link>
        </div>
      </div>
    </section>
  );
};
