# Development

## Requirements

- Git for version control.
- A modern browser.
- Python 3 (optional, for a local HTTP server).

The current implementation has no package or build tools. This is an implementation detail, not a project constraint; if the stack changes, update these requirements and commands to match.

## Start locally

Open `index.html` directly, or from the project directory run:

```powershell
python -m http.server 8000
```

Visit `http://localhost:8000` and stop the server with Ctrl+C.

## Edit content

Add verified gallery items in `content.js` and put their images under `assets/images/`. The expected file paths are documented in `assets/images/README.md`. Keep descriptive text short and factual. The site has no environment variables.

## Troubleshooting

- If styles or scripts do not update, reload the page without cache.
- Image slots display a visual placeholder when their expected files are absent.
- If an image does not appear, check that its filename and file type match `content.js`.
