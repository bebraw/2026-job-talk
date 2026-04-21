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
  index: 4,
  title: "Hybrid rendering models"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Highlight 1",
    slideConfig.title,
    "Hybrid rendering reframes the architecture space of modern web systems."
  );

  addAccentRule(canvas, pres, theme, {
    id: "hybrid-rule",
    x: 7.46,
    y: 0.68,
    w: 1.82,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "hybrid-left-panel", {
    x: 0.62,
    y: 2.08,
    w: 4.55,
    h: 2.58,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "hybrid-left"
  });

  canvas.addText("hybrid-left-title", "Dissertation backbone", {
    x: 0.9,
    y: 2.34,
    w: 2.1,
    h: 0.2,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "hybrid-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "hybrid-bullet-space",
    x: 0.9,
    y: 2.72,
    w: 3.96,
    title: "Study the space between static and dynamic.",
    body: "A middle ground between performance, maintainability, and interactivity.",
    bodyH: 0.42,
    group: "hybrid-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "hybrid-bullet-experience",
    x: 0.9,
    y: 3.6,
    w: 3.96,
    title: "Evaluate both user and developer experience.",
    body: "Compare choices by their cost for users and teams.",
    bodyH: 0.42,
    group: "hybrid-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-card-islands",
    x: 5.62,
    y: 2.08,
    w: 3.18,
    h: 0.76,
    title: "Islands",
    body: "Defer interactivity and isolate the dynamic parts that truly need it.",
    group: "hybrid-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-card-resumability",
    x: 5.62,
    y: 2.98,
    w: 3.18,
    h: 0.76,
    title: "Resumability",
    body: "Avoid hydration costs by serializing enough structure into HTML.",
    group: "hybrid-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-card-edge",
    x: 5.62,
    y: 3.88,
    w: 3.18,
    h: 0.76,
    title: "Edge techniques",
    body: "Move computation closer to users while keeping payload and latency under control.",
    group: "hybrid-right"
  });

  canvas.addText("hybrid-note", "Teaching consequence: students need architectural models, not tool opinions.", {
    x: 0.72,
    y: 4.88,
    w: 7.8,
    h: 0.28,
    fontFace,
    fontSize: 9.6,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "hybrid-note",
    skipOverlap: true
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
