const {
  addPageBadge
} = require("../generator/helpers");
const { displayFont, fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 5,
  title: "Outline"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  canvas.addText("section-title", slideConfig.title, {
    x: 0.62,
    y: 0.84,
    w: 7.8,
    h: 0.7,
    fontFace: displayFont,
    fontSize: 23,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "section-header"
  });

  canvas.addText("contents-part1-label", "Part 1", {
    x: 1,
    y: 2.3,
    w: 1.1,
    h: 0.22,
    fontFace,
    fontSize: 12.2,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part1-title", "Research highlights", {
    x: 2.08,
    y: 2.24,
    w: 5.6,
    h: 0.32,
    fontFace,
    fontSize: 18.8,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addShape("contents-divider-1", pres.ShapeType.line, {
    x: 1,
    y: 2.84,
    w: 7.42,
    h: 0,
    line: { color: theme.light, pt: 1 }
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part2-label", "Part 2", {
    x: 1,
    y: 3.1,
    w: 1.1,
    h: 0.22,
    fontFace,
    fontSize: 12.2,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part2-title", "From research to teaching", {
    x: 2.08,
    y: 3.04,
    w: 5.8,
    h: 0.32,
    fontFace,
    fontSize: 17.8,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addShape("contents-divider-2", pres.ShapeType.line, {
    x: 1,
    y: 3.64,
    w: 7.42,
    h: 0,
    line: { color: theme.light, pt: 1 }
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part3-label", "Part 3", {
    x: 1,
    y: 3.9,
    w: 1.1,
    h: 0.22,
    fontFace,
    fontSize: 12.2,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part3-title", "Future vision and goals", {
    x: 2.08,
    y: 3.88,
    w: 5.4,
    h: 0.32,
    fontFace,
    fontSize: 18.8,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addShape("contents-divider-3", pres.ShapeType.line, {
    x: 1,
    y: 4.48,
    w: 7.42,
    h: 0,
    line: { color: theme.light, pt: 1 }
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part4-label", "Part 4", {
    x: 1,
    y: 4.7,
    w: 1.1,
    h: 0.22,
    fontFace,
    fontSize: 12.2,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part4-title", "Conclusion", {
    x: 2.08,
    y: 4.64,
    w: 3.2,
    h: 0.32,
    fontFace,
    fontSize: 18.8,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "contents-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
