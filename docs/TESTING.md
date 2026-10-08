# Testing and validation

## Available automated checks

There is currently no automated test suite. The project includes lint, type-check, and production build commands:

```powershell
npm run lint
npm run typecheck
npm run build
```

## Manual checks

1. Run the development server and confirm `/` and `/about` render.
2. Navigate between Gallery and About with mouse and keyboard input.
3. Use Tab, Shift+Tab, and Enter; confirm focus is visible and the portrait card opens About.
4. Check a common desktop size for viewport fit without vertical scrolling.
5. Check a narrow phone width for usable cards and acceptable scrolling.
6. Add the documented image files under `public/assets/images/` and confirm crops, contrast, and alt text.
7. Enable reduced motion and confirm image hover transitions are minimized.
8. Check the browser console for errors.

Manual checks are not a substitute for a future browser automation suite if the project grows interactive behavior.
