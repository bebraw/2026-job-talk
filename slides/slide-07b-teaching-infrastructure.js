const {
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
  index: 16,
  title: "Writing support"
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

  canvas.addText("teaching-infrastructure-left-title", "A reusable guide for student writing", {
    x: 0.62,
    y: 2.34,
    w: 3.6,
    h: 0.44,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "teaching-infrastructure-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teaching-infrastructure-bullet-materials",
    x: 0.62,
    y: 3,
    w: 4.18,
    title: "Writing expectations should be visible.",
    body: "\"The Process of Scientific Writing\" makes publishing expectations concrete.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teaching-infrastructure-bullet-durable",
    x: 0.62,
    y: 3.9,
    w: 4.18,
    title: "Students can use it on their own.",
    body: "It supports supervision through a shared writing process.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  addPanel(canvas, pres, theme, "teaching-infrastructure-book-frame", {
    x: 5.62,
    y: 1.92,
    w: 2.56,
    h: 3.36,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "teaching-infrastructure-right"
  });

  canvas.addImage("teaching-infrastructure-book", {
    path: path.join(__dirname, "assets/photos/process-cover.png"),
    x: 5.92,
    y: 2.1,
    w: 1.98,
    h: 3.02
  }, {
    group: "teaching-infrastructure-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
