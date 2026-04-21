const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addPanel,
  addSectionTitle,
  addStatChip
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 8,
  title: "How research informs my teaching"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
    slideConfig.title,
    "Research gives me durable structures for teaching a moving field."
  );

  addAccentRule(canvas, pres, theme, {
    id: "vision-rule",
    x: 7.62,
    y: 0.68,
    w: 1.66,
    group: "section-header"
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-bsc",
    x: 0.62,
    y: 2.02,
    w: 2.02,
    value: "20+",
    label: "BSc theses since 2022",
    valueFontSize: 12.5,
    group: "teach-stats"
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-msc",
    x: 2.84,
    y: 2.02,
    w: 2.02,
    value: "6",
    label: "MSc theses advised",
    valueFontSize: 12.5,
    group: "teach-stats"
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-peda",
    x: 5.06,
    y: 2.02,
    w: 1.92,
    value: "18",
    label: "ECTS of pedagogy",
    valueFontSize: 12.5,
    group: "teach-stats"
  });

  addStatChip(canvas, pres, theme, {
    id: "teach-stat-lecture",
    x: 7.18,
    y: 2.02,
    w: 1.92,
    value: "1",
    label: "Yearly web futures lecture",
    valueFontSize: 12.5,
    group: "teach-stats"
  });

  addPanel(canvas, pres, theme, "teach-left-panel", {
    x: 0.62,
    y: 2.92,
    w: 4.66,
    h: 2.02,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "teach-left"
  });

  canvas.addText("teach-left-title", "Teaching infrastructure", {
    x: 0.94,
    y: 3.2,
    w: 2.3,
    h: 0.2,
    fontFace,
    fontSize: 11.4,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "teach-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-models",
    x: 0.94,
    y: 3.54,
    w: 4.02,
    title: "Build working models students can adapt.",
    body: "Teach fast-moving material without chasing tools.",
    bodyH: 0.28,
    bodyFontSize: 8,
    group: "teach-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teach-bullet-materials",
    x: 0.94,
    y: 4.18,
    w: 4.02,
    title: "Create support around the classroom.",
    body: "Writing guide, books, and SurviveJS.",
    bodyH: 0.26,
    bodyFontSize: 8.2,
    group: "teach-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teach-card-courses",
    x: 5.7,
    y: 2.96,
    w: 3.1,
    h: 0.68,
    title: "Courses",
    body: "TA work in Design of WWW Services and WWW Applications.",
    bodyFontSize: 7.8,
    group: "teach-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teach-card-course-dev",
    x: 5.7,
    y: 3.78,
    w: 3.1,
    h: 0.68,
    title: "Course development",
    body: "Assessment redesign, fairer reflection practices, and a scalable web course.",
    bodyFontSize: 7.8,
    group: "teach-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teach-card-lectures",
    x: 5.7,
    y: 4.6,
    w: 3.1,
    h: 0.68,
    title: "Invited lectures",
    body: "Guest lectures in Turku and Jyväskylä extend the profile beyond Aalto.",
    bodyFontSize: 7.8,
    group: "teach-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
