# Krish | @Krish07 — Developer & Creator Portfolio

> Developer · UI Designer · Digital Creator  
> Building creative digital experiences, experimenting with AI, and exploring modern web technologies.

A premium, Apple-inspired personal developer portfolio, social-link hub, and project showcase built on Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS with Apple-inspired neutral tokens (`#F7F7F8`, `#FFFFFF`, `#171717`, `#777777`, `#6D9FEA`)
- **Typography:** Inter / Geist font stack with optical tracking
- **Motion:** Framer Motion with full `prefers-reduced-motion` compliance
- **Monetization:** Google AdSense (Policy-compliant single display placement with CLS prevention)
- **Deployment:** Vercel Free Tier (100% static-friendly, no database)

---

## 📁 Architecture & Flat Configurations

All content is cleanly organized in flat configuration files:

| File | Purpose |
|---|---|
| [`src/config/profile.ts`](src/config/profile.ts) | Identity, headline, tagline, bio, and about statement |
| [`src/config/socials.ts`](src/config/socials.ts) | 5 official social channels with distinct descriptions & badges |
| [`src/config/projects.ts`](src/config/projects.ts) | Featured projects: DriftJS, MUlTiFy, WebMorph, NeuralFlow |
| [`src/config/whatIDo.ts`](src/config/whatIDo.ts) | 4 core expertise pillars (Frontend, Design, AI, Content) |
| [`src/config/adsense.ts`](src/config/adsense.ts) | Google AdSense client ID, responsive slot IDs, ads.txt |
| [`src/config/site.ts`](src/config/site.ts) | SEO metadata, open graph preview, canonical URLs |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Test production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## 🌐 Routes & Pages

- `/` — Main developer portfolio, social links, projects, expertise, and ad placement
- `/contact` — Collaboration inquiry details, direct email, and messaging channels
- `/privacy` — Privacy & AdSense advertising policy (mandatory for Google AdSense approval)
- `/ads.txt` — Google AdSense publisher validation record (served dynamically and statically)
- `/sitemap.xml` & `/robots.txt` — Search engine indexing feeds

---

## 📢 Google AdSense Integration

The site features a policy-compliant single display advertisement below social links and before featured projects with:
- Strict "Advertisement" micro-labeling
- Reserved container space to eliminate Cumulative Layout Shift (CLS)
- Graceful loading and error states
- Zero fake ads or deceptive clicks

### When Approved by Google AdSense:
1. Update `.env.local` or Vercel Environment Variables:
   ```env
   NEXT_PUBLIC_ADSENSE_ENABLED=true
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
   NEXT_PUBLIC_ADSENSE_SLOT_FEED=1234567890
   NEXT_PUBLIC_ADSENSE_PUB_ID=pub-XXXXXXXXXXXXXXXX
   ```
2. Update `public/ads.txt` with your real Publisher ID.
3. Redeploy to Vercel.

---

## 📄 License

MIT © 2026 Krish (@Krish07). All rights reserved.
