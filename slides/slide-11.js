const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "closing",
  index: 28,
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
    "AI already changes what we teach and how we teach it.\nWhat do students still need to understand as tools change?\n\nHow should we teach architecture in an agentic world?\n\nHow do we help students build judgment rather than overreliance on AI?",
    {
      x: 0.82,
      y: 1.9,
      w: 8.08,
      h: 2.76,
      fontFace,
      fontSize: 15.2,
      color: theme.accent,
      margin: 0,
      valign: "middle"
    },
    {
      group: "discussion-left"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
