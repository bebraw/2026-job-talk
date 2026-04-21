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
  index: 12,
  title: "Future vision: agentic hypermedia"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Vision",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "vision-rule",
    x: 7.62,
    y: 0.68,
    w: 1.66,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "vision-left-panel", {
    x: 0.62,
    y: 2.06,
    w: 4.66,
    h: 2.94,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "vision-left"
  });

  canvas.addText("vision-left-title", "Research questions", {
    x: 0.94,
    y: 2.34,
    w: 2.7,
    h: 0.2,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-hypermedia",
    x: 0.94,
    y: 2.72,
    w: 4.02,
    title: "How should hypermedia evolve for AI use?",
    body: "Hypermedia matters again when agents navigate systems.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-architectures",
    x: 0.94,
    y: 3.5,
    w: 4.02,
    title: "What balance between HTML, servers, and the edge?",
    body: "Pursue lighter architectures without excess client-side complexity.",
    bodyH: 0.3,
    titleFontSize: 9.6,
    bodyFontSize: 8.4,
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-education",
    x: 0.94,
    y: 4.28,
    w: 4.02,
    title: "What is the durable core of the next web?",
    body: "Architecture and judgment matter as tools keep changing.",
    bodyH: 0.24,
    titleFontSize: 9.6,
    bodyFontSize: 8.4,
    group: "vision-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "vision-card-users",
    x: 5.7,
    y: 2.08,
    w: 3.1,
    h: 0.76,
    title: "Lighter for users",
    body: "Lower payloads, better startup behavior, and more resilient interaction.",
    group: "vision-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "vision-card-devs",
    x: 5.7,
    y: 3,
    w: 3.1,
    h: 0.76,
    title: "Clearer for developers",
    body: "Smaller conceptual models and stronger alignment with the underlying platform.",
    group: "vision-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "vision-card-agents",
    x: 5.7,
    y: 3.92,
    w: 3.1,
    h: 0.76,
    title: "Navigable by agents",
    body: "Interfaces and data flows that AI systems can interpret more directly.",
    group: "vision-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
