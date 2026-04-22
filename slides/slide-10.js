const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { bulletItemHeight, sectionContentFrame, stackInFrame } = require("../generator/layout");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 24,
  title: "My contribution to Aalto"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.96,
    right: 8.3,
    top: 1.96
  });
  const [claimLayout, studentsLayout, infrastructureLayout] = stackInFrame(contentFrame, [
    {
      height: bulletItemHeight({
        body: "This is already visible in my teaching, supervision, and research direction.",
        bodyH: 0.34
      })
    },
    {
      height: bulletItemHeight({
        body: "Supervision is part of research, not separate from it.",
        bodyH: 0.3
      })
    },
    {
      height: bulletItemHeight({
        body: "This supports learning, supervision, and Aalto's connection to practice.",
        bodyH: 0.34
      })
    }
  ], {
    gap: 0.36
  });
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
    x: contentFrame.x,
    y: claimLayout.y,
    w: contentFrame.w,
    title: "I connect research, students, and practice in the agentic/web space.",
    body: "This is already visible in my teaching, supervision, and research direction.",
    bodyH: 0.34,
    titleFontSize: 10.0,
    bodyFontSize: 9.4,
    group: "closing-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-students",
    x: contentFrame.x,
    y: studentsLayout.y,
    w: contentFrame.w,
    title: "Students contribute to real research through supervision.",
    body: "Supervision is part of research, not separate from it.",
    bodyH: 0.3,
    titleFontSize: 10.0,
    bodyFontSize: 9.8,
    group: "closing-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-infrastructure",
    x: contentFrame.x,
    y: infrastructureLayout.y,
    w: contentFrame.w,
    title: "I build educational infrastructure and maintain active external ties.",
    body: "This supports learning, supervision, and Aalto's connection to practice.",
    bodyH: 0.34,
    titleFontSize: 9.8,
    bodyFontSize: 9.4,
    group: "closing-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
