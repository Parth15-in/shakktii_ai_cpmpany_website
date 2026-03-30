# Shakktii — Engineering Human Potential

Premium AI company website built with **Next.js 14 + TypeScript + Tailwind CSS**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Cormorant Garamond** (display font — serif, editorial)
- **DM Sans** (body font — clean, modern)
- Canvas-based animated neural background

## File Structure

```
shakktii/
├── app/
│   ├── globals.css          # CSS variables, animations, Tailwind
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Home page
├── components/
│   ├── NeuralCanvas.tsx     # Animated neural wave background
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed nav with scroll effect
│   │   └── Footer.tsx       # Footer with links
│   └── sections/
│       ├── HeroSection.tsx  # Hero with animated badge + CTA
│       └── PageSections.tsx # Problem, Lifecycle, MockMingle, Solutions, Trust, CTA
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

## Design System

### Colors
| Token | Hex |
|-------|-----|
| Primary Background | `#F0F4F8` |
| Intelligence Blue | `#0F2A44` |
| Trust Gold | `#C9A44D` |
| Soft Blue | `#325C91` |
| Text Secondary | `#6B7C8C` |

### Typography
- **Display**: Cormorant Garamond (hero headings, section titles)
- **Body**: DM Sans (navigation, body, labels)

## Pages to Build Next

- `/mockmingle` — MockMingle product page
- `/solutions` — Solutions for institutions
- `/system` — Human Potential Intelligence Architecture
- `/insights` — Article cards / blog
- `/about` — Founder story + company mission
- `/contact` — Contact form

---

Also included: `shakktii-home.html` — standalone HTML preview, open directly in any browser with no setup.
