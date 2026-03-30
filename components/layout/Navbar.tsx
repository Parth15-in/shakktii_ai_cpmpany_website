'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ onLogoClick }: { onLogoClick: (e: React.MouseEvent) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 60px' : '16px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(240,244,248,0.88)' : 'rgba(240,244,248,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(210,225,240,0.4)',
        boxShadow: scrolled ? '0 2px 24px rgba(15,42,68,0.06)' : 'none',
        transition: 'all 0.3s ease-out',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
        <div 
          onClick={(e) => { e.stopPropagation(); onLogoClick(e); }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          title="Toggle Full View"
        >
          <Image
            src="/shakktii-logo.png"
            alt="Shakktii AI Logo"
            width={54}
            height={54}
            quality={100}
            unoptimized
            style={{
              objectFit: 'cover',
              borderRadius: '50%',
              transform: 'scale(1.05)', 
              flexShrink: 0,
            }}
            priority
          />
        </div>
        <Link href="/" style={{
          textDecoration: 'none',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '20px',
          fontWeight: 600,
          color: 'var(--blue-deep)',
          letterSpacing: '0.02em',
        }}>
          Shakktii AI
        </Link>
      </div>

      <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none' }}>
        {['MockMingle', 'Solutions', 'Insights', 'About', 'Contact'].map((item) => {
          const href = 
            item === 'MockMingle' ? '/#mockmingle' :
            item === 'Solutions' ? '/#solutions' :
            item === 'Insights' ? '/#insights' :
            item === 'About' ? '/#about' :
            item === 'Contact' ? '/#footer' :
            `/${item.toLowerCase()}`;
          return (
            <li key={item}>
              <Link
                href={href}
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'var(--text-mid)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                }}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="/#contact"
        style={{
          background: 'var(--gold)',
          color: 'white',
          padding: '9px 20px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: 500,
          textDecoration: 'none',
          letterSpacing: '0.01em',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        Schedule Consultation
      </Link>
    </nav>
  );
}
