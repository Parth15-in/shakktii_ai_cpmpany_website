'use client';

import { useEffect, useRef, Fragment, useState } from 'react';
import Link from 'next/link';

// ─── Scroll reveal hook ────────────────────────────────────────────
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

// ─── About Section (Problem & Vision) ──────────────────────────────
// Impact segments moved to Solutions section flip cards

export function ProblemSection() {
  const hHookRef = useReveal();
  const narrativeRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="about" className="py-[80px] md:py-[110px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
        {/* Main Hook & Context */}
        <div ref={hHookRef} className="reveal text-center mb-[80px]">
          <span style={{
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase' as const,
            color: 'var(--gold)', marginBottom: '24px', display: 'block',
          }}>THE SHAKKTII MISSION</span>
          <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg,var(--gold),transparent)', margin: '0 auto 24px' }} />
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px,5.5vw,72px)',
            fontWeight: 500,
            color: 'var(--blue-deep)',
            lineHeight: 1.1,
            marginBottom: '32px',
            letterSpacing: '-0.02em',
          }}>
            The world does not lack talent.<br />It lacks systems that recognize it.
          </h2>
          <div className="max-w-[800px] mx-auto">
            <div style={{ marginBottom: '40px' }}>
              <span className="font-display" style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                lineHeight: 1,
                color: 'var(--blue-deep)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '10px'
              }}>42.6%</span>
              <p className="font-display" style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--blue-soft)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                of Indian graduates are considered employable
              </p>
            </div>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontWeight: 300
            }}>
              This isn't a lack of ability. It's a lack of mapping. No system has diagnosed their real strengths or built them a personalized path to career readiness.
            </p>
          </div>
        </div>

        {/* Narrative & Philosophy */}
        <div ref={narrativeRef} className="reveal mb-[120px] text-center" style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(32px)',
          border: '1px solid rgba(255,255,255,0.7)',
          borderRadius: '40px',
          padding: '100px 60px',
          boxShadow: '0 24px 80px rgba(15,42,68,0.08)',
          maxWidth: '1100px',
          margin: '0 auto 120px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle architectural lines */}
          <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'linear-gradient(180deg, transparent, rgba(15,42,68,0.05), transparent)', pointerEvents: 'none' }} />

          <h3 className="font-display" style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            color: 'var(--blue-deep)',
            marginBottom: '40px',
            fontWeight: 500,
            letterSpacing: '-0.03em'
          }}>
            AI Cognitive Intelligence.
          </h3>
          <p className="font-display" style={{
            fontSize: 'clamp(20px, 1.8vw, 28px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '60px',
            fontWeight: 300,
            maxWidth: '900px',
            margin: '0 auto 60px'
          }}>
            The future of career readiness isn't about more content. It's about deeper intelligence an AI that understands how a person thinks, adapts, and performs before prescribing their journey.
          </p>
          <div style={{
            padding: '40px',
            background: 'rgba(255,255,255,0.6)',
            borderRadius: '24px',
            boxShadow: '0 4px 20px rgba(15,42,68,0.03)',
            display: 'inline-block',
            maxWidth: '800px',
            border: '1px solid rgba(255,255,255,0.9)'
          }}>
            <p style={{
              fontSize: 'clamp(16px, 1.3vw, 20px)',
              color: 'var(--blue-deep)',
              fontWeight: 400,
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.6
            }}>
              "Shakktii AI is building that future."
            </p>
          </div>
        </div>

        {/* Conclusion / Banner */}
        <div className="reveal text-center" style={{ borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-mid)' }}>Aligned with NEP 2020</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-mid)' }}>Powered by AI</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-mid)' }}>Built for Every Indian</span>
            </div>
          </div>
          <h2 className="font-display animate-fadeup" style={{ fontSize: '32px', color: 'var(--blue-deep)', fontWeight: 500, letterSpacing: '0.02em' }}>
            Let's Test. Let's Train. Let's Transform.
          </h2>
        </div>
      </div>
    </section>
  );
}

// ─── Lifecycle ───────────────────────────────────────────────────
const STEPS = [
  { label: 'Discover', icon: '◎', desc: 'Identifying untapped potential and hidden talent patterns across the ecosystem.' },
  { label: 'Diagnose', icon: '⬡', desc: 'Applying deep-tech diagnostics to map cognitive and behavioral architecture.' },
  { label: 'Develop', icon: '⟡', desc: 'Shaping skills and mindsets for future-ready performance.' },
  { label: 'Demonstrate', icon: '◈', desc: 'Creating high-fidelity enviornments for talent to prove its readiness ' },
  { label: 'Deploy', icon: '↗', desc: 'Strategic integration of prepared talent into high-impact roles.' },
];

export function LifecycleSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const headRef = useReveal();
  const trackRef = useReveal();

  return (
    <section id="lifecycle" className="pt-[40px] pb-[80px] md:pt-[50px] md:pb-[100px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
        <div ref={headRef} className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>The Architecture</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 500, color: 'var(--blue-deep)', marginBottom: '12px' }}>
            A Structured Intelligence Framework
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300 }}>
            A structured intelligence architecture designed to unlock human capability at scale.
          </p>
        </div>

        <div ref={trackRef} className="reveal no-scrollbar" style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '20px 0',
          position: 'relative',
          gap: '20px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}>
          {STEPS.map((step, i) => (
            <Fragment key={step.label}>
              <div style={{
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                flexShrink: 0,
                width: '180px',
                zIndex: 2,
              }}>
                {/* Step Item */}
                <div
                  onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column' as const,
                    alignItems: 'center',
                    gap: '14px',
                    cursor: 'pointer',
                    width: '100%',
                    userSelect: 'none' as const,
                  }}>
                  <div style={{
                    width: '56px', height: '56px',
                    borderRadius: '50%',
                    background: activeIdx === i ? 'rgba(15,42,68,0.12)' : 'rgba(255,255,255,0.7)',
                    border: `1.5px solid ${activeIdx === i ? 'var(--blue-soft)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: activeIdx === i ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: activeIdx === i ? '0 8px 30px rgba(15,42,68,0.1)' : 'none',
                  }}>
                    <span style={{
                      fontSize: '20px',
                      color: activeIdx === i ? 'var(--blue-deep)' : 'var(--blue-soft)',
                      transition: 'color 0.4s ease'
                    }}>{step.icon}</span>
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                    color: activeIdx === i ? 'var(--blue-deep)' : 'var(--text-secondary)',
                    transition: 'color 0.4s ease',
                    textAlign: 'center',
                  }}>
                    {step.label}
                  </span>
                </div>

                {/* Detail Box */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column' as const,
                  alignItems: 'center',
                  width: '100%',
                  overflow: 'hidden',
                  maxHeight: activeIdx === i ? '300px' : '0',
                  transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{
                    width: '1px',
                    height: '10px',
                    background: 'var(--blue-soft)',
                    opacity: 0.3,
                    marginTop: '8px',
                    flexShrink: 0,
                  }} />
                  <div style={{
                    marginTop: '4px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 8px 25px rgba(15,42,68,0.05)',
                    textAlign: 'center',
                    opacity: activeIdx === i ? 1 : 0,
                    transform: activeIdx === i ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.3s ease',
                  }}>
                    <p style={{
                      fontSize: '11px',
                      color: 'var(--blue-deep)',
                      lineHeight: 1.5,
                      fontWeight: 300,
                      margin: 0,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {i < STEPS.length - 1 && (
                <div style={{
                  paddingTop: '28px',
                  color: 'var(--gold)',
                  fontSize: '14px',
                  opacity: 0.3,
                  flexShrink: 0,
                }}>
                  ›
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── MockMingle ──────────────────────────────────────────────────
const FEATURES = [
  { icon: '⬡', label: 'AI Mock Interviews' },
  { icon: '◎', label: 'Behavioural Diagnostics' },
  { icon: '⟡', label: 'Skill Cognitive Intelligence' },
  { icon: '↗', label: 'Career Pathway Guidance' },
];

const SCORES = [
  { label: 'Communication', val: 82 },
  { label: 'Confidence', val: 74 },
  { label: 'Clarity', val: 91 },
  { label: 'Structure', val: 68 },
  { label: 'Domain Fit', val: 88 },
];

export function MockMingleSection() {
  const ref = useReveal();
  return (
    <section id="mockmingle" className="py-[80px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
        <div ref={ref} className="reveal" style={{
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.7)',
          borderRadius: '20px',
          boxShadow: '0 8px 60px rgba(15,42,68,0.06)',
        }}>
          {/* Use CSS class for padding instead of inline style for responsiveness */}
          <div className="p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center">
              {/* Left */}
              <div>
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>Product</span>
                <h2 className="font-display" style={{ fontSize: 'clamp(32px,4vw,56px)', fontWeight: 500, color: 'var(--blue-deep)', lineHeight: 1.1, marginBottom: '12px' }}>
                  MockMingle
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '12px', lineHeight: 1.6 }}>
                  The Operating System for future career
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.7, marginBottom: '32px' }}>
                  A structured intelligence architecture designed to unlock human capability at scale.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '32px' }}>
                  {FEATURES.map(f => (
                    <div key={f.label} style={{
                      display: 'flex', alignItems: 'center', gap: '7px',
                      background: 'rgba(255,255,255,0.6)',
                      border: '1px solid var(--border)',
                      borderRadius: '100px',
                      padding: '6px 12px',
                      fontSize: '11px', fontWeight: 500,
                      color: 'var(--text-mid)',
                      backdropFilter: 'blur(10px)',
                    }}>
                      <div style={{
                        width: '14px', height: '14px',
                        background: 'var(--blue-deep)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '8px', color: 'white',
                      }}>{f.icon}</div>
                      {f.label}
                    </div>
                  ))}
                </div>
                <div className="animate-fadeup-delay-3" style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}>
                  <Link href="https://www.mockmingle.in/" target="_blank" rel="noopener noreferrer" style={{
                    background: 'var(--blue-deep)',
                    color: 'white',
                    padding: '13px 24px',
                    borderRadius: '7px',
                    fontSize: '13px', fontWeight: 600, textDecoration: 'none',
                    letterSpacing: '0.01em',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 14px rgba(15, 42, 68, 0.1)',
                    width: '100%',
                    textAlign: 'center',
                  }} className="md:w-auto">Explore MockMingle</Link>
                </div>
              </div>

              {/* Browser Mockup */}
              <div className="animate-float" style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.9)',
                borderRadius: '14px',
                boxShadow: '0 24px 80px rgba(15,42,68,0.12), 0 4px 20px rgba(15,42,68,0.06)',
                overflow: 'hidden',
              }}>
                {/* Browser bar */}
                <div style={{ background: 'rgba(240,244,248,0.9)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border)' }}>
                  {['#FF5F57', '#FFBD2E', '#28C840'].map((c, i) => (
                    <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
                  ))}
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border)', borderRadius: '5px', padding: '3px 8px', fontSize: '10px', color: 'var(--text-secondary)', marginLeft: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    app.mockmingle.ai
                  </div>
                </div>

                {/* Browser content */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ minHeight: '260px' }}>
                  {/* Video side */}
                  <div style={{
                    background: 'linear-gradient(135deg,#1a3a5c 0%,#0d2035 100%)',
                    display: 'flex', flexDirection: 'column' as const,
                    alignItems: 'center', justifyContent: 'center',
                    padding: '24px', position: 'relative', overflow: 'hidden',
                    minHeight: '180px',
                  }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 40% 30%,rgba(50,92,145,0.3) 0%,transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg,#3a6491,#2a4e73)', border: '2px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>AI Interview Session</div>
                    <div style={{ position: 'absolute', bottom: '12px', left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '0 16px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                      </div>
                      <div style={{ flex: 1, height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: '45%', background: 'var(--gold)', borderRadius: '2px' }} />
                      </div>
                      <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)' }}>04:32</span>
                    </div>
                  </div>

                  {/* Panel side */}
                  <div style={{ background: 'rgba(248,250,252,0.95)', padding: '16px', display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                      Performance Analysis
                    </div>
                    {SCORES.map(s => (
                      <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                        <span style={{ fontSize: '10px', color: 'var(--text-mid)', fontWeight: 400, whiteSpace: 'nowrap' as const, minWidth: '70px' }}>{s.label}</span>
                        <div style={{ flex: 1, height: '4px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${s.val}%`, borderRadius: '3px', background: 'linear-gradient(90deg,var(--blue-soft),var(--blue-deep))' }} />
                        </div>
                        <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--blue-deep)', minWidth: '24px', textAlign: 'right' as const }}>{s.val}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '6px', paddingTop: '8px' }}>
                      {['Practice more', 'View report', 'Schedule'].map((l, i) => (
                        <div key={l} style={{
                          flex: 1, background: i === 2 ? 'var(--gold)' : 'var(--border)',
                          borderRadius: '4px', padding: '5px 4px',
                          fontSize: '8px', fontWeight: 500,
                          color: i === 2 ? 'white' : 'var(--text-mid)',
                          textAlign: 'center' as const,
                          whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis',
                        }}>{l}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Solutions ───────────────────────────────────────────────────
const SOLUTIONS = [
  { 
    icon: '/icons/schools.png', 
    title: 'Schools', 
    desc: 'Career awareness and early diagnostics for students', 
    backText: 'At the school level, we map cognitive intelligence, memory retention along with aptitude and temperament early, so learning could be easier personally and career guidance begins with self-awareness, not guesswork.',
    fullDetails: [
      "8-Factor Cognitive Intelligence Mapping",
      "Aptitude & Temperament Diagnostics",
      "Personalized Career Discovery Pathways",
      "Parental Guidance Intelligence"
    ]
  },
  { 
    icon: '/icons/colleges.png', 
    title: 'Colleges', 
    desc: 'Placement intelligence and skill gap insights', 
    backText: 'At the college level, MockMingle delivers AI-powered simulations like mock interviews, situational tests, psychometric diagnostics, and real-time skill gap analysis that turn placement cells into launchpads.',
    fullDetails: [
      "MockMingle AI Interview Simulations",
      "Real-time Skill Gap Intelligence",
      "Industry-Readiness Scoring (IRS)",
      "Automated Placement Cell Dashboard"
    ]
  },
  { 
    icon: '/icons/professionals.png', 
    title: 'Professionals', 
    desc: 'Career guidance and readiness scoring', 
    backText: 'Continuous benchmarking and diagnostic intelligence for those looking to pivot, grow, or measure their readiness for the top 1% of roles.',
    fullDetails: [
      "Peer-to-Peer Industry Benchmarking",
      "Customized Upskilling Roadmap",
      "Soft-Skill Cognitive Analysis",
      "High-Fidelity Behavioral Profiling"
    ]
  },
  { 
    icon: '/icons/companies.png', 
    title: 'Companies', 
    desc: 'Hiring intelligence and talent mapping', 
    backText: 'For enterprises, we assess workforce readiness, deploy precision upskilling, and match talent to roles with AI-driven hiring intelligence.',
    fullDetails: [
      "Workforce Readiness Assessment",
      "Precision Upskilling Deployment",
      "AI-Driven Hiring Intelligence",
      "Talent Matching Excellence"
    ]
  },
  { 
    icon: '/icons/workforce.png', 
    title: 'Workforce', 
    desc: 'Behavioural diagnostics at scale', 
    backText: 'For blue-collar workers, we bring vocational skill mapping, vernacular AI interfaces, and behavioural profiling to India\'s 300-million-strong workforce, because cognitive potential doesn\'t require a degree.',
    fullDetails: [
      "Vernacular AI Skill Diagnostics",
      "Behavioral Readiness Mapping",
      "Vocational Skill Certification Intelligence",
      "Direct-to-Role Talent Deployment"
    ]
  },
];

function SolutionCard({ s, onReadMore }: { s: typeof SOLUTIONS[0], onReadMore: () => void }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardId = `solutions-${s.title.toLowerCase()}`;
  const lastHashRef = useRef(typeof window !== 'undefined' ? window.location.hash : '');

  useEffect(() => {
    // Initial check
    if (window.location.hash === `#${cardId}`) {
      setIsFlipped(true);
    }

    const checkHash = () => {
      const currentHash = window.location.hash;
      if (currentHash !== lastHashRef.current) {
        lastHashRef.current = currentHash;
        if (currentHash === `#${cardId}`) {
          setTimeout(() => setIsFlipped(true), 800); // Added buffer time so user can see it flip after scrolling
        } else {
          setIsFlipped(false);
        }
      }
    };

    const interval = setInterval(checkHash, 100);
    return () => clearInterval(interval);
  }, [cardId]);

  // Truncate logic: if text is long, we show a "Read More" button
  const isLongText = s.backText.length > 100;
  const displayText = isLongText ? s.backText.substring(0, 95) + '...' : s.backText;

  return (
    <div
      id={cardId}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        perspective: '1000px',
        cursor: 'default',
        scrollMarginTop: '120px',
        height: '240px', // Increased height to accommodate button
      }}
    >
      <div style={{
        position: 'relative',
        display: 'grid',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        {/* Front */}
        <div style={{
          gridArea: '1 / 1',
          backfaceVisibility: 'hidden',
          background: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: '14px',
          padding: '24px 20px',
          backdropFilter: 'blur(16px)',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(15,42,68,0.04)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '48px', height: '48px',
            marginBottom: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img src={s.icon} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--blue-deep)', marginBottom: '8px' }}>{s.title}</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.5 }}>{s.desc}</p>
        </div>

        {/* Back */}
        <div style={{
          gridArea: '1 / 1',
          backfaceVisibility: 'hidden',
          background: 'var(--blue-deep)',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: '14px',
          padding: '24px 20px',
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(15,42,68,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotateY(180deg)',
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--gold)', marginBottom: '12px' }}>{s.title}</h3>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.9)', fontWeight: 300, lineHeight: 1.6, marginBottom: '16px' }}>
            {displayText}
          </p>
          {isLongText && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onReadMore();
              }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              className="hover:bg-white hover:text-blue-deep"
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function SolutionModal({ s, onClose }: { s: typeof SOLUTIONS[0], onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(15, 42, 68, 0.4)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 32px 100px rgba(15,42,68,0.2)',
        position: 'relative',
        animation: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden'
      }} onClick={e => e.stopPropagation()}>
        
        {/* Header with Background Pattern */}
        <div style={{
          padding: '40px 40px 32px',
          background: 'linear-gradient(135deg, rgba(240,244,248,0.5) 0%, rgba(255,255,255,1) 100%)',
          borderBottom: '1px solid var(--border)',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute', top: '24px', right: '24px',
              background: 'white', border: '1px solid var(--border)', padding: '8px',
              cursor: 'pointer', color: 'var(--text-secondary)',
              fontSize: '18px', borderRadius: '50%', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              zIndex: 10
            }}
          >✕</button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
            <div style={{
              width: '64px', height: '64px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(15,42,68,0.08)',
              border: '1px solid var(--border)'
            }}>
              <img src={s.icon} alt={s.title} style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Solution</span>
              <h2 className="font-display" style={{ margin: 0, fontSize: '32px', fontWeight: 500, color: 'var(--blue-deep)' }}>{s.title}</h2>
            </div>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{s.desc}</p>
        </div>

        {/* Content Body */}
        <div style={{
          padding: '32px 40px 40px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}>
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--blue-deep)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Overview</h4>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 400 }}>{s.backText}</p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '24px 40px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end', background: 'rgba(240,244,248,0.2)' }}>
          <button 
            onClick={onClose}
            style={{
              background: 'var(--blue-deep)', color: 'white',
              padding: '12px 32px', borderRadius: '12px',
              border: 'none', fontSize: '14px', fontWeight: 600,
              cursor: 'pointer', boxShadow: '0 4px 15px rgba(15,42,68,0.1)'
            }}
          >Close Details</button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<typeof SOLUTIONS[0] | null>(null);
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="solutions" className="py-[80px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>Solutions</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 500, color: 'var(--blue-deep)', marginBottom: '12px' }}>
            Solutions for Institutions and Individuals
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Intelligence infrastructure designed to guide, assess, and prepare for the future of work.
          </p>
        </div>
        <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {SOLUTIONS.map(s => (
            <SolutionCard key={s.title} s={s} onReadMore={() => setSelectedSolution(s)} />
          ))}
        </div>
      </div>

      {selectedSolution && (
        <SolutionModal s={selectedSolution} onClose={() => setSelectedSolution(null)} />
      )}
    </section>
  );
}

// ─── Trust ───────────────────────────────────────────────────────
const LOGOS = [
  { name: 'Sinhgad', logo: '/icons/sinhgad_logo.png' },
  { name: 'Wadia', logo: '/icons/wadia_logo.jpg' },
  { name: 'Y4D', logo: '/icons/y4d_logo.png' },
  { name: 'Arihant', logo: '/icons/arihant_logo.png' },
  { name: 'Panexa Core tech', logo: '/icons/panexa_logo.jpg' },
  { name: 'Ideas to Impact', logo: '/icons/ideas_logo.png' },
  { name: 'Padcare', logo: '/icons/padcare_logo.png' },
];

export function TrustSection() {
  const ref = useReveal();

  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="py-[60px] md:py-[80px] text-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
        <div ref={ref} className="reveal">
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--blue-soft)', marginBottom: '34px', display: 'block', opacity: 0.8 }}>
            Trusted by institutions & individuals across India
          </span>

          <div className="logo-ticker-container">
            <div className="logo-ticker-track">
              {duplicatedLogos.map((l, i) => (
                <div key={`${l.name}-${i}`} className="logo-item" style={{ minWidth: '200px' }}>
                  <span className="font-display" style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--blue-deep)',
                    opacity: 1,
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                    whiteSpace: 'nowrap'
                  }}>
                    {l.name}
                  </span>
                  <img
                    src={l.logo}
                    alt={l.name}
                    style={{
                      height: '48px',
                      maxWidth: '150px',
                      objectFit: 'contain',
                      opacity: 0.9,
                      filter: 'grayscale(0.2) contrast(1.1)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Insights ────────────────────────────────────────────────────
const INSIGHTS = [
  { val: '42.6%', desc: 'of graduates are job-ready in today’s market' },
  { val: '82%', desc: 'of employers struggle to identify the right talent' },
  { val: '92%', desc: 'of students lack structured skill development exposure' },
  { val: '500+', desc: 'institutions and individuals currently transforming their career outcomes' },
];

export function InsightsSection() {
  const headerRef = useReveal();
  const gridRef = useReveal();
  const statementRef = useReveal();
  return (
    <section id="insights" className="py-[80px] md:py-[100px]" style={{ background: 'rgba(240,244,248,0.3)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>Insights</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 500, color: 'var(--blue-deep)', marginBottom: '12px' }}>
            The Data Behind Human Potential
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Numbers that define why systems for recognising talent matter more than ever.
          </p>
        </div>
        <div ref={gridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS.map(i => (
            <div key={i.val} style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(15,42,68,0.04)',
              transition: 'all 0.3s ease',
            }}>
              <div className="font-display" style={{ fontSize: '40px', color: 'var(--blue-deep)', marginBottom: '12px', fontWeight: 500 }}>
                {i.val}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                {i.desc}
              </p>
            </div>
          ))}
        </div>

        <div ref={statementRef} className="reveal" style={{ marginTop: '56px', textAlign: 'center' }}>
          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 22px)',
            color: 'var(--blue-deep)',
            fontWeight: 500,
            lineHeight: 1.5,
            maxWidth: '900px',
            margin: '0 auto',
            letterSpacing: '0.01em'
          }}>
            "India doesn't have a talent shortage. It has a recognition problem."
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────
export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [interest, setInterest] = useState('');
  const ref = useReveal();

  const handleCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/shakktii-ai/screening-for-full-stack' });
    } else {
      window.open('https://calendly.com/shakktii-ai/screening-for-full-stack', '_blank', 'noopener,noreferrer');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const resp = await fetch('https://formspree.io/f/xrbgvjpz', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (resp.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-[80px] md:py-[100px]" style={{ background: 'rgba(240,244,248,0.15)' }}>
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>Get Started</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 500, color: 'var(--blue-deep)', marginBottom: '16px' }}>
            Ready to Engineer Your Potential?
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Whether you're an institution looking to transform talent outcomes or an individual preparing for your next career move, Shakktii AI has a solution built for you.
          </p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '24px',
          boxShadow: '0 20px 80px rgba(15,42,68,0.06)',
          border: '1px solid var(--border)',
        }} className="p-6 md:p-12">
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(40,200,64,0.1)', color: '#28C840', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', margin: '0 auto 24px' }}>✓</div>
              <h3 style={{ color: 'var(--blue-deep)', marginBottom: '12px' }}>Request Received</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: 300, marginBottom: '32px' }}>Thank you for reaching out. Our team will contact you shortly.</p>

              <div style={{ background: 'rgba(240,244,248,0.4)', borderRadius: '16px', padding: '32px', border: '1px solid var(--border)' }}>
                <p style={{ fontSize: '14px', color: 'var(--blue-deep)', marginBottom: '20px', fontWeight: 500 }}>Want to skip the wait? Book a specific slot directly:</p>
                <button
                  onClick={handleCalendlyPopup}
                  style={{
                    background: '#0F2A44',
                    color: 'white',
                    padding: '14px 32px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 14px rgba(15, 42, 68, 0.2)',
                    width: '100%',
                  }}>
                  Schedule Meeting on Calendly
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="name-input" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue-deep)', opacity: 0.8 }}>Full Name</label>
                <input required id="name-input" name="name" type="text" autoComplete="name" placeholder="Your full name" style={{
                  padding: '12px 16px', borderRadius: '10px', background: 'rgba(240,244,248,0.5)',
                  border: '1px solid var(--border)', outline: 'none', fontSize: '14px', color: 'var(--blue-deep)',
                  transition: 'background 0.2s'
                }} aria-label="Full Name" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email-input" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue-deep)', opacity: 0.8 }}>Email Address</label>
                <input required id="email-input" name="email" type="email" autoComplete="email" placeholder="your@email.com" style={{
                  padding: '12px 16px', borderRadius: '10px', background: 'rgba(240,244,248,0.5)',
                  border: '1px solid var(--border)', outline: 'none', fontSize: '14px', color: 'var(--blue-deep)'
                }} aria-label="Email Address" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="org-input" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue-deep)', opacity: 0.8 }}>Organization / College</label>
                <input id="org-input" name="org" type="text" autoComplete="organization" placeholder="Your institution or company" style={{
                  padding: '12px 16px', borderRadius: '10px', background: 'rgba(240,244,248,0.5)',
                  border: '1px solid var(--border)', outline: 'none', fontSize: '14px', color: 'var(--blue-deep)'
                }} aria-label="Organization or College" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="interest-select" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue-deep)', opacity: 0.8 }}>I'm interested in</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <select
                    id="interest-select"
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    style={{
                      padding: '12px 16px', borderRadius: '10px', background: 'rgba(240,244,248,0.5)',
                      border: '1px solid var(--border)', outline: 'none', fontSize: '14px', color: 'var(--blue-deep)',
                      appearance: 'none', width: '100%'
                    }}
                    aria-label="Interested in"
                  >
                    <option value="">Select an option</option>
                    <option value="school">Solution for Schools</option>
                    <option value="college">Solution for Colleges</option>
                    <option value="professional">Solution for Professionals</option>
                    <option value="company">Solution for Companies</option>
                    <option value="other">Others</option>
                  </select>
                  {interest === 'other' && (
                    <input
                      required
                      name="other_detail"
                      type="text"
                      placeholder="Please specify your inquiry"
                      style={{
                        padding: '12px 16px', borderRadius: '10px', background: 'rgba(240,244,248,0.5)',
                        border: '1px solid var(--border)', outline: 'none', fontSize: '14px', color: 'var(--blue-deep)',
                        animation: 'fadeIn 0.3s ease'
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="md:col-span-2 mt-3">
                <button type="submit" disabled={status === 'loading'} style={{
                  width: '100%', background: '#0F2A44', color: 'white',
                  padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 600,
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                  opacity: status === 'loading' ? 0.7 : 1,
                  boxShadow: '0 4px 14px rgba(15, 42, 68, 0.25)'
                }}>
                  {status === 'loading' ? 'Sending...' : 'Schedule Consultation'}
                </button>
                {status === 'error' && (
                  <p style={{ color: '#FF5F57', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// End of sections
