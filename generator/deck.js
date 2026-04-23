const PptxGenJS = require("pptxgenjs");
const { bodyFont, deckMeta, displayFont, theme } = require("./theme");

const slideModules = [
  require("../slides/slide-01"),
  require("../slides/slide-02a-why-scale"),
  require("../slides/slide-02b-why-architectures"),
  require("../slides/slide-02-contents"),
  require("../slides/slide-03-section-part1"),
  require("../slides/slide-03"),
  require("../slides/slide-04a-simplification-1"),
  require("../slides/slide-04b-simplification-2"),
  require("../slides/slide-04"),
  require("../slides/slide-05c-from-research-to-teaching"),
  require("../slides/slide-06a-csed-1"),
  require("../slides/slide-06b-csed-2"),
  require("../slides/slide-06"),
  require("../slides/slide-07"),
  require("../slides/slide-07a-teaching-approach-2"),
  require("../slides/slide-07b-teaching-approach-3"),
  require("../slides/slide-07b-teaching-infrastructure"),
  require("../slides/slide-07c-public-learning"),
  require("../slides/slide-07c-support-tools"),
  require("../slides/slide-09-section-part2"),
  require("../slides/slide-09"),
  require("../slides/slide-10a-goals-1"),
  require("../slides/slide-10b-goals-2"),
  require("../slides/slide-10"),
  require("../slides/slide-11-section-part3"),
  require("../slides/slide-11a-discussion-1"),
  require("../slides/slide-12"),
  require("../slides/slide-12-references")
];

function populatePresentation(pres, theme, options = {}) {
  const reports = [];

  for (const slideModule of slideModules) {
    const result = slideModule.createSlide(pres, theme, options);
    if (result && result.report) {
      reports.push(result.report);
    }
    if (result && Array.isArray(result.reports)) {
      reports.push(...result.reports);
    }
  }

  return { pres, reports };
}

function createPresentation(options = {}) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  pres.author = deckMeta.author;
  pres.company = deckMeta.company;
  pres.subject = deckMeta.subject;
  pres.title = deckMeta.title;
  pres.lang = "en-US";
  pres.theme = {
    headFontFace: displayFont,
    bodyFontFace: bodyFont,
    lang: "en-US"
  };

  return populatePresentation(pres, theme, options);
}

module.exports = {
  createPresentation,
  populatePresentation
};
