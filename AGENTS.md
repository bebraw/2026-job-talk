# Repository Instructions

## Design Notes

These are durable deck-level design and workflow rules. Read and follow them before editing slides or shared slide helpers.

### Design Rules

- Use dark infoboxes sparingly as emphasis devices, not as a default panel style.
- Prefer them only for one primary box on a slide when that box carries the main claim, discussion prompt, or takeaway.
- Keep surrounding support cards light so hierarchy stays obvious and the deck does not become visually heavy.
- Limit dark infoboxes to a small set of slides across the whole presentation rather than repeating them everywhere.
- Use the aqua accent only when it carries structure.
- On light content slides, avoid decorative top-edge aqua marks when the progress bar or typography already provides enough hierarchy.
- Treat projected-slide typography as presentation content, not document content.
- Use Microsoft’s `18 pt` minimum as the floor for normal projected text, and use the common `30 pt` readability rule as the pressure test for whether a slide is too dense.
- Keep slide text simple and minimal.
- Prefer bullets or short sentences, and try to keep each item to one line where possible.
- Do not solve wording changes by quietly shrinking text until hierarchy weakens; if a key line needs noticeably smaller type than its peers, rewrite or split the copy instead.
- As a practical heuristic, keep most non-reference slides to about `7` visible lines of text or fewer; if a slide needs more, split it or move detail to `SLIDE_NOTES.md`.
- If text does not fit at a comfortable size, cut the on-slide copy and move supporting detail into `SLIDE_NOTES.md` instead of shrinking type.
- Prefer short bullets and one-sentence card bodies; the spoken explanation belongs with the presenter.
- Use `Vepsäläinen` consistently in visible slide text, notes, and references instead of `Vepsalainen`.
- Numbered references must match only slide-visible citations.
- When citations change, remove unused references and renumber the remaining set sequentially.
- When references change, validate the references slide layout explicitly: keep all entries fully above the bottom progress bar and review the rebuilt demo PDF to confirm nothing overflows or collides.
- On the references slide, keep each URL visibly attached to its citation while treating the link text as subordinate metadata: use compact wrapped labels when needed, keep the full URL as the hyperlink target, and never allow visible link text to overflow its column.
- Non-full-bleed images must keep visible distance from surrounding content: leave whitespace to nearby headers, captions, neighboring panels, and the bottom progress bar instead of letting the image or its frame crowd them.
- For framed images, keep both outer clearance and inner inset padding visible so the image reads as intentionally placed rather than edge-to-edge.
- Labels for diagrams and figures should read as captions attached to the visual, preferably below it, instead of floating above it where they compete with slide headings and body content.
- Figure captions and citation labels should keep a visible gap from the image itself; they should read as attached to the visual, not pressed against it.
- When a slide includes an image plus a caption, source line, or reference note, validate the gap explicitly across all such slides after edits instead of checking only the slide you just touched.
- When using charts or screenshots, reserve dedicated whitespace for captions and source lines; never place slide text on top of the image content area.
- In stacked claim or bullet panels, keep visible vertical breathing room between the panel heading and the first item, and between adjacent items; bodies should not visually crowd the next claim.
- On screenshot-led slides, prioritize screenshot scale over decorative framing; remove border panels when they reduce legibility.
- Framed photos and artifact images must keep visible inset padding on all sides so they do not look cramped inside their frame.
- Apply that padding rule to photos, book covers, and similar visual artifacts; charts, diagrams, and screenshots may use tighter framing when legibility is the priority.

### Workflow Rules

- Rebuild the demo presentation after every deck change so the latest `slides/output/demo-presentation.pdf` is always ready for review.
- Keep roadmap and section-summary slides in sync with the active deck structure.
- When adding, removing, or renaming a part or subsection divider, update the roadmap slide in the same change so visible deck structure does not drift.
- After changing roadmap structure, validate the outline slide visually against the current rendered page, not just text-fit checks, so spacing and rhythm stay balanced.
- Keep the outline slide visually simple: prioritize clean vertical rhythm and structural clarity over decorative accents.
- Validate vertical rhythm on rendered slides, not only in source coordinates: headings, content blocks, media, and captions should feel intentionally spaced rather than top-heavy, bottom-heavy, or unevenly compressed.
- Use vertical balance as a default heuristic on content slides: the main content block should usually sit so the gap from the title area to the top of the content feels close to the gap from the bottom of the content to the bottom progress bar; if one side reads visibly heavier, rebalance the slide instead of accepting the drift.
- In stacked claim or bullet lists, keep title-to-body spacing consistent across sibling items; if one title wraps longer, adjust offsets or shorten copy instead of letting its body sit tighter than the others.
- Secondary consequence, implication, or teaching-takeaway lines must read as subordinate to the slide’s main claims: phrase them as follow-on consequences, and keep their styling lighter than the primary claim area so they do not compete for hierarchy.
- Consequence or takeaway lines placed below panels must keep explicit vertical clearance from the panels above them; never let a bottom note visually touch or overlap a card or panel edge.

For any slide or theme edit in this repository, keep `SLIDE_NOTES.md` focused on slide-specific content, narrative, and speaker-note guidance.
