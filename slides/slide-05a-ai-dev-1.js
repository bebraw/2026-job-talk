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
  index: 11,
  title: "AI in software development"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "AI",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "ai-rule",
    x: 7.82,
    y: 0.68,
    w: 1.46,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "ai-left-panel", {
    x: 0.62,
    y: 2.06,
    w: 4.08,
    h: 2.88,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "ai-left"
  });

  canvas.addText("ai-left-title", "For development", {
    x: 0.92,
    y: 2.34,
    w: 2.2,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "ai-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "ai-dev-efficiency",
    x: 0.92,
    y: 2.72,
    w: 3.48,
    title: "AI is best treated as an enabler.",
    body: "Useful for bounded technical work, drafting, and iteration.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "ai-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "ai-card-benefit",
    x: 5.38,
    y: 2.1,
    w: 3.24,
    h: 0.76,
    title: "Core point",
    body: "Beyond fast and slow thinking, AI enables augmented work.",
    group: "ai-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
