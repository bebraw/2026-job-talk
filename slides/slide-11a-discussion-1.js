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
  index: 27,
  title: "Conclusion"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Closing",
    slideConfig.title
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
    y: 2.18,
    w: 4.72,
    h: 2.72,
    lineColor: theme.secondary,
    linePt: 1.1,
    fillColor: theme.darkSlide.bg,
    group: "discussion-left"
  });

  canvas.addText(
    "discussion-left-body",
    "AI already changes what we teach and how we teach it.\nWhat should stay at the center of computing education?",
    {
      x: 0.98,
      y: 2.58,
      w: 3.96,
      h: 1.7,
      fontFace,
      fontSize: 16,
      color: theme.darkSlide.title,
      margin: 0
    },
    {
      group: "discussion-left"
    }
  );

  addCompactCard(canvas, pres, theme, {
    id: "discussion-card-architecture",
    x: 5.72,
    y: 2.24,
    w: 3.08,
    h: 0.76,
    title: "Architecture",
    body: "Teach students to compare architectures, not only tools.",
    group: "discussion-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
