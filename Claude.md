# CLAUDE.md — Personal Website

## WHY

Personal portfolio and blog for Christian Gleitze. Serves as a professional presence with blog articles, project showcase, and podcast links.

## WHAT

- **Stack**: Next.js 13 (Pages Router), React 18, Tailwind CSS 3, MDX blog articles
- **Structure**: `src/pages/` for routes, `src/components/` for UI, `src/lib/` for utilities
- **Path alias**: `@/` → `src/`
- **Key entry points**: `_app.jsx` (app wrapper), `_document.jsx` (HTML document) — both are fragile, avoid modifying without approval

## HOW

- **Build**: `npm run build`
- **Dev**: `npm run dev`
- **Verify**: Always run `npm run build` after changes to confirm nothing is broken
- **New article**: Create `src/pages/articles/<slug>.mdx` — see any existing article for the metadata export pattern
- **New page**: Create `src/pages/<page-name>.jsx` using `SimpleLayout` or `Container`

## Rules

- Never commit, push, or run destructive git commands unless explicitly asked
- Never modify `_app.jsx`, `_document.jsx`, `tailwind.config.js`, or `next.config.mjs` without approval
- Never add/remove/update npm packages unless asked
- Never stage `node_modules/`, `.next/`, or `.env*`
- Read files before modifying them

## Recent Features

- **Blog category filters** — commit `0d2c3ea` adds category filter functionality to the blog section

## Progressive Disclosure

For detailed context, read these files directly rather than relying on this document:
- Architecture decisions → `next.config.mjs`, `tailwind.config.js`
- Component patterns → `src/components/Card.jsx` (compound component example)
- Article format → any file in `src/pages/articles/*.mdx`
- Build/RSS pipeline → `src/lib/generateRssFeed.js`
- Lessons from past mistakes → `tasks/lessons.md`
