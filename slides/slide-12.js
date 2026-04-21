const {
  addAccentRule,
  addPageBadge
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "closing",
  index: 31,
  title: "Q&A"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addAccentRule(canvas, pres, theme, {
    id: "qa-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    group: "qa-header"
  });

  canvas.addText("qa-title", "Q&A", {
    x: 0.7,
    y: 2.3,
    w: 3.0,
    h: 0.56,
    fontFace,
    fontSize: 26,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "qa-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
