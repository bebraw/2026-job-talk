const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addSectionTitle,
  addStatChip
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 15,
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

  canvas.addText("teach-left-title", "Research with students", {
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
    id: "teach-bullet-research",
    x: 0.94,
    y: 3.78,
    w: 3.92,
    title: "Students learn by contributing to real research.",
    body: "The point is not only completion but research participation.",
    bodyH: 0.3,
    bodyFontSize: 9.6,
    group: "teach-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teach-card-pyry",
    x: 5.3,
    y: 3.1,
    w: 3.52,
    h: 0.68,
    title: "Pyry Pohjalainen (2025)",
    body: "AI for web development; AAAI Magazine.",
    group: "teach-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teach-card-anoop",
    x: 5.3,
    y: 3.92,
    w: 3.52,
    h: 0.68,
    title: "Anoop Bidikar (2024)",
    body: "Stateful serverless architectures at the edge.",
    group: "teach-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teach-card-antti",
    x: 5.3,
    y: 4.74,
    w: 3.52,
    h: 0.68,
    title: "Antti Nousiainen (2024)",
    body: "WebAssembly in edge computing.",
    group: "teach-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
