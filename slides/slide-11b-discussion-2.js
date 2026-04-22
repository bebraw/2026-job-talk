const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "closing",
  index: 27,
  title: "Conclusion"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
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
    "AI already changes what we teach and how we teach it.\nWhat should stay at the center of computing education?\n\nHow should we teach architecture in an agentic world?",
    {
      x: 0.9,
      y: 2.36,
      w: 7.36,
      h: 1.86,
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
