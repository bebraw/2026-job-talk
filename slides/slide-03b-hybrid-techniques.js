const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 8,
  title: "Hybrid rendering techniques"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Highlight 1",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "hybrid-techniques-rule",
    x: 7.18,
    y: 0.68,
    w: 2.1,
    group: "section-header"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-islands",
    x: 0.78,
    y: 2.12,
    w: 8,
    h: 0.68,
    title: "Islands",
    body: "Defer interactivity and isolate the dynamic parts that truly need it.",
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-resumability",
    x: 0.78,
    y: 2.96,
    w: 8,
    h: 0.68,
    title: "Resumability",
    body: "Avoid hydration costs by serializing enough structure into HTML.",
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-edge",
    x: 0.78,
    y: 3.8,
    w: 8,
    h: 0.68,
    title: "Edge techniques",
    body: "Move computation closer to users while keeping payload and latency under control.",
    group: "hybrid-techniques-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
