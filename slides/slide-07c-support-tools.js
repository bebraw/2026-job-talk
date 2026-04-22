const {
  addAccentRule,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");
const path = require("path");

const slideConfig = {
  type: "content",
  index: 21,
  title: "Thesis Journey Tracker"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "support-tools-tracker-rule",
    x: 6.98,
    y: 0.68,
    w: 2.3,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "support-tools-tracker-frame", {
    x: 1.28,
    y: 1.72,
    w: 7.44,
    h: 3.62,
    lineColor: theme.light,
    fillColor: "FFFFFF",
    group: "support-tools-main"
  });

  canvas.addImage("support-tools-tracker-image", {
    path: path.join(__dirname, "assets/screenshots/thesis-journey-tracker-dashboard-large.png"),
    x: 1.96,
    y: 1.92,
    w: 6.08,
    h: 3.42
  }, {
    group: "support-tools-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
