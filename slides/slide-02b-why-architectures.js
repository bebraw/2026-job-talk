const {
  addAccentRule,
  addBulletItem,
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
    slideConfig.title
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
    x: 0.84,
    y: 2.18,
    w: 7.66,
    title: "As the web evolved from documents to applications,",
    body: "scale turned architecture into a question of complexity, performance, and maintenance.",
    bodyH: 0.42,
    group: "why-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "why-bullet-architectures",
    x: 0.84,
    y: 3.16,
    w: 7.66,
    title: "Architecture has moved beyond static versus dynamic.",
    body: "This is a systems problem, not a framework-by-framework debate.",
    bodyH: 0.42,
    group: "why-left"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
