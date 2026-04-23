const {
  addAccentRule,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createFrame, sectionContentFrame, stackInFrame } = require("../generator/layout");
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
    left: 0.62,
    right: 9.18,
    top: 2.22,
    bottom: 5.14
  });
  const gap = 0.24;
  const columnWidth = (contentFrame.w - gap * 2) / 3;
  const cardLayouts = [0, 1, 2].map((index) => createFrame({
    x: contentFrame.x + index * (columnWidth + gap),
    y: contentFrame.y,
    w: columnWidth,
    h: 2.62
  }));
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
    titleH: 0.38,
    bodyY: 0.54,
    bodyH: 1.12,
    title: "Constrain dynamic scope",
    titleFontSize: 11.2,
    body: "Limit dynamic behavior\nto where needed.\n\nThe Potential of Serverless\nEdge-powered Islands for\nWeb Development\nJuho Vepsäläinen,\nPetri Vuorimaa,\nArto Hellas",
    bodyFontSize: 7.2,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-resumability",
    x: cardLayouts[1].x,
    y: cardLayouts[1].y,
    w: cardLayouts[1].w,
    h: cardLayouts[1].h,
    titleY: 0.12,
    titleH: 0.38,
    bodyY: 0.54,
    bodyH: 1.12,
    title: "Reduce client-side work",
    titleFontSize: 11.2,
    body: "Avoid unnecessary\nbrowser work at startup.\n\nResumability - a New Primitive\nfor Developing Web Applications\nJuho Vepsäläinen,\nMisko Hevery,\nPetri Vuorimaa",
    bodyFontSize: 7.2,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-edge",
    x: cardLayouts[2].x,
    y: cardLayouts[2].y,
    w: cardLayouts[2].w,
    h: cardLayouts[2].h,
    titleY: 0.12,
    titleH: 0.38,
    bodyY: 0.54,
    bodyH: 1.12,
    title: "Move work to the edge",
    titleFontSize: 11.2,
    body: "Place computation\nwhere it best supports\ndelivery and cost.\n\nImplications of Edge Computing\nfor Static Site Generation\nJuho Vepsäläinen,\nArto Hellas,\nPetri Vuorimaa",
    bodyFontSize: 7.2,
    group: "hybrid-techniques-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
