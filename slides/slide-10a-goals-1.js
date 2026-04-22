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
  const [claimLayout] = stackInFrame(contentFrame, [
    {
      height: bulletItemHeight({
        body: "This is already visible in my teaching, supervision, and research direction.",
        bodyH: 0.34
      })
    }
  ]);
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

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
