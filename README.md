# Satish Sahu — Portfolio

A minimalist black-and-white portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. It uses Anton display headings, Geist body text, light/dark themes, and subtle entrance animation.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm start
```

Development output uses `.next/`; production uses `.next-production/` so an active development server cannot clear the production preview.

## Update content

- `app/page.tsx` sets the section order: Hero, About, Tech Stack, Education, Projects, Certifications, Contact.
- `app/data/projects.ts` contains all three projects, live links, technology stacks, architecture details, and qualified resume-reported results.
- `app/components/Projects.tsx` displays projects as native, keyboard-accessible expandable rows.
- The About, TechStack, Education, and Certifications components hold the remaining profile content.
- `public/Satish_Sahu_resume.pdf` is the downloadable resume. Replace it when updating qualifications and update the displayed content too.
- `app/globals.css` defines the monochrome theme, responsive navigation, project rows, and reduced-motion styles.
- `app/layout.tsx`, `app/icon.svg`, `app/favicon.ico`, and `app/opengraph-image.tsx` define metadata and site identity.

The theme preference persists through `next-themes`. Smooth scrolling respects reduced-motion settings. Email copy needs HTTPS or localhost and shows a fallback if clipboard access is denied. Project details work without JavaScript.

For deployment outside Vercel, set `NEXT_PUBLIC_SITE_URL` to the public origin before building so social preview URLs use the correct domain. On Vercel, the production domain is detected automatically.
