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
  slide.background = { color: theme.darkSlide.bg };

  addAccentRule(canvas, pres, theme, {
    id: "cover-rule",
    x: 0.62,
    y: 0.42,
    w: 2.4,
    force: true,
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
      fontSize: 30,
      bold: true,
      color: theme.darkSlide.title,
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
      fontSize: 15,
      bold: true,
      color: theme.darkSlide.muted,
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
      h: 0.24,
      fontFace,
      fontSize: 13.5,
      bold: true,
      color: theme.darkSlide.title,
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
      h: 0.22,
      fontFace,
      fontSize: 11.5,
      color: theme.darkSlide.muted,
      margin: 0,
    },
    {
      group: "cover-summary",
    },
  );

  addPageBadge(canvas, pres, theme, slideConfig.index, {
    trackColor: theme.darkSlide.progressTrack,
    fillColor: theme.darkSlide.progressFill,
  });

  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
