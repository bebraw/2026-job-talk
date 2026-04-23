# Slide Notes

Keep this document in sync with the slide deck whenever slide content changes. The slides should stay concise; extended explanations belong here.

Durable deck-level design and workflow rules live in `AGENTS.md`. Keep this file focused on slide-specific content and speaker-note guidance.

## 01. Teaching the Next Web

- Open with the thesis of the talk: the web is going through another architectural transition, and that transition matters for both research and teaching.
- Position yourself as working across three connected layers: research on web architectures, teaching and supervision, and a future agenda around agentic hypermedia.
- Signal that the talk is not only about frontend trends. It is about how a broad CS department can think about architecture, AI, and education on a globally important software platform.

## 02. Why This Matters Now

- Start with current empirical proof of growth rather than with an abstract slogan.
- Use HTTP Archive's `Web Almanac 2025`, `Page Weight`, `Figure 14.1` as the chart on the first motivation slide.
- The exact source is: `https://almanac.httparchive.org/en/2025/page-weight`.
- Lead with the claim that we often have the practices to reduce complexity, but too little incentive to adopt them.
- Use the growth in page weight as evidence of a broader architectural problem rather than as the whole argument.
- Emphasize that scale has created real complexity costs: payload, latency, maintenance burden, and conceptual overhead.

## 03. Why This Matters Now

- Keep the second motivation slide visual.
- Use a simple progression of interaction modes rather than a benchmark-count graphic.
- Keep each card body as a short cue rather than a mini-explanation.
- Build the visual as `search and click` -> `agentic search` -> `browser use`, but make the lead claim explicit: the web is increasingly shaped by software agents.
- Use `Mind2Web 2` to justify the claim that the old search model is query -> URL list -> manual synthesis.
- Use `OpenAI deep research` for the shift toward systems that browse many sources and return citation-backed reports.
- Use `Anthropic computer use`, `OpenAI Operator`, and `Google Project Mariner` as evidence that agents now operate websites built for humans.
- Cite this slide with numbered references `[6]-[10]` rather than long source lines.
- The point is not only that research exists, but that agents now shape the web in two ways: in development flows and as consumers of websites.
- Land the consequence aloud rather than on a separate follow-up slide.
- Make explicit in the spoken transition that the web now serves two kinds of clients: humans and agents.
- Tie that directly to the scope of the talk: software architecture, AI, and computing education.

## 04. Roadmap

- Explain that the talk follows the requested structure.
- First motivate why this topic matters to a broader CS audience.
- Then move through research highlights, the research-to-teaching transition, future vision and goals, and conclusion.
- Close with future vision, lecturer goals, and conclusion.
- Keep the roadmap wording aligned with active part and subsection divider slides.

## 05. Part 1

- Use this divider slide to signal the transition from motivation to the research block.
- Make clear that the next set of slides focuses on research highlights first.

## 06. Hybrid Rendering Models

- Ground the slide in the dissertation abstract and conclusion rather than in a generic static-versus-dynamic slogan.
- Point to the dissertation explicitly so the audience can follow up later.
- Start from the background exactly: the web moved from static content to application development, application size has grown sharply, and mobile constraints still matter.
- State the primary purpose directly: explore the space between static and dynamic web development.
- Use the two main claims from the conclusion: the mainstream SPA model is not ideal for all use cases, and hybrid rendering techniques help control SPA-related costs.
- Keep this slide fully in research mode; move the teaching consequence to the later teaching block instead of previewing it here.

## 07. Simplification Agenda

- Make the point that simplification is not nostalgia or anti-technology.
- Your agenda is to reduce unnecessary overhead while preserving capability.
- Use this first pass to show only the first agenda marker so you can introduce the theme without rushing through all three papers at once.
- Keep the framing question visible so the paper reads as one example within the agenda.

## 08. Simplification Agenda

- Add the second agenda marker while keeping the first visible.
- Treat this as a deliberate build slide rather than a new argument.

## 09. Simplification Agenda

- Complete the build by showing all three agenda markers together.
- Make the agenda explicit with the question `How do we reduce unnecessary complexity without giving up capability?`
- Treat the papers as evidence of the agenda rather than as the whole message.
- The current three agenda markers are `Revisiting Hypermedia, The Forgotten Web Application Development Paradigm`, `The Rise of Disappearing Frameworks in Web Development`, and `The Case for HTML First Web Development`.

## 10. Part 2

- Use this local divider to mark the shift from research highlights to educational consequences and teaching practice.
- Make the transition explicit: the same pressures changing web architecture also change what and how we teach.
- Treat it as a pacing slide, not as a new argumentative claim.

## 11. AI And Computing Education

- Start from the institutional claim in the paper: universities have to adapt, not just students.
- Use the first pass to frame AI in CSEd as a curricular and institutional issue.
- Make the right side concrete immediately through assessment and classroom design: flipped learning, oral examinations, and dialogical assessment.

## 12. AI And Computing Education

- Add the second point as `Integrity is not the only issue.`
- Use the second pass to broaden the challenge set: trust, over-reliance, bias, and unequal access.
- The point here is that academic misconduct is only one symptom of a broader pedagogical shift.

## 13. AI And Computing Education

- Complete the sequence with the durable goal of judgment.
- Refer explicitly to the joint paper with Petri Juntunen on AI in CSEd through citation `[1]`.
- End on the point that students should know when to trust, verify, and ignore AI.
- Make the right side concrete here as well: critical reading, writing, debugging, and reflection.
- This sequence should now read as a progression from institutional adaptation to broader risks to durable skills.

## 14. How Research Informs My Teaching

- Describe your teaching style as dialogue-based and constructivist.
- Explain that research helps you organize a fast-moving field into durable models that students can adapt later.
- Use the research-teaching nexus sketch to ground the slide in existing higher-education literature rather than a purely custom loop.
- Healey provides the recognizable nexus vocabulary; Brew supports the more reciprocal, community-oriented interpretation.
- Use the first pass to establish the first core point only; avoid adding a redundant inner heading under the slide title.

## 15. How Research Informs My Teaching

- Add the second point on the next slide so the teaching approach unfolds step by step.
- State the reverse direction explicitly here: teaching and supervision also feed research back.
- Keep the bullets as the main content and treat the diagram as a compact scholarly anchor, not as the main content.

## 16. How Research Informs My Teaching

- Use this as the dedicated `research with students` evidence slide.
- Keep only the supervision numbers that support the claim directly: BSc and MSc thesis counts.
- Drop `ECTS of pedagogy` here; it belongs to teaching background rather than student-research evidence.
- Make the main point explicit in one short line: students learn by contributing to real research, not by orbiting it from a distance.
- Use the three cases as concise evidence of theme and level: AI for web development, edge/serverless systems, and WebAssembly at the edge.
- Mention that the Pyry Pohjalainen thesis led to publication through AAAI Magazine, as that signals quality and external visibility.

## 17. Teaching Infrastructure

- Refer to the writing guide by title: `The Process of Scientific Writing`.
- Use this slide to make the writing guide visible as a concrete teaching artifact rather than only a bullet point.
- Show the cover large enough that the title is readable at slide scale.
- Use this slide to show that you do not only teach courses; you build scaffolding around learning.

## 18. Public Learning Communities

- Use the follow-up slide to move the conference/community point out of the writing-support slide.
- Keep the current conference photo here and connect it directly to Future Frontend.
- Treat meetups and the conference as outward-facing teaching work rather than as generic community service.
- Use one concrete developer example here so the practitioner background is legible: `webpack-merge` is a good anchor.
- Phrase the developer example accurately: `webpack-merge` can be presented as your work, while `webpack` and `Blender` should read as earlier contributions rather than ongoing involvement.
- Keep the developer line compact; the example should act as recognition, not as a project history.

## 19. Tools That Support My Work With Students

- Merge the two tool examples into one comparison slide.
- Use Thesis Journey Tracker to show supervision infrastructure: phases, meetings, and notes in one place.
- Use Supervisor Search to show student-facing infrastructure: students can find a suitable MSc thesis supervisor with less friction.
- Crop both screenshots intentionally so the key interaction areas remain legible at presentation scale.
- Keep the slide visual and comparative rather than turning it into a feature list.

## 20. Part 3

- Use this divider slide to mark the shift from highlights to future direction.
- Signal that the next slides focus on future research and the lecturer role.

## 21. Future Vision: Agentic Hypermedia

- This is the signature future slide.
- Explain the core claim: as AI agents become participants in software use, hypermedia becomes relevant again.
- Frame the first research question around keeping web applications usable by agents, not around reinventing hypermedia principles.
- Use the architecture sketch to make the idea concrete: both humans and agents interact through a hypermedia layer grounded in the semantic web and knowledge bases.
- Anchor the idea in both the older hypermedia literature and the semantic web literature, so the slide reads as a continuation of established web architecture thinking rather than a new slogan.
- The opportunity is to design systems that are lighter for users, clearer for developers, and easier for agents to navigate.
- Emphasize that this is both a research direction and a teaching direction.

## 22. Future Teaching At Aalto

- Use this slide to anchor your future teaching agenda in a concrete Aalto commitment.
- State clearly that starting in January 2027, you will teach Designing and Building Scalable Web Applications (CS-E4770).
- Treat the course mention as evidence that your future plans at Aalto are already concrete, not speculative.

## 23. Future Teaching At Aalto

- Turn this into a build slide by keeping the CS-E4770 commitment visible and adding the teaching claim beneath it.
- Make explicit that in CS-E4770, you will teach web architecture as a core computer science topic, not only as framework practice.
- Keep the wording direct and discipline-facing so the course reads as relevant to the broader CS community.

## 24. Future Teaching At Aalto

- Complete the build by showing the course commitment, the disciplinary framing, and the pipeline claim together.
- State that you will use CS-E4770 to connect courses, projects, theses, and supervision around scalable and agent-facing web systems.
- Use the final slide to show that your future teaching and research plans at Aalto are connected through one concrete platform.

## 25. Part 4

- Use this divider slide to slow the pace before the final conclusion section.
- It should make the Q&A phase feel intentional rather than abrupt.

## 26. Conclusion

- Replace the question build with one direct claim.
- End on the hiring-case summary: you bring a distinctive specialization in web architecture, agent-facing systems, and modern software practice.

## 27. Q&A

- Keep this slide minimal and let it hold the room during questions.
- Use it only after the conclusion slide has already framed the closing claim.

## 28. References

- Keep this slide compact and purely bibliographic.
- It should resolve only the live citation set used on the slides.
- The current active set is `[1]` to `[10]`: AI in CSEd, Fielding, Healey, Brew, Berners-Lee et al., Mind2Web 2, OpenAI deep research, OpenAI Operator, Anthropic computer use, and Google Gemini 2.0 / Project Mariner.
- Keep reference layout stable when this set changes: all entries must remain visible on one slide, with working links where reliable URLs are available.
