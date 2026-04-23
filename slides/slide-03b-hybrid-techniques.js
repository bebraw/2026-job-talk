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
    titleY: 0.12,
    titleH: 0.22,
    bodyY: 0.38,
    bodyH: 0.3,
    title: "Constrain dynamic scope",
    titleFontSize: 10.8,
    body: "Limit dynamic behavior to where it is needed.\nEdge-powered islands • JWE 2025",
    bodyFontSize: 8.2,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-resumability",
    x: cardLayouts[1].x,
    y: cardLayouts[1].y,
    w: cardLayouts[1].w,
    h: cardLayouts[1].h,
    titleY: 0.12,
    titleH: 0.22,
    bodyY: 0.38,
    bodyH: 0.3,
    title: "Reduce client-side work",
    titleFontSize: 10.8,
    body: "Avoid unnecessary browser work at startup.\nResumability • IEEE Access 2024",
    bodyFontSize: 8.2,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-edge",
    x: cardLayouts[2].x,
    y: cardLayouts[2].y,
    w: cardLayouts[2].w,
    h: cardLayouts[2].h,
    titleY: 0.12,
    titleH: 0.22,
    bodyY: 0.38,
    bodyH: 0.3,
    title: "Move work to the edge",
    titleFontSize: 10.8,
    body: "Place computation where it best supports delivery and cost.\nEdge computing for SSG • WEBIST 2023",
    bodyFontSize: 8.2,
    group: "hybrid-techniques-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
