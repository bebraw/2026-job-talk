const {
  addAccentRule,
  addBulletItem,
  addReferenceNote,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 7,
  title: "Hybrid rendering models"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Highlight 1",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "hybrid-rule",
    x: 7.46,
    y: 0.68,
    w: 1.82,
    group: "section-header"
  });

  addReferenceNote(
    canvas,
    theme,
    "Dissertation: Vepsäläinen, J. (2025). Emergence of hybrid rendering models in web application development.",
    {
      x: 0.72,
      y: 1.54,
      w: 7.9,
      h: 0.18,
      group: "hybrid-reference"
    }
  );

  addPanel(canvas, pres, theme, "hybrid-left-panel", {
    x: 0.62,
    y: 2.24,
    w: 4.55,
    h: 2.42,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "hybrid-left"
  });

  canvas.addText("hybrid-left-title", "Dissertation background", {
    x: 0.9,
    y: 2.46,
    w: 2.9,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "hybrid-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "hybrid-bullet-space",
    x: 0.9,
    y: 2.82,
    w: 3.96,
    title: "From static content to web applications.",
    body: "The platform was designed for static content, then evolved into an application platform.",
    bodyH: 0.42,
    titleFontSize: 9.8,
    bodyFontSize: 9.2,
    group: "hybrid-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "hybrid-bullet-experience",
    x: 0.9,
    y: 3.68,
    w: 3.96,
    title: "Explore the space between static and dynamic.",
    body: "Application size tripled in a decade while mobile constraints remained.",
    bodyH: 0.42,
    titleFontSize: 9.8,
    bodyFontSize: 9.2,
    group: "hybrid-left"
  });

  addPanel(canvas, pres, theme, "hybrid-right-panel", {
    x: 5.62,
    y: 2.24,
    w: 3.18,
    h: 2.42,
    lineColor: theme.secondary,
    linePt: 1.1,
    fillColor: theme.darkSlide.bg,
    group: "hybrid-right"
  });

  canvas.addText("hybrid-right-title", "Main claims", {
    x: 5.92,
    y: 2.46,
    w: 1.9,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.darkSlide.title,
    margin: 0
  }, {
    group: "hybrid-right"
  });

  addBulletItem(canvas, pres, theme, {
    id: "hybrid-bullet-claim-space",
    x: 5.92,
    y: 2.82,
    w: 2.54,
    title: "SPAs do not fit every use case.",
    body: "The mainstream SPA model should be used more sparingly.",
    bodyH: 0.62,
    titleFontSize: 9.8,
    bodyFontSize: 9.1,
    bulletLineColor: theme.secondary,
    bulletFillColor: theme.darkSlide.bg,
    bulletCenterColor: theme.secondary,
    titleColor: theme.darkSlide.title,
    bodyColor: theme.darkSlide.body,
    group: "hybrid-right"
  });

  addBulletItem(canvas, pres, theme, {
    id: "hybrid-bullet-claim-tradeoffs",
    x: 5.92,
    y: 3.68,
    w: 2.54,
    title: "Hybrid rendering cuts SPA cost.",
    body: "Islands constrain dynamic scope. Resumability avoids hydration and enables code-splitting.",
    bodyH: 0.62,
    titleFontSize: 9.8,
    bodyFontSize: 9.1,
    bulletLineColor: theme.secondary,
    bulletFillColor: theme.darkSlide.bg,
    bulletCenterColor: theme.secondary,
    titleColor: theme.darkSlide.title,
    bodyColor: theme.darkSlide.body,
    group: "hybrid-right"
  });

  canvas.addText("hybrid-note", "Teaching consequence: students need historical and architectural models, not tool opinions.", {
    x: 0.72,
    y: 4.8,
    w: 7.8,
    h: 0.28,
    fontFace,
    fontSize: 10.8,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "hybrid-note",
    skipOverlap: true
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
