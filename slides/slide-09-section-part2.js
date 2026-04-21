const { addAccentRule, addPageBadge } = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "section",
  index: 11,
  title: "Part 2"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addAccentRule(canvas, pres, theme, {
    id: "part2-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    group: "part2-header"
  });

  canvas.addText("part2-label", "Part 2", {
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
    group: "part2-main"
  });

  canvas.addText("part2-title", "Future vision and goals", {
    x: 0.7,
    y: 2.16,
    w: 4.8,
    h: 0.56,
    fontFace,
    fontSize: 24,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "part2-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
