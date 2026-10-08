# Testing and validation

## Available automated checks

There is currently no automated test suite, linter, type checker, or build script. Check JavaScript syntax with:

```powershell
node --check script.js
node --check content.js
```

## Manual checks

1. Load `index.html` in a browser and confirm all sections render.
2. Follow each navigation link and confirm it reaches the matching section.
3. Use Tab, Shift+Tab, Enter, and visible focus indicators to navigate.
4. Check the page at a narrow phone width and a desktop width for overflow and readable layout.
5. Enable reduced motion in the operating system and confirm smooth scrolling is disabled.
6. Add a temporary sample object to each content array, confirm its card and link render, then remove it.
7. Try an unsupported URL scheme in a temporary item and confirm it does not become a link.
8. Check the browser console for errors.

Manual checks are not a substitute for a future browser automation suite if the project grows interactive behavior.
