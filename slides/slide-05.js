const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const {
  bulletItemHeight,
  sectionContentFrame,
  splitColumns,
  stackInFrame,
  titleStackLayout
} = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 12,
  title: "AI in software development"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.62,
    right: 8.62,
    top: 2.1,
    bottom: 4.7
  });
  const columns = splitColumns(contentFrame, {
    gap: 1.28,
    leftWidth: 3.48
  });
  const leftLayout = titleStackLayout(columns.left, {
    titleHeight: 0.24,
    titleGap: 0.38,
    itemGap: 0.22,
    justify: "top",
    items: [
      {
        height: bulletItemHeight({
          body: "Useful for bounded technical work, drafting, and iteration.",
          bodyH: 0.3
        })
      },
      {
        height: bulletItemHeight({
          body: "AI output still has to be inspected, compared, and revised.",
          bodyH: 0.3
        })
      },
      {
        height: bulletItemHeight({
          body: "Prompting is not enough.",
          bodyH: 0.24
        })
      }
    ]
  });
  const rightLayouts = stackInFrame(columns.right, [
    { height: 0.76 },
    { height: 0.76 },
    { height: 0.76 }
  ], {
    gap: 0.16,
    justify: "top"
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "AI",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "ai-rule",
    x: 7.82,
    y: 0.68,
    w: 1.46,
    group: "section-header"
  });

  canvas.addText("ai-left-title", "For development", {
    x: columns.left.x,
    y: leftLayout.titleY,
    w: columns.left.w,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "ai-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "ai-dev-efficiency",
    x: columns.left.x,
    y: leftLayout.items[0].y,
    w: columns.left.w,
    title: "AI is best treated as an enabler.",
    body: "Useful for bounded technical work, drafting, and iteration.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "ai-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "ai-dev-validation",
    x: columns.left.x,
    y: leftLayout.items[1].y,
    w: columns.left.w,
    title: "Critical reading and writing matter more.",
    body: "AI output still has to be inspected, compared, and revised.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "ai-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "ai-dev-quality",
    x: columns.left.x,
    y: leftLayout.items[2].y,
    w: columns.left.w,
    title: "The real question is how to use AI well.",
    body: "Prompting is not enough.",
    bodyH: 0.24,
    group: "ai-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "ai-card-benefit",
    x: rightLayouts[0].x,
    y: rightLayouts[0].y,
    w: rightLayouts[0].w,
    h: 0.76,
    title: "Core point",
    body: "AI adds a third mode of work: augmented thinking.",
    group: "ai-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "ai-card-risk",
    x: rightLayouts[1].x,
    y: rightLayouts[1].y,
    w: rightLayouts[1].w,
    h: 0.76,
    title: "Main risk",
    body: "Overreliance weakens judgment if critical habits are absent.",
    group: "ai-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "ai-card-position",
    x: rightLayouts[2].x,
    y: rightLayouts[2].y,
    w: rightLayouts[2].w,
    h: 0.76,
    title: "My position",
    body: "AI is an integration, supervision, and architecture issue.",
    group: "ai-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
