# Jules Gossiaux Digital Hub

A visual personal portfolio built with Next.js 16, React, TypeScript, and Tailwind CSS 4. The stack supports a compact static portfolio now and leaves room for server-side features if product needs justify them.

## Run locally

Install dependencies, then start the Next.js development server:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update the content

Add photographs and project screenshots under `public/assets/images/`, in the matching `profile/`, `projects/`, `sites/`, `experiences/`, or `resources/` subfolder. The image guide lists the expected filenames. Set the corresponding `image` path in `src/lib/portfolio.ts` to display each image. Contact details and a CV are not included yet.

## Project files

- `src/app/` contains the App Router pages and shared metadata/layout.
- `src/components/` contains reusable site frame and image cards.
- `src/lib/portfolio.ts` is the typed source for gallery content.
- `src/app/globals.css` contains the full-screen gallery design and responsive behavior.
- `public/assets/images/` contains owner-provided portfolio imagery.
- `docs/` contains architecture, development, testing, roadmap, and decision notes.

## Limits

The current product has no database, analytics, contact form, or deployment configuration. Next.js pre-renders the current routes; add server-side services when a defined product need calls for them.
