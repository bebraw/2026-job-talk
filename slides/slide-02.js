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
  index: 4,
  title: "Why this matters now"
};

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

  const cards = [
    {
      id: "why-card-architecture",
      x: 0.82,
      title: "Architecture",
      body: "The same interface now has to work for people and for systems that browse or act through it."
    },
    {
      id: "why-card-ai",
      x: 3.38,
      title: "AI",
      body: "The browser is becoming an execution surface for delegated work, not only a reading surface."
    },
    {
      id: "why-card-education",
      x: 5.94,
      title: "Education",
      body: "Students need models for judging what should be delegated, structured, and verified."
    }
  ];

  cards.forEach(({ id, x, title, body }) => {
    addPanel(canvas, pres, theme, `${id}-panel`, {
      x,
      y: 2.14,
      w: 2.08,
      h: 1.86,
      lineColor: theme.light,
      fillColor: "FFFFFF",
      group: "why-timeline"
    });

    canvas.addText(`${id}-title`, title, {
      x: x + 0.22,
      y: 2.38,
      w: 1.64,
      h: 0.28,
      fontFace,
      fontSize: 16.2,
      bold: true,
      color: theme.accent,
      margin: 0,
      align: "center"
    }, {
      group: "why-timeline"
    });

    canvas.addText(`${id}-body`, body, {
      x: x + 0.18,
      y: 2.86,
      w: 1.72,
      h: 0.82,
      fontFace,
      fontSize: 9.2,
      color: theme.muted,
      margin: 0,
      align: "center"
    }, {
      group: "why-timeline"
    });
  });

  canvas.addText("why-agents-claim", "The web is no longer only something people read and click through.", {
    x: 0.98,
    y: 4.44,
    w: 7.34,
    h: 0.54,
    fontFace,
    fontSize: 14.2,
    bold: true,
    color: theme.accent,
    margin: 0,
    align: "center"
  }, {
    group: "why-timeline"
  });

  canvas.addText("why-agents-bridge", "It is increasingly something agents search, synthesize, and act through on our behalf.", {
    x: 1.18,
    y: 4.98,
    w: 6.96,
    h: 0.2,
    fontFace,
    fontSize: 10.2,
    color: theme.muted,
    margin: 0,
    align: "center"
  }, {
    group: "why-timeline"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
