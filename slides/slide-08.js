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
  index: 23,
  title: "Supervision"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Supervision",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "closing-rule",
    x: 7.38,
    y: 0.68,
    w: 1.9,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "supervision-left-panel", {
    x: 0.62,
    y: 2.04,
    w: 8.18,
    h: 2.9,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "supervision-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-volume",
    x: 0.78,
    y: 2.34,
    w: 7.54,
    title: "The scale of supervision already matters.",
    body: "The volume already reveals recurring student and industry themes.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-mentoring",
    x: 0.78,
    y: 3.18,
    w: 7.54,
    title: "Teaching and supervision feed research back.",
    body: "Current topics include agentic AI, AIOps, and AI-supported web engineering.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-bridge",
    x: 0.78,
    y: 4.02,
    w: 7.54,
    title: "Supervision connects research, curriculum, and industry.",
    body: "My mentoring style is active and question-driven, with durable understanding as the goal.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
