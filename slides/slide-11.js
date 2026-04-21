const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "closing",
  index: 12,
  title: "Discussion"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Closing",
    slideConfig.title,
    "A closing question for discussion."
  );

  addAccentRule(canvas, pres, theme, {
    id: "discussion-rule",
    x: 7.5,
    y: 0.68,
    w: 1.78,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "discussion-left-panel", {
    x: 0.62,
    y: 2.06,
    w: 4.72,
    h: 2.9,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "discussion-left"
  });

  canvas.addText(
    "discussion-left-body",
    "If AI changes how software is produced and used,\nwhat should we teach as the durable core of computing?",
    {
      x: 0.98,
      y: 2.44,
      w: 3.96,
      h: 1.92,
      fontFace,
      fontSize: 14,
      color: theme.accent,
      margin: 0
    },
    {
      group: "discussion-left"
    }
  );

  addCompactCard(canvas, pres, theme, {
    id: "discussion-card-architecture",
    x: 5.72,
    y: 2.1,
    w: 3.08,
    h: 0.76,
    title: "Architecture",
    body: "Teach students to compare designs, not only tools.",
    group: "discussion-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "discussion-card-judgment",
    x: 5.72,
    y: 3.02,
    w: 3.08,
    h: 0.76,
    title: "Judgment",
    body: "Teach when to trust AI, verify it, and challenge it.",
    group: "discussion-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "discussion-card-models",
    x: 5.72,
    y: 3.94,
    w: 3.08,
    h: 0.76,
    title: "Model-building",
    body: "Teach durable ways of thinking that outlast each tool cycle.",
    group: "discussion-right"
  });

  canvas.addText("discussion-thanks", "Thank you.", {
    x: 5.74,
    y: 4.88,
    w: 1.1,
    h: 0.18,
    fontFace,
    fontSize: 10.6,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "discussion-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
