# Architecture

## Overview

The Digital Hub uses Next.js App Router, React, TypeScript, and Tailwind CSS. This is the current stack choice, not a prohibition on other stacks or backends. Choose architecture based on product requirements and maintainability.

## Files and responsibilities

- `src/app/`: route pages, root layout, metadata, and global styles.
- `src/components/`: shared navigation frame and reusable portfolio image card.
- `src/lib/portfolio.ts`: typed, source-controlled project and life gallery data.
- `public/assets/images/`: local image assets served from the site root.

## Data flow

Next.js maps `/` to the visual gallery and `/about` to the profile view. Both routes use the shared site frame and typed card component. Images are served from `public/assets/images/` and rendered with `next/image`. Gallery data is local TypeScript; there is currently no database or backend API.

## Boundaries and decisions

Content and images are maintained in source control. Project and resource entries must be verified before publication. The App Router permits server-rendered features and route handlers if future requirements call for them. Do not introduce persistence or external services without a defined use case.
