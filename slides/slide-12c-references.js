const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 34,
  title: "References"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Sources",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "references-rule-third",
    x: 7.72,
    y: 0.68,
    w: 1.56,
    group: "section-header"
  });

  canvas.addText("reference-9", "[9] Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. Scientific American, 284(5), 34-43. lassila.org/publications/2001/SciAm.html", {
    x: 0.9,
    y: 2.06,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 9.2,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
