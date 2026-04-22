const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 23,
  title: "My contribution to Aalto"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Contribution",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "closing-rule",
    x: 7.38,
    y: 0.68,
    w: 1.9,
    group: "section-header"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-claim",
    x: 0.96,
    y: 2.6,
    w: 7.34,
    title: "I connect research, students, and practice in the agentic/web space.",
    body: "This is already visible in my teaching, supervision, and research direction.",
    bodyH: 0.34,
    titleFontSize: 10.0,
    bodyFontSize: 9.4,
    group: "closing-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-students",
    x: 0.96,
    y: 3.68,
    w: 7.34,
    title: "Students contribute to real research through supervision.",
    body: "Supervision is part of research, not separate from it.",
    bodyH: 0.3,
    titleFontSize: 10.0,
    bodyFontSize: 9.8,
    group: "closing-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
