# Jules Gossiaux Digital Hub

A lightweight personal portfolio and student resource hub. The site is built with plain HTML, CSS, and JavaScript and has no build step or runtime dependencies.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. For example, with Python:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Update the content

Edit `content.js` to add projects and resources. Each item may have `title`, `description`, `tag`, and `url` fields. Keep the arrays empty until there are real items ready to share; the page will show an honest empty state. Update the clearly marked personal copy in `index.html` with verified interests and contact information. No CV or contact address is currently included.

## Project files

- `index.html` contains the page structure and editable profile copy.
- `styles.css` contains responsive styles, focus states, and reduced-motion handling.
- `content.js` is the source for project and student resource cards.
- `script.js` renders cards and validates link protocols.

## Limits

This is a static front end. There is no server, database, analytics, contact form, or deployment configuration. Google Fonts are loaded from Google when a network connection is available; system fallbacks are provided.
