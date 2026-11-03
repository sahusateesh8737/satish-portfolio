export const projects = [
  {
    id: "snappdf",
    number: "01",
    title: "SnapPDF",
    category: "DOCUMENT TOOLS",
    date: "FEB 2026",
    headline: "Less waiting. More doing.",
    description:
      "A full-stack PDF utility suite that brings document merging and management into a fast, focused workflow—with supported operations processed right in your browser.",
    url: "https://www.snappdf.shop/",
    domain: "snappdf.shop",
    image: "/projects/snappdf.webp",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    metrics: [
      { value: "Up to 95%", label: "less operation time*" },
      { value: "Browser-first", label: "local PDF processing" },
    ],
    architecture: [
      {
        label: "The interface",
        text: "A responsive React / Next.js frontend with TypeScript and Tailwind CSS, organized in a pnpm workspace monorepo.",
      },
      {
        label: "The system",
        text: "NextAuth.js handles authentication; PostgreSQL models user accounts and document workflows. Node.js exposes the backend APIs, with Docker and LibreOffice supporting server-side document conversion.",
      },
      {
        label: "The decision",
        text: "Process supported PDF operations in the browser to avoid file uploads. Server-side conversion follows a separate backend workflow; local processing does not describe every tool.",
      },
    ],
    footnote:
      "*Result reported in my resume for browser-side processing versus standard PDF platforms, removing upload and download overhead. Results vary by operation, file, and network.",
  },
  {
    id: "fairplay",
    number: "02",
    title: "FairPlay",
    category: "REAL-TIME SYSTEMS",
    date: "APR 2026",
    headline: "Fair assessments. In real time.",
    description:
      "A secure coding assessment platform connecting admins, teachers, and students. Live monitoring makes exam activity visible as it happens.",
    url: "https://fair-play-davq.vercel.app/",
    domain: "fair-play-davq.vercel.app",
    image: "/projects/fairplay.webp",
    tech: ["React", "Socket.io", "Prisma", "Redis", "AWS"],
    metrics: [
      { value: "1,500+", label: "students supported*" },
      { value: "<50ms", label: "monitoring latency*" },
    ],
    architecture: [
      {
        label: "The interface",
        text: "Three role-based portals for Admin, Teacher, and Student, with an in-browser coding environment and a live instructor monitor.",
      },
      {
        label: "The system",
        text: "Socket.io streams activity and disconnect events. PostgreSQL and Prisma model the assessment data; Redis handles fast session and state access.",
      },
      {
        label: "The delivery",
        text: "IP whitelisting, cheat logs, and session termination support exam integrity. Docker on AWS and GitHub Actions automate repeatable releases.",
      },
    ],
    footnote:
      "*Scale and latency reported in my resume. The resume also reports an estimated 65% reduction in academic integrity violations after introducing the audit and security system.",
  },
  {
    id: "placemate",
    number: "03",
    title: "PlaceMate",
    category: "PLACEMENT WORKSPACE",
    date: null,
    headline: "One workspace. Every next step.",
    description:
      "An all-in-one placement and student profile workspace that brings scattered drives, applications, resumes, and deadlines together. Students track their next move while placement teams manage recruitment—and proactive reminders keep everyone informed.",
    url: "https://placemate.space/",
    domain: "placemate.space",
    image: "/projects/placemate.webp",
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    metrics: [
      { value: "7 modules", label: "one placement workspace" },
      { value: "3 roles", label: "Student · TPO · Admin" },
    ],
    architecture: [
      {
        label: "Applications & eligibility",
        text: "Kanban and table views follow applications from saved opportunities to offers, with timestamped status history, interview notes, round scheduling, and the exact resume version submitted. An eligibility engine checks academics, backlogs, branch, and batch against drive criteria, with explicit pass/fail reasons.",
      },
      {
        label: "Proactive reminders",
        text: "Celery Worker and Beat schedule deadline alerts, digests, inactive-application nudges, and coding-profile synchronization. Timezones, delivery windows, quiet hours, daily email caps, and subscribable calendar feeds shape delivery. Email and in-app notifications are supported, with optional Web Push or Telegram alerts.",
      },
      {
        label: "Profiles & readiness",
        text: "College-verified academic records sit alongside student-maintained skills, projects, and certifications. Coding statistics aggregate activity across LeetCode, GitHub, Codeforces, CodeChef, HackerRank, and GeeksforGeeks; a composite readiness score combines profile completeness, coding activity, and ATS resume scores.",
      },
      {
        label: "Resumes & documents",
        text: "A tagged, versioned resume vault keeps applications traceable. Rule-based ATS checks assess formatting, sections, action verbs, and job-description keyword overlap. Marksheets, IDs, and certificates are stored in an AES-256-GCM encrypted document vault.",
      },
      {
        label: "Placement cell tools",
        text: "Atomically validated CSV rosters control registration. TPOs manage bulk shortlists, export placement records, and target broadcasts by branch, batch, or CGPA. A college-scoped interview archive supports anonymous peer experiences, round breakdowns, and TPO verification.",
      },
      {
        label: "The architecture",
        text: "Django and Django REST Framework power server-rendered templates with modular JavaScript and CSS. SimpleJWT uses rotating HttpOnly refresh cookies, role-based access, and college email verification. PostgreSQL stores production data, Redis handles caching, OTPs, and rate limits, and Docker Compose runs the services; SQLite supports lightweight demos.",
      },
    ],
    footnote: null,
  },
];
