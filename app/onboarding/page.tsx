'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import NeuralCanvas from '@/components/NeuralCanvas';

const STAKEHOLDERS: Record<string, any> = {
  schools: {
    title: 'Schools',
    subtitle: 'The Foundation',
    assessment: 'Students take a 15-minute diagnostic covering 8 cognitive factors.',
    student: 'Rahul Sharma',
    grade: '10th',
    interest: 'Technology',
    scores: [
      { label: 'Analytical Thinking', val: 78, color: 'var(--blue-soft)' },
      { label: 'Creativity', val: 85, color: '#9333ea' },
      { label: 'Communication', val: 65, color: 'var(--gold)' },
      { label: 'Logical Reasoning', val: 82, color: '#059669' }
    ],
    careers: [
      { role: 'Data Scientist', match: '94%', desc: 'Strong analytical skills paired with curiosity for patterns.' },
      { role: 'UI/UX Designer', match: '89%', desc: 'High creativity and empathy for behavioral patterns.' }
    ],
    hindi: 'राहुल की प्रोफाइल समस्या-समाधान के प्रति झुकाव दिखाती है।',
    step4: 'Automated Dashboards: Real-time progress tracking for teachers and administration.'
  },
  colleges: {
    title: 'Colleges',
    subtitle: 'The Launchpad',
    assessment: 'Students undergo AI-powered mock interviews and skill-gap analysis.',
    student: 'Anjali Gupta',
    grade: 'Final Year',
    interest: 'Finance',
    scores: [
      { label: 'Industry Readiness', val: 92, color: '#059669' },
      { label: 'Technical Depth', val: 88, color: 'var(--blue-soft)' },
      { label: 'Soft Skills', val: 74, color: 'var(--gold)' },
      { label: 'Problem Solving', val: 95, color: '#9333ea' }
    ],
    careers: [
      { role: 'Investment Analyst', match: '96%', desc: 'Excellent quantitative skills and data-driven mindset.' },
      { role: 'Risk Manager', match: '85%', desc: 'Strong understanding of market dynamics and logic.' }
    ],
    hindi: 'अंजलि की तैयारी कॉर्पोरेट जगत के लिए उत्कृष्ट है।',
    step4: 'Industry Readiness: Verified credentials mapped to live job market requirements.'
  },
  professionals: {
    title: 'Professionals',
    subtitle: 'The Edge',
    assessment: 'Continuous benchmarking of industry skills and behavioral profiling.',
    student: 'Vikram Singh',
    grade: 'Senior Lead',
    interest: 'Management',
    scores: [
      { label: 'Leadership', val: 88, color: '#9333ea' },
      { label: 'Decision Making', val: 91, color: '#059669' },
      { label: 'Strategy', val: 84, color: 'var(--blue-soft)' },
      { label: 'Adaptability', val: 72, color: 'var(--gold)' }
    ],
    careers: [
      { role: 'Operations Director', match: '91%', desc: 'Proven ability to lead large teams and make sharp decisions.' },
      { role: 'Strategy Consultant', match: '88%', desc: 'High strategic thinking and peer benchmarking scores.' }
    ],
    hindi: 'विक्रम का अनुभव नेतृत्व और रणनीति में महत्वपूर्ण है।',
    step4: 'Dynamic Roadmap: Personalized learning paths that adapt as you gain skills.'
  },
  enterprises: {
    title: 'Enterprises',
    subtitle: 'The Performance',
    assessment: 'Hiring intelligence and talent mapping to ensure cultural alignment.',
    student: 'Talent Pool Analytics',
    grade: 'Entry Level App.',
    interest: 'Engineering',
    scores: [
      { label: 'Hireability Avg', val: 76, color: 'var(--blue-soft)' },
      { label: 'Cultural Fit', val: 82, color: '#059669' },
      { label: 'Learnability', val: 94, color: '#9333ea' },
      { label: 'Skill Precision', val: 68, color: 'var(--gold)' }
    ],
    careers: [
      { role: 'Full Stack Engineer', match: '88%', desc: 'Match based on high learnability and core technical logic.' },
      { role: 'DevOps Specialist', match: '82%', desc: 'Good fit for systems thinking and scalability aptitude.' }
    ],
    hindi: 'टीम की प्रदर्शन क्षमता भविष्य के लक्ष्यों के अनुरूप है।',
    step4: 'Retention Insights: Predictive analysis to stay ahead of internal mobility needs.'
  },
  workforce: {
    title: 'Workforce',
    subtitle: 'The Scale',
    assessment: 'Vernacular skill diagnostics and behavioral readiness mapping.',
    student: 'Kailash Kumar',
    grade: 'Vocational',
    interest: 'Logistics',
    scores: [
      { label: 'Operational Skill', val: 94, color: '#059669' },
      { label: 'Behavioral Prep', val: 82, color: 'var(--blue-soft)' },
      { label: 'Safety Compliance', val: 88, color: '#9333ea' },
      { label: 'Digital Literacy', val: 62, color: 'var(--gold)' }
    ],
    careers: [
      { role: 'Logistics Supervisor', match: '92%', desc: 'High operational skill and behavioral readiness.' },
      { role: 'Facility Manager', match: '86%', desc: 'Strong focus on compliance and safety standards.' }
    ],
    hindi: 'कैलाश का कौशल परिचालन उत्कृष्टता को दर्शाता है।',
    step4: 'Vernacular Support: 100% diagnostic capability in local languages.'
  },
};

function OnboardingContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'schools';
  const data = STAKEHOLDERS[type] || STAKEHOLDERS.schools;

  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/shakktii-ai/screening-for-full-stack' });
    } else {
      window.open('https://calendly.com/shakktii-ai/screening-for-full-stack', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6">
      {/* --- NEW HEADER UI (NAVBAR STYLE) --- */}
      <div style={{ padding: '32px 0 40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Branding with no redirection */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image
              src="/shakktii-logo.png"
              alt="Shakktii AI Logo"
              width={38}
              height={38}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: '18px', 
              fontWeight: 600, 
              color: 'var(--blue-deep)', 
              letterSpacing: '0.02em' 
            }}>
              Shakktii AI
            </span>
          </div>
        </div>
        <Link href="/ecosystem" style={{ color: 'var(--blue-soft)', fontSize: '15.5px', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>←</span> Back to Ecosystem
        </Link>
      </div>

      {step === 1 ? (
        <div className="animate-fade-in text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>{data.subtitle} Overview</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 500, color: 'var(--blue-deep)', lineHeight: 1.1, marginBottom: '24px' }}>
            How Shakktii AI Works for {data.title}
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginBottom: '48px', fontWeight: 300 }}>
            Unlock human capability and performance through refined diagnostic intelligence.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', 
            gap: '24px', 
            marginBottom: '56px',
            justifyContent: 'center'
          }}>
            {[
              { s: '01', t: 'Intelligent Assessment', d: data.assessment },
              { s: '02', t: 'Precision Diagnosis', d: 'Our AI engine analyzes behavioral and cognitive data to build architectural talent maps.' },
              { s: '03', t: 'Strategic Outcomes', d: 'Deliver results that bridge the gap between classroom and real-world outcomes.' },
              { s: '04', t: 'Full Transparency', d: data.step4 }
            ].map((item, idx) => (
              <div key={idx} style={{ 
                background: 'white', 
                padding: '32px', 
                borderRadius: '24px', 
                border: '1px solid var(--border)', 
                textAlign: 'left', 
                boxShadow: '0 4px 20px rgba(15,42,68,0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '16px', fontFamily: 'monospace' }}>{item.s}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>{item.t}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>{item.d}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <button 
              style={{ background: 'var(--blue-deep)', color: 'white', padding: '16px 40px', borderRadius: '12px', fontSize: '15px', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 8px 25px rgba(15,42,68,0.1)' }} 
              className="hover:scale-[1.03] active:scale-[0.98]">
              Start Demo Experience
            </button>
            <p style={{ fontSize: '12px', color: 'var(--text-soft)', fontStyle: 'italic' }}>
              Building a custom career architecture based on {data.title.toLowerCase()} requirements.
            </p>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--gold)', color: 'white', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Demo Preview</div>
            <span style={{ fontSize: '13px', color: 'var(--blue-soft)', fontWeight: 500 }}>{data.title} Analysis: {data.student}</span>
          </div>

          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '24px', boxShadow: '0 20px 80px rgba(15,42,68,0.1)', overflow: 'hidden', marginBottom: '64px' }}>
            <div style={{ background: '#f1f5f9', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['#ff5f57', '#ffbd2e', '#28c840'].map((c, i) => (
                  <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
              </div>
              <div style={{ marginLeft: '12px', background: 'white', borderRadius: '6px', padding: '4px 16px', fontSize: '11px', color: 'var(--text-secondary)', flex: 1, textAlign: 'center' }}>insights.shakktii.ai/{data.title.toLowerCase()}</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a3a5c, #0d2035)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 600 }}>{data.student[0]}</div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--blue-deep)' }}>{data.student}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{data.grade} Profile • {data.interest} Path</p>
                  </div>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold)', letterSpacing: '0.1em', marginBottom: '24px' }}>Intelligence Mapping Analysis</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {data.scores.map((s: any) => (
                      <div key={s.label}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 500 }}>{s.label}</span>
                          <span style={{ fontSize: '14px', fontWeight: 700 }}>{s.val}%</span>
                        </div>
                        <div style={{ height: '8px', width: '100%', background: '#f1f5f9', borderRadius: '100px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${s.val}%`, background: s.color, borderRadius: '100px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-12 background-[#fafafa]">
                <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--blue-deep)', letterSpacing: '0.1em', marginBottom: '24px' }}>Strategic Recommendations</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                  {data.careers.map((c: any) => (
                    <div key={c.role} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 600, fontSize: '15px' }}>{c.role}</span>
                        <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700 }}>{c.match} Match</span>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(15, 42, 68, 0.03)', border: '1px dashed var(--border)' }}>
                  <h5 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Cognitive Narrative</h5>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{data.hindi}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ background: 'white', padding: '56px', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(15,42,68,0.05)' }}>
            <h2 className="font-display" style={{ fontSize: '32px', marginBottom: '16px' }}>Engineer Your Potential</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Bring {data.title} diagnostics to your ecosystem. Join the community of forward-thinkers building the infrastructure for the future of work.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <button 
                onClick={handleCalendlyPopup}
                style={{ background: 'var(--blue-deep)', color: 'white', padding: '16px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, border: 'none', cursor: 'pointer', boxShadow: '0 10px 30px rgba(15,42,68,0.1)' }}
                className="hover:scale-[1.03] active:scale-[0.98]">
                Schedule Consultation
              </button>
              <button style={{ background: 'white', color: 'var(--blue-deep)', padding: '16px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, border: '1px solid var(--border)', cursor: 'pointer' }}>
                Contact Support
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <>
      <NeuralCanvas />
      <main style={{ minHeight: '100vh', background: 'transparent', color: 'var(--blue-deep)', paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}</style>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <OnboardingContent />
        </Suspense>
      </main>
    </>
  );
}
