const {
  addAccentRule,
  addPageBadge,
  addPanel,
  addReferenceNote,
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
    id: "why-mode-search",
    x: 0.82,
    label: "Search and click",
    body: "Users issue queries, open URLs, and synthesize answers themselves. [6]"
  },
  {
    id: "why-mode-agentic",
    x: 3.38,
    label: "Agentic search",
    body: "Systems now browse many pages and return citation-backed reports. [7], [8]"
  },
  {
    id: "why-mode-browser",
    x: 5.94,
    label: "Browser use",
    body: "Agents now click, type, scroll, and navigate websites built for humans. [9], [10]"
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

  canvas.addText("why-shift-title", "How interaction with the web is changing", {
    x: 0.86,
    y: 1.66,
    w: 6.6,
    h: 0.28,
    fontFace,
    fontSize: 15.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "why-shift"
  });

  canvas.addText("why-shift-subtitle", "The change is not only in websites. It is also in who, or what, uses them.", {
    x: 0.86,
    y: 2.02,
    w: 6.9,
    h: 0.2,
    fontFace,
    fontSize: 10.6,
    color: theme.muted,
    margin: 0
  }, {
    group: "why-shift"
  });

  stages.forEach(({ id, x, label, body }, index) => {
    addPanel(canvas, pres, theme, `${id}-panel`, {
      x,
      y: 2.36,
      w: 2.08,
      h: 2.1,
      lineColor: theme.light,
      fillColor: "FFFFFF",
      group: "why-shift"
    });

    canvas.addText(`${id}-label`, label, {
      x: x + 0.18,
      y: 2.62,
      w: 1.72,
      h: 0.24,
      fontFace,
      fontSize: 13.2,
      bold: true,
      color: theme.text,
      margin: 0,
      align: "center"
    }, {
      group: "why-shift"
    });

    canvas.addText(`${id}-body`, body, {
      x: x + 0.18,
      y: 3,
      w: 1.72,
      h: 0.74,
      fontFace,
      fontSize: 9.4,
      color: theme.muted,
      margin: 0,
      align: "center"
    }, {
      group: "why-shift"
    });
  });

  canvas.addShape("why-shift-arrow-1", pres.ShapeType.chevron, {
    x: 2.94,
    y: 3.22,
    w: 0.22,
    h: 0.34,
    line: { color: theme.light, transparency: 100 },
    fill: { color: theme.light }
  }, {
    group: "why-shift"
  });

  canvas.addShape("why-shift-arrow-2", pres.ShapeType.chevron, {
    x: 5.5,
    y: 3.22,
    w: 0.22,
    h: 0.34,
    line: { color: theme.light, transparency: 100 },
    fill: { color: theme.light }
  }, {
    group: "why-shift"
  });

  addReferenceNote(
    canvas,
    theme,
    "Sources: [6]-[10] See references.",
    {
      x: 0.9,
      y: 5.0,
      w: 8,
      h: 0.22,
      group: "why-shift-source"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
