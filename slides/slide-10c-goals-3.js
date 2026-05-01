const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addSectionTitle,
} = require("../generator/helpers");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 24,
  title: "Future teaching at Aalto",
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const bulletX = 0.96;
  const bulletW = 7.34;
  const claimY = 2.26;
  const seminarY = 3.42;
  const careerY = 4.58;
  slide.background = { color: theme.bg };

  addSectionTitle(canvas, theme, "Teaching", slideConfig.title);

  addAccentRule(canvas, pres, theme, {
    id: "closing-rule",
    x: 7.38,
    y: 0.68,
    w: 1.9,
    group: "section-header",
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-claim",
    x: bulletX,
    y: claimY,
    w: bulletW,
    title:
      "Starting in January 2027, I will teach Designing and Building Scalable Web Applications (CS-E4770) and use it to teach web architecture as a core computer science topic, not only as framework practice.",
    titleH: 0.88,
    titleFontSize: 10.0,
    group: "closing-main",
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-seminar",
    x: bulletX,
    y: seminarY,
    w: bulletW,
    title:
      "On 13th of October 2026, I will organize AI meets SDLC at Marsio to connect teaching, research, and industry (sdlcai.org).",
    titleH: 0.52,
    titleFontSize: 10.0,
    hyperlink: {
      url: "https://www.sdlcai.org/",
      tooltip: "https://www.sdlcai.org/",
    },
    group: "closing-main",
  });

  addBulletItem(canvas, pres, theme, {
    id: "closing-bullet-career",
    x: bulletX,
    y: careerY,
    w: bulletW,
    title:
      "In June 2026, I will run CS-E400215, supporting students' career development in computer science.",
    titleH: 0.4,
    titleFontSize: 10.0,
    group: "closing-main",
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
