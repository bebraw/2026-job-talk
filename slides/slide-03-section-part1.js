const { addAccentRule, addPageBadge } = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "section",
  index: 4,
  title: "Part 1"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addAccentRule(canvas, pres, theme, {
    id: "part1-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    group: "part1-header"
  });

  canvas.addText("part1-label", "Part 1", {
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
    group: "part1-main"
  });

  canvas.addText("part1-title", "Research and teaching highlights", {
    x: 0.7,
    y: 2.16,
    w: 5.4,
    h: 0.56,
    fontFace,
    fontSize: 24,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "part1-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
