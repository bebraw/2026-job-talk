const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 2,
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
    slideConfig.title,
    "Talk structure at a glance."
  );

  addAccentRule(canvas, pres, theme, {
    id: "contents-rule",
    x: 7.7,
    y: 0.68,
    w: 1.58,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "contents-left-panel", {
    x: 0.62,
    y: 2.08,
    w: 4.72,
    h: 2.84,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "contents-left"
  });

  canvas.addText("contents-left-title", "Talk structure", {
    x: 0.94,
    y: 2.34,
    w: 2.2,
    h: 0.2,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "contents-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "contents-bullet-motivation",
    x: 0.94,
    y: 2.72,
    w: 4.06,
    title: "Why this matters now",
    body: "Complexity and AI are reshaping the web.",
    bodyH: 0.3,
    group: "contents-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "contents-bullet-highlights",
    x: 0.94,
    y: 3.44,
    w: 4.06,
    title: "Research and teaching highlights",
    body: "Hybrid rendering, simplification, AI, and teaching.",
    bodyH: 0.3,
    group: "contents-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "contents-bullet-future",
    x: 0.94,
    y: 4.26,
    w: 4.06,
    title: "Future vision and discussion",
    body: "Agentic hypermedia, lecturer goals, and discussion.",
    bodyH: 0.3,
    group: "contents-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "contents-card-part1",
    x: 5.76,
    y: 2.1,
    w: 3.04,
    h: 0.82,
    title: "Part 1",
    body: "Highlights in research, teaching, and their interaction.",
    group: "contents-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "contents-card-part2",
    x: 5.76,
    y: 3.06,
    w: 3.04,
    h: 0.82,
    title: "Part 2",
    body: "Future research and teaching vision around agentic hypermedia.",
    group: "contents-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "contents-card-part3",
    x: 5.76,
    y: 4.02,
    w: 3.04,
    h: 0.82,
    title: "Part 3",
    body: "Discussion on the durable core of computing in the AI era.",
    group: "contents-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
