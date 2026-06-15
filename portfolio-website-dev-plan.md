# Illustrex Portfolio Holding Website: Development Blueprint

## 1) Scope (Portfolio-Only)
This version is only for brand presence and showcasing work.

In scope:
- Home page (brand story + value proposition)
- Portfolio listing page
- Portfolio detail pages (case studies)
- Services page
- About page
- Contact page with inquiry form
- Basic SEO + analytics

Out of scope for now:
- CRM sync (HubSpot)
- Client portal/login
- Project management integration
- Finance/invoice integration
- Automation workflows

## 2) Suggested Stack (Simple + Scalable)
- Framework: Next.js (TypeScript)
- Styling: Tailwind CSS
- Content source:
  - Option A (fastest): Markdown/MDX files in repo
  - Option B (editor-friendly): Headless CMS (Sanity)
- Form handling: Formspree/Web3Forms or Next.js API route + Resend
- Hosting: Vercel
- Analytics: GA4 or Plausible
- SEO: next-seo + sitemap

## 3) Information Architecture
- `/` Home
- `/portfolio` Portfolio grid
- `/portfolio/[slug]` Case study detail
- `/services` Services
- `/about` About
- `/contact` Contact form
- `/thank-you` Post-submit confirmation

## 4) Content Model (Minimal)
Use this for each project/case study:
- `title`
- `slug`
- `thumbnail`
- `category` (Branding, Social, Video, etc.)
- `client_name` (optional)
- `objective`
- `approach`
- `deliverables`
- `results` (if available)
- `gallery` (image list)
- `tools_used`
- `published_at`

## 5) MVP Technical Requirements
- Fully responsive (mobile-first)
- Optimized images (Next Image)
- Lighthouse target: 90+ on performance and SEO
- Metadata per page (title, description, OG image)
- Sitemap + robots.txt
- Contact form spam protection (honeypot + rate limit/captcha)
- Basic accessibility (semantic headings, alt text, keyboard focus)

## 6) Folder Structure (Next.js App Router)
```txt
/app
  /(site)
    page.tsx
    portfolio/page.tsx
    portfolio/[slug]/page.tsx
    services/page.tsx
    about/page.tsx
    contact/page.tsx
    thank-you/page.tsx
  /api
    contact/route.ts
/components
  layout/
  sections/
  portfolio/
/content
  portfolio/
    project-one.mdx
    project-two.mdx
/lib
  content.ts
  seo.ts
/public
  /images
```

## 7) Build Plan (1-Week MVP)
Day 1:
- Initialize Next.js + TypeScript + Tailwind
- Create layout, navigation, footer, base theme tokens

Day 2:
- Build Home, About, Services pages
- Add reusable section components

Day 3:
- Build Portfolio listing + detail pages from MDX
- Add category filtering (client-side)

Day 4:
- Build Contact form + thank-you page
- Add email delivery or form service integration

Day 5:
- SEO setup (meta tags, OG, sitemap)
- Analytics integration + event on form submit

Day 6:
- Performance optimization (images, lazy loading)
- Accessibility pass + cross-browser checks

Day 7:
- Final QA and Vercel deployment

## 8) Future Upgrade Path (When You Are Ready)
- Add CMS for non-technical content editing
- Add CRM integration for lead routing
- Add admin dashboard for inquiries
- Add case-study performance tracking

## 9) Definition of Done
- All main pages live and responsive
- Portfolio content is easy to add/update
- Contact form reliably delivers inquiries
- SEO and analytics are active
- Site deploys cleanly from main branch
