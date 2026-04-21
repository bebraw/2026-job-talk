const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 33,
  title: "References"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Sources",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "references-rule-cont",
    x: 7.72,
    y: 0.68,
    w: 1.56,
    group: "section-header"
  });

  canvas.addText("reference-5", "[5] Vepsäläinen, J., & Juntunen, P. (2026). Artificial intelligence for computer science education - hype or help? ResearchGate preprint.", {
    x: 0.9,
    y: 2.06,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 9.2,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-6", "[6] Fielding, R. T. (2000). Architectural Styles and the Design of Network-based Software Architectures. University of California, Irvine. ics.uci.edu/~fielding/pubs/dissertation/", {
    x: 0.9,
    y: 2.88,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 9.0,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-7", "[7] Healey, M. (2005). Linking research and teaching to benefit student learning. Journal of Geography in Higher Education, 29(2), 183-201. doi.org/10.1080/03098260500130387", {
    x: 0.9,
    y: 3.7,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 9.0,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-8", "[8] Brew, A. (2012). Teaching and research: new relationships and inquiry-based higher education. Higher Education Research & Development, 31(1), 101-114. doi.org/10.1080/07294360.2012.642844", {
    x: 0.9,
    y: 4.52,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 8.7,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
