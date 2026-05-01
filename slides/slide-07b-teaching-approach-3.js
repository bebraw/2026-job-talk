const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addSectionTitle,
  addStatChip,
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 16,
  title: "Research with students",
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(canvas, theme, "Teaching", slideConfig.title);

  addAccentRule(canvas, pres, theme, {
    id: "vision-rule",
    x: 7.62,
    y: 0.68,
    w: 1.66,
    group: "section-header",
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-bsc",
    x: 1.08,
    y: 2.02,
    w: 3.3,
    value: "20+",
    label: "BSc theses since 2022",
    valueFontSize: 14.2,
    group: "teach-stats",
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-msc",
    x: 5.02,
    y: 2.02,
    w: 3.3,
    value: "6",
    label: "MSc theses advised",
    valueFontSize: 14.2,
    group: "teach-stats",
  });

  canvas.addText(
    "teach-main-note",
    "Current advising work covers agents and MCP, hypermedia, microfrontends, cloud migration, and WebAssembly.",
    {
      x: 0.9,
      y: 2.96,
      w: 7.92,
      h: 0.34,
      fontFace,
      fontSize: 10.6,
      color: theme.muted,
      margin: 0,
    },
    {
      group: "teach-main",
    },
  );

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-pyry",
    x: 0.94,
    y: 3.7,
    w: 7.92,
    title:
      "Pyry Pohjalainen (2025): Artificial Intelligence for Web Development: Perspectives from Industry and Literature; published at AAAI Magazine",
    titleH: 0.24,
    titleFontSize: 10.6,
    group: "teach-main",
  });

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-anoop",
    x: 0.94,
    y: 4.24,
    w: 7.92,
    title:
      "Anoop Bidikar (2024): Flagship: Reimagining Stateful Serverless Architectures at the Edge",
    titleH: 0.24,
    titleFontSize: 10.6,
    group: "teach-main",
  });

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-antti",
    x: 0.94,
    y: 4.58,
    w: 7.92,
    title:
      "Antti Nousiainen (2024): The potential of WebAssembly in Edge Computing",
    titleH: 0.24,
    titleFontSize: 10.6,
    group: "teach-main",
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
