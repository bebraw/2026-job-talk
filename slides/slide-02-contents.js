const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 5,
  title: "Roadmap"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Outline",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "contents-rule",
    x: 7.7,
    y: 0.68,
    w: 1.58,
    group: "section-header"
  });

  canvas.addText("contents-part1-label", "Part 1", {
    x: 1,
    y: 2.5,
    w: 1.1,
    h: 0.22,
    fontFace,
    fontSize: 10.8,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part1-title", "Research and teaching highlights", {
    x: 2.08,
    y: 2.44,
    w: 5.7,
    h: 0.32,
    fontFace,
    fontSize: 16.8,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addShape("contents-divider-1", pres.ShapeType.line, {
    x: 1,
    y: 3.06,
    w: 7.42,
    h: 0,
    line: { color: theme.light, pt: 1 }
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part2-label", "Part 2", {
    x: 1,
    y: 3.42,
    w: 1.1,
    h: 0.22,
    fontFace,
    fontSize: 10.8,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part2-title", "Future vision and goals", {
    x: 2.08,
    y: 3.36,
    w: 5.4,
    h: 0.32,
    fontFace,
    fontSize: 16.8,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addShape("contents-divider-2", pres.ShapeType.line, {
    x: 1,
    y: 3.98,
    w: 7.42,
    h: 0,
    line: { color: theme.light, pt: 1 }
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part3-label", "Part 3", {
    x: 1,
    y: 4.34,
    w: 1.1,
    h: 0.22,
    fontFace,
    fontSize: 10.8,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "contents-main"
  });

  canvas.addText("contents-part3-title", "Discussion", {
    x: 2.08,
    y: 4.28,
    w: 3.2,
    h: 0.32,
    fontFace,
    fontSize: 16.8,
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
