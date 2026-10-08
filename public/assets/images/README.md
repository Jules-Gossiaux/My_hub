# Portfolio images

Put image files in `public/assets/images/` using these subfolders and descriptive lowercase names:

- `profile/` — portrait: `jules-portrait.webp`.
- `projects/` — project image: `project-01.webp`.
- `sites/` — website screenshot: `site-01.webp`.
- `experiences/` — rugby: `rugby-match.webp`; walk: `winter-walk.webp`; reading: `reading.webp`.
- `resources/` — student material: `study-materials.webp`.

WebP, JPEG, and PNG are supported. For screenshots, use the largest clear source you have; for photos, a landscape or portrait crop around 1600 px on the long edge is usually plenty. Do not crop or resize originals unless you want to; keep the original and use a copy for the site if needed.

After adding an image, its public path is `/assets/images/<subfolder>/<filename>`. Add that path to the matching item in `src/lib/portfolio.ts` (for example, `/assets/images/profile/jules-portrait.webp`). You can add images here first and tell Codex their filenames, or add them through the shared workspace. Do not use filenames with personal details.

**Privacy:** this GitHub repository is public. Any image committed and pushed here is publicly accessible, even before it appears on the site. Only add images you are comfortable making public.
