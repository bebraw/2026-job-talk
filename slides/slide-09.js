const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addPanel,
  addReferenceNote,
  addSectionTitle
} = require("../generator/helpers");
const {
  boxBelow,
  bulletItemHeight,
  centerBox,
  createFrame,
  sectionContentFrame,
  splitColumns,
  titleStackLayout
} = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 21,
  title: "Future vision: agentic hypermedia"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    top: 1.92,
    bottom: 5.12
  });
  const columns = splitColumns(contentFrame, {
    gap: 0.32,
    leftWidth: 4.52
  });
  const panelInset = createFrame({
    x: 0.94,
    y: 2.2,
    w: 3.88,
    h: 2.3
  });
  const leftLayout = titleStackLayout(panelInset, {
    titleHeight: 0.24,
    titleGap: 0.22,
    itemGap: 0.34,
    justify: "top",
    items: [
      { height: bulletItemHeight({ titleH: 0.34 }) },
      { height: bulletItemHeight({ titleH: 0.46 }) },
      { height: bulletItemHeight({ titleH: 0.34 }) }
    ]
  });
  const diagramBox = centerBox(columns.right, {
    w: 3.37,
    h: 2.66,
    alignY: "center"
  });
  const noteBox = boxBelow(diagramBox, {
    x: columns.right.x,
    w: columns.right.w,
    h: 0.18,
    gap: 0.16
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Vision",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "vision-rule",
    x: 7.62,
    y: 0.68,
    w: 1.66,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "vision-left-panel", {
    x: columns.left.x,
    y: columns.left.y,
    w: columns.left.w,
    h: 2.94,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "vision-left"
  });

  canvas.addText("vision-left-title", "Research questions", {
    x: panelInset.x,
    y: leftLayout.titleY,
    w: 2.7,
    h: 0.24,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-hypermedia",
    x: panelInset.x,
    y: leftLayout.items[0].y,
    w: 3.88,
    title: "How do we keep the web usable by agents?",
    titleH: 0.34,
    titleFontSize: 9.2,
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-architectures",
    x: panelInset.x,
    y: leftLayout.items[1].y,
    w: 3.88,
    title: "How do semantic web ideas and knowledge bases support agent-facing systems?",
    titleH: 0.46,
    titleFontSize: 8.6,
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-education",
    x: panelInset.x,
    y: leftLayout.items[2].y,
    w: 3.88,
    title: "What should remain stable in web architecture as agents become users?",
    titleH: 0.34,
    titleFontSize: 8.6,
    group: "vision-left"
  });

  canvas.addImage("vision-diagram-image", {
    path: path.join(__dirname, "assets/diagrams/agentic-hypermedia.png"),
    x: diagramBox.x,
    y: diagramBox.y,
    w: diagramBox.w,
    h: diagramBox.h
  }, {
    group: "vision-right"
  });

  addReferenceNote(
    canvas,
    theme,
    "[2], [5] Fielding; Berners-Lee et al.",
    {
      x: noteBox.x,
      y: noteBox.y,
      w: noteBox.w,
      h: noteBox.h,
      group: "vision-reference"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
