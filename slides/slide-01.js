const { fontFace } = require("../generator/theme");
const { addPageBadge } = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "cover",
  index: 1,
  title: "Presentation Template Demo"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  canvas.addShape("cover-top-rule", pres.ShapeType.roundRect, {
    x: 0.62,
    y: 0.42,
    w: 2.2,
    h: 0.08,
    rectRadius: 0.03,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group: "cover-header"
  });

  canvas.addText("cover-eyebrow", "From an apprentice to a master of JavaScript", {
    x: 0.7,
    y: 0.68,
    w: 4.1,
    h: 0.3,
    fontFace,
    fontSize: 11.5,
    bold: true,
    color: theme.muted,
    margin: 0
  }, {
    group: "cover-header"
  });

  canvas.addText("cover-title", slideConfig.title, {
    x: 0.7,
    y: 1.04,
    w: 4.75,
    h: 0.8,
    fontFace,
    fontSize: 26,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "cover-header"
  });

  canvas.addText("cover-summary", "A compact deck that shows the imported skill, a shared theme, and the native PDF compile flow used to emit presentation files locally.", {
    x: 0.72,
    y: 1.92,
    w: 4.3,
    h: 0.82,
    fontFace,
    fontSize: 12,
    color: theme.muted,
    valign: "mid",
    margin: 0
  }, {
    group: "cover-summary"
  });

  canvas.addShape("cover-right-panel", pres.ShapeType.roundRect, {
    x: 5.92,
    y: 0.76,
    w: 3.18,
    h: 3.98,
    rectRadius: 0.08,
    line: { color: theme.primary, pt: 1.1 },
    fill: { color: theme.panel }
  }, {
    group: "cover-panel"
  });

  canvas.addShape("cover-panel-accent", pres.ShapeType.roundRect, {
    x: 6.28,
    y: 1.08,
    w: 2.26,
    h: 0.16,
    rectRadius: 0.04,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group: "cover-panel"
  });

  canvas.addText("cover-panel-title", "Theme direction", {
    x: 6.22,
    y: 1.46,
    w: 1.6,
    h: 0.18,
    fontFace,
    fontSize: 11,
    bold: true,
    color: theme.primary,
    allCaps: true,
    margin: 0
  }, {
    group: "cover-panel"
  });

  [
    { id: "books", y: 1.84, title: "Light surfaces", body: "Quiet cards, subtle borders, and compact spacing." },
    { id: "blog", y: 2.74, title: "Teal accent", body: "One bright cyan highlight against muted ink colors." },
    { id: "research", y: 3.64, title: "System sans", body: "The same `system-ui` feel, embedded as Helvetica Neue." }
  ].forEach((item) => {
    canvas.addShape(`cover-card-${item.id}`, pres.ShapeType.roundRect, {
      x: 6.2,
      y: item.y,
      w: 2.62,
      h: 0.72,
      rectRadius: 0.06,
      line: { color: theme.light, pt: 1 },
      fill: { color: "FFFFFF" }
    }, {
      group: "cover-panel"
    });

    canvas.addText(`cover-card-title-${item.id}`, item.title, {
      x: 6.4,
      y: item.y + 0.13,
      w: 1.5,
      h: 0.16,
      fontFace,
      fontSize: 12,
      bold: true,
      color: theme.accent,
      margin: 0
    }, {
      group: "cover-panel"
    });

    canvas.addText(`cover-card-body-${item.id}`, item.body, {
      x: 6.4,
      y: item.y + 0.34,
      w: 2.08,
      h: 0.24,
      fontFace,
      fontSize: 9.4,
      color: theme.muted,
      margin: 0
    }, {
      group: "cover-panel"
    });
  });

  canvas.addText("cover-footnote", "Slides are authored as CommonJS modules and assembled by generator/compile.js into a final PDF.", {
    x: 0.72,
    y: 4.38,
    w: 4.9,
    h: 0.36,
    fontFace,
    fontSize: 10.5,
    color: theme.muted,
    margin: 0
  }, {
    group: "cover-footer"
  });

  canvas.addShape("cover-tag", pres.ShapeType.roundRect, {
    x: 0.72,
    y: 3.26,
    w: 1.9,
    h: 0.34,
    rectRadius: 0.08,
    line: { color: theme.primary, pt: 1 },
    fill: { color: "FFFFFF" }
  }, {
    group: "cover-footer"
  });

  canvas.addText("cover-tag-text", "presentation / pdf", {
    x: 0.82,
    y: 3.37,
    w: 1.7,
    h: 0.12,
    fontFace,
    fontSize: 10,
    bold: true,
    color: theme.primary,
    margin: 0
  }, {
    group: "cover-footer"
  });

  canvas.addShape("cover-soft-block", pres.ShapeType.roundRect, {
    x: 0.72,
    y: 2.96,
    w: 4.56,
    h: 0.08,
    rectRadius: 0.03,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group: "cover-footer"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
