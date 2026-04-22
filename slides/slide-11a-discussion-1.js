const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { centeredTextBlock, sectionContentFrame } = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "closing",
  index: 26,
  title: "Conclusion"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const bodyText = "AI already changes what we teach and how we teach it.\nWhat do students still need to understand as tools change?";
  const textFrame = sectionContentFrame({
    left: 0.9,
    right: 8.26,
    top: 1.8,
    bottom: 4.82
  });
  const textLayout = centeredTextBlock(textFrame, bodyText, {
    fontFace,
    fontSize: 16,
    margin: 0
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Closing",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "discussion-rule",
    x: 7.5,
    y: 0.68,
    w: 1.78,
    group: "section-header"
  });

  canvas.addText(
    "discussion-left-body",
    bodyText,
    {
      x: textLayout.x,
      y: textLayout.y,
      w: textLayout.w,
      h: textLayout.h,
      fontFace,
      fontSize: 16,
      color: theme.accent,
      margin: 0
    },
    {
      group: "discussion-left"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
