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
    h: 0.78,
    title: "The Potential of Serverless Edge-powered Islands for Web Development",
    titleFontSize: 10.3,
    body: "Juho Vepsalainen, Petri Vuorimaa, Arto Hellas • Journal of Web Engineering • 2025",
    bodyFontSize: 8.8,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-resumability",
    x: 0.78,
    y: 2.96,
    w: 8,
    h: 0.78,
    title: "Resumability - a New Primitive for Developing Web Applications",
    titleFontSize: 10.3,
    body: "Juho Vepsalainen, Misko Hevery, Petri Vuorimaa • IEEE Access • 2024",
    bodyFontSize: 8.8,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-edge",
    x: 0.78,
    y: 3.8,
    w: 8,
    h: 0.78,
    title: "Implications of Edge Computing for Static Site Generation",
    titleFontSize: 10.3,
    body: "Juho Vepsalainen, Arto Hellas, Petri Vuorimaa • WEBIST • 2023",
    bodyFontSize: 8.8,
    group: "hybrid-techniques-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
