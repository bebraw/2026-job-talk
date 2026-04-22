const {
  addAccentRule,
  addPanel,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const {
  boxBelow,
  createFrame,
  fitContainBox,
  insetFrame,
  sectionContentFrame
} = require("../generator/layout");
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
  const chartFrame = sectionContentFrame({
    left: 1.64,
    right: 8.36,
    top: 1.76,
    bottom: 4.96
  });
  const imageFrame = insetFrame(chartFrame, {
    top: 0.14,
    right: 0.8,
    bottom: 0.03,
    left: 0.8
  });
  const imageBox = fitContainBox(createFrame(imageFrame), {
    contentWidth: 5.12,
    contentHeight: 3.17,
    alignY: "top"
  });
  const sourceBox = boxBelow(chartFrame, {
    x: chartFrame.x + 0.08,
    y: undefined,
    w: chartFrame.w - 0.16,
    h: 0.14,
    gap: 0.28
  });
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
    x: chartFrame.x,
    y: chartFrame.y,
    w: chartFrame.w,
    h: chartFrame.h,
    lineColor: theme.light,
    fillColor: "FFFFFF",
    group: "why-main"
  });

  canvas.addImage("why-chart-image", {
    path: path.join(__dirname, "assets/charts/web-almanac-2025-figure-14-1-page-weight.png"),
    x: imageBox.x,
    y: imageBox.y,
    w: imageBox.w,
    h: imageBox.h
  }, {
    group: "why-main"
  });

  canvas.addText("why-chart-source", "Source: HTTP Archive Web Almanac 2025, Page Weight, Fig. 14.1", {
    x: sourceBox.x,
    y: sourceBox.y,
    w: sourceBox.w,
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
