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
    x: 1.12,
    y: 1.2,
    w: 7.76,
    h: 4.44,
    lineColor: theme.light,
    fillColor: "FFFFFF",
    group: "support-tools-main"
  });

  canvas.addImage("support-tools-search-image", {
    path: path.join(__dirname, "assets/screenshots/supervisor-search-home-top.png"),
    x: 1.58,
    y: 1.3,
    w: 6.84,
    h: 4.275
  }, {
    group: "support-tools-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
