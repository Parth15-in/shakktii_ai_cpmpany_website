'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Scroll reveal hook (Reused from PageSections) ---
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// --- Ecosystem Hero ---
export function EcosystemHero() {
  return (
    <section className="pt-[110px] pb-[80px] px-6 md:px-[60px] text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto animate-fadeup" style={{ textAlign: 'left' }}>
        {/* Back Button */}
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--blue-soft)',
            textDecoration: 'none',
            marginBottom: '32px',
            padding: '10px 20px',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.4)',
            border: '1px solid var(--border)',
            transition: 'all 0.2s'
          }}
          className="hover:bg-white hover:shadow-sm"
        >
          <span style={{ fontSize: '16px' }}>←</span> Back to Main Site
        </Link>
      </div>

      <div className="max-w-[1000px] mx-auto animate-fadeup text-center">

        <span style={{
          fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px', display: 'block'
        }}>The Complete Stack</span>
        <h1 className="font-display" style={{
          fontSize: 'clamp(40px, 7vw, 90px)', fontWeight: 500,
          color: 'var(--blue-deep)', lineHeight: 1, marginBottom: '32px', letterSpacing: '-0.02em'
        }}>
          One Platform.<br />Infinite Potential.
        </h1>
        <p style={{
          fontSize: '18px', color: 'var(--text-secondary)', fontWeight: 300,
          lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 48px'
        }}>
          Shakktii AI provides the intelligence infrastructure to map, develop, and deploy human potential across every stage of the lifecycle—from classroom to boardroom.
        </p>

        {/* Quick Jump (Floating Sub-Nav) */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap',
          background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(10px)',
          padding: '12px', borderRadius: '100px', border: '1px solid var(--border)',
          width: 'fit-content', margin: '0 auto'
        }}>
          {['Schools', 'Colleges', 'Professionals', 'Enterprises', 'Workforce'].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{
              fontSize: '13px', fontWeight: 500, color: 'var(--blue-deep)',
              textDecoration: 'none', padding: '8px 20px', borderRadius: '100px',
              transition: 'all 0.2s'
            }} className="hover:bg-white hover:shadow-sm">
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Stakeholder Section Component ---
function StakeholderSection({
  id, title, subtitle, desc, icon, points, reverse = false, stats
}: {
  id: string, title: string, subtitle: string, desc: string, icon: string, points: string[], reverse?: boolean, stats?: { val: string, label: string }
}) {
  const ref = useReveal();
  return (
    <section id={id} className="py-[80px] md:py-[120px] relative scroll-mt-[100px]">
      <div ref={ref} className={`reveal max-w-[1200px] mx-auto px-6 md:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-center ${reverse ? 'rtl' : ''}`}>
        <div style={{ direction: 'ltr' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--blue-soft)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>{subtitle}</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: 'var(--blue-deep)', fontWeight: 500, marginBottom: '24px', lineHeight: 1.1 }}>{title}</h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, marginBottom: '32px' }}>{desc}</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {points.map((p, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--blue-deep)', fontWeight: 400 }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%' }} />
                {p}
              </li>
            ))}
          </ul>

          <Link 
            href={`/onboarding?type=${title.toLowerCase() === 'companies' ? 'enterprises' : title.toLowerCase()}`}
            style={{
              background: 'var(--blue-deep)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 20px rgba(15,42,68,0.1)',
              letterSpacing: '0.02em',
              width: 'fit-content'
            }} className="hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] group">
            Get Started for {title}
            <span style={{ fontSize: '18px', transition: 'transform 0.3s ease' }} className="group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div style={{ direction: 'ltr' }}>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(30px)',
                border: '1px solid var(--border)', borderRadius: '32px', padding: '40px',
              }}
              className="animate-float"
            >
              <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 8px 30px rgba(15,42,68,0.06)' }}>
                <img src={icon} alt={title} style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
              </div>
              {stats && (
                <div style={{ marginBottom: '24px' }}>
                  <div className="font-display" style={{ fontSize: '48px', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>{stats.val}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>{stats.label}</div>
                </div>
              )}
              <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)', marginBottom: '24px' }} />
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "The intelligence layer required to bridge the gap between education and real-world outcomes."
              </p>
            </div>
            {/* Architectural accent */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRight: '2px solid var(--gold)', borderTop: '2px solid var(--gold)', opacity: 0.2, borderRadius: '0 32px 0 0', pointerEvents: 'none' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Specific Stakeholder Sections ---
export function SchoolsSection() {
  return (
    <StakeholderSection
      id="schools"
      subtitle="The Foundation"
      title="Schools"
      desc="Early diagnostics to identify innate talent, cognitive strengths, and behavioral patterns before academic choices are made."
      icon="/icons/schools.png"
      points={[
        "8-Factor Cognitive Intelligence Mapping",
        "Aptitude & Temperament Diagnostics",
        "Personalized Career Discovery Pathways",
        "Parental Guidance Intelligence"
      ]}
      stats={{ val: "8+", label: "Cognitive Parameters Mapped" }}
    />
  );
}

export function CollegesSection() {
  return (
    <StakeholderSection
      id="colleges"
      subtitle="The Launchpad"
      title="Colleges"
      desc="Empathetic AI tools that turn placement cells into high-performance career centers, focusing on real-world employability."
      icon="/icons/colleges.png"
      reverse={true}
      points={[
        "MockMingle AI Interview Simulations",
        "Real-time Skill Gap Intelligence",
        "Industry-Readiness Scoring (IRS)",
        "Automated Placement Cell Dashboard"
      ]}
      stats={{ val: "92%", label: "Placement Engagement Increase" }}
    />
  );
}

export function ProfessionalsSection() {
  return (
    <StakeholderSection
      id="professionals"
      subtitle="The Edge"
      title="Professionals"
      desc="Continuous benchmarking and diagnostic intelligence for those looking to pivot, grow, or measure their readiness for the top 1% of roles."
      icon="/icons/professionals.png"
      points={[
        "Peer-to-Peer Industry Benchmarking",
        "Customized Upskilling Roadmap",
        "Soft-Skill Cognitive Analysis",
        "High-Fidelity Behavioral Profiling"
      ]}
      stats={{ val: "42.6%", label: "Employability Benchmark Score" }}
    />
  );
}

export function EnterprisesSection() {
  return (
    <StakeholderSection
      id="enterprises"
      subtitle="The Performance"
      title="Enterprises"
      desc="Precision hiring and internal mobility powered by diagnostic intelligence, reducing time-to-hire and increasing cultural alignment."
      icon="/icons/companies.png"
      reverse={true}
      points={[
        "Workforce Readiness Assessment",
        "Precision Upskilling Deployment",
        "AI-Driven Hiring Intelligence",
        "Talent Matching Excellence"
      ]}
      stats={{ val: "65%", label: "Reduction in Time-to-Hire" }}
    />
  );
}

export function WorkforceSection() {
  return (
    <StakeholderSection
      id="workforce"
      subtitle="The Scale"
      title="Workforce"
      desc="Bringing the power of AI to the blue-collar workforce through vernacular interfaces and precision skill mapping."
      icon="/icons/workforce.png"
      points={[
        "Vernacular AI Skill Diagnostics",
        "Behavioral Readiness Mapping",
        "Vocational Skill Certification Intelligence",
        "Direct-to-Role Talent Deployment"
      ]}
      stats={{ val: "300M", label: "Potential Workforce Indexed" }}
    />
  );
}

// --- Cross-Stakeholder Analytics Visual ---
export function AnalyticsSection() {
  const ref = useReveal();
  return (
    <section className="py-[100px] md:py-[150px] bg-[rgba(15,42,68,0.02)]">
      <div ref={ref} className="reveal max-w-[1200px] mx-auto px-6 md:px-[60px] text-center">
        <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', color: 'var(--blue-deep)', fontWeight: 500, marginBottom: '60px' }}>Unified Talent Intelligence</h2>

        {/* Square Visualization Container for Perfect Symmetry */}
        <div style={{
          position: 'relative',
          width: 'min(440px, 90vw)',
          height: 'min(440px, 90vw)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Central Logo */}
          <div style={{
            width: '110px', height: '110px', background: 'white', borderRadius: '50%',
            zIndex: 10, boxShadow: '0 15px 50px rgba(15,42,68,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '8px solid white',
            position: 'absolute',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
          }}>
            <img src="/shakktii-logo.png" alt="Shakktii AI" style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
            {/* Animated Ring */}
            <div style={{
              position: 'absolute', top: '-10px', left: '-10px', right: '-10px', bottom: '-10px',
              border: '1px solid var(--gold)', borderRadius: '50%', opacity: 0.3,
              animation: 'pulse 3s infinite'
            }} />
          </div>

          {/* Animated Connection Lines (SVG) - Precise points in 440px grid */}
          <svg
            viewBox="0 0 440 440"
            style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', top: 0, left: 0 }}
          >
            {[ -90, -18, 54, 126, 198 ].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const rStart = 62; // Center of logo radius (55px) + small gap
              const rEnd = 145;  // Inner edge of icon (175px radius - 30px half-width)
              
              const x1 = 220 + Math.cos(rad) * rStart;
              const y1 = 220 + Math.sin(rad) * rStart;
              const x2 = 220 + Math.cos(rad) * rEnd;
              const y2 = 220 + Math.sin(rad) * rEnd;

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  opacity="0.4"
                />
              );
            })}
          </svg>

          {/* Satellites in perfect pentagon using rotate/translate transform */}
          {[
            { label: 'Schools', icon: '/icons/schools.png', angle: -90 },
            { label: 'Colleges', icon: '/icons/colleges.png', angle: -18 },
            { label: 'Professionals', icon: '/icons/professionals.png', angle: 54 },
            { label: 'Enterprises', icon: '/icons/companies.png', angle: 126 },
            { label: 'Workforce', icon: '/icons/workforce.png', angle: 198 },
          ].map((s, i) => {
            const rad = (s.angle * Math.PI) / 180;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${s.angle}deg) translate(175px) rotate(${-s.angle}deg) translate(-50%, -50%)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 11
                }}
              >
                <div style={{
                  width: '60px', height: '60px', background: 'white', borderRadius: '15px',
                  boxShadow: '0 8px 25px rgba(15,42,68,0.06)', border: '1px solid rgba(15,42,68,0.03)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }} className="hover:scale-110">
                  <img src={s.icon} alt={s.label} style={{ width: '50%', height: '50%', objectFit: 'contain' }} />
                </div>
                <span style={{
                  fontSize: '10px', fontWeight: 600, color: 'var(--blue-deep)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center'
                }}>{s.label}</span>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.1; }
            100% { transform: scale(1); opacity: 0.3; }
          }
        `}</style>

        <p style={{ marginTop: '60px', fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '60px auto 0', fontWeight: 300 }}>
          Our intelligence layer creates a longitudinal profile that grows with the individual, ensuring their potential is never lost to the gaps in the traditional ecosystem.
        </p>
      </div>
    </section>
  );
}
