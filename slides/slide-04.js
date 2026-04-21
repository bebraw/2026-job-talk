const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 6,
  title: "Simplification as a design principle"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Highlight 2",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "simple-rule",
    x: 7.52,
    y: 0.68,
    w: 1.76,
    group: "section-header"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-html",
    x: 0.62,
    y: 2.08,
    w: 2.6,
    h: 0.94,
    title: "HTML-first",
    body: "Use the platform more directly and keep HTML at the center where possible.",
    group: "simple-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-hypermedia",
    x: 0.62,
    y: 3.16,
    w: 2.6,
    h: 0.94,
    title: "Hypermedia",
    body: "Revisit a forgotten web paradigm that is again relevant under modern complexity pressures.",
    group: "simple-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-frameworks",
    x: 0.62,
    y: 4.24,
    w: 2.6,
    h: 0.78,
    title: "Disappearing frameworks",
    body: "Less client-side machinery can be a feature, not a limitation.",
    group: "simple-left"
  });

  addPanel(canvas, pres, theme, "simple-right-panel", {
    x: 3.58,
    y: 2.08,
    w: 5.34,
    h: 2.94,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "simple-right"
  });

  canvas.addText("simple-right-title", "Why it matters", {
    x: 3.92,
    y: 2.34,
    w: 2.3,
    h: 0.2,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "simple-right"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-bullet-maintain",
    x: 3.92,
    y: 2.74,
    w: 4.68,
    title: "Conceptual simplicity helps maintainability.",
    body: "Smaller system models are easier to learn and maintain.",
    bodyH: 0.42,
    group: "simple-right"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-bullet-performance",
    x: 3.92,
    y: 3.62,
    w: 4.68,
    title: "Lighter architectures often improve performance.",
    body: "Less machinery can improve payload, startup, and energy use.",
    bodyH: 0.42,
    group: "simple-right"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-bullet-agents",
    x: 3.92,
    y: 4.4,
    w: 4.68,
    title: "This also aligns with agentic use.",
    body: "Structured, linkable systems are easier for humans and agents.",
    bodyH: 0.3,
    group: "simple-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
