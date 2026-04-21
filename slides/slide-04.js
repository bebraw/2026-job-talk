const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 9,
  title: "Simplification agenda"
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
    x: 0.78,
    y: 2.12,
    w: 8,
    h: 0.7,
    title: "HTML-first",
    body: "Use the platform more directly and keep HTML at the center where possible [2].",
    group: "simple-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-hypermedia",
    x: 0.78,
    y: 2.98,
    w: 8,
    h: 0.7,
    title: "Hypermedia",
    body: "Revisit a forgotten web paradigm that is again relevant under modern complexity pressures [2].",
    group: "simple-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-frameworks",
    x: 0.78,
    y: 3.84,
    w: 8,
    h: 0.7,
    title: "Disappearing frameworks",
    body: "Less client-side machinery can be a feature, not a limitation [3,4].",
    group: "simple-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
