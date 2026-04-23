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
  index: 7,
  title: "Hybrid rendering techniques"
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
    x: cardLayouts[0].x,
    y: cardLayouts[0].y,
    w: cardLayouts[0].w,
    h: cardLayouts[0].h,
    titleY: 0.1,
    titleH: 0.34,
    bodyY: 0.46,
    bodyH: 0.16,
    title: "The Potential of Serverless Edge-powered Islands for Web Development",
    titleFontSize: 10.3,
    body: "Juho Vepsäläinen, Petri Vuorimaa, Arto Hellas • Journal of Web Engineering • 2025",
    bodyFontSize: 8.8,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-resumability",
    x: cardLayouts[1].x,
    y: cardLayouts[1].y,
    w: cardLayouts[1].w,
    h: cardLayouts[1].h,
    titleY: 0.1,
    titleH: 0.34,
    bodyY: 0.46,
    bodyH: 0.16,
    title: "Resumability - a New Primitive for Developing Web Applications",
    titleFontSize: 10.3,
    body: "Juho Vepsäläinen, Misko Hevery, Petri Vuorimaa • IEEE Access • 2024",
    bodyFontSize: 8.8,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-edge",
    x: cardLayouts[2].x,
    y: cardLayouts[2].y,
    w: cardLayouts[2].w,
    h: cardLayouts[2].h,
    titleY: 0.1,
    titleH: 0.34,
    bodyY: 0.46,
    bodyH: 0.16,
    title: "Implications of Edge Computing for Static Site Generation",
    titleFontSize: 10.3,
    body: "Juho Vepsäläinen, Arto Hellas, Petri Vuorimaa • WEBIST • 2023",
    bodyFontSize: 8.8,
    group: "hybrid-techniques-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
