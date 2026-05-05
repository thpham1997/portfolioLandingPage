# Learning Guide: Building a Landing Page with Next.js

## Overview

This guide documents every step of building a personal landing page using **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**. It's written for someone learning modern React/Next.js development.

---

## Step 1: Project Scaffolding

We used `create-next-app` to scaffold the project with these flags:

| Flag | Meaning |
|------|---------|
| `--typescript` | Use TypeScript instead of JavaScript |
| `--app` | Use the App Router (newer, recommended) |
| `--tailwind` | Include Tailwind CSS |
| `--eslint` | Include ESLint for linting |
| `--src-dir=false` | Don't create a `src/` directory; put `app/` at root |
| `--import-alias="@/*"` | Allow `@/` imports that map to the project root |
| `--turbopack` | Use Turbopack for faster dev builds |

### What is the App Router?

Next.js has two routing systems:
- **Pages Router** (`pages/` directory) — the old way
- **App Router** (`app/` directory) — the new way (since Next.js 13)

The App Router uses **React Server Components by default**. This means your components run on the server, not in the browser. Benefits:
- Zero JavaScript shipped to the client for static content
- Faster page loads
- Better SEO

### Key files created by the scaffold:

```
app/
├── globals.css      # Global styles, Tailwind imports
├── layout.tsx       # Root layout — wraps every page
└── page.tsx         # The homepage route (/)

package.json         # Dependencies and scripts
tsconfig.json        # TypeScript configuration
next.config.ts       # Next.js configuration
postcss.config.mjs   # PostCSS config (needed for Tailwind)
```

### Understanding `layout.tsx` vs `page.tsx`

- `layout.tsx` — A wrapper component that persists across navigations. Think of it as the `<html><body>` shell. It receives `children` as a prop and wraps them.
- `page.tsx` — The actual content for a specific route. `app/page.tsx` = the `/` route.

### Tailwind CSS v4

Tailwind v4 (released 2025) uses **CSS-based configuration** instead of the old `tailwind.config.js` file. Custom values are defined in CSS using `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-accent: #38bdf8;
  --font-sans: "Inter", sans-serif;
}
```

This is simpler — everything lives in one CSS file.

### lucide-react

We installed `lucide-react` for icons. It provides tree-shakeable SVG icons as React components:

```tsx
import { Code2, GraduationCap, Mail } from "lucide-react";
// Each icon is a separate import, so unused icons don't bloat your bundle
```

**Important note:** lucide-react v1.x removed brand icons (Github, Linkedin, Twitter, etc.). Use generic alternatives: `Code2` for GitHub, `Briefcase` for LinkedIn, `GraduationCap` for Google Scholar.

---

## Step 2: Project Structure & Type Definitions (`lib/types.ts`)

### Why a separate `types.ts`?

Instead of defining interfaces inside each component file, we create one shared types file. This gives us:
- **Single source of truth** — all data shapes are defined in one place
- **Type safety across the entire app** — data files and components both import from `types.ts`, so TypeScript catches mismatches at build time
- **Easier refactoring** — change a field name in one place, and TypeScript tells you every file that needs updating

### The interfaces we defined:

```typescript
export interface SiteConfig { ... }      // Site-wide strings (name, tagline, SEO)
export interface SocialLink { ... }      // Social media links with icon mapping
export interface SoftwareProject { ... } // Software/web app projects
export interface ResearchProject { ... } // Research papers/publications
export interface SkillCategory { ... }   // Skills grouped by category
export interface ExperienceEntry { ... } // Work and education timeline entries
```

**Key TypeScript concept — Discriminated unions (later):**
Notice that `SoftwareProject` and `ResearchProject` are **different shapes**. Software projects have `techStack`, research projects have `venue` and `tags`. We handle this with a `variant` prop that tells components which shape to expect. This is called a **discriminated union** — a pattern where a shared field (`variant`) tells TypeScript which interface is active.

---

## Step 3: Data Files (`data/*.ts`)

### Content as TypeScript files, not a CMS

For a portfolio site with ~10 projects and 5 experience entries, a CMS (Content Management System) is overkill. Instead, we store content in TypeScript files:

```
data/
├── site-config.ts        # Name, title, tagline, SEO metadata
├── social-links.ts       # GitHub, LinkedIn, Scholar, Email links
├── projects-software.ts  # Software/web app projects
├── projects-research.ts  # Research papers
├── skills.ts             # Skills grouped into categories
└── experience.ts         # Work history and education
```

**Benefits of this approach:**
- **Version-controlled** — content changes are tracked in git
- **Type-checked at build time** — if you forget a required field, the build fails
- **No external dependencies** — no database, no API, no CMS login
- **Instant updates** — edit a file, run `npm run build`, deploy

**How to add a new project:**
Just add an object to the array in `projects-software.ts` or `projects-research.ts`. The TypeScript interface ensures you include all required fields.

---

## Step 4: Root Layout & Global Styles (`app/layout.tsx`, `app/globals.css`)

### `app/layout.tsx` — The Root Layout

The root layout is the **outermost wrapper** for every page in your app. It defines:
- The `<html>` and `<body>` tags
- Fonts loaded via `next/font`
- Metadata for SEO (page title, description, Open Graph)

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable + " " + jetbrainsMono.variable}>
      <body>{children}</body>
    </html>
  );
}
```

The `{children}` is where `page.tsx` content gets rendered. This layout persists across all routes — if you had multiple pages, the navbar and footer would go here so they appear on every page.

### `next/font` — Optimized Font Loading

```tsx
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
```

`next/font` is Next.js's built-in font optimization:
- **No external network requests** — fonts are self-hosted at build time
- **No layout shift** — fonts are preloaded, so text never "jumps" when the font loads
- **CSS variable** — the `variable` option creates a CSS variable you can reference in Tailwind config

### Metadata (SEO)

The `metadata` export is a Next.js convention. Anything you export here gets turned into `<meta>`, `<title>`, and Open Graph tags in the `<head>`:

```tsx
export const metadata: Metadata = {
  title: "Thanh Pham | ML Engineer",
  description: "...",
  openGraph: { ... },  // Controls how the page looks when shared on Twitter/LinkedIn/etc.
};
```

### `globals.css` — Tailwind v4 + Design Tokens

```css
@import "tailwindcss";

@theme {
  --color-navy: #0a1628;
  --color-accent: #38bdf8;
  --font-sans: "Inter", sans-serif;
}
```

Tailwind v4 replaces `tailwind.config.js` with CSS-based configuration via `@theme`. Every value you define here becomes a Tailwind utility class: `bg-navy`, `text-accent`, `font-sans`.

**Design decisions:**
- Dark navy background (`#0a1628`) — fits the ML/engineering persona (think: code editors, terminals)
- Sky blue accent (`#38bdf8`) — associated with technology and AI
- `scroll-behavior: smooth` — enables smooth scrolling when clicking navbar links
- `scroll-padding-top: 5rem` — prevents the sticky navbar from covering section headings

---

## Step 5: Shared Components (SectionHeading, Navbar, Footer)

### SectionHeading — Reusable section titles

Instead of repeating `<h2>` markup in every section, we create one `SectionHeading` component:

```tsx
interface SectionHeadingProps {
  id: string;       // Anchor ID for scroll navigation
  title: string;    // Display text
  subtitle?: string; // Optional descriptive line (the `?` means optional)
}
```

**Why `id` is important:** The navbar links point to `#about`, `#skills`, etc. Each `SectionHeading` sets `id={id}` on its container so the browser can scroll to it.

**Visual:** A thin accent-colored line + bold heading. The `h-px w-8 bg-accent` creates a 1px-tall, 32px-wide horizontal line.

### Navbar — Sticky navigation

```tsx
<header className="sticky top-0 z-50 bg-navy/80 backdrop-blur-md">
```

Key Tailwind concepts here:
- `sticky top-0` — the navbar sticks to the top when you scroll past it
- `z-50` — ensures it's above all other content
- `bg-navy/80` — 80% opacity navy background (the `/80` is an opacity modifier)
- `backdrop-blur-md` — blurs content behind the navbar (frosted glass effect)

**Mobile hamburger menu — CSS-only:**
Instead of JavaScript, we use the `<details>` and `<summary>` HTML elements:
```html
<details className="group md:hidden">
  <summary>☰</summary>
  <ul>...</ul>
</details>
```
- `md:hidden` — hidden on desktop, visible on mobile
- `<details>` provides open/close state without any JavaScript
- `group` allows styling the summary based on whether details is open

### Footer — Simple copyright

A basic footer with links to Next.js and Tailwind CSS. Uses `new Date().getFullYear()` so the copyright year is always current.

---

## Step 6: Section Components

### Hero Section

The first thing visitors see. It has:
- A small monospace greeting ("Hello, I'm")
- Large name in bold white
- Title and tagline
- Two CTA buttons: "View Projects" (links to `#software`) and "Contact Me" (links to `#contact`)

**Background decoration:**
```html
<div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent-dim/20 blur-3xl" />
```
This creates a blurred, colored circle that adds visual interest without any images. `blur-3xl` applies a very large blur, `bg-accent-dim/20` gives it 20% opacity.

**Button hierarchy:**
- Primary (View Projects): solid accent background — draws the eye
- Secondary (Contact Me): outlined with border — less prominent

### About Section

Two-column layout on desktop (photo | text), stacked on mobile. Uses `md:flex-row` to switch from column to row at the `md` breakpoint.

The `profileImage` is optional (the `?` in the interface). If not provided, the image div is simply not rendered — the text takes full width.

### ProjectShowcase + ProjectCard

**ProjectShowcase** is a generic container. It receives either `SoftwareProject[]` or `ResearchProject[]` and renders a responsive grid:

```tsx
<div className="grid gap-6 md:grid-cols-2">
```

The `sort` logic pushes `highlight: true` projects to the top.

**ProjectCard** is the most architecturally interesting component. It uses a **discriminated union** to handle two different data shapes:

```tsx
type ProjectCardProps =
  | { project: SoftwareProject; variant: "software" }
  | { project: ResearchProject; variant: "research" };
```

When `variant === "software"`, TypeScript knows to expect `techStack`, `liveUrl`, etc.
When `variant === "research"`, TypeScript knows to expect `authors`, `venue`, `tags`, etc.

**Software cards** show:
- Title, description
- Tech stack as small monospace badges
- Links to live demo and GitHub repo

**Research cards** show:
- Title, authors with venue
- Abstract
- Research area tags (pill-shaped, outlined)
- Links to paper and code

### Skills Section

Categories are displayed in a 1/2/3-column responsive grid:
```html
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
```

Each skill is a `SkillBadge` — a simple monospace `<span>` with a darker background color.

### Experience Section

A vertical timeline implemented with CSS:
- Each `ExperienceItem` has a left border (`h-full w-px bg-navy-lighter`)
- A circle dot at each entry (`rounded-full border-2 border-accent`)
- Current positions have a filled dot (green inner circle)
- The `last:hidden` class hides the line after the last item

```html
<div className="absolute left-[7px] top-2 h-full w-px bg-navy-lighter last:hidden" />
```

**Date formatting:**
A small `formatDate()` helper converts `"2023-03"` to `"Mar 2023"`.

### Contact Section

Renders `ContactLink` components in a 2-column grid. Each link is a card with:
- An icon (dynamically resolved from a string-to-component map)
- A label
- Hover effect (border turns accent blue)

```tsx
const iconMap: Record<string, LucideIcon> = {
  github: Code2,
  linkedin: Briefcase,
  "graduation-cap": GraduationCap,
  mail: Mail,
};
```

This pattern — a `Record<string, ComponentType>` lookup — is cleaner than a switch statement or if/else chain when you have many icon mappings.

---

## Step 7: Composing the Page (`app/page.tsx`)

`page.tsx` is the single page of the site. Its job: **import data, pass it to sections**.

```tsx
import { softwareProjects } from "@/data/projects-software";
import ProjectShowcase from "./_components/ProjectShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero name={siteConfig.name} title={siteConfig.title} tagline={siteConfig.tagline} />
        <SectionHeading id="about" title="About" subtitle="..." />
        <About paragraphs={[...]} />
        <SectionHeading id="software" title="Software & Web Apps" subtitle="..." />
        <ProjectShowcase projects={softwareProjects} variant="software" />
        ...
      </main>
      <Footer />
    </>
  );
}
```

**Key pattern — Data down, props down:**
- Data is imported at the top level (`page.tsx`)
- Data is passed down as props to each section
- No component fetches its own data — this is called **"single source of truth" at the page level**

**Why `<main>` tag?**
Semantic HTML. Screen readers use `<main>` to skip navigation and go straight to content.

---

## Step 8: SEO Files

### `robots.ts`
Tells search engine crawlers they can index everything:
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
```
Next.js automatically serves this at `/robots.txt`.

### `sitemap.ts`
Lists all pages for search engines to discover:
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url, lastModified: new Date(), ... }];
}
```
Next.js serves this at `/sitemap.xml`.

### `not-found.tsx`
A custom 404 page. Next.js automatically shows this when a user visits a URL that doesn't exist.

---

## Step 9: Build & Verify

### Build output explained:
```
Route (app)
┌ ○ /                 # ○ = Static (prerendered at build time)
├ ○ /_not-found       # Built-in 404 page
├ ○ /robots.txt       # Auto-generated from robots.ts
└ ○ /sitemap.xml      # Auto-generated from sitemap.ts
```

All routes are `○ (Static)` — meaning the entire site is prerendered to HTML at build time. No server is needed at runtime. This is the fastest possible Next.js configuration.

### How to update content:
1. Edit the relevant file in `data/` (e.g., add a project to `projects-software.ts`)
2. Run `npm run build` to verify no type errors
3. Deploy (push to GitHub → Vercel auto-deploys)

### How to customize:
- **Colors:** edit the `@theme` block in `app/globals.css`
- **Fonts:** swap `Inter` / `JetBrains_Mono` for other Google Fonts in `app/layout.tsx`
- **Content:** edit files in `data/`
- **Add a new section:** create a component in `app/_components/`, add it to `app/page.tsx`
- **Add a page:** create a new folder in `app/` with its own `page.tsx` (e.g., `app/blog/page.tsx` for `/blog`)
