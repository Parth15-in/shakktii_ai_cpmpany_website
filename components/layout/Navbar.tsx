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
     { name: 'About', href: '/#about' },
     { name: 'Products', href: '/#mockmingle' },
     { name: 'Solutions', href: '/#solutions' },
     { name: 'Team', href: '/#team' },
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
             Partner With Us
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
             aria-label="Toggle Menu"
           >
             {mobileMenuOpen ? (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
 
       {/* Mobile Menu Overlay */}
       {mobileMenuOpen && (
         <div 
           style={{
             position: 'fixed',
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             background: 'rgba(240,244,248,1)',
             backdropFilter: 'blur(20px)',
             zIndex: 2000,
             display: 'flex',
             flexDirection: 'column',
             padding: '16px 20px',
             animation: 'fadeUp 0.3s ease-out both',
             overflowY: 'auto'
           }}
           className="md:hidden"
         >
           {/* Header in Overlay */}
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
               <Image
                 src="/shakktii-logo.png"
                 alt="Shakktii AI Logo"
                 width={40}
                 height={40}
                 quality={100}
                 unoptimized
                 style={{ objectFit: 'cover', borderRadius: '50%' }}
               />
               <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: 'var(--blue-deep)' }}>
                 Shakktii AI
               </span>
             </div>
             <button 
               onClick={() => setMobileMenuOpen(false)}
               style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--blue-deep)' }}
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
             </button>
           </div>
 
           {/* Links List */}
           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
             {navLinks.map((item) => (
               <Link
                 key={item.name}
                 href={item.href}
                 onClick={() => setMobileMenuOpen(false)}
                 style={{
                   fontSize: '20px',
                   fontWeight: 500,
                   color: 'var(--blue-deep)',
                   textDecoration: 'none',
                   padding: '12px 0',
                   borderBottom: '1px solid rgba(15,42,68,0.05)',
                 }}
               >
                 {item.name}
               </Link>
             ))}
           </div>
 
           {/* CTA at Bottom */}
           <div style={{ marginTop: '32px' }}>
             <Link
               href="/#contact"
               onClick={() => setMobileMenuOpen(false)}
               style={{
                 background: 'var(--blue-deep)',
                 color: 'white',
                 padding: '16px',
                 borderRadius: '10px',
                 fontSize: '16px',
                 fontWeight: 600,
                 textDecoration: 'none',
                 display: 'block',
                 textAlign: 'center',
               }}
             >
               Partner With Us
             </Link>
           </div>
         </div>
       )}
     </nav>
   );
 }
