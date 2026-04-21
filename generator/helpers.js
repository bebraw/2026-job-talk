const { bodyFont, displayFont } = require("./theme");

const liveDemoUrl = "https://french-cheese-shop-demo.survivejs.workers.dev";

function addPageBadge(canvas, pres, theme, number) {
  canvas.addShape("page-badge-pill", pres.ShapeType.roundRect, {
    x: 9.05,
    y: 5.21,
    w: 0.55,
    h: 0.22,
    rectRadius: 0.08,
    line: { color: theme.primary, pt: 1 },
    fill: { color: "FFFFFF" }
  }, {
    group: "page-badge"
  });

  canvas.addText("page-badge-label", String(number).padStart(2, "0"), {
    x: 9.05,
    y: 5.21,
    w: 0.55,
    h: 0.22,
    fontFace: bodyFont,
    fontSize: 10,
    bold: true,
    color: theme.primary,
    align: "center",
    valign: "middle",
    margin: 0
  }, {
    group: "page-badge"
  });
}

function addSectionTitle(canvas, theme, eyebrow, title, body) {
  canvas.addText("section-eyebrow", eyebrow, {
    x: 0.62,
    y: 0.56,
    w: 3.8,
    h: 0.26,
    fontFace: bodyFont,
    fontSize: 10.5,
    bold: true,
    color: theme.muted,
    charSpace: 0.8,
    allCaps: true,
    margin: 0
  }, {
    group: "section-header"
  });

  canvas.addText("section-title", title, {
    x: 0.62,
    y: 0.84,
    w: 6.6,
    h: 0.64,
    fontFace: displayFont,
    fontSize: 22,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "section-header"
  });

  if (body) {
    canvas.addText("section-body", body, {
      x: 0.64,
      y: 1.34,
      w: 6.15,
      h: 0.46,
      fontFace: bodyFont,
      fontSize: 11,
      color: theme.muted,
      margin: 0
    }, {
      group: "section-header"
    });
  }
}

function addReferenceNote(canvas, theme, text, options = {}) {
  const {
    x = 0.72,
    y = 5.06,
    w = 4.9,
    h = 0.18,
    align = "left",
    group = "reference-note"
  } = options;

  canvas.addText(`${group}-text`, text, {
    x,
    y,
    w,
    h,
    fontFace: bodyFont,
    fontSize: 9.2,
    color: theme.secondary,
    align,
    margin: 0
  }, {
    group,
    skipOverlap: true
  });
}

module.exports = {
  addPageBadge,
  addReferenceNote,
  addSectionTitle,
  liveDemoUrl
};
