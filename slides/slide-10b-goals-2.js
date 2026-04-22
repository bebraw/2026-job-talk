const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 23,
  title: "My contribution to Aalto"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Contribution",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "closing-rule",
    x: 7.38,
    y: 0.68,
    w: 1.9,
    group: "section-header"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-claim",
    x: 0.78,
    y: 2.06,
    w: 4.44,
    title: "I already connect research, students, and practice at Aalto.",
    titleFontSize: 10.6,
    group: "closing-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-students",
    x: 0.78,
    y: 2.86,
    w: 4.44,
    title: "Student projects can contribute to a wider research agenda.",
    body: "Supervision is part of research, not separate from it.",
    bodyH: 0.3,
    titleFontSize: 9.8,
    bodyFontSize: 9.8,
    group: "closing-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "closing-card-space",
    x: 5.72,
    y: 2.08,
    w: 3.08,
    h: 0.76,
    title: "Agentic/web space",
    body: "This deepens one technical area within a broad department.",
    bodyFontSize: 8.8,
    group: "closing-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "closing-card-profile",
    x: 5.72,
    y: 3,
    w: 3.08,
    h: 0.76,
    title: "Technical depth",
    group: "closing-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "closing-card-community",
    x: 5.72,
    y: 3.92,
    w: 3.08,
    h: 0.76,
    title: "External ties",
    body: "I am an active part of the developer community in Finland.",
    bodyFontSize: 8.8,
    group: "closing-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
