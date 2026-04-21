const { addPageBadge, addSectionTitle } = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 3,
  title: "Why this setup works"
};

function addMetric(canvas, theme, x, y, value, label, id) {
  canvas.addText(`${id}-value`, value, {
    x,
    y,
    w: 1.2,
    h: 0.4,
    fontFace,
    fontSize: 20,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "content-stats-panel"
  });

  canvas.addText(`${id}-label`, label, {
    x,
    y: y + 0.42,
    w: 1.6,
    h: 0.3,
    fontFace,
    fontSize: 10.5,
    color: theme.muted,
    margin: 0
  }, {
    group: "content-stats-panel"
  });
}

function addSignalBar(canvas, pres, theme, x, y, width, label, value, group) {
  canvas.addText(`${group}-label`, label, {
    x,
    y,
    w: 1.3,
    h: 0.22,
    fontFace,
    fontSize: 10,
    color: theme.accent,
    margin: 0
  }, {
    group: "content-chart-panel"
  });

  canvas.addShape(`${group}-track`, pres.ShapeType.roundRect, {
    x: x + 1.38,
    y: y + 0.03,
    w: width,
    h: 0.14,
    rectRadius: 0.04,
    line: { color: theme.light, transparency: 100 },
    fill: { color: theme.light }
  }, {
    group: "content-chart-panel"
  });

  canvas.addShape(`${group}-fill`, pres.ShapeType.roundRect, {
    x: x + 1.38,
    y: y + 0.03,
    w: width * value,
    h: 0.14,
    rectRadius: 0.04,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group: "content-chart-panel"
  });

  canvas.addText(`${group}-value`, `${Math.round(value * 100)}%`, {
    x: x + 3.62,
    y: y - 0.02,
    w: 0.52,
    h: 0.24,
    fontFace,
    fontSize: 10,
    color: theme.muted,
    align: "right",
    margin: 0
  }, {
    group: "content-chart-panel"
  });
}

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Signals",
    slideConfig.title,
    "The deck now borrows the SurviveJS content rhythm: dense information sits inside light utility-style containers with mint and teal doing the work."
  );

  canvas.addShape("content-header-rule", pres.ShapeType.roundRect, {
    x: 7.56,
    y: 0.68,
    w: 1.8,
    h: 0.08,
    rectRadius: 0.03,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group: "content-header"
  });

  canvas.addShape("content-chart-panel", pres.ShapeType.roundRect, {
    x: 0.6,
    y: 2.24,
    w: 4.65,
    h: 2.1,
    rectRadius: 0.08,
    line: { color: theme.light, pt: 1 },
    fill: { color: theme.panel }
  }, {
    group: "content-chart-panel"
  });

  canvas.addText("content-chart-title", "Migration signals", {
    x: 0.88,
    y: 2.5,
    w: 2.2,
    h: 0.24,
    fontFace,
    fontSize: 12,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "content-chart-panel"
  });

  addSignalBar(canvas, pres, theme, 0.88, 2.98, 2.1, "Skill", 0.96, "signal-skill");
  addSignalBar(canvas, pres, theme, 0.88, 3.36, 2.1, "Runtime", 0.88, "signal-runtime");
  addSignalBar(canvas, pres, theme, 0.88, 3.74, 2.1, "Slides", 0.92, "signal-slides");
  addSignalBar(canvas, pres, theme, 0.88, 4.12, 2.1, "Docs", 0.85, "signal-docs");

  canvas.addShape("content-stats-panel", pres.ShapeType.roundRect, {
    x: 5.65,
    y: 2.24,
    w: 3.75,
    h: 2.1,
    rectRadius: 0.08,
    line: { color: theme.primary, pt: 1.2 },
    fill: { color: theme.secondary }
  }, {
    group: "content-stats-panel"
  });

  canvas.addText("content-stats-title", "Key properties", {
    x: 5.95,
    y: 2.46,
    w: 2,
    h: 0.3,
    fontFace,
    fontSize: 13.5,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "content-stats-panel"
  });

  [
    { id: "modules", x: 5.95, y: 2.92, value: "4", label: "Slide modules" },
    { id: "compile", x: 7.35, y: 2.92, value: "1", label: "PDF build path" },
    { id: "theme", x: 5.95, y: 3.68, value: "0", label: "PPTX outputs" },
    { id: "readme", x: 7.35, y: 3.68, value: "1", label: "Quality gate" }
  ].forEach((metric) => {
    canvas.addShape(`metric-card-${metric.id}`, pres.ShapeType.roundRect, {
      x: metric.x - 0.14,
      y: metric.y - 0.1,
      w: 1.22,
      h: 0.7,
      rectRadius: 0.05,
      line: { color: "FFFFFF", pt: 1 },
      fill: { color: "FFFFFF", transparency: 0 }
    }, {
      group: "content-stats-panel"
    });

    addMetric(canvas, theme, metric.x, metric.y, metric.value, metric.label, `metric-${metric.id}`);
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
