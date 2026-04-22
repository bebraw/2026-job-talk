const {
  addBulletItem,
  addPageBadge,
  addReferenceNote,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 12,
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

  canvas.addText("csed-left-title", "Educational implications", {
    x: 0.62,
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
    x: 0.62,
    y: 2.68,
    w: 4.24,
    title: "Institutions have to adapt, not just students.",
    group: "csed-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "csed-bullet-integrity",
    x: 0.62,
    y: 3.44,
    w: 4.24,
    title: "Integrity is not the only issue.",
    group: "csed-left"
  });

  addBulletItem(canvas, pres, theme, {
    id: "csed-bullet-judgment",
    x: 0.62,
    y: 4.2,
    w: 4.24,
    title: "The goal is responsible technical judgment.",
    group: "csed-left"
  });

  canvas.addText("csed-right-title", "What changes in practice", {
    x: 5.54,
    y: 2.34,
    w: 2.8,
    h: 0.24,
    fontFace,
    fontSize: 12.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-1-title", "Assessment and classroom design", {
    x: 5.54,
    y: 2.68,
    w: 3.18,
    h: 0.22,
    fontFace,
    fontSize: 11.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-1-body", "Flipped learning, oral exams, dialogical assessment.", {
    x: 5.54,
    y: 2.96,
    w: 3.18,
    h: 0.42,
    fontFace,
    fontSize: 10.2,
    color: theme.muted,
    margin: 0,
    group: "csed-right"
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-2-title", "Beyond integrity", {
    x: 5.54,
    y: 3.44,
    w: 3.18,
    h: 0.22,
    fontFace,
    fontSize: 11.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-2-body", "Also trust, over-reliance, bias, and unequal access.", {
    x: 5.54,
    y: 3.72,
    w: 3.18,
    h: 0.42,
    fontFace,
    fontSize: 10.2,
    color: theme.muted,
    margin: 0,
    group: "csed-right"
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-3-title", "Durable skills", {
    x: 5.54,
    y: 4.2,
    w: 3.18,
    h: 0.22,
    fontFace,
    fontSize: 11.2,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "csed-right"
  });

  canvas.addText("csed-practice-3-body", "Critical reading, writing, debugging, reflection.", {
    x: 5.54,
    y: 4.48,
    w: 3.18,
    h: 0.3,
    fontFace,
    fontSize: 10.2,
    color: theme.muted,
    margin: 0,
    group: "csed-right"
  }, {
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
