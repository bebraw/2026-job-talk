const {
  addBulletItem,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const {
  bulletItemHeight,
  sectionContentFrame,
  stackInFrame
} = require("../generator/layout");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 19,
  title: "Supervision"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const contentFrame = sectionContentFrame({
    left: 0.62,
    right: 8.46,
    top: 2.34,
    bottom: 4.58
  });
  const layouts = stackInFrame(contentFrame, [
    {
      height: bulletItemHeight({
        body: "The volume already reveals recurring student and industry themes.",
        bodyH: 0.3
      })
    },
    {
      height: bulletItemHeight({
        body: "Current topics include agentic AI, AIOps, and AI-supported web engineering.",
        bodyH: 0.3
      })
    },
    {
      height: bulletItemHeight({
        body: "I mentor actively and push students to build their own model of the topic.",
        bodyH: 0.3
      })
    }
  ], {
    gap: 0.28,
    justify: "top"
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Supervision",
    slideConfig.title
  );

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-volume",
    x: 0.62,
    y: layouts[0].y,
    w: 7.84,
    title: "The scale of supervision already matters.",
    body: "The volume already reveals recurring student and industry themes.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-mentoring",
    x: 0.62,
    y: layouts[1].y,
    w: 7.84,
    title: "Teaching and supervision feed research back.",
    body: "Current topics include agentic AI, AIOps, and AI-supported web engineering.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "supervision-bullet-bridge",
    x: 0.62,
    y: layouts[2].y,
    w: 7.84,
    title: "This is where research, curriculum, and industry meet.",
    body: "I mentor actively and push students to build their own model of the topic.",
    bodyH: 0.3,
    bodyFontSize: 8.4,
    group: "supervision-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
