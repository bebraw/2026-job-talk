const { addPageBadge, addSectionTitle } = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "summary",
  index: 4,
  title: "Next steps"
};

function createChecklistItem(canvas, pres, theme, y, title, text, group) {
  canvas.addShape(`${group}-bullet`, pres.ShapeType.ellipse, {
    x: 0.72,
    y,
    w: 0.28,
    h: 0.28,
    line: { color: theme.primary, pt: 1 },
    fill: { color: "FFFFFF" }
  }, {
    group
  });

  canvas.addShape(`${group}-bullet-center`, pres.ShapeType.ellipse, {
    x: 0.81,
    y: y + 0.09,
    w: 0.1,
    h: 0.1,
    line: { color: theme.primary, transparency: 100 },
    fill: { color: theme.primary }
  }, {
    group
  });

  canvas.addText(`${group}-title`, title, {
    x: 1.08,
    y: y - 0.01,
    w: 3.2,
    h: 0.24,
    fontFace,
    fontSize: 13,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group
  });

  canvas.addText(`${group}-body`, text, {
    x: 1.08,
    y: y + 0.28,
    w: 4.2,
    h: 0.42,
    fontFace,
    fontSize: 11,
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
    "Summary",
    slideConfig.title,
    "The visual language is now closer to SurviveJS: bright mint framing, quiet white surfaces, and compact informational blocks with a single cyan accent."
  );

  canvas.addShape("summary-header-rule", pres.ShapeType.roundRect, {
    x: 7.72,
    y: 0.68,
    w: 1.64,
    h: 0.08,
    rectRadius: 0.03,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group: "summary-header"
  });

  createChecklistItem(canvas, pres, theme, 2.22, "Install dependencies", "Run npm install once to pull in pdfkit, qrcode, and pptxgenjs locally.", "checklist-install");
  createChecklistItem(canvas, pres, theme, 3.02, "Build the deck", "Run npm run build to emit the demo presentation as a PDF.", "checklist-build");
  createChecklistItem(canvas, pres, theme, 3.82, "Validate visual changes", "Run npm run quality:gate after intentional design edits.", "checklist-extend");

  canvas.addShape("summary-output-panel", pres.ShapeType.roundRect, {
    x: 6.15,
    y: 2.24,
    w: 3.05,
    h: 2.26,
    rectRadius: 0.08,
    line: { color: theme.primary, pt: 1.2 },
    fill: { color: theme.panel }
  }, {
    group: "summary-output-panel"
  });

  canvas.addText("summary-output-title", "Output", {
    x: 6.45,
    y: 2.5,
    w: 1.2,
    h: 0.25,
    fontFace,
    fontSize: 13,
    bold: true,
    color: theme.primary,
    allCaps: true,
    margin: 0
  }, {
    group: "summary-output-panel"
  });

  canvas.addText("summary-output-path", "slides/output/\ndemo-presentation.pdf", {
    x: 6.45,
    y: 2.88,
    w: 2.25,
    h: 0.55,
    fontFace,
    fontSize: 13,
    bold: true,
    color: theme.accent,
    breakLine: false,
    margin: 0
  }, {
    group: "summary-output-panel"
  });

  canvas.addText("summary-output-body", "Output stays local. Approved render snapshots live in generator/render-baseline/.", {
    x: 6.45,
    y: 3.6,
    w: 2.25,
    h: 0.72,
    fontFace,
    fontSize: 10.5,
    color: theme.muted,
    margin: 0
  }, {
    group: "summary-output-panel"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
