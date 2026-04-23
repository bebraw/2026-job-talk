const {
  addAccentRule,
  addPageBadge,
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "closing",
  index: 27,
  title: "Q&A"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.darkSlide.bg };

  addAccentRule(canvas, pres, theme, {
    id: "qa-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    force: true,
    group: "qa-header"
  });

  canvas.addText("qa-title", "Q&A", {
    x: 0.7,
    y: 2.3,
    w: 3.0,
    h: 0.56,
    fontFace,
    fontSize: 28,
    bold: true,
    color: theme.darkSlide.title,
    margin: 0
  }, {
    group: "qa-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index, {
    trackColor: theme.darkSlide.progressTrack,
    fillColor: theme.darkSlide.progressFill
  });

  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
