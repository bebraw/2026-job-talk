const {
  addAccentRule,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 3,
  title: "Why this matters now"
};

const stages = [
  {
    id: "why-mode-development",
    x: 0.72,
    label: "Agentic development",
    body: "Agents increasingly help code, modify, and maintain web applications."
  },
  {
    id: "why-mode-agentic",
    x: 3.28,
    label: "Agentic use",
    body: "Systems browse, compare sources, and operate websites on the user's behalf. [1]-[4]"
  },
  {
    id: "why-mode-browser",
    x: 5.84,
    label: "Agent-ready design",
    body: "Web applications need clearer semantics, workflows, and system boundaries."
  }
];

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Motivation",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "why-rule",
    x: 8,
    y: 0.68,
    w: 1.28,
    group: "section-header"
  });

  canvas.addText("why-shift-title", "Agents now shape the web as builders, users, and a design pressure on architecture.", {
    x: 0.86,
    y: 1.78,
    w: 7.7,
    h: 0.48,
    fontFace,
    fontSize: 12.8,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "why-shift"
  });

  stages.forEach(({ id, x, label, body }, index) => {
    addPanel(canvas, pres, theme, `${id}-panel`, {
      x,
      y: 2.52,
      w: 2.24,
      h: 1.72,
      lineColor: theme.light,
      fillColor: "FFFFFF",
      group: "why-shift"
    });

    canvas.addText(`${id}-label`, label, {
      x: x + 0.22,
      y: 2.76,
      w: 1.8,
      h: 0.3,
      fontFace,
      fontSize: 12.6,
      bold: true,
      color: theme.text,
      margin: 0,
      align: "left"
    }, {
      group: "why-shift"
    });

    canvas.addText(`${id}-body`, body, {
      x: x + 0.22,
      y: 3.16,
      w: 1.8,
      h: 0.66,
      fontFace,
      fontSize: 9.1,
      color: theme.muted,
      margin: 0,
      align: "left"
    }, {
      group: "why-shift"
    });
  });

  canvas.addShape("why-shift-arrow-1", pres.ShapeType.chevron, {
    x: 3.02,
    y: 3.28,
    w: 0.22,
    h: 0.34,
    line: { color: theme.light, transparency: 100 },
    fill: { color: theme.light }
  }, {
    group: "why-shift"
  });

  canvas.addShape("why-shift-arrow-2", pres.ShapeType.chevron, {
    x: 5.58,
    y: 3.28,
    w: 0.22,
    h: 0.34,
    line: { color: theme.light, transparency: 100 },
    fill: { color: theme.light }
  }, {
    group: "why-shift"
  });
  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
