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
  index: 16,
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
    slideConfig.title
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
    y: 2.02,
    w: 4.54,
    h: 2.78,
    lineColor: theme.light,
    fillColor: theme.panel,
    group: "csed-left"
  });

  canvas.addText("csed-left-title", "Educational implications", {
    x: 0.92,
    y: 2.34,
    w: 2.3,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
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
    body: "Assessment and skill formation need redesign.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "csed-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "csed-bullet-judgment",
    x: 0.92,
    y: 4.16,
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
    y: 2.04,
    w: 3.3,
    h: 0.76,
    title: "Course design",
    body: "AI changes assessment and classroom design.",
    group: "csed-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "csed-card-supervision",
    x: 5.54,
    y: 2.94,
    w: 3.3,
    h: 0.76,
    title: "Supervision",
    body: "Students need help using AI critically.",
    group: "csed-right"
  });

  addCompactCard(canvas, pres, theme, {
    id: "csed-card-curriculum",
    x: 5.54,
    y: 3.84,
    w: 3.3,
    h: 0.76,
    title: "Curriculum",
    body: "Foreground architecture, verification, and reflection.",
    group: "csed-right"
  });

  addReferenceNote(
    canvas,
    theme,
    "[1] Vepsäläinen, J., & Juntunen, P. (2026). Artificial intelligence for computer science education - hype or help?",
    {
      x: 0.72,
      y: 4.96,
      w: 7.9,
      h: 0.18,
      group: "csed-reference"
    }
  );

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
