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
  index: 10,
  title: "Supervision as frontier teaching"
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
    w: 4.52,
    h: 2.66,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "supervision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-volume",
    x: 0.78,
    y: 2.34,
    w: 4.26,
    title: "The scale of supervision already matters.",
    body: "The volume already reveals recurring student and industry themes.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-mentoring",
    x: 0.78,
    y: 3.14,
    w: 4.26,
    title: "My mentoring style is active and question-driven.",
    body: "The goal is durable understanding, not only thesis completion.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "supervision-card-pyry",
    x: 5.56,
    y: 2.06,
    w: 3.28,
    h: 0.74,
    title: "Pyry Pohjalainen (2025)",
    body: "AI for web development: thesis published through AAAI Magazine.",
    group: "supervision-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "supervision-card-anoop",
    x: 5.56,
    y: 2.98,
    w: 3.28,
    h: 0.74,
    title: "Anoop Bidikar (2024)",
    body: "Stateful serverless architectures at the edge: a strong systems-oriented MSc thesis.",
    group: "supervision-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "supervision-card-antti",
    x: 5.56,
    y: 3.9,
    w: 3.28,
    h: 0.74,
    title: "Antti Nousiainen (2024)",
    body: "WebAssembly in edge computing: technically demanding supervision with good outcomes.",
    group: "supervision-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
