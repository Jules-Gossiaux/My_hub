# Architecture

## Overview

The Digital Hub is a static, single-page site built with browser-native HTML, CSS, and JavaScript. It requires no compilation, server-side code, database, or runtime dependency.

## Files and responsibilities

- `index.html`: semantic page structure, metadata, navigation, and editable profile copy.
- `styles.css`: visual system, responsive layout, focus styling, and reduced-motion behavior.
- `content.js`: project and student-resource arrays exposed as `window.HUB_CONTENT`.
- `script.js`: renders card collections and validates destination URL protocols.

## Data flow

The browser loads `content.js` before `script.js` using deferred scripts in document order. The renderer reads the two arrays and fills the project and resource containers. An empty array produces an explicit empty state. A non-empty item may include `title`, `description`, `tag`, and `url`; the URL is parsed and only HTTP and HTTPS schemes create links. External links include `noopener noreferrer`.

## Boundaries and decisions

There is no persistence or network data flow beyond the optional Google Fonts stylesheet request. Content is maintained in source control. Project and resource entries must be verified before publication. Card markup currently uses HTML string templates, so content must remain trusted repository-authored data; do not pass untrusted values to the templates.
