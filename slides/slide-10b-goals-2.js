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
  const [claimLayout, studentsLayout] = stackInFrame(contentFrame, [
    {
      height: bulletItemHeight({
        titleH: 0.52
      })
    },
    {
      height: bulletItemHeight({
        titleH: 0.34
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
    title: "I would strengthen Aalto's profile in web architecture, agent-facing systems, and modern software practice.",
    titleH: 0.52,
    titleFontSize: 10.2,
    group: "closing-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-students",
    x: contentFrame.x,
    y: studentsLayout.y,
    w: contentFrame.w,
    title: "I already build research through student work in my topic areas.",
    titleH: 0.34,
    titleFontSize: 10.4,
    group: "closing-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
