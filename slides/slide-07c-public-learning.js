const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 20,
  title: "Public learning communities"
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
    id: "public-learning-rule",
    x: 6.92,
    y: 0.68,
    w: 2.36,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "public-learning-left-panel", {
    x: 0.62,
    y: 2.06,
    w: 4.36,
    h: 2.92,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "public-learning-left"
  });

  canvas.addText("public-learning-left-title", "Teaching also happens outside courses", {
    x: 0.94,
    y: 2.34,
    w: 3.3,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "public-learning-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "public-learning-bullet-community",
    x: 0.94,
    y: 2.74,
    w: 3.72,
    title: "I organize Future Frontend.",
    body: "Meetups and the conference bring current practice into the room.",
    bodyH: 0.38,
    group: "public-learning-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "public-learning-bullet-outward",
    x: 0.94,
    y: 3.74,
    w: 3.72,
    title: "This keeps me close to practice.",
    body: "That matters in web development, where the field moves fast.",
    bodyH: 0.38,
    group: "public-learning-left"
  });

  addPanel(canvas, pres, theme, "public-learning-photo-frame", {
    x: 5.36,
    y: 2.08,
    w: 3.44,
    h: 2.28,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "public-learning-right"
  });

  canvas.addImage("public-learning-photo", {
    path: path.join(__dirname, "assets/photos/future-frontend-2024.jpg"),
    x: 5.54,
    y: 2.22,
    w: 3.08,
    h: 2.05
  }, {
    group: "public-learning-right"
  });

  canvas.addText("public-learning-photo-title", "Teaching outside the classroom", {
    x: 5.36,
    y: 4.56,
    w: 3.28,
    h: 0.2,
    fontFace,
    fontSize: 11.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "public-learning-right"
  });

  canvas.addText("public-learning-photo-credit", "Future Frontend is one way I do it.", {
    x: 5.36,
    y: 4.84,
    w: 3.36,
    h: 0.18,
    fontFace,
    fontSize: 8.6,
    color: theme.muted,
    margin: 0
  }, {
    group: "public-learning-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
