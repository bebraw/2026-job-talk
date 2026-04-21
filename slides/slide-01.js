const { fontFace } = require("../generator/theme");
const {
  addAccentRule,
  addPageBadge,
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "cover",
  index: 1,
  title: "Teaching the Next Web",
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addAccentRule(canvas, pres, theme, {
    id: "cover-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    group: "cover-header",
  });

  canvas.addText(
    "cover-title",
    slideConfig.title,
    {
      x: 0.7,
      y: 1.42,
      w: 6.8,
      h: 0.74,
      fontFace,
      fontSize: 28,
      bold: true,
      color: theme.accent,
      margin: 0,
    },
    {
      group: "cover-header",
    },
  );

  canvas.addText(
    "cover-subtitle",
    "From hybrid rendering to agentic hypermedia",
    {
      x: 0.72,
      y: 2.2,
      w: 6.2,
      h: 0.26,
      fontFace,
      fontSize: 13,
      bold: true,
      color: theme.muted,
      margin: 0,
    },
    {
      group: "cover-header",
    },
  );

  canvas.addText(
    "cover-name",
    "Juho Vepsäläinen",
    {
      x: 0.72,
      y: 3.08,
      w: 3.6,
      h: 0.22,
      fontFace,
      fontSize: 12,
      bold: true,
      color: theme.accent,
      margin: 0,
    },
    {
      group: "cover-summary",
    },
  );

  canvas.addText(
    "cover-date",
    "6.5.2026",
    {
      x: 0.72,
      y: 3.38,
      w: 2,
      h: 0.2,
      fontFace,
      fontSize: 10,
      color: theme.muted,
      margin: 0,
    },
    {
      group: "cover-summary",
    },
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
