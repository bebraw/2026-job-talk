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
- If text does not fit at a comfortable size, cut the on-slide copy and move supporting detail into `SLIDE_NOTES.md` instead of shrinking type.
- Prefer short bullets and one-sentence card bodies; the spoken explanation belongs with the presenter.
- Use `Vepsäläinen` consistently in visible slide text, notes, and references instead of `Vepsalainen`.
- Numbered references must match only slide-visible citations.
- When citations change, remove unused references and renumber the remaining set sequentially.
- When references change, validate the references slide layout explicitly: keep all entries fully above the bottom progress bar and review the rebuilt demo PDF to confirm nothing overflows or collides.
- Non-full-bleed images must keep visible distance from surrounding content: leave whitespace to nearby headers, captions, neighboring panels, and the bottom progress bar instead of letting the image or its frame crowd them.
- For framed images, keep both outer clearance and inner inset padding visible so the image reads as intentionally placed rather than edge-to-edge.
- Labels for diagrams and figures should read as captions attached to the visual, preferably below it, instead of floating above it where they compete with slide headings and body content.
- Figure captions and citation labels should keep a visible gap from the image itself; they should read as attached to the visual, not pressed against it.
- When a slide includes an image plus a caption, source line, or reference note, validate the gap explicitly across all such slides after edits instead of checking only the slide you just touched.
- When using charts or screenshots, reserve dedicated whitespace for captions and source lines; never place slide text on top of the image content area.
- Framed photos and artifact images must keep visible inset padding on all sides so they do not look cramped inside their frame.
- Apply that padding rule to photos, book covers, and similar visual artifacts; charts, diagrams, and screenshots may use tighter framing when legibility is the priority.

### Workflow Rules

- Rebuild the demo presentation after every deck change so the latest `slides/output/demo-presentation.pdf` is always ready for review.

For any slide or theme edit in this repository, keep `SLIDE_NOTES.md` focused on slide-specific content, narrative, and speaker-note guidance.
