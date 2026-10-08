# Contributing

## Workflow

1. Review the PRD, `RULES.md`, and current Git status.
2. Create a dedicated branch for the change; do not work directly on `main`.
3. Keep changes focused. Choose a stack suited to the requirements and repository; do not treat the current static implementation as a constraint on future work.
4. Update documentation when setup or behavior changes.
5. Inspect the diff and run the checks relevant to the change.
6. Use a Conventional Commit message when committing.
7. For a pull request, describe the context, visible behavior, changed files, validation, and known limitations. Include screenshots for visual changes when useful.

## Content contributions

Only add verified projects, student resources, contact details, and profile facts. Place gallery content in `content.js` and owner-approved images in the matching `assets/images/` folders. Do not publish personal imagery or contact details unless Jules intends them to be public.

## Documentation

Project-wide setup and product documents live at the repository root. Architecture, development, testing, roadmap, and decision documents live in `docs/`.

## Quality checks

The project currently has no package manager, linter, or automated test suite. Check JavaScript syntax with `node --check script.js` and `node --check content.js`. Open the page in a browser at desktop and mobile widths and exercise the navigation with a keyboard.
