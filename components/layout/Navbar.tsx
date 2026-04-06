'use client';
 
 import { useEffect, useState } from 'react';
 import Link from 'next/link';
 import Image from 'next/image';
 
 export default function Navbar({ onLogoClick }: { onLogoClick: (e: React.MouseEvent) => void }) {
   const [scrolled, setScrolled] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handler = () => setScrolled(window.scrollY > 60);
     window.addEventListener('scroll', handler);
     return () => window.removeEventListener('scroll', handler);
   }, []);
 
   const navLinks = [
     { name: 'Ecosystem', href: '/ecosystem' },
     { name: 'MockMingle', href: '/#mockmingle' },
     { name: 'Solutions', href: '/#solutions' },
     { name: 'Insights', href: '/#insights' },
     { name: 'About', href: '/#about' },
     { name: 'Contact', href: '/#footer' },
   ];
 
   return (
     <nav
       style={{
         position: 'fixed',
         top: 0, left: 0, right: 0,
         zIndex: 1000,
         padding: scrolled ? '12px 20px' : '16px 20px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         background: scrolled ? 'rgba(240,244,248,0.92)' : 'rgba(240,244,248,0.7)',
         backdropFilter: 'blur(20px)',
         WebkitBackdropFilter: 'blur(20px)',
         borderBottom: '1px solid rgba(210,225,240,0.4)',
         boxShadow: scrolled ? '0 2px 24px rgba(15,42,68,0.06)' : 'none',
         transition: 'all 0.3s ease-out',
       }}
     >
       {/* Max-width container for desktop */}
       <div style={{
         maxWidth: '1200px',
         width: '100%',
         margin: '0 auto',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
       }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
           <div 
             onClick={(e) => { e.stopPropagation(); onLogoClick(e); }}
             style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
             title="Toggle Full View"
           >
             <Image
               src="/shakktii-logo.png"
               alt="Shakktii AI Logo"
               width={44}
               height={44}
               quality={100}
               unoptimized
               style={{
                 objectFit: 'cover',
                 borderRadius: '50%',
                 flexShrink: 0,
               }}
               priority
             />
           </div>
           <Link href="/" style={{
             textDecoration: 'none',
             fontFamily: "'Cormorant Garamond', serif",
             fontSize: '18px',
             fontWeight: 600,
             color: 'var(--blue-deep)',
             letterSpacing: '0.02em',
             whiteSpace: 'nowrap',
           }}>
             Shakktii AI
           </Link>
         </div>
 
         {/* Desktop Links */}
         <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
           {navLinks.map((item) => (
             <li key={item.name}>
               <Link
                 href={item.href}
                 style={{
                   fontSize: '14px',
                   fontWeight: 400,
                   color: 'var(--text-mid)',
                   textDecoration: 'none',
                   letterSpacing: '0.01em',
                   transition: 'color 0.2s',
                 }}
               >
                 {item.name}
               </Link>
             </li>
           ))}
         </ul>
 
         <div className="flex items-center gap-3">
           <Link
             href="/#contact"
             className="hidden sm:inline-block"
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
 
           {/* Hamburger Button */}
           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             style={{
               background: 'none',
               border: 'none',
               cursor: 'pointer',
               padding: '8px',
               justifyContent: 'center',
               color: 'var(--blue-deep)',
             }}
             className="md:hidden flex items-center"
             aria-label={mobileMenuOpen ? "Close Menu" : "Toggle Menu"}
           >
             {mobileMenuOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
             ) : (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <circle cx="12" cy="5" r="2" />
                 <circle cx="12" cy="12" r="2" />
                 <circle cx="12" cy="19" r="2" />
               </svg>
             )}
           </button>
         </div>
       </div>
 
       {/* Mobile Dropdown Menu */}
       {mobileMenuOpen && (
         <div 
           style={{
             position: 'absolute',
             top: '100%',
             right: '20px',
             width: '220px',
             background: 'white',
             borderRadius: '12px',
             boxShadow: '0 10px 30px rgba(15,42,68,0.15)',
             border: '1px solid var(--border)',
             marginTop: '10px',
             padding: '12px',
             zIndex: 99999,
             display: 'flex',
             flexDirection: 'column',
             gap: '4px',
           }}
           className="md:hidden"
         >
           {navLinks.map((item) => (
             <Link
               key={item.name}
               href={item.href}
               onClick={() => setMobileMenuOpen(false)}
               style={{
                 fontSize: '15px',
                 fontWeight: 500,
                 color: 'var(--blue-deep)',
                 textDecoration: 'none',
                 padding: '12px 16px',
                 borderRadius: '8px',
                 transition: 'background 0.2s',
                 display: 'block',
               }}
               className="hover:bg-slate-50"
             >
               {item.name}
             </Link>
           ))}
           <div style={{ padding: '8px 16px', marginTop: '4px', borderTop: '1px solid var(--border)' }}>
             <Link
               href="/#contact"
               onClick={() => setMobileMenuOpen(false)}
               style={{
                 background: 'var(--blue-deep)',
                 color: 'white',
                 padding: '10px 16px',
                 borderRadius: '6px',
                 fontSize: '13px',
                 fontWeight: 600,
                 textDecoration: 'none',
                 display: 'block',
                 textAlign: 'center',
               }}
             >
               Schedule Consultation
             </Link>
           </div>
         </div>
       )}
     </nav>
   );
 }
