const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { sectionContentFrame, stackInFrame } = require("../generator/layout");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 8,
  title: "Simplification agenda"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.78,
    right: 8.78,
    top: 1.98,
    bottom: 4.9
  });
  const cardLayouts = stackInFrame(contentFrame, [
    { height: 0.84 },
    { height: 0.84 },
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

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-html",
    x: cardLayouts[0].x,
    y: cardLayouts[0].y,
    w: cardLayouts[0].w,
    h: cardLayouts[0].h,
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

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-hypermedia",
    x: cardLayouts[1].x,
    y: cardLayouts[1].y,
    w: cardLayouts[1].w,
    h: cardLayouts[1].h,
    titleY: 0.1,
    titleH: 0.34,
    bodyY: 0.46,
    bodyH: 0.16,
    title: "The Rise of Disappearing Frameworks in Web Development",
    titleFontSize: 10.3,
    body: "Juho Vepsäläinen, Arto Hellas, Petri Vuorimaa • ICWE 2023",
    bodyFontSize: 8.8,
    group: "simple-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "simple-card-frameworks",
    x: cardLayouts[2].x,
    y: cardLayouts[2].y,
    w: cardLayouts[2].w,
    h: cardLayouts[2].h,
    titleY: 0.1,
    titleH: 0.34,
    bodyY: 0.46,
    bodyH: 0.16,
    title: "The Case for HTML First Web Development",
    titleFontSize: 10.3,
    body: "Vepsäläinen • JWE (accepted) • 2026",
    bodyFontSize: 8.8,
    group: "simple-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
