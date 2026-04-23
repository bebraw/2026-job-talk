const {
  addAccentRule,
  addPageBadge
} = require("../generator/helpers");
const { createFrame, fitContainBox } = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 20,
  title: "Tools that support my work with students"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = createFrame({
    x: 1.1,
    y: 1.24,
    w: 7.8,
    bottom: 5.42
  });
  const imageBox = fitContainBox(contentFrame, {
    alignY: "top",
    contentWidth: 6.85,
    contentHeight: 4.28
  });
  slide.background = { color: theme.bg };

  canvas.addText("support-tools-search-title", slideConfig.title, {
    x: 0.62,
    y: 0.62,
    w: 7.8,
    h: 0.48,
    fontFace,
    fontSize: 19.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "section-header"
  });

  addAccentRule(canvas, pres, theme, {
    id: "support-tools-search-rule",
    x: 7.34,
    y: 0.68,
    w: 1.94,
    group: "section-header"
  });

  canvas.addImage("support-tools-search-image", {
    path: path.join(__dirname, "assets/screenshots/supervisor-search-home-top.png"),
    x: imageBox.x,
    y: imageBox.y,
    w: imageBox.w,
    h: imageBox.h
  }, {
    group: "support-tools-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
