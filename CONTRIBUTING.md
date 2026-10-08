# Contributing

## Workflow

1. Review the PRD, `RULES.md`, and current Git status.
2. Create a dedicated branch for the change; do not work directly on `main`.
3. Keep changes focused and preserve the existing lightweight stack.
4. Update documentation when setup or behavior changes.
5. Inspect the diff and run the checks relevant to the change.
6. Use a Conventional Commit message when committing.
7. For a pull request, describe the context, visible behavior, changed files, validation, and known limitations. Include screenshots for visual changes when useful.

## Content contributions

Only add verified projects, student resources, contact details, and profile facts. Place project/resource entries in `content.js`; update profile copy in `index.html`. Do not publish private contact details without Jules's approval.

## Quality checks

The project currently has no package manager, linter, or automated test suite. Check JavaScript syntax with `node --check script.js` and `node --check content.js`. Open the page in a browser at desktop and mobile widths and exercise the navigation with a keyboard.
