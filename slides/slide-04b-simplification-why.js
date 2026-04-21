const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 10,
  title: "Why simplification matters"
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
    id: "simple-why-rule",
    x: 7.3,
    y: 0.68,
    w: 1.98,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "simple-why-panel", {
    x: 0.78,
    y: 2.12,
    w: 8,
    h: 2.92,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "simple-why-main"
  });

  canvas.addText("simple-why-title", "Design consequences", {
    x: 1.1,
    y: 2.38,
    w: 2.4,
    h: 0.2,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "simple-why-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-why-bullet-maintain",
    x: 1.1,
    y: 2.8,
    w: 7.28,
    title: "Conceptual simplicity helps maintainability.",
    body: "Smaller system models are easier to learn, teach, and maintain.",
    bodyH: 0.34,
    group: "simple-why-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-why-bullet-performance",
    x: 1.1,
    y: 3.64,
    w: 7.28,
    title: "Lighter architectures often improve performance.",
    body: "Less machinery can improve payload, startup, and energy use.",
    bodyH: 0.34,
    group: "simple-why-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-why-bullet-agents",
    x: 1.1,
    y: 4.4,
    w: 7.28,
    title: "This also aligns with agentic use.",
    body: "Structured, linkable systems are easier for humans and agents.",
    bodyH: 0.24,
    group: "simple-why-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
