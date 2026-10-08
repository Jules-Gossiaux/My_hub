# Jules Gossiaux Digital Hub

A personal portfolio and student resource hub. The current implementation uses plain HTML, CSS, and JavaScript with no build step or runtime dependencies. The project is not tied to this stack; future work may choose any stack that fits the requirements and repository context.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. For example, with Python:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Update the content

Add photographs and project screenshots to `assets/images/`, in the matching `profile/`, `projects/`, `sites/`, `experiences/`, or `resources/` subfolder. The image guide there lists the expected filenames. The gallery loads files at those paths automatically. Contact details and a CV are not included yet.

## Project files

- `index.html` contains the page shell and metadata.
- `styles.css` contains the full-screen gallery layout, responsive behavior, and focus states.
- `content.js` is the source for gallery items and profile facts.
- `script.js` renders gallery cards and switches between compact views.
- `docs/` contains architecture, development, testing, roadmap, and decision notes.

## Limits

This is a static front end. There is no server, database, analytics, contact form, or deployment configuration. Google Fonts are loaded from Google when a network connection is available; system fallbacks are provided.
