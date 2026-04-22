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
- Frame the web as the largest application platform and therefore a legitimate CS topic, not a niche engineering concern.
- Emphasize that scale has created real complexity costs: payload, latency, maintenance burden, and conceptual overhead.

## 03. Why This Matters Now

- Keep the second motivation slide visual.
- Use a simple progression of interaction modes rather than a benchmark-count graphic.
- Keep each card body as a short cue rather than a mini-explanation.
- Build the visual as `search and click` -> `agentic search` -> `browser use`.
- Use `Mind2Web 2` to justify the claim that the old search model is query -> URL list -> manual synthesis.
- Use `OpenAI deep research` for the shift toward systems that browse many sources and return citation-backed reports.
- Use `Anthropic computer use`, `OpenAI Operator`, and `Google Project Mariner` as evidence that agents now operate websites built for humans.
- Cite this slide with numbered references `[6]-[10]` rather than long source lines.
- The point is not only that research exists, but that the interface model of the web is changing.
- Land the consequence aloud rather than on a separate follow-up slide.
- Make explicit in the spoken transition that the web now serves two kinds of clients: humans and agents.
- Tie that directly to the scope of the talk: software architecture, AI, and computing education.

## 04. Roadmap

- Explain that the talk follows the requested structure.
- First motivate why this topic matters to a broader CS audience.
- Then move through research highlights, teaching highlights, and their interaction.
- Close with future vision, lecturer goals, and conclusion.

## 05. Part 1

- Use this divider slide to signal the transition from motivation to the main body of the talk.
- Make clear that the next set of slides covers both research and teaching, not research alone.

## 06. Hybrid Rendering Models

- Ground the slide in the dissertation abstract and conclusion rather than in a generic static-versus-dynamic slogan.
- Point to the dissertation explicitly so the audience can follow up later.
- Start from the background exactly: the web moved from static content to application development, application size has grown sharply, and mobile constraints still matter.
- State the primary purpose directly: explore the space between static and dynamic web development.
- Use the two main claims from the conclusion: the mainstream SPA model is not ideal for all use cases, and hybrid rendering techniques help control SPA-related costs.
- Connect this to teaching: students need historical and architectural models for comparing tradeoffs, not just opinions about frameworks.

## 07. Hybrid Rendering Techniques

- Use direct references to your papers here rather than generic technique labels alone.
- Use edge-powered islands, resumability, and edge computing for SSG as concrete examples of the design space.
- Treat this as the follow-up slide that makes the abstract framing more concrete.

## 08. Simplification Agenda

- Make the point that simplification is not nostalgia or anti-technology.
- Your agenda is to reduce unnecessary overhead while preserving capability.
- Use the paper titles directly on the slide rather than generic labels or paraphrases.
- Treat the papers themselves as the agenda markers rather than paraphrased labels.
- The current three agenda markers are `Revisiting Hypermedia, The Forgotten Web Application Development Paradigm`, `The Rise of Disappearing Frameworks in Web Development`, and `The Case for HTML First Web Development`.

## 09. Why Simplification Matters

- Tie the point back to both maintainability and AI/agent use: simpler, more structured systems are easier for both humans and machines.
- Use this slide to explain the consequences of the agenda rather than introduce the agenda itself.

## 10. From Research To Teaching

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
- Use the first pass to establish the heading and the first core point only.

## 15. How Research Informs My Teaching

- Add the second point on the next slide so the teaching approach unfolds step by step.
- State the reverse direction explicitly here: teaching and supervision also feed research back.
- Keep the large `Teaching approach` heading visually prominent and treat the diagram as a compact scholarly anchor, not as the main content.

## 16. Teaching Infrastructure

- Refer to the writing guide by title: `The Process of Scientific Writing`.
- Use this slide to make the writing guide visible as a concrete teaching artifact rather than only a bullet point.
- Show the cover large enough that the title is readable at slide scale.
- Use this slide to show that you do not only teach courses; you build scaffolding around learning.

## 17. Public Learning Communities

- Use the follow-up slide to move the conference/community point out of the writing-support slide.
- Keep the current conference photo here and connect it directly to Future Frontend.
- Treat meetups and the conference as outward-facing teaching work rather than as generic community service.
- Use one concrete developer example here so the practitioner background is legible: `webpack-merge` is a good anchor.
- Phrase the developer example accurately: `webpack-merge` can be presented as your work, while `webpack` and `Blender` should read as earlier contributions rather than ongoing involvement.
- Keep the developer line compact; the example should act as recognition, not as a project history.

## 18. Thesis Journey Tracker

- Use this slide to make the developer background legible as lecturer-relevant infrastructure rather than as side-project work.
- Thesis Journey Tracker should read as supervision infrastructure: phases, meetings, and notes in one place.
- Keep the slide visual. The screenshot should do most of the work.
- Prioritize screenshot scale over decorative framing.

## 19. Supervisor Search

- Present this as student-facing infrastructure rather than internal admin tooling.
- The key point is lighter access to supervision: students can find a suitable MSc thesis supervisor with less friction.
- Keep the slide visual. The screenshot should do most of the work.
- Prioritize screenshot scale over decorative framing.

## 20. Selected Supervision Cases

- Use the three examples to show a coherent profile: AI for web development, edge/serverless systems, and WebAssembly at the edge.
- Mention that Pyry Pohjalainen's thesis led to publication through AAAI Magazine, as that signals supervision quality and external visibility.

## 21. Part 2

- Use this divider slide to mark the shift from highlights to future direction.
- Signal that the next slides focus on future research and the lecturer role.

## 22. Future Vision: Agentic Hypermedia

- This is the signature future slide.
- Explain the core claim: as AI agents become participants in software use, hypermedia becomes relevant again.
- Frame the first research question around keeping web applications usable by agents, not around reinventing hypermedia principles.
- Use the architecture sketch to make the idea concrete: both humans and agents interact through a hypermedia layer grounded in the semantic web and knowledge bases.
- Anchor the idea in both the older hypermedia literature and the semantic web literature, so the slide reads as a continuation of established web architecture thinking rather than a new slogan.
- The opportunity is to design systems that are lighter for users, clearer for developers, and easier for agents to navigate.
- Emphasize that this is both a research direction and a teaching direction.

## 23. Goals As a Tenure-Track Lecturer

- Make the case that the role matches work you are already doing.
- Start with the teaching goal only.
- Your teaching goal is research-led education around changing architectures and AI-aware software development.
- Keep the supporting card bodies extremely short; they should scan like labels, not summaries.

## 24. Goals As a Tenure-Track Lecturer

- Add the supervision goal while keeping the right-hand framing cards stable.
- Your supervision goal is to build a pipeline between publishable research, industry relevance, and student growth.

## 25. Goals As a Tenure-Track Lecturer

- Complete the sequence with the community-facing goal.
- Your community goal is public educational infrastructure, outward-facing teaching work, and Future Frontend.
- Make the infrastructure concrete: guides, advising tools, and open learning materials are part of the role, not side projects.
- Make the developer background legible as teaching-relevant credibility rather than a side biography; one recognizable example such as `webpack-merge` is enough.
- Frame the goal as durable educational infrastructure around learning and supervision, not institutional reach.
- Say explicitly that this is a good fit for Aalto CS because the department values interdisciplinarity, collaboration, and impact beyond a single subfield.

## 26. Part 3

- Use this divider slide to slow the pace before the final conclusion section.
- It should make the Q&A phase feel intentional rather than abrupt.

## 27. Conclusion

- Use the closing question to pivot from presentation to the conclusion: AI already changes both content and pedagogy, so the point is to ask what should stay at the center of computing education.
- Start with the first priority only.
- Architecture: students need to see the whole system and compare designs.

## 28. Conclusion

- Add the second priority while keeping the framing question unchanged.
- Judgment: students need to work responsibly with AI instead of relying on it blindly.

## 29. Conclusion

- Complete the sequence with the third priority.
- Model-building: students need durable ways of thinking that survive rapid tool turnover.

## 30. Q&A

- Keep this slide minimal and let it hold the room during questions.
- Use it only after the conclusion slide has already framed the closing question.

## 31. References

- Keep this slide compact and purely bibliographic.
- It should resolve only the live citation set used on the slides.
- The current active set is `[1]` to `[10]`: AI in CSEd, Fielding, Healey, Brew, Berners-Lee et al., Mind2Web 2, OpenAI deep research, OpenAI Operator, Anthropic computer use, and Google Gemini 2.0 / Project Mariner.
- Keep reference layout stable when this set changes: all entries must remain visible on one slide, with working links where reliable URLs are available.
