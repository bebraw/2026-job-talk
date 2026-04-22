const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 9,
  title: "Simplification agenda"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
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

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-html",
    x: 0.78,
    y: 2.12,
    w: 8,
    h: 0.78,
    title: "Revisiting Hypermedia, The Forgotten Web Application Development Paradigm",
    titleFontSize: 10.3,
    body: "Juho Vepsalainen • TechRxiv preprint • 2026",
    bodyFontSize: 8.8,
    group: "simple-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-hypermedia",
    x: 0.78,
    y: 2.98,
    w: 8,
    h: 0.78,
    title: "The Rise of Disappearing Frameworks in Web Development",
    titleFontSize: 10.3,
    body: "Juho Vepsalainen, Arto Hellas, Petri Vuorimaa • ICWE • 2023",
    bodyFontSize: 8.8,
    group: "simple-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-frameworks",
    x: 0.78,
    y: 3.84,
    w: 8,
    h: 0.78,
    title: "The State of Disappearing Frameworks in 2023",
    titleFontSize: 10.3,
    body: "Juho Vepsalainen, Arto Hellas, Petri Vuorimaa • WEBIST • 2023",
    bodyFontSize: 8.8,
    group: "simple-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
