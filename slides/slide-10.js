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
  title: "Future teaching at Aalto"
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
        titleH: 0.52
      })
    },
    {
      height: bulletItemHeight({
        titleH: 0.34
      })
    },
    {
      height: bulletItemHeight({
        titleH: 0.52
      })
    }
  ], {
    gap: 0.34,
    justify: "top"
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Teaching",
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
    title: "Starting in January 2027, I will teach Designing and Building Scalable Web Applications (CS-E4770).",
    titleH: 0.52,
    titleFontSize: 10.0,
    group: "closing-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-students",
    x: contentFrame.x,
    y: studentsLayout.y,
    w: contentFrame.w,
    title: "In CS-E4770, I will teach web architecture as a core computer science topic, not only as framework practice.",
    titleH: 0.34,
    titleFontSize: 10.0,
    group: "closing-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-infrastructure",
    x: contentFrame.x,
    y: infrastructureLayout.y,
    w: contentFrame.w,
    title: "I will use CS-E4770 to connect courses, projects, theses, and supervision around scalable and agent-facing web systems.",
    titleH: 0.52,
    titleFontSize: 9.6,
    group: "closing-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
