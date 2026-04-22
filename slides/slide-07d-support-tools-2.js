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
  index: 22,
  title: "Supervisor Search"
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
    id: "support-tools-search-rule",
    x: 7.34,
    y: 0.68,
    w: 1.94,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "support-tools-search-frame", {
    x: 1.28,
    y: 1.72,
    w: 7.44,
    h: 3.62,
    lineColor: theme.light,
    fillColor: "FFFFFF",
    group: "support-tools-main"
  });

  canvas.addImage("support-tools-search-image", {
    path: path.join(__dirname, "assets/screenshots/supervisor-search-home-top.png"),
    x: 2.02,
    y: 1.92,
    w: 5.47,
    h: 3.42
  }, {
    group: "support-tools-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
