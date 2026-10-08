# Testing and validation

## Available automated checks

There is currently no automated test suite, linter, type checker, or build script. Check JavaScript syntax with:

```powershell
node --check script.js
node --check content.js
```

## Manual checks

1. Load `index.html` in a browser and confirm the gallery view renders.
2. Switch between Gallery and About with mouse and keyboard input.
3. Use Tab, Shift+Tab, Enter, and Space; confirm focus is visible and the portrait card opens About.
4. Check a common desktop size for viewport fit without vertical scrolling.
5. Check a narrow phone width for usable cards and acceptable scrolling.
6. Add the documented image files and confirm crops, contrast, and alt text.
7. Enable reduced motion and confirm image hover transitions are minimized.
8. Check the browser console for errors.

Manual checks are not a substitute for a future browser automation suite if the project grows interactive behavior.
