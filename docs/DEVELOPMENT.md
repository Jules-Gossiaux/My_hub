# Development

## Requirements

- Node.js 20.9 or newer and npm.
- Git for version control.
- A modern browser.

## Start locally

From the project directory run:

```powershell
npm install
npm run dev
```

Visit `http://localhost:3000`. Stop the server with Ctrl+C.

## Edit content

Add verified gallery items in `src/lib/portfolio.ts` and put owner-approved images under `public/assets/images/`. Expected filenames and privacy notes are in `public/assets/images/README.md`. Set each image's public URL in the typed content entry. Keep descriptive text short and factual. No environment variables are currently required.

## Troubleshooting

- If styles or scripts do not update, reload the page without cache.
- Image cards display a visual placeholder until an `image` path is set in the content data.
- Local assets in Next.js `public/` are referenced from the site root, for example `public/assets/images/profile/jules-portrait.webp` is `/assets/images/profile/jules-portrait.webp` in code.
