const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addPanel,
  addReferenceNote,
  addSectionTitle
} = require("../generator/helpers");
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
  const diagramWidth = 3.37;
  const diagramHeight = 2.66;
  const diagramX = 5.45;
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
    x: 0.62,
    y: 2.06,
    w: 4.52,
    h: 2.94,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "vision-left"
  });

  canvas.addText("vision-left-title", "Research questions", {
    x: 0.94,
    y: 2.34,
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
    x: 0.94,
    y: 2.8,
    w: 3.88,
    title: "How do we keep the web usable by agents?",
    titleH: 0.34,
    titleFontSize: 9.2,
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-architectures",
    x: 0.94,
    y: 3.56,
    w: 3.88,
    title: "How do semantic web ideas and knowledge bases support agent-facing systems?",
    titleH: 0.46,
    titleFontSize: 8.6,
    group: "vision-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "vision-bullet-education",
    x: 0.94,
    y: 4.32,
    w: 3.88,
    title: "What should remain stable in web architecture as agents become users?",
    titleH: 0.34,
    titleFontSize: 8.6,
    group: "vision-left"
  });

  canvas.addImage("vision-diagram-image", {
    path: path.join(__dirname, "assets/diagrams/agentic-hypermedia.png"),
    x: diagramX,
    y: 2.3,
    w: diagramWidth,
    h: diagramHeight
  }, {
    group: "vision-right"
  });

  addReferenceNote(
    canvas,
    theme,
    "[2], [5] Fielding; Berners-Lee et al.",
    {
      x: 5.48,
      y: 5.12,
      w: 3.26,
      h: 0.18,
      group: "vision-reference"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
