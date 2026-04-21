const { addAccentRule, addPageBadge } = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "section",
  index: 27,
  title: "Part 3"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addAccentRule(canvas, pres, theme, {
    id: "part3-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    group: "part3-header"
  });

  canvas.addText("part3-label", "Part 3", {
    x: 0.7,
    y: 1.82,
    w: 1.8,
    h: 0.28,
    fontFace,
    fontSize: 12,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "part3-main"
  });

  canvas.addText("part3-title", "Discussion", {
    x: 0.7,
    y: 2.16,
    w: 3.4,
    h: 0.56,
    fontFace,
    fontSize: 24,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "part3-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
