# Haris Wahyudi — Portfolio (Astro)

Static, fast portfolio built with [Astro](https://astro.build). Zero client framework — only ~2 KB of vanilla JS for filters, count-up, and read-more.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

Deploy `dist/` anywhere static (Vercel, Netlify, Firebase Hosting, Cloudflare Pages).

## Edit content

All content lives in `src/data/` — no code changes needed:

| File | What |
|---|---|
| `profile.json` | name, roles, links, resume, `careerStart` (drives "X years" everywhere), company marquee |
| `jobs.json` | work experience (`start`/`end` as `[year, month]`, omit `end` for current) |
| `education.json` | education rows |
| `projects.json` | projects (`mobile: true` → Mobile filter) |
| `skills.json` | skills tree (`since` year → years of experience auto-computed) |
| `testimonials.json` | recommendations (avatars in `public/assets/testimonials/`) |

Years of experience and current-job durations are computed at build time **and** refreshed in the browser, so they stay correct without a rebuild.

## Performance notes

- **No re-render loops**: loader, role rotator, orbit, marquee, ripple and hovers are pure CSS.
- **Scroll reveal** uses CSS scroll-driven animations (`animation-timeline: view()`), falling back to one IntersectionObserver.
- **Icons** are inline SVG (no icon font download).
- **Images** have explicit sizes, `loading="lazy"` and `decoding="async"`; only the avatar is preloaded.
- **Loader** shows once per session (sessionStorage).
- **`prefers-reduced-motion`** disables loader, orbit, marquee, ripple and reveal.

## Assets

Everything is self-hosted from `public/` — the page makes no requests to other domains.

| Path | What |
|---|---|
| `public/assets/` | avatar, company/school logos, `testimonials/` avatars |
| `public/projects/` | project screenshots (`<img>.webp`, named by `img` in `projects.json`) |
| `public/techstack/` | tech icons (`<icon>.webp`, named by `icon` in `skills.json`) |
| `public/fonts/` | Instrument Sans + JetBrains Mono (variable woff2, `@font-face` in `global.css`) |
| `public/cv/` | resume PDF (`resume` in `profile.json`) |

`projectCdn` / `techCdn` in `profile.json` are the base paths for screenshots and icons.
