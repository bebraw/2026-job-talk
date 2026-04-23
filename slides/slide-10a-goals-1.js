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
  index: 22,
  title: "Future teaching at Aalto"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.96,
    right: 8.3,
    top: 2.52
  });
  const [claimLayout] = stackInFrame(contentFrame, [
    {
      height: bulletItemHeight({
        titleH: 0.88
      })
    }
  ], {
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
    title: "Starting in January 2027, I will teach Designing and Building Scalable Web Applications (CS-E4770) and use it to teach web architecture as a core computer science topic, not only as framework practice.",
    titleH: 0.88,
    titleFontSize: 10.0,
    group: "closing-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
