const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addPanel,
  addReferenceNote,
  addSectionTitle,
  addCompactCard
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 7,
  title: "AI and computing education"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "CSEd",
    slideConfig.title,
    "AI in CSEd requires institutional, not only individual, adaptation."
  );

  addAccentRule(canvas, pres, theme, {
    id: "teaching-rule",
    x: 7.44,
    y: 0.68,
    w: 1.84,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "csed-left-panel", {
    x: 0.62,
    y: 2.06,
    w: 4.54,
    h: 2.88,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "csed-left"
  });

  canvas.addText("csed-left-title", "Educational implications", {
    x: 0.92,
    y: 2.34,
    w: 2.3,
    h: 0.2,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "csed-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "csed-bullet-institution",
    x: 0.92,
    y: 2.72,
    w: 3.96,
    title: "Institutions must respond proactively.",
    body: "Universities cannot leave adaptation to students alone.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "csed-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "csed-bullet-integrity",
    x: 0.92,
    y: 3.5,
    w: 3.96,
    title: "Integrity is only part of the challenge.",
    body: "Assessment, workload, and skill formation all need redesign.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "csed-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "csed-bullet-judgment",
    x: 0.92,
    y: 4.28,
    w: 3.96,
    title: "The durable goal is judgment.",
    body: "Students should know when to trust, verify, or ignore AI.",
    bodyH: 0.24,
    bodyFontSize: 8.3,
    group: "csed-left"
  });

  addCompactCard(canvas, pres, theme, {
    id: "csed-card-course",
    x: 5.54,
    y: 2.08,
    w: 3.3,
    h: 0.8,
    title: "Course design",
    body: "AI changes assessment and classroom design, not only policy.",
    group: "csed-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "csed-card-supervision",
    x: 5.54,
    y: 3.02,
    w: 3.3,
    h: 0.8,
    title: "Supervision",
    body: "Students need support in using AI critically while building understanding.",
    group: "csed-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "csed-card-curriculum",
    x: 5.54,
    y: 3.96,
    w: 3.3,
    h: 0.8,
    title: "Curriculum",
    body: "The curriculum should foreground architecture, verification, and reflective practice.",
    group: "csed-right"
  });

  addReferenceNote(
    canvas,
    theme,
    "Vepsäläinen & Juntunen (2026), “Artificial intelligence for computer science education - hype or help?”",
    {
      x: 0.72,
      y: 5.04,
      w: 6.9,
      h: 0.18,
      group: "csed-reference"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
