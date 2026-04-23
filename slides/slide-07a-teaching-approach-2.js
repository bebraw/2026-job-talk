const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const {
  boxBelow,
  bulletItemHeight,
  centerBox,
  sectionContentFrame,
  splitColumns,
  titleStackLayout
} = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 15,
  title: "How research informs my teaching"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.9,
    right: 8.94,
    top: 1.84,
    bottom: 5.02
  });
  const columns = splitColumns(contentFrame, {
    gap: 0.54,
    leftWidth: 3.92
  });
  const leftLayout = titleStackLayout(columns.left, {
    titleHeight: 0,
    titleGap: 0,
    itemGap: 0.26,
    items: [
      {
        height: bulletItemHeight({
          body: "Research helps me teach principles, not only tools.",
          bodyH: 0.28
        })
      },
      {
        height: bulletItemHeight({
          body: "Student work reveals topics that deserve more attention.",
          bodyH: 0.26
        })
      }
    ]
  });
  const diagramBox = centerBox(columns.right, {
    w: 3.88,
    h: 1.62,
    alignY: "center"
  });
  const captionBox = boxBelow(diagramBox, {
    x: columns.right.x,
    w: columns.right.w,
    h: 0.18,
    gap: 0.32
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "vision-rule",
    x: 7.62,
    y: 0.68,
    w: 1.66,
    group: "section-header"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-models",
    x: columns.left.x + 0.04,
    y: leftLayout.items[0].y,
    w: columns.left.w - 0.04,
    title: "Build working models students can adapt.",
    body: "Research helps me teach principles, not only tools.",
    bodyH: 0.28,
    bodyFontSize: 9.6,
    group: "teach-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-structure",
    x: columns.left.x + 0.04,
    y: leftLayout.items[1].y,
    w: columns.left.w - 0.04,
    title: "Teaching and supervision shape my questions.",
    body: "Student work reveals topics that deserve more attention.",
    bodyH: 0.26,
    bodyFontSize: 9.6,
    group: "teach-left"
  });

  canvas.addImage("teach-loop-image", {
    path: path.join(__dirname, "assets/diagrams/research-teaching-loop.png"),
    x: diagramBox.x,
    y: diagramBox.y,
    w: diagramBox.w,
    h: diagramBox.h
  }, {
    group: "teach-loop"
  });

  canvas.addText("teach-loop-title", "Research-teaching nexus [3,4]", {
    x: captionBox.x,
    y: captionBox.y,
    w: captionBox.w,
    h: captionBox.h,
    fontFace,
    fontSize: 9.8,
    color: theme.muted,
    margin: 0,
    align: "center"
  }, {
    group: "teach-loop"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
