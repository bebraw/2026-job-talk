const { fontFace } = require("../generator/theme");
const {
  addAccentRule,
  addCompactCard,
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
    "cover-eyebrow",
    "Job talk · research, teaching, future vision",
    {
      x: 0.7,
      y: 0.68,
      w: 4.3,
      h: 0.26,
      fontFace,
      fontSize: 11,
      bold: true,
      color: theme.muted,
      margin: 0,
    },
    {
      group: "cover-header",
    },
  );

  canvas.addText(
    "cover-title",
    slideConfig.title,
    {
      x: 0.7,
      y: 1.02,
      w: 4.7,
      h: 0.66,
      fontFace,
      fontSize: 24,
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
      y: 1.64,
      w: 4.5,
      h: 0.24,
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

  canvas.addShape(
    "cover-separator",
    pres.ShapeType.roundRect,
    {
      x: 0.72,
      y: 2.22,
      w: 4.5,
      h: 0.08,
      rectRadius: 0.03,
      line: { color: theme.secondary, transparency: 100 },
      fill: { color: theme.secondary },
    },
    {
      group: "cover-summary",
    },
  );

  canvas.addText(
    "cover-name",
    "Juho Vepsäläinen",
    {
      x: 0.72,
      y: 2.44,
      w: 3.2,
      h: 0.22,
      fontFace,
      fontSize: 11.4,
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
    "05.06.2026",
    {
      x: 0.72,
      y: 2.7,
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

  addCompactCard(canvas, pres, theme, {
    id: "cover-card-research",
    x: 5.9,
    y: 0.92,
    w: 3.02,
    h: 0.92,
    title: "Research",
    body: "Hybrid rendering, edge architectures, HTML-first design, and AI-aware engineering.",
    group: "cover-panel",
  });

  addCompactCard(canvas, pres, theme, {
    id: "cover-card-teaching",
    x: 5.9,
    y: 2.02,
    w: 3.02,
    h: 0.92,
    title: "Teaching",
    body: "Research-led supervision, public learning resources, and course design for a changing field.",
    group: "cover-panel",
  });

  addCompactCard(canvas, pres, theme, {
    id: "cover-card-vision",
    x: 5.9,
    y: 3.12,
    w: 3.02,
    h: 0.92,
    title: "Vision",
    body: "A next web that is lighter for users, clearer for developers, and navigable by agents.",
    group: "cover-panel",
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
