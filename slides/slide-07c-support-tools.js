const {
  addAccentRule,
  addPageBadge
} = require("../generator/helpers");
const { createFrame, fitContainBox, splitColumns } = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 19,
  title: "Tools that support my work with students"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = createFrame({
    x: 0.72,
    y: 1.54,
    w: 8.58,
    bottom: 5.18
  });
  const columns = splitColumns(contentFrame, {
    gap: 0.42,
    leftWidth: 4.08
  });
  const leftImageBox = createFrame({
    x: columns.left.x,
    y: 2.24,
    w: columns.left.w,
    h: 2.44
  });
  const rightImageBox = createFrame({
    x: columns.right.x,
    y: 2.24,
    w: columns.right.w,
    h: 2.44
  });
  const trackerImagePlacement = fitContainBox(leftImageBox, {
    contentWidth: 1.77,
    contentHeight: 1,
    alignY: "top"
  });
  const searchImagePlacement = fitContainBox(rightImageBox, {
    contentWidth: 1.6,
    contentHeight: 1,
    alignY: "top"
  });
  slide.background = { color: theme.bg };

  canvas.addText("support-tools-tracker-title", slideConfig.title, {
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
    id: "support-tools-tracker-rule",
    x: 6.98,
    y: 0.68,
    w: 2.3,
    group: "section-header"
  });

  canvas.addText("support-tools-tracker-label", "Thesis Journey Tracker", {
    x: columns.left.x,
    y: 1.58,
    w: columns.left.w,
    h: 0.24,
    fontFace,
    fontSize: 12,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "support-tools-main"
  });

  canvas.addText("support-tools-tracker-body", "Phases, meetings, and notes in one place.", {
    x: columns.left.x,
    y: 1.88,
    w: columns.left.w,
    h: 0.18,
    fontFace,
    fontSize: 9.4,
    color: theme.muted,
    margin: 0
  }, {
    group: "support-tools-main"
  });

  canvas.addImage("support-tools-tracker-image", {
    path: path.join(__dirname, "assets/screenshots/thesis-journey-tracker-focused.png"),
    x: trackerImagePlacement.x,
    y: trackerImagePlacement.y,
    w: trackerImagePlacement.w,
    h: trackerImagePlacement.h
  }, {
    group: "support-tools-main"
  });

  canvas.addText("support-tools-search-label", "Supervisor Search", {
    x: columns.right.x,
    y: 1.58,
    w: columns.right.w,
    h: 0.24,
    fontFace,
    fontSize: 12,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "support-tools-main"
  });

  canvas.addText("support-tools-search-body", "Find suitable MSc supervisors without leaving the page.", {
    x: columns.right.x,
    y: 1.88,
    w: columns.right.w,
    h: 0.18,
    fontFace,
    fontSize: 9.4,
    color: theme.muted,
    margin: 0
  }, {
    group: "support-tools-main"
  });

  canvas.addImage("support-tools-search-image", {
    path: path.join(__dirname, "assets/screenshots/supervisor-search-home-top.png"),
    x: searchImagePlacement.x,
    y: searchImagePlacement.y,
    w: searchImagePlacement.w,
    h: searchImagePlacement.h,
    sizing: {
      type: "crop",
      x: "5%",
      y: "0%",
      w: "90%",
      h: "72%"
    }
  }, {
    group: "support-tools-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
