const fs = require("fs");
const PDFDocument = require("pdfkit");
const { bodyFont, displayFont } = require("./theme");

const POINTS_PER_INCH = 72;
const SLIDE_WIDTH = 10 * POINTS_PER_INCH;
const SLIDE_HEIGHT = 5.625 * POINTS_PER_INCH;

const embeddedFonts = {
  bodyBold: {
    family: "HelveticaNeue-Bold",
    path: "/System/Library/Fonts/HelveticaNeue.ttc"
  },
  bodyRegular: {
    family: "HelveticaNeue",
    path: "/System/Library/Fonts/HelveticaNeue.ttc"
  },
  displayBold: {
    family: "HelveticaNeue-Bold",
    path: "/System/Library/Fonts/HelveticaNeue.ttc"
  },
  displayRegular: {
    family: "HelveticaNeue-Medium",
    path: "/System/Library/Fonts/HelveticaNeue.ttc"
  }
};

function toPoints(value) {
  return Number(value || 0) * POINTS_PER_INCH;
}

function normalizeTextRuns(text, options = {}) {
  const transform = options.allCaps
    ? (value) => String(value).toUpperCase()
    : (value) => String(value);

  if (Array.isArray(text)) {
    return text.map((item) => {
      if (typeof item === "string") {
        return {
          options: {},
          text: transform(item)
        };
      }

      if (item && typeof item === "object" && "text" in item) {
        return {
          options: { ...(item.options || {}) },
          text: transform(item.text)
        };
      }

      return {
        options: {},
        text: ""
      };
    });
  }

  return [
    {
      options: {},
      text: transform(text)
    }
  ];
}

function normalizeText(text, options = {}) {
  return normalizeTextRuns(text, options)
    .map((item) => item.text)
    .join("");
}

function mapFont(fontFace, bold) {
  const face = String(fontFace || "").toLowerCase();
  const isDisplayFace = face === String(displayFont).toLowerCase() || face.includes("didot");
  if (isDisplayFace) {
    return bold ? "displayBold" : "displayRegular";
  }
  return bold ? "bodyBold" : "bodyRegular";
}

function registerEmbeddedFonts(doc) {
  for (const [alias, font] of Object.entries(embeddedFonts)) {
    if (!fs.existsSync(font.path)) {
      throw new Error(`Missing font file for ${alias}: ${font.path}`);
    }
    doc.registerFont(alias, font.path, font.family);
  }
}

function createTextMeasurementDoc() {
  const doc = new PDFDocument({
    autoFirstPage: false,
    margin: 0,
    size: [SLIDE_WIDTH, SLIDE_HEIGHT]
  });

  registerEmbeddedFonts(doc);
  doc.addPage({
    margin: 0,
    size: [SLIDE_WIDTH, SLIDE_HEIGHT]
  });

  return {
    doc,
    dispose() {
      doc.removeAllListeners();
      doc.end();
    }
  };
}

function measureTextBlock(doc, text, options) {
  const width = toPoints(options.w);
  const fontSize = Number(options.fontSize || 12);
  const content = normalizeText(text, options);
  const fontName = mapFont(options.fontFace || bodyFont, options.bold);

  doc.save();
  doc.font(fontName);
  doc.fontSize(fontSize);

  const textOptions = {
    align: options.align || "left",
    characterSpacing: Number(options.charSpace || 0),
    lineGap: 0,
    width
  };

  const measuredHeight = doc.heightOfString(content, textOptions);
  const measuredWidth = doc.widthOfString(content, {
    characterSpacing: textOptions.characterSpacing
  });

  doc.restore();

  return {
    content,
    fontName,
    fontSize,
    measuredHeight,
    measuredWidth,
    textOptions
  };
}

module.exports = {
  createTextMeasurementDoc,
  mapFont,
  measureTextBlock,
  normalizeText,
  normalizeTextRuns,
  registerEmbeddedFonts,
  toPoints
};
