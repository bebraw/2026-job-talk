const {
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
  index: 19,
  title: "Public learning communities"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    top: 1.9
  });
  const columns = splitColumns(contentFrame, {
    gap: 0.54,
    leftWidth: 4.2
  });
  const leftLayout = titleStackLayout(columns.left, {
    titleHeight: 0.24,
    titleGap: 0.26,
    itemGap: 0.34,
    items: [
      {
        height: bulletItemHeight({
          body: "Meetups and the conference keep me grounded in current practice.",
          bodyH: 0.38
        })
      },
      {
        height: bulletItemHeight({
          body: "webpack-merge is one example; earlier work includes webpack and Blender.",
          bodyH: 0.38
        })
      }
    ]
  });
  const mediaFrame = sectionContentFrame({
    x: columns.right.x,
    left: columns.right.x,
    right: columns.right.x + columns.right.w,
    top: columns.right.y + 0.18,
    bottom: columns.right.y + 3.08
  });
  const imageBox = centerBox(mediaFrame, {
    w: 3.44,
    h: 2.28
  });
  const captionTitleBox = boxBelow(imageBox, {
    x: imageBox.x,
    w: 3.28,
    h: 0.2,
    gap: 0.26
  });
  const captionBodyBox = boxBelow(captionTitleBox, {
    x: imageBox.x,
    w: 3.36,
    h: 0.18,
    gap: 0.08
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
    slideConfig.title
  );

  canvas.addText("public-learning-left-title", "Teaching also happens outside courses", {
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
    group: "public-learning-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "public-learning-bullet-community",
    x: columns.left.x,
    y: leftLayout.items[0].y,
    w: columns.left.w,
    title: "I organize Future Frontend.",
    body: "Meetups and the conference keep me grounded in current practice.",
    bodyH: 0.38,
    group: "public-learning-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "public-learning-bullet-outward",
    x: columns.left.x,
    y: leftLayout.items[1].y,
    w: columns.left.w,
    title: "My developer background supports my teaching.",
    body: "webpack-merge is one example; earlier work includes webpack and Blender.",
    bodyH: 0.38,
    titleFontSize: 9.8,
    group: "public-learning-left"
  });

  canvas.addImage("public-learning-photo", {
    path: path.join(__dirname, "assets/photos/future-frontend-2024.jpg"),
    x: imageBox.x,
    y: imageBox.y,
    w: imageBox.w,
    h: imageBox.h
  }, {
    group: "public-learning-right"
  });

  canvas.addText("public-learning-photo-title", "Teaching outside the classroom", {
    x: captionTitleBox.x,
    y: captionTitleBox.y,
    w: captionTitleBox.w,
    h: captionTitleBox.h,
    fontFace,
    fontSize: 11.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "public-learning-right"
  });

  canvas.addText("public-learning-photo-credit", "Future Frontend is one way I do it.", {
    x: captionBodyBox.x,
    y: captionBodyBox.y,
    w: captionBodyBox.w,
    h: captionBodyBox.h,
    fontFace,
    fontSize: 8.6,
    color: theme.muted,
    margin: 0
  }, {
    group: "public-learning-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
