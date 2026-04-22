const {
  addBulletItem,
  addPageBadge,
  addReferenceNote,
  addSectionTitle
} = require("../generator/helpers");
const {
  bulletItemHeight,
  sectionContentFrame,
  splitColumns,
  titleStackLayout
} = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 10,
  title: "AI and computing education"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.62,
    right: 8.72,
    top: 2.1,
    bottom: 4.54
  });
  const columns = splitColumns(contentFrame, {
    gap: 0.68,
    leftWidth: 4.24
  });
  const leftLayout = titleStackLayout(columns.left, {
    titleHeight: 0.24,
    titleGap: 0.1,
    justify: "top",
    items: [
      { height: bulletItemHeight() }
    ]
  });
  const rightLayout = titleStackLayout(columns.right, {
    titleHeight: 0.24,
    titleGap: 0.1,
    justify: "top",
    items: [
      {
        height: bulletItemHeight({
          body: "Flipped learning, oral exams, dialogical assessment.",
          titleH: 0.22,
          bodyOffset: 0.28,
          bodyH: 0.42
        })
      }
    ]
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "CSEd",
    slideConfig.title
  );

  canvas.addText("csed-left-title", "Educational implications", {
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
    group: "csed-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "csed-bullet-institution",
    x: columns.left.x,
    y: leftLayout.items[0].y,
    w: columns.left.w,
    title: "Curriculum and pedagogy need rethinking.",
    group: "csed-left"
  });

  canvas.addText("csed-right-title", "What changes in practice", {
    x: columns.right.x,
    y: rightLayout.titleY,
    w: columns.right.w,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-1-title", "Assessment and classroom design", {
    x: columns.right.x,
    y: rightLayout.items[0].y,
    w: columns.right.w,
    h: 0.22,
    fontFace,
    fontSize: 11.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-1-body", "Flipped learning, oral exams, dialogical assessment.", {
    x: columns.right.x,
    y: rightLayout.items[0].y + 0.28,
    w: columns.right.w,
    h: 0.42,
    fontFace,
    fontSize: 10.2,
    color: theme.muted,
    margin: 0,
    group: "csed-right"
  }, {
    group: "csed-right"
  });

  addReferenceNote(
    canvas,
    theme,
    "[1] Vepsäläinen, J., & Juntunen, P. (2026). Artificial intelligence for computer science education - hype or help?",
    {
      x: 0.72,
      y: 4.8,
      w: 7.9,
      h: 0.18,
      group: "csed-reference"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
