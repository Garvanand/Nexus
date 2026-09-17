import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BranchProvider } from '../context/BranchContext';
import { Navbar } from '../components/Navbar';
import { MobileStickyBar } from '../components/MobileStickyBar';
import { Footer } from '../components/Footer';
import dynamic from 'next/dynamic';

const NexusCoach = dynamic(
  () => import('../components/NexusCoach/NexusCoach').then((mod) => ({ default: mod.NexusCoach })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'NEXUS — The Lifting Club | Premium Gym in Greater Faridabad',
  description:
    'Nexus — The Lifting Club across Sector 85 & Sector 86, Greater Faridabad. Purpose-built strength training, group movement studios, and outdoor rooftop cricket turf.',
  keywords: [
    'gym faridabad',
    'strength training faridabad',
    'nexus the lifting club',
    'gym sector 85 faridabad',
    'gym sector 86 faridabad',
    'rooftop cricket turf faridabad',
    'zumba classes faridabad',
    'yoga classes faridabad'
  ],
  authors: [{ name: 'Nexus The Lifting Club' }],
  openGraph: {
    title: 'NEXUS — The Lifting Club | Premium Gym in Greater Faridabad',
    description:
      'Strength training gym, movement studios, and outdoor rooftop cricket turf across Sector 85 and Sector 86, Greater Faridabad.',
    url: 'https://nexusliftingclub.com',
    siteName: 'NEXUS — The Lifting Club',
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%230B0B0B'/%3E%3Cpath d='M30 75V25h8l24 33V25h8v50h-8L38 42v33z' fill='%23FAF9F6'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b0b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BranchProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileStickyBar />
          <NexusCoach />
        </BranchProvider>
      </body>
    </html>
  );
}
