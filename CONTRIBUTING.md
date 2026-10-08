# Contributing

## Workflow

1. Review the PRD, `RULES.md`, and current Git status.
2. Create a dedicated branch for the change; do not work directly on `main`.
3. Keep changes focused and choose a stack that supports professional, clear, scalable, maintainable implementation. No framework or backend is prohibited in advance.
4. Update documentation when setup or behavior changes.
5. Inspect the diff and run the checks relevant to the change.
6. Use a Conventional Commit message when committing.
7. For a pull request, describe the context, visible behavior, changed files, validation, and known limitations. Include screenshots for visual changes when useful.

## Content contributions

Only add verified projects, student resources, contact details, and profile facts. Place typed gallery content in `src/lib/portfolio.ts` and owner-approved images in the matching `public/assets/images/` folders. Do not publish personal imagery or contact details unless Jules intends them to be public.

## Documentation

Project-wide setup and product documents live at the repository root. Architecture, development, testing, roadmap, and decision documents live in `docs/`.

## Quality checks

Run `npm run lint`, `npm run typecheck`, and `npm run build` before opening a pull request. Check both routes in a browser at desktop and mobile widths and exercise navigation with a keyboard.
