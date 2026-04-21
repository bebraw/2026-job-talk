const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 3,
  title: "Why this matters now"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Motivation",
    slideConfig.title,
    "Why this matters to a broader CS audience."
  );

  addAccentRule(canvas, pres, theme, {
    id: "why-rule",
    x: 8,
    y: 0.68,
    w: 1.28,
    group: "section-header"
  });

  addBulletItem(canvas, pres, theme, {
    id: "why-bullet-scale",
    x: 0.78,
    y: 2.12,
    w: 4.35,
    title: "Scale has changed web costs.",
    body: "Payload, latency, and maintenance pressures keep growing.",
    bodyH: 0.42,
    group: "why-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "why-bullet-architectures",
    x: 0.78,
    y: 3,
    w: 4.35,
    title: "Architecture has moved beyond static versus dynamic.",
    body: "This is a systems problem, not a framework-by-framework debate.",
    bodyH: 0.42,
    group: "why-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "why-bullet-agents",
    x: 0.78,
    y: 3.88,
    w: 4.35,
    title: "AI introduces a new user: the agent.",
    body: "Software architecture, AI use, and education now meet on the web.",
    bodyH: 0.42,
    group: "why-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "why-card-highlights",
    x: 5.82,
    y: 2.08,
    w: 3.08,
    h: 0.78,
    title: "Part 1",
    body: "Research and teaching highlights, and how they inform each other.",
    group: "why-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "why-card-future",
    x: 5.82,
    y: 3.02,
    w: 3.08,
    h: 0.78,
    title: "Part 2",
    body: "A future agenda around agentic hypermedia and AI-aware education.",
    group: "why-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "why-card-discussion",
    x: 5.82,
    y: 3.96,
    w: 3.08,
    h: 0.78,
    title: "Part 3",
    body: "A discussion about what should remain durable in computing when tools change quickly.",
    group: "why-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
