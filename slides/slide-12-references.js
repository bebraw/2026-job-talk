const {
  addAccentRule,
  addPageBadge,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 30,
  title: "References"
};

const references = [
  {
    id: 1,
    citation: "Vepsäläinen, J., & Juntunen, P. (2026). Artificial intelligence for computer science education - hype or help? Preprint."
  },
  {
    id: 2,
    citation: "Fielding, R. T. (2000). Architectural Styles and the Design of Network-based Software Architectures. PhD dissertation, UC Irvine.",
    url: "https://ics.uci.edu/~fielding/pubs/dissertation/"
  },
  {
    id: 3,
    citation: "Healey, M. (2005). Linking research and teaching to benefit student learning. Journal of Geography in Higher Education, 29(2), 183-201.",
    url: "https://doi.org/10.1080/03098260500130387"
  },
  {
    id: 4,
    citation: "Brew, A. (2012). Teaching and research: new relationships and inquiry-based higher education. Higher Education Research & Development, 31(1), 101-114.",
    url: "https://doi.org/10.1080/07294360.2012.642844"
  },
  {
    id: 5,
    citation: "Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. Scientific American, 284(5), 34-43.",
    url: "https://lassila.org/publications/2001/SciAm.html"
  },
  {
    id: 6,
    citation: "Gou, B., Huang, Z., Ning, Y., et al. (2025). Mind2Web 2: Evaluating Agentic Search with Agent-as-a-Judge. NeurIPS Datasets & Benchmarks.",
    url: "https://osu-nlp-group.github.io/Mind2Web-2/"
  },
  {
    id: 7,
    citation: "OpenAI. (2025). Introducing deep research.",
    url: "https://openai.com/index/introducing-deep-research/"
  },
  {
    id: 8,
    citation: "OpenAI. (2025). Introducing Operator.",
    url: "https://openai.com/index/introducing-operator/"
  },
  {
    id: 9,
    citation: "Anthropic. (2024). Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku.",
    url: "https://www.anthropic.com/news/3-5-models-and-computer-use"
  },
  {
    id: 10,
    citation: "Google. (2024). Google introduces Gemini 2.0: A new AI model for the agentic era.",
    url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-ai-update-december-2024/"
  }
];

function addReferenceEntry(canvas, theme, ref, { x, y, w }) {
  const lines = [
    {
      text: `[${ref.id}] ${ref.citation}`,
      options: {
        breakLine: Boolean(ref.url)
      }
    }
  ];

  if (ref.url) {
    lines.push({
      text: ref.url,
      options: {
        hyperlink: { url: ref.url, tooltip: ref.url },
        color: theme.primary
      }
    });
  }

  canvas.addText(`reference-${ref.id}`, lines, {
    x,
    y,
    w,
    h: 0.62,
    fontFace,
    fontSize: 7.15,
    color: theme.accent,
    margin: 0,
    breakLine: false,
    valign: "top",
    fit: "shrink"
  }, {
    group: "references-main"
  });
}

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

  const leftColumn = references.slice(0, 5);
  const rightColumn = references.slice(5);
  const startY = 1.74;
  const rowGap = 0.72;

  leftColumn.forEach((ref, index) => {
    addReferenceEntry(canvas, theme, ref, {
      x: 0.82,
      y: startY + index * rowGap,
      w: 3.96
    });
  });

  rightColumn.forEach((ref, index) => {
    addReferenceEntry(canvas, theme, ref, {
      x: 5.12,
      y: startY + index * rowGap,
      w: 3.98
    });
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
