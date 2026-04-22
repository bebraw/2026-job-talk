const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addSectionTitle,
  addStatChip
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 14,
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

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-bsc",
    x: 0.62,
    y: 2.02,
    w: 2.28,
    value: "20+",
    label: "BSc theses since 2022",
    valueFontSize: 13.5,
    group: "teach-stats"
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-msc",
    x: 3.1,
    y: 2.02,
    w: 2.28,
    value: "6",
    label: "MSc theses advised",
    valueFontSize: 13.5,
    group: "teach-stats"
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-peda",
    x: 5.58,
    y: 2.02,
    w: 2.28,
    value: "18",
    label: "ECTS of pedagogy",
    valueFontSize: 13.5,
    group: "teach-stats"
  });

  canvas.addText("teach-left-title", "Teaching approach", {
    x: 0.9,
    y: 3.02,
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
    y: 3.78,
    w: 3.92,
    title: "Build working models students can adapt.",
    body: "Research helps me teach change without chasing tools.",
    bodyH: 0.28,
    bodyFontSize: 9.6,
    group: "teach-left"
  });

  canvas.addImage("teach-loop-image", {
    path: path.join(__dirname, "assets/diagrams/research-teaching-loop.png"),
    x: 5.1,
    y: 3.18,
    w: 3.84,
    h: 1.6
  }, {
    group: "teach-loop"
  });

  canvas.addText("teach-loop-title", "Research-teaching nexus [3,4]", {
    x: 5.12,
    y: 5.08,
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
