'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({ showLogo, onClose }: { showLogo: boolean; onClose: () => void }) {
  useEffect(() => {
    if (showLogo) {
      // Small delay to ensure the opening click doesn't immediately close it
      const timeoutId = setTimeout(() => {
        window.addEventListener('click', onClose);
      }, 10);
      return () => {
        window.removeEventListener('click', onClose);
        clearTimeout(timeoutId);
      };
    }
  }, [showLogo, onClose]);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '140px 60px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Logo Watermark - Now Front-and-Center */}
      {showLogo && (
        <div 
          className="animate-watermark-pop"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'min(580px, 92vw)',
            height: 'min(580px, 92vw)',
            background: 'white',
            borderRadius: '50%',
            zIndex: 2000, // Now higher than the Navbar (1000)
            cursor: 'zoom-out',
            boxShadow: '0 40px 100px rgba(15, 42, 68, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/shakktii-logo.png"
            alt="Shakktii AI Full Logo"
            width={560}
            height={560}
            style={{ 
              objectFit: 'contain',
              width: '90%',
              height: '90%',
            }}
          />
        </div>
      )}

      <div className="animate-fadeup" style={{ maxWidth: '700px', position: 'relative', zIndex: 1 }}>
        {/* Tagline */}
        <div style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--blue-soft)',
          marginBottom: '24px',
          display: 'block',
        }}>
          Intelligence Infrastructure for the Future of Work
        </div>

        <h1 className="animate-fadeup-delay-1 font-display" style={{
          fontSize: 'clamp(52px, 7vw, 84px)',
          fontWeight: 500,
          color: 'var(--blue-deep)',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          marginBottom: '24px',
          textTransform: 'uppercase',
        }}>
          Engineering<br />Human Potential
        </h1>

        <p className="animate-fadeup-delay-2" style={{
          fontSize: '17px',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          maxWidth: '520px',
          margin: '0 auto 40px',
        }}>
          Shakktii AI builds the infrastructure that helps individuals and institutions discover, develop and deploy human potential.
        </p>

        <div className="animate-fadeup-delay-3" style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link href="https://www.mockmingle.in/" target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--blue-deep)',
            color: 'white',
            padding: '13px 28px',
            borderRadius: '7px',
            fontSize: '14px', fontWeight: 600, textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'all 0.2s',
            boxShadow: '0 4px 14px rgba(15, 42, 68, 0.1)',
          }}>Explore Our Project
          </Link>
          <Link href="/#mockmingle" style={{
            background: 'rgba(255,255,255,0.5)',
            color: 'var(--blue-deep)',
            padding: '13px 28px',
            borderRadius: '7px',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.01em',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s',
          }}>
            About MockMingle
          </Link>
        </div>
      </div>

    </section>
  );
}
