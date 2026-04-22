const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 34,
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
    id: "references-rule",
    x: 7.72,
    y: 0.68,
    w: 1.56,
    group: "section-header"
  });

  canvas.addText("reference-1", "[1] Vepsäläinen, J., & Juntunen, P. (2026). Artificial intelligence for computer science education - hype or help? ResearchGate preprint.", {
    x: 0.9,
    y: 1.92,
    w: 7.56,
    h: 0.4,
    fontFace,
    fontSize: 8.8,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-2", "[2] Fielding, R. T. (2000). Architectural Styles and the Design of Network-based Software Architectures. University of California, Irvine. ics.uci.edu/~fielding/pubs/dissertation/", {
    x: 0.9,
    y: 2.62,
    w: 7.56,
    h: 0.4,
    fontFace,
    fontSize: 8.7,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-3", "[3] Healey, M. (2005). Linking research and teaching to benefit student learning. Journal of Geography in Higher Education, 29(2), 183-201. doi.org/10.1080/03098260500130387", {
    x: 0.9,
    y: 3.32,
    w: 7.56,
    h: 0.4,
    fontFace,
    fontSize: 8.7,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-4", "[4] Brew, A. (2012). Teaching and research: new relationships and inquiry-based higher education. Higher Education Research & Development, 31(1), 101-114. doi.org/10.1080/07294360.2012.642844", {
    x: 0.9,
    y: 4.02,
    w: 7.56,
    h: 0.4,
    fontFace,
    fontSize: 8.6,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-5", "[5] Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. Scientific American, 284(5), 34-43. lassila.org/publications/2001/SciAm.html", {
    x: 0.9,
    y: 4.72,
    w: 7.56,
    h: 0.4,
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
