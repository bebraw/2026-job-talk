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
  index: 20,
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
    x: 1.1,
    y: 1.2,
    w: 7.8,
    h: 4.44,
    lineColor: theme.light,
    fillColor: "FFFFFF",
    group: "support-tools-main"
  });

  canvas.addImage("support-tools-tracker-image", {
    path: path.join(__dirname, "assets/screenshots/thesis-journey-tracker-dashboard-large.png"),
    x: 1.2,
    y: 1.3,
    w: 7.6,
    h: 4.275
  }, {
    group: "support-tools-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
