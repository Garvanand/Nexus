import React from 'react';
import Link from 'next/link';
import { NEXUS_BRANCHES } from '../../data/branches';

export const metadata = {
  title: 'Club Locations | NEXUS — The Lifting Club Greater Faridabad',
  description: 'Explore Nexus branches in Greater Faridabad: Sector 85 (Strength Training & Free Weights) and Sector 86 (Rooftop Cricket Turf & Group Studios).',
};

export default function LocationsHubPage() {
  const branch85 = NEXUS_BRANCHES['sector-85'];
  const branch86 = NEXUS_BRANCHES['sector-86'];

  return (
    <div className="locations-hub-page" style={{ paddingTop: '100px', backgroundColor: 'var(--surface-primary)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px 0', borderBottom: '1px solid var(--border-subtle)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.12em', fontWeight: 700 }}>
            GREATER FARIDABAD // TWO SPECIALIZED GROUNDS
          </span>
          <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, textTransform: 'uppercase', margin: '16px 0', letterSpacing: '-0.02em' }}>
            NEXUS LOCATIONS.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Two distinct environments engineered for serious progress. Choose between the dedicated barbell strength floor of Sector 85 or the group studios & rooftop cricket turf of Sector 86.
          </p>
        </div>
      </section>

      {/* Side-by-Side Branch Cards */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '36px' }}>
            {/* Sector 85 Card */}
            <article style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '6px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '280px' }}>
                <img src={branch85.heroImage} alt="Nexus Sector 85 Strength Gym" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(11,11,11,0.85) 100%)' }}></div>
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(11,11,11,0.85)', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {branch85.badge}
                </span>
              </div>

              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                  SECTOR 85 // STRENGTH GYM
                </h2>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                  📍 {branch85.address}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {branch85.description}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                    Key Capabilities
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {branch85.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                        <span style={{ color: 'var(--accent)' }}>◼</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '28px', fontSize: '0.8125rem' }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>Operating Hours:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Mon–Sat 6:00 AM – 10:00 PM · Sun 7:00 AM – 8:00 PM</span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/locations/sector-85" className="btn btn-primary" style={{ flex: 1, minWidth: '160px', textAlign: 'center' }}>
                    Explore Sector 85 →
                  </Link>
                  <a
                    href={`https://wa.me/919582333003?text=${encodeURIComponent(branch85.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, minWidth: '120px', textAlign: 'center' }}
                  >
                    WhatsApp
                  </a>
                  <a
                    href={branch85.directions.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-tertiary"
                  >
                    Maps ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Sector 86 Card */}
            <article style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: '6px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '280px' }}>
                <img src={branch86.heroImage} alt="Nexus Sector 86 Studios & Turf" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(11,11,11,0.85) 100%)' }}></div>
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(11,11,11,0.85)', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '4px 12px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {branch86.badge}
                </span>
              </div>

              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                  SECTOR 86 // STUDIOS & TURF
                </h2>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '16px' }}>
                  📍 {branch86.address}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {branch86.description}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                    Key Capabilities
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {branch86.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                        <span style={{ color: 'var(--accent)' }}>◼</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '28px', fontSize: '0.8125rem' }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>Operating Hours:</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Mon–Sat 6:00 AM – 10:00 PM · Sun 7:00 AM – 8:00 PM</span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/locations/sector-86" className="btn btn-primary" style={{ flex: 1, minWidth: '160px', textAlign: 'center' }}>
                    Explore Sector 86 →
                  </Link>
                  <a
                    href={`https://wa.me/919582333003?text=${encodeURIComponent(branch86.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, minWidth: '120px', textAlign: 'center' }}
                  >
                    WhatsApp
                  </a>
                  <a
                    href={branch86.directions.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-tertiary"
                  >
                    Maps ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section style={{ padding: '60px 0 80px 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-elevated)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>CLEAR DIFFERENTIATION</span>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '8px' }}>
              BRANCH CAPABILITY COMPARISON
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                  <th style={{ padding: '16px', fontFamily: 'var(--ff-display)', fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Facility / Feature</th>
                  <th style={{ padding: '16px', fontFamily: 'var(--ff-display)', fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--accent)' }}>Sector 85 (Strength Gym)</th>
                  <th style={{ padding: '16px', fontFamily: 'var(--ff-display)', fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--accent)' }}>Sector 86 (Studios & Turf)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '14px 16px', color: 'var(--text-primary)', fontWeight: 600 }}>Lifting Platforms & Power Cages</td>
                  <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>✓ Dedicated Lifting Bays</td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-secondary)' }}>✓ Barbell Lifting Area</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '14px 16px', color: 'var(--text-primary)', fontWeight: 600 }}>Rooftop Cricket Turf</td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-tertiary)' }}>—</td>
                  <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>✓ Outdoor Rooftop Turf</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '14px 16px', color: 'var(--text-primary)', fontWeight: 600 }}>Zumba & Dance Studio</td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-tertiary)' }}>—</td>
                  <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>✓ Wooden Flooring Studio</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '14px 16px', color: 'var(--text-primary)', fontWeight: 600 }}>Yoga & Mobility Studio</td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-tertiary)' }}>—</td>
                  <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>✓ Dedicated Studio Space</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '14px 16px', color: 'var(--text-primary)', fontWeight: 600 }}>Aerobics & HIIT Conditioning</td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-tertiary)' }}>—</td>
                  <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>✓ Group Conditioning Studio</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '14px 16px', color: 'var(--text-primary)', fontWeight: 600 }}>Personal Lockers & Showers</td>
                  <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>✓ Clean Changing Suites</td>
                  <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>✓ Clean Changing Suites</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 16px', color: 'var(--text-primary)', fontWeight: 600 }}>Operating Hours</td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-secondary)' }}>Mon–Sat 6AM–10PM, Sun 7AM–8PM</td>
                  <td style={{ padding: '14px 16px', color: 'var(--text-secondary)' }}>Mon–Sat 6AM–10PM, Sun 7AM–8PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
