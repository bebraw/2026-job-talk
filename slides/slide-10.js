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
  index: 29,
  title: "Goals as a tenure-track lecturer"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Goals",
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
    id: "closing-bullet-courses",
    x: 0.78,
    y: 2.06,
    w: 4.44,
    title: "Build research-led teaching around changing architectures.",
    body: "Teach students to reason about systems, not just tools.",
    bodyH: 0.3,
    titleFontSize: 10.6,
    bodyFontSize: 9.8,
    group: "closing-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-supervision",
    x: 0.78,
    y: 2.86,
    w: 4.44,
    title: "Build a supervision pipeline between research and industry.",
    body: "Use thesis work to connect research and industry.",
    bodyH: 0.3,
    titleFontSize: 10.6,
    bodyFontSize: 9.8,
    group: "closing-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-infrastructure",
    x: 0.78,
    y: 3.66,
    w: 4.44,
    title: "Build educational infrastructure around learning.",
    body: "Build guides and tools students can use outside courses.",
    bodyH: 0.34,
    titleFontSize: 10.6,
    bodyFontSize: 9.8,
    group: "closing-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "closing-card-curriculum",
    x: 5.72,
    y: 2.08,
    w: 3.08,
    h: 0.76,
    title: "Curriculum focus",
    body: "Architecture, AI-aware development, and reflective practice.",
    group: "closing-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "closing-card-profile",
    x: 5.72,
    y: 3,
    w: 3.08,
    h: 0.76,
    title: "Research profile",
    body: "Work at the intersection of web architecture, AI, and education.",
    group: "closing-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "closing-card-community",
    x: 5.72,
    y: 3.92,
    w: 3.08,
    h: 0.76,
    title: "Impact and service",
    body: "I build guides and tools students can use outside courses.",
    group: "closing-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
