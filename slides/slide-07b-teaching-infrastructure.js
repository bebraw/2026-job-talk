const {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 19,
  title: "Teaching infrastructure"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "teaching-infrastructure-rule",
    x: 7.18,
    y: 0.68,
    w: 2.1,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "teaching-infrastructure-left-panel", {
    x: 0.62,
    y: 2.06,
    w: 4.36,
    h: 2.92,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "teaching-infrastructure-left"
  });

  canvas.addText("teaching-infrastructure-left-title", "Scaffolding around learning", {
    x: 0.94,
    y: 2.34,
    w: 2.9,
    h: 0.2,
    fontFace,
    fontSize: 11.4,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "teaching-infrastructure-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teaching-infrastructure-bullet-lecture",
    x: 0.94,
    y: 2.72,
    w: 3.72,
    title: "A yearly lecture synthesizes the field.",
    body: "Web application development: the past, the present, the future.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "teaching-infrastructure-bullet-materials",
    x: 0.94,
    y: 3.6,
    w: 3.72,
    title: "Materials extend support beyond the classroom.",
    body: "Writing guide, books, and SurviveJS make the teaching reusable.",
    bodyH: 0.34,
    group: "teaching-infrastructure-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teaching-infrastructure-card-courses",
    x: 5.36,
    y: 2.08,
    w: 3.44,
    h: 0.74,
    title: "Courses",
    body: "TA work in Design of WWW Services and WWW Applications, plus course lead in January 2027.",
    bodyFontSize: 8.2,
    group: "teaching-infrastructure-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teaching-infrastructure-card-course-dev",
    x: 5.36,
    y: 3,
    w: 3.44,
    h: 0.74,
    title: "Course development",
    body: "Assessment redesign, fairer reflection practices, and a special career course in early June.",
    bodyFontSize: 8.2,
    group: "teaching-infrastructure-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "teaching-infrastructure-card-lectures",
    x: 5.36,
    y: 3.92,
    w: 3.44,
    h: 0.74,
    title: "Invited lectures",
    body: "Guest lectures in Turku, Jyväskylä, and Tampere extend the profile beyond Aalto.",
    bodyFontSize: 8.2,
    group: "teaching-infrastructure-right"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
