# Product Requirements Document: Jules Gossiaux Digital Hub

**Status:** Ready for implementation  
**Product type:** Personal website / portfolio / resource hub  
**Primary audience:** People discovering Jules's work, including educators, potential mentors, collaborators, and students  
**Tone:** Friendly, curious, lightly playful, and credible

## 1. Product summary

Build a visual personal portfolio for Jules Gossiaux: a compact, image-led home for his projects, websites, rugby, experiences, and student resources. The portfolio should use the available screen area and avoid scrolling on common desktop sizes; a second compact view is acceptable for profile details.

The site should make it easy to answer three questions:

1. Who is Jules, and what is he interested in?
2. What has he built or worked on?
3. Where can I explore his projects, websites, and flashcards for students?

The experience should feel personal and fun without making the work itself seem casual or unfinished. Use small moments of humour and personality around the content; keep project descriptions, skills, and contact information direct and professional.

**Concept in one line:** A compact visual record of work, sport, and life.

## 2. Goals

- Introduce Jules through a small amount of distinctive copy and strong personal imagery.
- Give visitors a clear route to projects, websites, and educational resources.
- Present work in a way that is easy to scan and understand.
- Leave room for the portfolio to grow as new projects are completed.
- Work well on phones, tablets, and desktop screens.
- Use the full desktop viewport for the portfolio, with no vertical scrolling when practical.
- Make content easy to edit without requiring a redesign for every new item.

## 3. Non-goals

- Do not build a full blog, social network, learning platform, or account system.
- Do not add backend services, databases, analytics, or newsletters without a clear product or technical reason. These are allowed when they solve a real need; no architecture is prohibited in advance.
- Do not invent achievements, experience, testimonials, project details, contact information, or downloadable CV files.
- Do not make the site feel like a generic corporate template or a joke site.

## 4. Users and primary journeys

### Visitor interested in Jules

They arrive, understand who Jules is and what he likes working on, then browse selected projects or contact him.

### Student looking for a resource

They find the Resources section, understand what a flashcard set or material covers, and follow its link.

### Mentor, educator, or potential collaborator

They quickly assess Jules's interests and work, find background information, and locate a contact method.

## 5. Information architecture

Create one or two compact views with simple navigation. Use an image-led portfolio grid rather than a long scrolling landing page. Avoid vertical scrolling on common desktop sizes; adapt responsibly on small screens where viewport space is limited. Use owner-supplied images of Jules, his work, sites, sport, and experiences; do not substitute stock or invented personal imagery.

1. **Home / introduction**
   - Name and concise headline.
   - Short introduction in the first person.
   - Primary links to Projects and Resources.
2. **Projects**
   - A responsive grid of project cards.
   - Each card can include a title, short description, type/status tag, and link.
3. **Resources**
   - A distinct section for flashcards and materials made for students.
   - Each item states the subject or purpose and links to the resource.
4. **About**
   - A short profile focused on interests, learning, and problem-solving.
   - Optional CV link only when a real file or URL is supplied.
5. **Contact**
   - Use contact details already present in the repository or supplied by the user.
   - If none are available, show a clearly editable placeholder in the content/configuration rather than inventing an address.

The navigation may use labels such as “Projects,” “For students,” “About,” and “Say hello.” Keep labels obvious even if a small playful phrase is added nearby.

## 6. Content and voice

- Write in natural, concise English unless the existing project or user-provided content establishes another language.
- Use first person for the introduction.
- Sound curious and approachable, not self-important.
- Keep humour brief and optional: a small aside, microcopy detail, or interaction is enough.
- Avoid jokes in factual project descriptions and avoid claims that cannot be verified.
- Where information is missing, use clearly marked editable content or omit that content. Do not present placeholders as facts.

Suggested direction for the introductory copy (adapt naturally; do not treat as fixed final copy):

> Hi, I'm Jules. I like maths, computer science, and turning interesting problems into things people can use. This is where I collect what I'm building, learning, and sharing.

## 7. Visual direction

### Overall feel

A clean, modern personal studio or digital workshop: organised and professional at first glance, with a few warm, playful details that reward attention.

### Design principles

- Make the hierarchy obvious: introduction first, then clear paths into work and resources.
- Use generous spacing, readable typography, and strong contrast.
- Use cards or similarly clear modules so visitors can scan work quickly.
- Add personality through colour, small labels, hand-drawn-style accents, or restrained motion—not visual clutter.
- Keep decoration subordinate to the content.
- Use a consistent visual language across projects, resources, and profile sections.
- Prefer CSS or existing project assets over stock imagery. Do not generate or source imagery unless needed by the existing design.

### Avoid

- A dense dashboard look.
- Excessive gradients, animated elements, or novelty fonts.
- Fake terminal screens, fake metrics, fake testimonials, or decorative charts that imply real data.
- Humour that makes the work or the author appear unreliable.

## 8. Functional requirements

- View controls switch to the correct gallery/profile view and work with keyboard input.
- Project and resource cards are rendered from one easy-to-edit data source when practical.
- External links are visibly identifiable and open safely.
- The layout adapts to small screens without horizontal overflow.
- Interactive elements have clear hover, focus, and active states.
- If there are no real project/resource entries yet, show a polished empty state or clearly editable sample entries; never imply unfinished examples are completed work.
- The page includes a meaningful browser title, meta description, and social sharing metadata if supported by the project setup.
- No control should appear interactive unless it works.

## 9. Accessibility and quality requirements

- Use semantic HTML landmarks and a logical heading hierarchy.
- Ensure all functionality is keyboard accessible and focus indicators are visible.
- Provide sufficient text/background contrast.
- Give meaningful alternative text to informative images; decorative images should have empty alt text.
- Respect reduced-motion preferences.
- Avoid relying on colour alone to communicate status or category.
- Keep page performance light and avoid unnecessary dependencies.

## 10. Technical implementation instructions for Codex

1. Inspect the existing repository, identify its framework, scripts, styling conventions, and current page structure before editing.
2. Choose any stack or architecture that best fits the product requirements and supports clear, professional, scalable, maintainable implementation. No language, framework, backend, or hosting approach is prohibited in advance.
3. An existing stack is useful context, not a binding constraint; change it when a well-explained product or engineering reason supports the change.
4. Implement the site in the smallest coherent set of files. Keep project/resource content easy to update.
5. Reuse suitable assets and dependencies. Add dependencies when they solve a real need and are compatible with the chosen stack.
6. Do not fabricate personal facts, URLs, project status, student resources, contact details, or CV files. Use clearly marked content placeholders for information that must be supplied later.
7. Run the relevant checks/build. Fix issues caused by the implementation and report any checks that could not be run.
8. Do not publish or deploy the site unless explicitly instructed.

## 11. Acceptance criteria

The work is complete when:

- A first-time visitor can tell who the site is for and what it contains within a few seconds.
- Projects and student resources have distinct, clear entry points.
- The visual tone feels both personable and credible.
- All sections are reachable through working navigation.
- The page is usable at mobile and desktop sizes.
- Keyboard navigation, visible focus, and reduced-motion preferences are handled.
- No personal details or accomplishments have been invented.
- Project and resource content can be updated without rewriting the page layout.
- The project passes the relevant available build or validation checks.

## 12. Open content to supply

Codex should inspect the repository for these details first. If unavailable, leave them easy to fill in:

- Preferred display name and profile text.
- Real project names, descriptions, destinations, and completion status.
- Flashcard/resource links and intended audience.
- Contact method.
- CV file or URL, if one should be included.
- Preferred domain, if relevant.

## 13. Implementation priority

1. Build the responsive page structure and navigation.
2. Establish typography, spacing, colour, and card styles.
3. Add the introduction and clear project/resource entry points.
4. Make content data easy to edit.
5. Add restrained personality details and motion only after usability is solid.

