const {
  addAccentRule,
  addPageBadge,
  addSectionTitle,
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const {
  createTextMeasurementDoc,
  mapFont,
  measureTextBlock,
  toPoints,
} = require("../generator/text-metrics");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 28,
  title: "References",
};

const references = [
  {
    id: 1,
    citation:
      "Vepsäläinen, J., & Juntunen, P. (2026). Artificial intelligence for computer science education - hype or help? Preprint.",
    url: "https://www.researchgate.net/publication/400516716_Artificial_intelligence_for_computer_science_education_-_hype_or_help",
  },
  {
    id: 2,
    citation:
      "Fielding, R. T. (2000). Architectural Styles and the Design of Network-based Software Architectures. PhD dissertation, UC Irvine.",
    url: "https://ics.uci.edu/~fielding/pubs/dissertation/",
  },
  {
    id: 3,
    citation:
      "Healey, M. (2005). Linking research and teaching to benefit student learning. Journal of Geography in Higher Education, 29(2), 183-201.",
    url: "https://doi.org/10.1080/03098260500130387",
  },
  {
    id: 4,
    citation:
      "Brew, A. (2012). Teaching and research: new relationships and inquiry-based higher education. Higher Education Research & Development, 31(1), 101-114.",
    url: "https://doi.org/10.1080/07294360.2012.642844",
  },
  {
    id: 5,
    citation:
      "Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. Scientific American, 284(5), 34-43.",
    url: "https://lassila.org/publications/2001/SciAm.html",
  },
  {
    id: 6,
    citation:
      "Gou, B., Huang, Z., Ning, Y., et al. (2025). Mind2Web 2: Evaluating Agentic Search with Agent-as-a-Judge. NeurIPS Datasets & Benchmarks.",
    url: "https://osu-nlp-group.github.io/Mind2Web-2/",
  },
  {
    id: 7,
    citation: "OpenAI. (2025). Introducing deep research.",
    url: "https://openai.com/index/introducing-deep-research/",
  },
  {
    id: 8,
    citation: "OpenAI. (2025). Introducing Operator.",
    url: "https://openai.com/index/introducing-operator/",
  },
  {
    id: 9,
    citation:
      "Anthropic. (2024). Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku.",
    url: "https://www.anthropic.com/news/3-5-models-and-computer-use",
  },
  {
    id: 10,
    citation:
      "Google. (2024). Google introduces Gemini 2.0: A new AI model for the agentic era.",
    url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-ai-update-december-2024/",
  },
];

function tokenizeUrlForWrap(value) {
  const chunks = [];
  let current = "";

  for (const char of value) {
    current += char;
    if ("/_?&=-".includes(char)) {
      chunks.push(current);
      current = "";
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

function splitTokenToWidth(doc, token, maxWidth) {
  const parts = [];
  let current = "";

  for (const char of token) {
    const next = current + char;
    if (!current || doc.widthOfString(next) <= maxWidth) {
      current = next;
      continue;
    }

    parts.push(current);
    current = char;
  }

  if (current) {
    parts.push(current);
  }

  return parts;
}

function wrapUrlLabel(doc, url, width, fontSize) {
  const visibleUrl = url.replace(/^https?:\/\//, "");
  const maxWidth = toPoints(width);
  const lines = [];
  let line = "";

  doc.save();
  doc.font(mapFont(fontFace, false));
  doc.fontSize(fontSize);

  for (let chunk of tokenizeUrlForWrap(visibleUrl)) {
    if (!line) {
      if (doc.widthOfString(chunk) <= maxWidth) {
        line = chunk;
        continue;
      }

      for (const piece of splitTokenToWidth(doc, chunk, maxWidth)) {
        if (doc.widthOfString(piece) < maxWidth) {
          line = piece;
          continue;
        }
        lines.push(piece);
      }
      continue;
    }

    if (doc.widthOfString(line + chunk) <= maxWidth) {
      line += chunk;
      continue;
    }

    lines.push(line);

    if (doc.widthOfString(chunk) <= maxWidth) {
      line = chunk;
      continue;
    }

    line = "";
    for (const piece of splitTokenToWidth(doc, chunk, maxWidth)) {
      if (doc.widthOfString(piece) < maxWidth) {
        line = piece;
        continue;
      }
      lines.push(piece);
    }
  }

  if (line) {
    lines.push(line);
  }

  doc.restore();
  return lines.join("\n");
}

function addReferenceEntry(canvas, theme, ref, { x, y, w, measurementDoc }) {
  const pointsPerInch = toPoints(1);
  const citationOptions = {
    x,
    y,
    w,
    fontFace,
    fontSize: 6.8,
    color: theme.accent,
    margin: 0,
    breakLine: false,
    valign: "top",
    fit: "shrink",
  };
  const citationMeasurement = measureTextBlock(
    measurementDoc,
    `[${ref.id}] ${ref.citation}`,
    citationOptions,
  );
  const citationHeight = Math.max(
    citationMeasurement.measuredHeight / pointsPerInch,
    0.12,
  );

  canvas.addText(
    `reference-${ref.id}`,
    `[${ref.id}] ${ref.citation}`,
    {
      ...citationOptions,
      h: citationHeight + 0.01,
    },
    {
      group: "references-main",
    },
  );

  if (ref.url) {
    const linkGap = 0.03;
    canvas.addText(
      `reference-${ref.id}-link`,
      wrapUrlLabel(measurementDoc, ref.url, w, 5.1),
      {
        x,
        y: y + citationHeight + linkGap,
        w,
        h: 0.32,
        fontFace,
        fontSize: 5.1,
        color: theme.muted,
        hyperlink: { url: ref.url, tooltip: ref.url },
        margin: 0,
        valign: "top",
        fit: "shrink",
      },
      {
        group: "references-main",
      },
    );
  }
}

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const measurement = createTextMeasurementDoc();
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(canvas, theme, "Sources", slideConfig.title);

  addAccentRule(canvas, pres, theme, {
    id: "references-rule",
    x: 7.72,
    y: 0.68,
    w: 1.56,
    group: "section-header",
  });

  const leftColumn = references.slice(0, 5);
  const rightColumn = references.slice(5);
  const startY = 1.74;
  const rowGap = 0.7;

  leftColumn.forEach((ref, index) => {
    addReferenceEntry(canvas, theme, ref, {
      x: 0.82,
      y: startY + index * rowGap,
      w: 3.96,
      measurementDoc: measurement.doc,
    });
  });

  rightColumn.forEach((ref, index) => {
    addReferenceEntry(canvas, theme, ref, {
      x: 5.12,
      y: startY + index * rowGap,
      w: 3.98,
      measurementDoc: measurement.doc,
    });
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  const result = canvas.finalize();
  measurement.dispose();
  return result;
}

module.exports = { createSlide, slideConfig };
