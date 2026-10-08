# Jules Gossiaux Digital Hub

A personal portfolio and student resource hub. The current implementation uses plain HTML, CSS, and JavaScript with no build step or runtime dependencies. The project is not tied to this stack; future work may choose any stack that fits the requirements and repository context.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. For example, with Python:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Update the content

Edit `content.js` to add projects and resources. Each item may have `title`, `description`, `tag`, and `url` fields. Keep the arrays empty until there are real items ready to share; the page will show an honest empty state. Update the contact placeholder in `index.html` only when Jules supplies a contact method. No CV or contact address is currently included.

## Project files

- `index.html` contains the page structure and editable profile copy.
- `styles.css` contains responsive styles, focus states, and reduced-motion handling.
- `content.js` is the source for project and student resource cards.
- `script.js` renders cards and validates link protocols.
- `docs/` contains architecture, development, testing, roadmap, and decision notes.

## Limits

This is a static front end. There is no server, database, analytics, contact form, or deployment configuration. Google Fonts are loaded from Google when a network connection is available; system fallbacks are provided.
