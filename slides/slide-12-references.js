const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 32,
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

  canvas.addText("reference-1", "[1] Vepsäläinen, J. (2025). Emergence of hybrid rendering models in web application development. Aalto University. urn.fi/URN:ISBN:978-952-64-2486-6", {
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

  canvas.addText("reference-2", "[2] Vepsäläinen, J. (2026). Revisiting Hypermedia, The Forgotten Web Application Development Paradigm. TechRxiv preprint. doi.org/10.36227/techrxiv.177078147.70240970/v1", {
    x: 0.9,
    y: 2.88,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 9.2,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-3", "[3] Vepsäläinen, J., Hellas, A., & Vuorimaa, P. (2023). The Rise of Disappearing Frameworks in Web Development. ICWE 2023. doi.org/10.1007/978-3-031-34444-2_23", {
    x: 0.9,
    y: 3.7,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 9.2,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  canvas.addText("reference-4", "[4] Vepsäläinen, J., Hellas, A., & Vuorimaa, P. (2023). The State of Disappearing Frameworks in 2023. WEBIST 2023. doi.org/10.5220/0012174000003584", {
    x: 0.9,
    y: 4.52,
    w: 7.56,
    h: 0.34,
    fontFace,
    fontSize: 9.2,
    color: theme.accent,
    margin: 0
  }, {
    group: "references-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
