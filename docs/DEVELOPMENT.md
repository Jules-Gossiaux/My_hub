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

Add verified project and resource objects in `content.js`. Edit the introductory, about, and contact placeholders in `index.html` only when the owner supplies accurate content. The site has no environment variables.

## Troubleshooting

- If styles or scripts do not update, reload the page without cache.
- Google Fonts require network access; local system font fallbacks are defined.
- If a card link is missing, ensure its URL uses HTTP or HTTPS.
- An empty projects or resources list intentionally displays an empty state.
