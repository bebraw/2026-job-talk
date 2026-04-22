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
  index: 19,
  title: "Teaching infrastructure"
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
    id: "teaching-infrastructure-rule",
    x: 7.18,
    y: 0.68,
    w: 2.1,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "teaching-infrastructure-left-panel", {
    x: 0.62,
    y: 2.06,
    w: 4.36,
    h: 2.92,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "teaching-infrastructure-left"
  });

  canvas.addText("teaching-infrastructure-left-title", "Scaffolding around learning", {
    x: 0.94,
    y: 2.34,
    w: 2.9,
    h: 0.24,
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
    x: 0.94,
    y: 2.72,
    w: 3.72,
    title: "Writing support is explicit.",
    body: "\"The Process of Scientific Writing\" turns publishing expectations into reusable guidance.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teaching-infrastructure-bullet-community",
    x: 0.94,
    y: 3.6,
    w: 3.72,
    title: "I organize public learning communities.",
    body: "Meetups and conferences such as Future Frontend and React Finland extend teaching beyond campus.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  addPanel(canvas, pres, theme, "teaching-infrastructure-photo-frame", {
    x: 5.36,
    y: 2.08,
    w: 3.44,
    h: 2.28,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "teaching-infrastructure-right"
  });

  canvas.addImage("teaching-infrastructure-photo", {
    path: path.join(__dirname, "assets/photos/future-frontend-2024.jpg"),
    x: 5.54,
    y: 2.22,
    w: 3.08,
    h: 2.05
  }, {
    group: "teaching-infrastructure-right"
  });

  canvas.addText("teaching-infrastructure-photo-title", "Conferences and meetups extend teaching", {
    x: 5.36,
    y: 4.5,
    w: 3.28,
    h: 0.2,
    fontFace,
    fontSize: 11.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "teaching-infrastructure-right"
  });

  canvas.addText("teaching-infrastructure-photo-credit", "React Finland 2019, one community I organize.", {
    x: 5.36,
    y: 4.74,
    w: 3.36,
    h: 0.18,
    fontFace,
    fontSize: 8.6,
    color: theme.muted,
    margin: 0
  }, {
    group: "teaching-infrastructure-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
