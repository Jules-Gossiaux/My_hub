# Project rules

These rules apply to contributors and automated agents working in this repository. Keep them aligned with the code that actually exists.

## Product and content

1. Keep the site a personal home for projects, student resources, profile information, and contact details.
2. Do not invent Jules's history, skills, interests, accomplishments, testimonials, or qualifications.
3. Keep unfilled profile content clearly marked as editable placeholder copy.
4. Do not list a project or resource until its title, description, and destination are real and approved for sharing.
5. Keep gallery and profile content in the project's clear, maintainable source of truth (currently `src/lib/portfolio.ts`).
6. Do not add features or infrastructure without a clear product or engineering reason; backend, database, analytics, or other services are permitted when justified.
7. Keep project descriptions factual and concise.
8. Keep humor brief and outside factual descriptions.
9. Write visitor-facing copy in natural English unless the product owner requests another language.
10. Do not include a CV link unless a real file or destination exists.

## Technical approach

11. Choose the stack that best fits the product requirements, existing repository, deployment constraints, and maintenance needs; no language or framework is mandated.
12. Treat the current stack as context, not a restriction; change it when a clear product or engineering reason supports migration.
13. Add dependencies and build tools when they solve a real product or engineering need; assess maintenance, compatibility, and license first.
14. Keep page content in the appropriate semantic components or templates for the chosen stack.
15. Keep project and resource data separate from layout and presentation where practical.
16. Use readable, explicit code over speculative abstractions.
17. Do not silently suppress errors that affect rendering or navigation.
18. Validate external card URLs and allow only HTTP and HTTPS protocols.
19. Open external destinations with `noopener noreferrer`.
20. Do not put secrets, tokens, or private user data in the repository.
21. Use remote services or a backend when they solve a defined need; document the data, privacy, security, and operating implications.
22. Prefer existing assets and purpose-built visuals over stock imagery.
23. Personal image privacy: use personal images only when supplied or explicitly approved by the owner; this repository is public, so committed images are publicly accessible.
24. Keep dependencies, scripts, and build steps documented when introduced.
25. Avoid generated content that implies unverified metrics or activity.
26. Keep source files easy to edit and the development workflow documented.

## Accessibility and experience

27. Use landmarks and maintain a logical heading hierarchy.
28. Ensure each navigation item points to an existing section.
29. Keep every action available by keyboard.
30. Preserve visible focus indicators.
31. Use text labels as well as color to communicate status.
32. Maintain readable contrast between text and backgrounds.
33. Provide meaningful alternatives for informative images; mark decorative images as decorative.
34. Respect the user's reduced-motion preference.
35. Keep layouts usable on narrow viewports without horizontal scrolling.
36. Do not make decorative elements look interactive.
37. Give links meaningful accessible names.
38. Do not use color alone to distinguish categories.
39. Keep focus order aligned with visual and reading order.
40. Retain the skip link when editing the page shell.
41. Test navigation with keyboard input after changing section IDs or links.
42. Keep interactive states clear on touch and pointer devices.

## Content and data changes

43. Escape or safely render any future user-supplied content before inserting it into the DOM.
44. Keep required card fields documented in `README.md`.
45. Use absolute HTTPS URLs for public external resources when practical.
46. Do not claim a destination is safe or available without checking it.
47. Keep empty states helpful and honest.
48. Do not hide missing required destinations behind fake links.
49. Update the metadata when the product description materially changes.
50. Update documentation when setup or behavior changes.
51. Avoid duplicating the same project or resource data in multiple files.
52. Keep placeholder text visually distinct from verified content.

## Git and collaboration

53. Work on a dedicated feature, fix, documentation, refactor, test, or chore branch.
54. Do not commit directly to `main` or `master`.
55. Do not overwrite another contributor's uncommitted changes.
56. Inspect `git status` before editing and before committing.
57. Do not use force-push or destructive history rewriting.
58. Keep commits focused and use Conventional Commit messages.
59. Review the full diff before creating a commit.
60. Do not include unrelated generated files in a commit.
61. A pull request should explain context, behavior, changes, checks, and limitations.
62. Verify CI results before merging a pull request.
63. Do not merge unreviewed work unless the project owner requests it.
64. Do not delete branches or worktrees you do not own.
65. Keep the remote URL free of credentials.
66. Report accurately whether a branch was pushed or a pull request was opened.

## Quality and validation

67. Inspect the existing code and repository conventions before making changes.
68. Make the smallest coherent change that meets the requirement.
69. Do not claim a command passed unless it was run and its result was observed.
70. Run relevant syntax and build checks when available.
71. If there is no test suite, state that plainly instead of implying coverage.
72. Check links and section targets when navigation changes.
73. Inspect responsive behavior at narrow and wide sizes when UI changes.
74. Review browser console output for errors when practical.
75. Fix regressions introduced by the change.
76. Document unrelated pre-existing failures separately.
77. Keep changelog entries focused on user-visible changes.

## Security and privacy

Collect only personal information needed for a defined, approved feature, and document how it is handled.
78. Do not add tracking without an explicit product decision.
79. Avoid putting private contact information online without owner approval.
80. Validate data at external boundaries.
81. Do not use `innerHTML` with unchecked externally sourced data.
82. Keep external link behavior explicit.
83. Minimize third-party requests and disclose them in the README.
84. Do not commit environment files containing secrets.
85. Do not add permissions or browser APIs without a product need.
86. Review any new dependency for maintenance, compatibility, and license.

## Change workflow

87. State the user need and acceptance criteria before a substantial change.
88. Identify relevant files, risks, and existing behavior before editing.
89. Keep the implementation within the requested scope.
90. Add or update tests when a real automated test harness exists and testing is requested or required.
91. Run relevant formatting, lint, type, test, and build commands that the project provides.
92. Review the final diff for accidental changes.
93. Update relevant documentation and changelog entries.
94. Commit only when requested or when the repository workflow explicitly requires it.
95. Push only to the intended branch and report the result.
96. Do not publish or deploy unless explicitly requested.
97. Report changes, commands, results, and known limits clearly.
98. Ask for missing personal facts rather than guessing.
99. Continue with reversible defaults when noncritical information is missing.
100. Keep decisions understandable to future maintainers.
101. Treat the product requirements document as the source of product scope.
