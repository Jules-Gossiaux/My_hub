# Decisions

## 2026-10-08 — Start with a static browser-native site

**Context:** The repository had only a PRD and no framework or existing application code. The product is a single-page personal hub with no backend requirement.

**Decision:** The initial implementation uses plain HTML, CSS, and JavaScript with no package or build system. This is a reversible implementation choice, not a stack mandate; later work may use any suitable stack.

**Consequences:** The page is easy to host as static files and has few moving parts. Content updates require editing source files. There is no form handling, persistence, or server-side validation.

## 2026-10-08 — Keep projects and resources as editable arrays

**Context:** The page must grow without redesigning its layout, while real project and resource details were not present in the repository.

**Decision:** Store both collections in `content.js` and render clear empty states while the arrays are empty.

**Consequences:** New entries can use the existing card layout. Only verified items should be added; the current renderer is intended for trusted source-controlled content.

## 2026-10-08 — Leave personal facts as placeholders

**Context:** The PRD forbids invented personal details, and the repository did not provide interests, contact information, CV, or project facts.

**Decision:** Mark missing details as editable placeholders and omit CV and contact links.

**Consequences:** The site structure is complete, but the owner should replace placeholders before presenting the page as a finished profile.
