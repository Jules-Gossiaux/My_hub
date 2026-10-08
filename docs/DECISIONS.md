# Decisions

## 2026-10-08 — Start with a static browser-native site

**Status:** Superseded by the Next.js stack decision below.

**Context:** The repository had only a PRD and no framework or existing application code. The product is a single-page personal hub with no backend requirement.

**Decision:** The initial implementation uses plain HTML, CSS, and JavaScript with no package or build system. This is a reversible implementation choice, not a stack mandate; later work may use any suitable stack.

**Consequences:** The page is easy to host as static files and has few moving parts. Content updates require editing source files. There is no form handling, persistence, or server-side validation.

## 2026-10-08 — Keep gallery content in one editable source

**Context:** The portfolio should grow without redesigning its visual layout, while real project and resource details were not present in the repository.

**Decision:** The initial static implementation stored gallery items in `content.js`. The current implementation stores typed items in `src/lib/portfolio.ts` and uses local files from `public/assets/images/`.

**Consequences:** New entries can use the existing image cards. Only verified items and approved images should be added; the current renderer is intended for trusted source-controlled content.

## 2026-10-08 — Do not invent portfolio items or contact details

**Context:** The PRD forbids invented project details, and no real project links, student resources, CV, or contact method were present in the repository.

**Decision:** Show neutral image slots until images are provided; omit unverified projects, CV, and contact links.

**Consequences:** The visual structure can be reviewed before the portfolio is filled with real work.

## 2026-10-08 — Make the portfolio image-led and compact

**Context:** The owner prefers a visual portfolio that uses the available screen area, with little text and no scrolling where practical. Personal, project, and experience photos will be supplied by the owner.

**Decision:** Replace the scrolling landing page with compact gallery views and use owner-provided images from `public/assets/images/`.

**Consequences:** Desktop views can fit within the viewport. Small screens may scroll when needed for readable content. The GitHub repository is public, so committed images are publicly accessible.

## 2026-10-08 — Use Next.js, TypeScript, and Tailwind CSS

**Context:** The owner requested a more capable, professional stack while keeping the portfolio compact and easy to extend.

**Decision:** Use Next.js App Router with TypeScript, React, Tailwind CSS, and Next Image. Keep content typed and local for now; add backend services only when product needs justify them.

**Consequences:** The app has explicit routes, reusable typed components, a lint/type/build workflow, and image optimization. Compared with the original static files, it adds dependencies and a build step.
