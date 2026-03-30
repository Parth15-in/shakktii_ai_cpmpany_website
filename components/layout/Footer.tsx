'use client';

import Link from 'next/link';
import { useState } from 'react';

type FooterLink = {
  label: string;
  href?: string;
  external?: boolean;
  action?: 'contact' | 'privacy';
};

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Platform: [
    { label: 'MockMingle', href: '/#mockmingle' }
  ],
  Solutions: [
    { label: 'For Schools', href: '/#solutions-schools' },
    { label: 'For Colleges', href: '/#solutions-colleges' },
    { label: 'For Professionals', href: '/#solutions-professionals' },
    { label: 'For Companies', href: '/#solutions-companies' },
    { label: 'For Workforce', href: '/#solutions-workforce' }
  ],
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/shakktii-ai/posts/', external: true },
    { label: 'Contact', action: 'contact' },
    { label: 'Privacy Policy', action: 'privacy' },
  ],
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'contact' | 'privacy' | null>(null);

  return (
    <>
      <footer id="footer" style={{
        background: 'rgba(240,244,248,0.7)',
      borderTop: '1px solid var(--border)',
      backdropFilter: 'blur(16px)',
      padding: '60px 0 32px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 600, color: 'var(--blue-deep)', marginBottom: '10px' }}>
              Shakktii AI
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-mid)', fontWeight: 400, lineHeight: 1.7, maxWidth: '240px' }}>
              Intelligence infrastructure for the future of work. Helping individuals and institutions discover, develop and deploy talent.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--text-mid)', marginBottom: '16px' }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
                {links.map(link => (
                  <li key={link.label}>
                    {link.action ? (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveModal(link.action as any);
                        }} 
                        style={{ 
                          background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit',
                          fontSize: '13px', color: 'var(--text-mid)', textDecoration: 'none', fontWeight: 400 
                        }}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link 
                        href={link.href!} 
                        target={link.external ? '_blank' : undefined} 
                        rel={link.external ? 'noopener noreferrer' : undefined} 
                        style={{ fontSize: '13px', color: 'var(--text-mid)', textDecoration: 'none', fontWeight: 400 }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-mid)', fontWeight: 400 }}>
          <span>© 2025 Shakktii AI. All rights reserved.</span>
          <span>Engineering Human Potential</span>
        </div>
      </div>
      </footer>

      {/* Modals */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 42, 68, 0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setActiveModal(null)}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            width: '100%',
            maxWidth: activeModal === 'privacy' ? '700px' : '400px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 24px 80px rgba(15,42,68,0.15)',
            position: 'relative',
            animation: 'fadeIn 0.2s ease-out'
          }} onClick={e => e.stopPropagation()}>
            
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px 32px 16px',
              borderBottom: activeModal === 'privacy' ? '1px solid var(--border)' : 'none'
            }}>
              <h2 className="font-display" style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: 500,
                color: 'var(--blue-deep)'
              }}>
                {activeModal === 'contact' ? 'Contact Information' : 'Privacy Policy'}
              </h2>
              <button 
                onClick={() => setActiveModal(null)}
                style={{
                  background: 'none', border: 'none', padding: '8px',
                  cursor: 'pointer', color: 'var(--text-secondary)',
                  fontSize: '20px', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{
              padding: '16px 32px 32px',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}>
              {activeModal === 'contact' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
                  {[
                    { icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    ), content: <><span style={{fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.05em'}}>CEO</span><br/><span style={{fontSize: '15px', fontWeight: 500, color: 'var(--blue-deep)'}}>Pushkar Dharap</span></> },
                    { icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    ), content: '+91 8956668867' },
                    { icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    ), content: <a href="https://mail.google.com/mail/u/0/?fs=1&to=info@shakktii.in&tf=cm" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>info@shakktii.in</a> }
                  ].map((item, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', alignItems: 'center', gap: '16px',
                      paddingBottom: idx !== 2 ? '20px' : '0',
                      borderBottom: idx !== 2 ? '1px solid var(--border)' : 'none'
                    }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: 'rgba(240,244,248,0.8)', color: 'var(--blue-deep)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        {item.icon}
                      </div>
                      <div style={{ color: 'var(--blue-deep)', fontSize: '15px', fontWeight: 600 }}>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  <p><strong>Effective Date:</strong> 27 March 2026<br/>
                  <strong>Last Updated:</strong> 27 March 2026</p>
                  
                  <p>MockMingle, a product of Shakktii AI, values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our AI-powered mock interview platform.</p>
                  
                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>1. Information We Collect</h3>
                  <p><strong>Personal Information:</strong> Name, email address, phone number, and organization/college details.</p>
                  <p><strong>Interview Data:</strong> Audio/video recordings, interview responses, and resumes/CVs uploaded by users.</p>
                  <p><strong>Technical Data:</strong> IP address, browser type, device information, and usage analytics.</p>
                  
                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>2. How We Use Your Information</h3>
                  <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                    <li>Conduct AI-powered mock interviews</li>
                    <li>Provide personalized feedback and performance analysis</li>
                    <li>Improve our platform and AI models</li>
                    <li>Communicate important updates and notifications</li>
                  </ul>
                  
                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>3. AI Processing</h3>
                  <p>Your interview data may be processed using AI technologies to generate insights and feedback. This helps improve accuracy and user experience. We ensure that your data is not used for unauthorized purposes.</p>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>4. Data Storage & Security</h3>
                  <p>We implement industry-standard security measures, including encryption and access control, to protect your data. Only authorized personnel can access sensitive information.</p>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>5. Data Sharing</h3>
                  <p>We do not sell your personal data.</p>
                  <p>We may share information with:</p>
                  <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                    <li>Trusted third-party services (e.g., hosting, analytics, AI providers)</li>
                    <li>Legal authorities if required by law</li>
                  </ul>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>6. Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                    <li>Access your data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p>To exercise these rights, contact us at: <strong><a href="mailto:shakktii.ai@gmail.com" style={{ color: 'var(--blue-deep)' }}>shakktii.ai@gmail.com</a></strong></p>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>7. Data Retention</h3>
                  <p>We retain your data only as long as necessary to provide services and improve user experience. You may request deletion of your data at any time.</p>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>8. Cookies</h3>
                  <p>We use cookies to enhance user experience and analyze usage. You can manage cookie preferences through your browser settings.</p>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>9. Third-Party Services</h3>
                  <p>Our platform may use third-party services such as AI APIs, analytics tools, and scheduling platforms (e.g., Calendly). These services operate under their own privacy policies.</p>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>10. Updates to This Policy</h3>
                  <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

                  <h3 style={{ color: 'var(--blue-deep)', marginTop: '24px', marginBottom: '8px', fontSize: '16px' }}>11. Contact Us</h3>
                  <p>If you have any questions or concerns, please contact us at:<br/>
                  <strong>Email:</strong> <a href="mailto:shakktii.ai@gmail.com" style={{ color: 'var(--blue-deep)' }}>shakktii.ai@gmail.com</a></p>

                  <p style={{ marginTop: '32px', fontSize: '12px', textAlign: 'center' }}>© 2026 Shakktii AI. All rights reserved.</p>
                  
                  <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      onClick={() => setActiveModal(null)}
                      style={{
                        background: 'var(--blue-deep)', color: 'white',
                        padding: '10px 24px', borderRadius: '8px',
                        border: 'none', fontSize: '14px', fontWeight: 500,
                        cursor: 'pointer'
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
