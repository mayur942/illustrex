# Illustrex Portfolio Website

Portfolio-first website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX case-study content

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Content editing

- Portfolio entries live in `content/portfolio/*.mdx`
- Each file has frontmatter fields and MDX body content

## Contact form

- Endpoint: `POST /api/contact`
- Current behavior: validates payload and logs inquiry server-side
- You can plug in Resend or another provider in `src/app/api/contact/route.ts`

## Deployment

- Push repository to GitHub
- Import project to Vercel
- Use default build command: `npm run build`
- Set custom domain when ready
