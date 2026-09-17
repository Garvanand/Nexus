import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NEXUS_BRANCHES } from '../../../data/branches';
import { NEXUS_INSTAGRAM_POSTS } from '../../../data/instagram';
import { BranchId } from '../../../types';
import { BranchMapPreview } from '../../../components/BranchMapPreview';
import { PlanYourVisit } from '../../../components/PlanYourVisit';

export function generateStaticParams() {
  return [
    { branch: 'sector-85' },
    { branch: 'sector-86' }
  ];
}

interface PageProps {
  params: {
    branch: string;
  };
}

export function generateMetadata({ params }: PageProps) {
  const branchId = params.branch as BranchId;
  const branch = NEXUS_BRANCHES[branchId];

  if (!branch) {
    return { title: 'Branch Not Found | Nexus' };
  }

  return {
    title: `Nexus ${branch.name} | ${branch.locality}, Greater Faridabad`,
    description: `${branch.description} Club facilities, opening hours, and walkthrough enquiry at ${branch.address}.`,
  };
}

export default function IndividualBranchPage({ params }: PageProps) {
  const branchId = params.branch as BranchId;
  const branch = NEXUS_BRANCHES[branchId];

  if (!branch) {
    notFound();
  }

  const otherBranchId: BranchId = branchId === 'sector-85' ? 'sector-86' : 'sector-85';
  const otherBranch = NEXUS_BRANCHES[otherBranchId];

  // Filter branch-relevant instagram posts
  const branchPosts = NEXUS_INSTAGRAM_POSTS.slice(0, 4);

  return (
    <div className="individual-branch-page" style={{ paddingTop: '90px', backgroundColor: 'var(--surface-primary)', minHeight: '100vh' }}>
      {/* 1. Branch Hero with Verified Badge */}
      <section style={{ position: 'relative', padding: '90px 0 70px 0', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src={branch.heroImage} alt={branch.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.38 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,11,0.55) 0%, rgba(11,11,11,0.96) 100%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', color: 'var(--text-tertiary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <Link href="/locations" style={{ color: 'var(--text-secondary)' }}>Locations</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>{branch.locality}</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200, 184, 48, 0.12)', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontFamily: 'var(--ff-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span>
            {branch.badge}
          </div>

          <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 16px 0', lineHeight: 1.05 }}>
            NEXUS {branch.name}
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '720px', lineHeight: 1.6, marginBottom: '24px' }}>
            {branch.description}
          </p>

          {/* Scannable Verified Address & Hours Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              background: 'rgba(18, 18, 18, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '20px',
              marginBottom: '32px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.6875rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                📍 Club Location
              </span>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', marginTop: '4px', fontWeight: 600 }}>
                {branch.address}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                {branch.landmark}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.6875rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                🕒 Operating Hours
              </span>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', marginTop: '4px', fontWeight: 600 }}>
                Mon–Sat: 6:00 AM – 10:00 PM
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                Sunday: 7:00 AM – 8:00 PM
              </div>
            </div>
          </div>

          {/* Quick Action Strip: Call, WhatsApp, Directions */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/919582333003?text=${encodeURIComponent(branch.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ minWidth: '180px', textAlign: 'center' }}
            >
              WhatsApp Nexus →
            </a>
            <a
              href={`tel:${branch.contact.phone}`}
              className="btn btn-secondary"
              style={{ minWidth: '150px', textAlign: 'center' }}
            >
              Call: {branch.contact.phoneFormatted}
            </a>
            <a
              href={branch.directions.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tertiary"
              style={{ minWidth: '150px', textAlign: 'center' }}
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      </section>

      {/* 2. Facilities Available at That Location */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>
              VERIFIED GROUND INFRASTRUCTURE
            </span>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, textTransform: 'uppercase', margin: '8px 0 0 0' }}>
              FACILITIES AT {branch.shortName.toUpperCase()}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {branch.facilities.map((fac, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(200, 184, 48, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>
                  ✓
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1rem', fontWeight: 700, margin: 0, textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                    {fac}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Verified Active Facility</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Photo Gallery */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>
                VISUAL PROOF
              </span>
              <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, textTransform: 'uppercase', margin: '8px 0 0 0' }}>
                PHOTO GALLERY
              </h2>
            </div>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Real club photography · {branch.gallery.length} verified angles
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {branch.gallery.map((img, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  overflow: 'hidden'
                }}
              >
                <div style={{ height: '240px', position: 'relative' }}>
                  <img src={img.src} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', color: 'var(--accent)', padding: '4px 10px', borderRadius: '999px', fontSize: '0.6875rem', fontFamily: 'var(--ff-display)', fontWeight: 700 }}>
                    {img.tag}
                  </span>
                </div>
                <div style={{ padding: '16px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Instagram Content Section */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>
                DAILY CULTURE // LIVE FEEDS
              </span>
              <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, textTransform: 'uppercase', margin: '8px 0 0 0' }}>
                FROM INSTAGRAM
              </h2>
            </div>
            <a
              href="https://www.instagram.com/nexusliftingclub/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase' }}
            >
              Follow @nexusliftingclub ↗
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {branchPosts.map((p) => (
              <article
                key={p.id}
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', position: 'relative' }}>
                  <img src={p.mediaUrl} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.75)', color: 'var(--accent)', fontSize: '0.6875rem', padding: '3px 8px', borderRadius: '999px', fontFamily: 'var(--ff-display)', fontWeight: 600 }}>
                    {p.category}
                  </div>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                    {p.excerpt}
                  </p>
                  <a
                    href={p.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--ff-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}
                  >
                    View On Instagram ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Google Maps Geolocation Integration (Static First -> Interactive On-Demand) */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <BranchMapPreview branch={branch} />
        </div>
      </section>

      {/* 6. PLAN YOUR VISIT Section */}
      <PlanYourVisit branch={branch} />

      {/* 7. Switch to Other Branch */}
      <section style={{ padding: '60px 0', background: 'var(--surface-primary)', textAlign: 'center' }}>
        <div className="container">
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            LOOKING FOR OUR OTHER GROUND?
          </span>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.75rem', fontWeight: 800, textTransform: 'uppercase', margin: '8px 0 16px 0' }}>
            EXPLORE {otherBranch.name.toUpperCase()}
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 24px auto', fontSize: '0.9375rem', lineHeight: 1.6 }}>
            {otherBranch.description}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/locations/${otherBranchId}`} className="btn btn-secondary">
              Switch to {otherBranch.shortName} →
            </Link>
            <Link href="/locations" className="btn btn-tertiary">
              View All Locations Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
