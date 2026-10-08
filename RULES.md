# Project rules

These rules apply to contributors and automated agents working in this repository. Keep them aligned with the code that actually exists.

## Product and content

1. Keep the site a personal home for projects, student resources, profile information, and contact details.
2. Do not invent Jules's history, skills, interests, accomplishments, testimonials, or qualifications.
3. Keep unfilled profile content clearly marked as editable placeholder copy.
4. Do not list a project or resource until its title, description, and destination are real and approved for sharing.
5. Keep the `projects` and `resources` arrays in `content.js` as the source of truth for their cards.
6. Do not add a blog, account system, backend, database, analytics, newsletter, or form without a product requirement.
7. Keep project descriptions factual and concise.
8. Keep humor brief and outside factual descriptions.
9. Write visitor-facing copy in natural English unless the product owner requests another language.
10. Do not include a CV link unless a real file or destination exists.

## Technical approach

11. Preserve the plain HTML, CSS, and JavaScript architecture unless a concrete requirement justifies a change.
12. Do not add a dependency for functionality that the browser already provides.
13. Keep page content in semantic HTML and generated card content in `script.js`.
14. Keep project and resource data separate from layout and presentation.
15. Use readable, explicit code over speculative abstractions.
16. Do not silently suppress errors that affect rendering or navigation.
17. Validate external card URLs and allow only HTTP and HTTPS protocols.
18. Open external destinations with `noopener noreferrer`.
19. Do not put secrets, tokens, or private user data in the repository.
20. Do not add remote services unless the product owner requests them.
21. Prefer local CSS and existing assets over stock imagery.
22. Keep dependencies, scripts, and build steps documented when introduced.
23. Avoid generated content that implies unverified metrics or activity.
24. Keep source files easy to edit without requiring a build system.

## Accessibility and experience

25. Use landmarks and maintain a logical heading hierarchy.
26. Ensure each navigation item points to an existing section.
27. Keep every action available by keyboard.
28. Preserve visible focus indicators.
29. Use text labels as well as color to communicate status.
30. Maintain readable contrast between text and backgrounds.
31. Provide meaningful alternatives for informative images; mark decorative images as decorative.
32. Respect the user's reduced-motion preference.
33. Keep layouts usable on narrow viewports without horizontal scrolling.
34. Do not make decorative elements look interactive.
35. Give links meaningful accessible names.
36. Do not use color alone to distinguish categories.
37. Keep focus order aligned with visual and reading order.
38. Retain the skip link when editing the page shell.
39. Test navigation with keyboard input after changing section IDs or links.
40. Keep interactive states clear on touch and pointer devices.

## Content and data changes

41. Escape or safely render any future user-supplied content before inserting it into the DOM.
42. Keep required card fields documented in `README.md`.
43. Use absolute HTTPS URLs for public external resources when practical.
44. Do not claim a destination is safe or available without checking it.
45. Keep empty states helpful and honest.
46. Do not hide missing required destinations behind fake links.
47. Update the metadata when the product description materially changes.
48. Update documentation when setup or behavior changes.
49. Avoid duplicating the same project or resource data in multiple files.
50. Keep placeholder text visually distinct from verified content.

## Git and collaboration

51. Work on a dedicated feature, fix, documentation, refactor, test, or chore branch.
52. Do not commit directly to `main` or `master`.
53. Do not overwrite another contributor's uncommitted changes.
54. Inspect `git status` before editing and before committing.
55. Do not use force-push or destructive history rewriting.
56. Keep commits focused and use Conventional Commit messages.
57. Review the full diff before creating a commit.
58. Do not include unrelated generated files in a commit.
59. A pull request should explain context, behavior, changes, checks, and limitations.
60. Verify CI results before merging a pull request.
61. Do not merge unreviewed work unless the project owner requests it.
62. Do not delete branches or worktrees you do not own.
63. Keep the remote URL free of credentials.
64. Report accurately whether a branch was pushed or a pull request was opened.

## Quality and validation

65. Inspect the existing code and repository conventions before making changes.
66. Make the smallest coherent change that meets the requirement.
67. Do not claim a command passed unless it was run and its result was observed.
68. Run relevant syntax and build checks when available.
69. If there is no test suite, state that plainly instead of implying coverage.
70. Check links and section targets when navigation changes.
71. Inspect responsive behavior at narrow and wide sizes when UI changes.
72. Review browser console output for errors when practical.
73. Fix regressions introduced by the change.
74. Document unrelated pre-existing failures separately.
75. Keep changelog entries focused on user-visible changes.

## Security and privacy

76. Collect no personal information through this static page.
77. Do not add tracking without an explicit product decision.
78. Avoid putting private contact information online without owner approval.
79. Validate data at external boundaries.
80. Do not use `innerHTML` with unchecked externally sourced data.
81. Keep external link behavior explicit.
82. Minimize third-party requests and disclose them in the README.
83. Do not commit environment files containing secrets.
84. Do not add permissions or browser APIs without a product need.
85. Review any new dependency for maintenance, compatibility, and license.

## Change workflow

86. State the user need and acceptance criteria before a substantial change.
87. Identify relevant files, risks, and existing behavior before editing.
88. Keep the implementation within the requested scope.
89. Add or update tests when a real automated test harness exists and testing is requested or required.
90. Run relevant formatting, lint, type, test, and build commands that the project provides.
91. Review the final diff for accidental changes.
92. Update relevant documentation and changelog entries.
93. Commit only when requested or when the repository workflow explicitly requires it.
94. Push only to the intended branch and report the result.
95. Do not publish or deploy unless explicitly requested.
96. Report changes, commands, results, and known limits clearly.
97. Ask for missing personal facts rather than guessing.
98. Continue with reversible defaults when noncritical information is missing.
99. Keep decisions understandable to future maintainers.
100. Treat the product requirements document as the source of product scope.
