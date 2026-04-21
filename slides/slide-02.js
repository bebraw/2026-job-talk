const { addPageBadge, addSectionTitle } = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "toc",
  index: 2,
  title: "Demo outline"
};

function createAgendaCard(canvas, pres, theme, x, title, text, index, group) {
  canvas.addShape(`${group}-card`, pres.ShapeType.roundRect, {
    x,
    y: 2.28,
    w: 2.65,
    h: 1.72,
    rectRadius: 0.08,
    line: { color: theme.light, pt: 1.2 },
    fill: { color: "FFFFFF" },
  }, {
    group
  });

  canvas.addShape(`${group}-badge`, pres.ShapeType.roundRect, {
    x: x + 0.22,
    y: 2.48,
    w: 0.5,
    h: 0.24,
    rectRadius: 0.08,
    line: { color: theme.primary, pt: 1 },
    fill: { color: theme.secondary }
  }, {
    group
  });

  canvas.addText(`${group}-index`, String(index).padStart(2, "0"), {
    x: x + 0.22,
    y: 2.48,
    w: 0.5,
    h: 0.24,
    fontFace,
    fontSize: 10,
    bold: true,
    color: theme.primary,
    align: "center",
    valign: "middle",
    margin: 0
  }, {
    group
  });

  canvas.addText(`${group}-title`, title, {
    x: x + 0.22,
    y: 2.92,
    w: 2.05,
    h: 0.28,
    fontFace,
    fontSize: 14,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group
  });

  canvas.addText(`${group}-body`, text, {
    x: x + 0.22,
    y: 3.28,
    w: 2.08,
    h: 0.62,
    fontFace,
    fontSize: 10.5,
    color: theme.muted,
    margin: 0
  }, {
    group
  });
}

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Contents",
    slideConfig.title,
    "This sample now mirrors the imported PDF workflow with the same restrained cards, soft mint highlights, and teal accents used on SurviveJS."
  );

  canvas.addShape("outline-summary-band", pres.ShapeType.roundRect, {
    x: 0.62,
    y: 1.86,
    w: 8.7,
    h: 0.18,
    rectRadius: 0.05,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group: "outline-band"
  });

  canvas.addShape("outline-right-wash", pres.ShapeType.roundRect, {
    x: 8.66,
    y: 0.64,
    w: 0.2,
    h: 3.58,
    rectRadius: 0.06,
    line: { color: theme.panel, transparency: 100 },
    fill: { color: theme.panel }
  }, {
    group: "outline-band"
  });

  createAgendaCard(canvas, pres, theme, 0.6, "Structure", "Each slide exports createSlide and owns the layout.", 1, "agenda-structure");
  createAgendaCard(canvas, pres, theme, 3.35, "Theme", "One shared theme object drives both rendering and validation.", 2, "agenda-theme");
  createAgendaCard(canvas, pres, theme, 6.1, "Output", "The build step writes slides/output/demo-presentation.pdf.", 3, "agenda-output");

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
