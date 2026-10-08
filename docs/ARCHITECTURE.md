# Architecture

## Overview

The current Digital Hub is a static, image-led portfolio built with browser-native HTML, CSS, and JavaScript. It requires no compilation, server-side code, database, or runtime dependency. This describes the current implementation, not a required stack for future changes. Any stack or backend is allowed when it best supports a clear, professional, scalable, maintainable solution.

## Files and responsibilities

- `index.html`: semantic page shell, metadata, and compact view controls.
- `styles.css`: image-led gallery, responsive layout, and focus styling.
- `content.js`: gallery and profile content exposed as `window.HUB_CONTENT`.
- `script.js`: renders gallery cards and manages view navigation.

## Data flow

The browser loads `content.js` before `script.js` using deferred scripts in document order. The renderer reads the `work` and `life` image-card arrays. Image paths resolve under `assets/images/`; when an expected file is absent, a clearly marked visual slot appears. The two view controls switch between the gallery and profile without a page reload. Content is trusted, source-controlled data.

## Boundaries and decisions

There is no persistence or network data flow beyond the optional Google Fonts stylesheet request. Content is maintained in source control. Project and resource entries must be verified before publication. Card markup currently uses HTML string templates, so content must remain trusted repository-authored data; do not pass untrusted values to the templates.
