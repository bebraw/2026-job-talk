const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 13,
  title: "How research informs my teaching"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "vision-rule",
    x: 7.62,
    y: 0.68,
    w: 1.66,
    group: "section-header"
  });

  canvas.addText("teach-left-title", "Teaching approach", {
    x: 0.9,
    y: 2.32,
    w: 4.1,
    h: 0.42,
    fontFace,
    fontSize: 20,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "teach-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-models",
    x: 0.94,
    y: 3.12,
    w: 3.92,
    title: "Build working models students can adapt.",
    body: "Research helps me teach principles, not only tools.",
    bodyH: 0.28,
    bodyFontSize: 9.6,
    group: "teach-left"
  });

  canvas.addImage("teach-loop-image", {
    path: path.join(__dirname, "assets/diagrams/research-teaching-loop.png"),
    x: 5.06,
    y: 2.62,
    w: 3.88,
    h: 1.62
  }, {
    group: "teach-loop"
  });

  canvas.addText("teach-loop-title", "Research-teaching nexus [3,4]", {
    x: 5.12,
    y: 4.56,
    w: 3.76,
    h: 0.18,
    fontFace,
    fontSize: 9.8,
    color: theme.muted,
    margin: 0,
    align: "center"
  }, {
    group: "teach-loop"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
