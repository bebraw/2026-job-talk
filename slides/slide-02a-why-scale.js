const {
  addAccentRule,
  addPanel,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 2,
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

  addPanel(canvas, pres, theme, "why-chart-frame", {
    x: 1.64,
    y: 1.76,
    w: 6.72,
    h: 3.2,
    lineColor: theme.light,
    fillColor: "FFFFFF",
    group: "why-main"
  });

  canvas.addImage("why-chart-image", {
    path: path.join(__dirname, "assets/charts/web-almanac-2025-figure-14-1-page-weight.png"),
    x: 2.44,
    y: 1.9,
    w: 5.12,
    h: 3.17
  }, {
    group: "why-main"
  });

  canvas.addText("why-chart-source", "Source: HTTP Archive Web Almanac 2025, Page Weight, Fig. 14.1", {
    x: 1.72,
    y: 5.18,
    w: 6.56,
    h: 0.14,
    fontFace,
    fontSize: 7.8,
    color: theme.muted,
    margin: 0,
    align: "center"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
