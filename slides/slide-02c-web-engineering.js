const {
  addPageBadge,
  addPanel,
  addReferenceNote,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 4,
  title: "Web engineering belongs in software engineering"
};

const stats = [
  {
    id: "dn-web-saas",
    x: 0.9,
    value: "40.9%",
    label: "enterprise developers in Web/SaaS",
    citation: "[5]"
  },
  {
    id: "so-js",
    x: 3.66,
    value: "66%",
    label: "developers using JavaScript",
    citation: "[6]"
  },
  {
    id: "so-html-css",
    x: 6.42,
    value: "62%",
    label: "developers using HTML/CSS",
    citation: "[6]"
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

  addPanel(canvas, pres, theme, "web-se-claim-panel", {
    x: 0.86,
    y: 1.7,
    w: 7.88,
    h: 1.18,
    rectRadius: 0.08,
    lineColor: theme.accent,
    fillColor: theme.accent,
    group: "web-se-claim"
  });

  canvas.addText("web-se-claim", "The web remains one of software engineering's largest practice environments.", {
    x: 1.12,
    y: 1.92,
    w: 7.36,
    h: 0.62,
    fontFace,
    fontSize: 17.0,
    bold: true,
    color: "FFFFFF",
    margin: 0,
    align: "center"
  }, {
    group: "web-se-claim"
  });

  stats.forEach(({ id, x, value, label, citation }) => {
    const group = `web-se-stat-${id}`;
    addPanel(canvas, pres, theme, `${group}-panel`, {
      x,
      y: 3.16,
      w: 2.28,
      h: 1.22,
      lineColor: theme.light,
      fillColor: "FFFFFF",
      group
    });

    canvas.addText(`${group}-value`, value, {
      x: x + 0.18,
      y: 3.36,
      w: 1.92,
      h: 0.4,
      fontFace,
      fontSize: 24.0,
      bold: true,
      color: theme.accent,
      margin: 0,
      align: "center"
    }, {
      group
    });

    canvas.addText(`${group}-label`, `${label} ${citation}`, {
      x: x + 0.18,
      y: 3.9,
      w: 1.92,
      h: 0.3,
      fontFace,
      fontSize: 8.9,
      color: theme.muted,
      margin: 0,
      align: "center"
    }, {
      group
    });
  });

  addReferenceNote(
    canvas,
    theme,
    "References: Developer Nation 29th survey, Q1 2025; Stack Overflow Developer Survey 2025.",
    {
      x: 1.0,
      y: 5.12,
      w: 7.5,
      h: 0.18,
      align: "center",
      group: "web-se-reference"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
