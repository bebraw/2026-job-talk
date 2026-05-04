const { addAccentRule, addPageBadge } = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "section",
  index: 26,
  title: "Part 4"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.darkSlide.bg };

  addAccentRule(canvas, pres, theme, {
    id: "part4-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    force: true,
    group: "part4-header"
  });

  canvas.addText("part4-label", "Part 4", {
    x: 0.7,
    y: 1.82,
    w: 1.8,
    h: 0.28,
    fontFace,
    fontSize: 13,
    bold: true,
    color: theme.darkSlide.muted,
    margin: 0
  }, {
    group: "part4-main"
  });

  canvas.addText("part4-title", "Conclusion", {
    x: 0.7,
    y: 2.16,
    w: 3.4,
    h: 0.56,
    fontFace,
    fontSize: 26,
    bold: true,
    color: theme.darkSlide.title,
    margin: 0
  }, {
    group: "part4-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index, {
    trackColor: theme.darkSlide.progressTrack,
    fillColor: theme.darkSlide.progressFill
  });

  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
