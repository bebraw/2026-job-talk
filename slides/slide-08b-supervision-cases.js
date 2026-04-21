const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 21,
  title: "Selected supervision cases"
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
    id: "supervision-cases-rule",
    x: 7.1,
    y: 0.68,
    w: 2.18,
    group: "section-header"
  });

  addCompactCard(canvas, pres, theme, {
    id: "supervision-cases-card-pyry",
    x: 0.78,
    y: 2.12,
    w: 8,
    h: 0.72,
    title: "Pyry Pohjalainen (2025)",
    body: "AI for web development: thesis published through AAAI Magazine.",
    group: "supervision-cases-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "supervision-cases-card-anoop",
    x: 0.78,
    y: 3,
    w: 8,
    h: 0.72,
    title: "Anoop Bidikar (2024)",
    body: "Stateful serverless architectures at the edge: a strong systems-oriented MSc thesis.",
    group: "supervision-cases-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "supervision-cases-card-antti",
    x: 0.78,
    y: 3.88,
    w: 8,
    h: 0.72,
    title: "Antti Nousiainen (2024)",
    body: "WebAssembly in edge computing: technically demanding supervision with good outcomes.",
    group: "supervision-cases-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
