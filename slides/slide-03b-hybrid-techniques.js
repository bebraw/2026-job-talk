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
    left: 0.78,
    right: 8.78,
    top: 2.42,
    bottom: 4.96
  });
  const gap = 0.24;
  const columnWidth = (contentFrame.w - gap * 2) / 3;
  const cardLayouts = [0, 1, 2].map((index) => createFrame({
    x: contentFrame.x + index * (columnWidth + gap),
    y: contentFrame.y,
    w: columnWidth,
    h: 2.38
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
    titleH: 0.34,
    bodyY: 0.54,
    bodyH: 0.7,
    title: "Constrain dynamic scope",
    titleFontSize: 10.6,
    body: "Limit dynamic behavior\nto where it is needed.\n\nIslands • JWE 2025",
    bodyFontSize: 8.1,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-resumability",
    x: cardLayouts[1].x,
    y: cardLayouts[1].y,
    w: cardLayouts[1].w,
    h: cardLayouts[1].h,
    titleY: 0.12,
    titleH: 0.34,
    bodyY: 0.54,
    bodyH: 0.7,
    title: "Reduce client-side work",
    titleFontSize: 10.6,
    body: "Avoid unnecessary\nbrowser work at startup.\n\nResumability • 2024",
    bodyFontSize: 8.1,
    group: "hybrid-techniques-main"
  });

  addCompactCard(canvas, pres, theme, {
    id: "hybrid-techniques-card-edge",
    x: cardLayouts[2].x,
    y: cardLayouts[2].y,
    w: cardLayouts[2].w,
    h: cardLayouts[2].h,
    titleY: 0.12,
    titleH: 0.34,
    bodyY: 0.54,
    bodyH: 0.7,
    title: "Move work to the edge",
    titleFontSize: 10.6,
    body: "Place computation where\nit best supports delivery\nand cost.\n\nEdge for SSG • 2023",
    bodyFontSize: 8.1,
    group: "hybrid-techniques-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
