const {
  addBulletItem,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const {
  bulletItemHeight,
  centerBox,
  insetFrame,
  sectionContentFrame,
  splitColumns,
  titleStackLayout
} = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 17,
  title: "Writing support"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    bottom: 5.1,
    top: 1.88
  });
  const columns = splitColumns(contentFrame, {
    gap: 0.82,
    leftWidth: 4.18
  });
  const leftLayout = titleStackLayout(columns.left, {
    titleHeight: 0.44,
    titleGap: 0.34,
    itemGap: 0.3,
    items: [
      {
        height: bulletItemHeight({
          body: "\"The Process of Scientific Writing\" makes publishing expectations concrete.",
          bodyH: 0.34
        })
      },
      {
        height: bulletItemHeight({
          body: "It supports supervision through a shared writing process.",
          bodyH: 0.34
        })
      }
    ]
  });
  const figureFrame = centerBox(columns.right, {
    w: 2.56,
    h: 3.36
  });
  figureFrame.y -= 0.16;
  const bookBox = centerBox(insetFrame(figureFrame, {
    top: 0.06,
    right: 0.28,
    bottom: 0.3,
    left: 0.28
  }), {
    w: 1.98,
    h: 3.02
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
    slideConfig.title
  );

  canvas.addText("teaching-infrastructure-left-title", "A writing process students can use", {
    x: columns.left.x,
    y: leftLayout.titleY,
    w: columns.left.w,
    h: 0.44,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "teaching-infrastructure-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teaching-infrastructure-bullet-materials",
    x: columns.left.x,
    y: leftLayout.items[0].y,
    w: columns.left.w,
    title: "Shared writing process improves supervision.",
    body: "\"The Process of Scientific Writing\" makes publishing expectations concrete.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teaching-infrastructure-bullet-durable",
    x: columns.left.x,
    y: leftLayout.items[1].y,
    w: columns.left.w,
    title: "Students can use it on their own.",
    body: "It supports supervision through a shared writing process.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  canvas.addShape("teaching-infrastructure-book-border", pres.ShapeType.rect, {
    x: bookBox.x,
    y: bookBox.y,
    w: bookBox.w,
    h: bookBox.h,
    line: { color: theme.muted, pt: 0.8, transparency: 64 },
    fill: { color: theme.bg, transparency: 100 }
  }, {
    group: "teaching-infrastructure-right"
  });

  canvas.addImage("teaching-infrastructure-book", {
    path: path.join(__dirname, "assets/photos/process-cover.png"),
    x: bookBox.x,
    y: bookBox.y,
    w: bookBox.w,
    h: bookBox.h
  }, {
    group: "teaching-infrastructure-right"
  });

  canvas.addText("teaching-infrastructure-book-url", "learnscientificwriting.com", {
    x: figureFrame.x,
    y: bookBox.y + bookBox.h + 0.18,
    w: figureFrame.w,
    h: 0.24,
    fontFace,
    fontSize: 10.0,
    bold: true,
    color: theme.accent,
    margin: 0,
    align: "center",
    hyperlink: {
      url: "http://learnscientificwriting.com/"
    }
  }, {
    group: "teaching-infrastructure-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
