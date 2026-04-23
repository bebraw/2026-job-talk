const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { sectionContentFrame, stackInFrame } = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 7,
  title: "Simplification agenda"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.78,
    right: 8.78,
    top: 2.32,
    bottom: 4.9
  });
  const [cardLayout] = stackInFrame(contentFrame, [
    { height: 0.84 }
  ], {
    gap: 0.1,
    justify: "top"
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Highlight 2",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "simple-rule",
    x: 7.52,
    y: 0.68,
    w: 1.76,
    group: "section-header"
  });

  canvas.addText("simple-framing-line", "How do we reduce unnecessary complexity without giving up capability?", {
    x: 0.82,
    y: 1.74,
    w: 7.86,
    h: 0.24,
    fontFace,
    fontSize: 11.4,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "simple-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-html",
    x: cardLayout.x,
    y: cardLayout.y,
    w: cardLayout.w,
    h: cardLayout.h,
    titleY: 0.1,
    titleH: 0.34,
    bodyY: 0.46,
    bodyH: 0.16,
    title: "Revisiting Hypermedia, The Forgotten Web Application Development Paradigm",
    titleFontSize: 10.3,
    body: "Vepsäläinen • TechRxiv • 2026",
    bodyFontSize: 8.8,
    group: "simple-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
