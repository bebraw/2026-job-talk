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

- Add the architecture point on the second pass.
- Explain that architecture has moved beyond a simple static versus dynamic split, so the right framing is systems and tradeoffs rather than framework preference.

## 04. Why This Matters Now

- Add the AI angle on the final pass: software is increasingly built, tested, and navigated by agents as well as humans.
- Make the bridge to Aalto CS explicit: this sits naturally at the intersection of software architecture, AI, and computing education.

## 05. Roadmap

- Explain that the talk follows the requested structure.
- First motivate why this topic matters to a broader CS audience.
- Then move through research highlights, teaching highlights, and their interaction.
- Close with future vision, lecturer goals, and conclusion.

## 06. Part 1

- Use this divider slide to signal the transition from motivation to the main body of the talk.
- Make clear that the next set of slides covers both research and teaching, not research alone.

## 07. Hybrid Rendering Models

- Ground the slide in the dissertation abstract and conclusion rather than in a generic static-versus-dynamic slogan.
- Point to the dissertation explicitly so the audience can follow up later.
- Start from the background exactly: the web moved from static content to application development, application size has grown sharply, and mobile constraints still matter.
- State the primary purpose directly: explore the space between static and dynamic web development.
- Use the two main claims from the conclusion: the mainstream SPA model is not ideal for all use cases, and hybrid rendering techniques help control SPA-related costs.
- Connect this to teaching: students need historical and architectural models for comparing tradeoffs, not just opinions about frameworks.

## 08. Hybrid Rendering Techniques

- Use direct references to your papers here rather than generic technique labels alone.
- Use edge-powered islands, resumability, and edge computing for SSG as concrete examples of the design space.
- Treat this as the follow-up slide that makes the abstract framing more concrete.

## 09. Simplification Agenda

- Make the point that simplification is not nostalgia or anti-technology.
- Your agenda is to reduce unnecessary overhead while preserving capability.
- Use the paper titles directly on the slide rather than generic labels or paraphrases.
- Treat the papers themselves as the agenda markers rather than paraphrased labels.
- The current three agenda markers are `Revisiting Hypermedia, The Forgotten Web Application Development Paradigm`, `The Rise of Disappearing Frameworks in Web Development`, and `The Case for HTML First Web Development`.

## 10. Why Simplification Matters

- Tie the point back to both maintainability and AI/agent use: simpler, more structured systems are easier for both humans and machines.
- Use this slide to explain the consequences of the agenda rather than introduce the agenda itself.

## 11. AI In Software Development

- Start with the productivity point only.
- Frame AI first as an enabler rather than as an autonomous replacement for developers.
- Borrow the contrast with Kahneman loosely: beyond fast and slow thinking, AI creates an augmented mode of work.
- Keep the first slide bounded: AI helps with drafting, iteration, and other bounded technical tasks.

## 12. AI In Software Development

- Add the second point on critical habits.
- Emphasize that critical reading, writing, and comparison matter more, not less, when AI is involved.
- The main risk here is overreliance rather than only correctness in the narrow sense.

## 13. AI In Software Development

- Complete the sequence with the balanced position.
- State the full claim clearly: the core challenge is responsible integration of AI into development and education.
- Frame this as part of your own agenda rather than a generic AI opinion.
- The durable goal is not prompting skill by itself but long-term skills in judgment, reading, writing, and architectural understanding.

## 14. AI And Computing Education

- Start with the institutional response point only.
- Use the first pass to frame AI in CSEd as a curricular and institutional issue.

## 15. AI And Computing Education

- Add the second point: integrity is only part of the challenge.
- Use the second pass to bring in assessment, workload, and skill formation.

## 16. AI And Computing Education

- Complete the sequence with the durable goal of judgment.
- Refer explicitly to the joint paper with Petri Juntunen on AI in CSEd through citation `[1]`.
- End on the point that students should know when to trust, verify, and ignore AI.

## 17. How Research Informs My Teaching

- Describe your teaching style as dialogue-based and constructivist.
- Explain that research helps you organize a fast-moving field into durable models that students can adapt later.
- Use the research-teaching nexus sketch to ground the slide in existing higher-education literature rather than a purely custom loop.
- Healey provides the recognizable nexus vocabulary; Brew supports the more reciprocal, community-oriented interpretation.
- Use the first pass to establish the heading and the first core point only.

## 18. How Research Informs My Teaching

- Add the second point on the next slide so the teaching approach unfolds step by step.
- State the reverse direction explicitly here: teaching and supervision also feed research back.
- Keep the large `Teaching approach` heading visually prominent and treat the diagram as a compact scholarly anchor, not as the main content.

## 19. Teaching Infrastructure

- Refer to the writing guide by title: `The Process of Scientific Writing`.
- Use the slide to show that you build teaching infrastructure both through materials and through public learning communities.
- Connect the photo directly to your work organizing meetups and conferences such as Future Frontend and React Finland.
- Note that you will lead `Designing and Building Scalable Web Applications` from January 2027.
- Briefly mention the special career course in early June as a teaching initiative connecting study and professional trajectories.
- Use this slide to show that you do not only teach courses; you build scaffolding around learning.

## 20. Thesis Journey Tracker

- Use this slide to make the developer background legible as lecturer-relevant infrastructure rather than as side-project work.
- Thesis Journey Tracker should read as supervision infrastructure: phases, meetings, and notes in one place.
- Keep the slide visual. The screenshot should do most of the work.

## 21. Supervisor Search

- Present this as student-facing infrastructure rather than internal admin tooling.
- The key point is lighter access to supervision: students can find a suitable MSc thesis supervisor with less friction.
- Keep the slide visual. The screenshot should do most of the work.

## 22. Supervision As Frontier Teaching

- Present supervision as a place where research, teaching, and industry signals meet.
- The number of supervised theses matters because it gives you early visibility into emerging themes.
- Mention that current supervision topics include agentic AI, AIOps, and AI-supported web engineering.
- Stress your mentoring style: help students build a durable model of the topic, not just finish a document.

## 23. Selected Supervision Cases

- Use the three examples to show a coherent profile: AI for web development, edge/serverless systems, and WebAssembly at the edge.
- Mention that Pyry Pohjalainen's thesis led to publication through AAAI Magazine, as that signals supervision quality and external visibility.

## 24. Part 2

- Use this divider slide to mark the shift from highlights to future direction.
- Signal that the next slides focus on future research and the lecturer role.

## 25. Future Vision: Agentic Hypermedia

- This is the signature future slide.
- Explain the core claim: as AI agents become participants in software use, hypermedia becomes relevant again.
- Use the architecture sketch to make the idea concrete: both humans and agents interact through a hypermedia layer grounded in the semantic web and knowledge bases.
- Anchor the idea in both the older hypermedia literature and the semantic web literature, so the slide reads as a continuation of established web architecture thinking rather than a new slogan.
- The opportunity is to design systems that are lighter for users, clearer for developers, and easier for agents to navigate.
- Emphasize that this is both a research direction and a teaching direction.

## 26. Goals As a Tenure-Track Lecturer

- Make the case that the role matches work you are already doing.
- Start with the teaching goal only.
- Your teaching goal is research-led education around changing architectures and AI-aware software development.

## 27. Goals As a Tenure-Track Lecturer

- Add the supervision goal while keeping the right-hand framing cards stable.
- Your supervision goal is to build a pipeline between publishable research, industry relevance, and student growth.

## 28. Goals As a Tenure-Track Lecturer

- Complete the sequence with the community-facing goal.
- Your community goal is to extend Aalto through public educational infrastructure, outward-facing teaching work, and Future Frontend.
- Make the infrastructure concrete: guides, advising tools, and open learning materials are part of the role, not side projects.
- Say explicitly that this is a good fit for Aalto CS because the department values interdisciplinarity, collaboration, and impact beyond a single subfield.

## 29. Part 3

- Use this divider slide to slow the pace before the final conclusion section.
- It should make the Q&A phase feel intentional rather than abrupt.

## 30. Conclusion

- Use the closing question to pivot from presentation to the conclusion: if AI changes how software is produced and used, what remains durable in computing education?
- Start with the first priority only.
- Architecture: students need to see the whole system and compare designs.

## 31. Conclusion

- Add the second priority while keeping the framing question unchanged.
- Judgment: students need to work responsibly with AI instead of relying on it blindly.

## 32. Conclusion

- Complete the sequence with the third priority.
- Model-building: students need durable ways of thinking that survive rapid tool turnover.

## 33. Q&A

- Keep this slide minimal and let it hold the room during questions.
- Use it only after the conclusion slide has already framed the closing question.

## 34. References

- Keep this slide compact and purely bibliographic.
- It should resolve only the live citation set used on the slides.
- The current active set is `[1]` to `[5]`: AI in CSEd, Fielding, Healey, Brew, and Berners-Lee et al.
