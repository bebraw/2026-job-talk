const { bodyFont, displayFont } = require("./theme");

const liveDemoUrl = "https://french-cheese-shop-demo.survivejs.workers.dev";

function addAccentRule(canvas, pres, theme, options = {}) {
  const {
    id = "accent-rule",
    x = 0.62,
    y = 0.42,
    w = 2.2,
    h = 0.08,
    group = id
  } = options;

  canvas.addShape(id, pres.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.03,
    line: { color: theme.secondary, transparency: 100 },
    fill: { color: theme.secondary }
  }, {
    group
  });
}

function addPanel(canvas, pres, theme, id, options = {}) {
  const {
    x,
    y,
    w,
    h,
    rectRadius = 0.08,
    lineColor = theme.light,
    linePt = 1,
    fillColor = "FFFFFF",
    group = id
  } = options;

  canvas.addShape(id, pres.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius,
    line: { color: lineColor, pt: linePt },
    fill: { color: fillColor }
  }, {
    group,
    role: "panel"
  });
}

function addCompactCard(canvas, pres, theme, options = {}) {
  const {
    id,
    x,
    y,
    w = 2.5,
    h = 0.82,
    title,
    body,
    titleFontSize = 10.6,
    bodyFontSize = 8.7,
    group = id
  } = options;

  addPanel(canvas, pres, theme, `${id}-panel`, {
    x,
    y,
    w,
    h,
    rectRadius: 0.06,
    lineColor: theme.light,
    fillColor: "FFFFFF",
    group
  });

  canvas.addText(`${id}-title`, title, {
    x: x + 0.18,
    y: y + 0.12,
    w: w - 0.34,
    h: 0.2,
    fontFace: bodyFont,
    fontSize: titleFontSize,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group
  });

  if (body) {
    canvas.addText(`${id}-body`, body, {
      x: x + 0.18,
      y: y + 0.32,
      w: w - 0.34,
      h: h - 0.42,
      fontFace: bodyFont,
      fontSize: bodyFontSize,
      color: theme.muted,
      margin: 0
    }, {
      group
    });
  }
}

function addBulletItem(canvas, pres, theme, options = {}) {
  const {
    id,
    x,
    y,
    title,
    body,
    w = 4,
    bodyH = 0.36,
    titleFontSize = 10,
    bodyFontSize = 8.7,
    group = id
  } = options;

  canvas.addShape(`${id}-bullet`, pres.ShapeType.ellipse, {
    x,
    y: y + 0.04,
    w: 0.16,
    h: 0.16,
    line: { color: theme.primary, pt: 1 },
    fill: { color: "FFFFFF" }
  }, {
    group
  });

  canvas.addShape(`${id}-bullet-center`, pres.ShapeType.ellipse, {
    x: x + 0.05,
    y: y + 0.09,
    w: 0.06,
    h: 0.06,
    line: { color: theme.primary, transparency: 100 },
    fill: { color: theme.primary }
  }, {
    group
  });

  canvas.addText(`${id}-title`, title, {
    x: x + 0.26,
    y,
    w: w - 0.26,
    h: 0.28,
    fontFace: bodyFont,
    fontSize: titleFontSize,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group
  });

  if (body) {
    canvas.addText(`${id}-body`, body, {
      x: x + 0.26,
      y: y + 0.26,
      w: w - 0.26,
      h: bodyH,
      fontFace: bodyFont,
      fontSize: bodyFontSize,
      color: theme.muted,
      margin: 0
    }, {
      group
    });
  }
}

function addStatChip(canvas, pres, theme, options = {}) {
  const {
    id,
    x,
    y,
    w = 1.8,
    value,
    label,
    valueFontSize = 14,
    labelFontSize = 8,
    group = id
  } = options;

  addPanel(canvas, pres, theme, `${id}-panel`, {
    x,
    y,
    w,
    h: 0.68,
    rectRadius: 0.06,
    lineColor: theme.primary,
    linePt: 1,
    fillColor: theme.panel,
    group
  });

  canvas.addText(`${id}-value`, value, {
    x: x + 0.14,
    y: y + 0.1,
    w: w - 0.28,
    h: 0.22,
    fontFace: displayFont,
    fontSize: valueFontSize,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group
  });

  canvas.addText(`${id}-label`, label, {
    x: x + 0.14,
    y: y + 0.34,
    w: w - 0.28,
    h: 0.16,
    fontFace: bodyFont,
    fontSize: labelFontSize,
    color: theme.muted,
    margin: 0
  }, {
    group
  });
}

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
    color: theme.accent,
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
    w: 7.8,
    h: 0.64,
    fontFace: displayFont,
    fontSize: 20,
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
      w: 7.9,
      h: 0.5,
      fontFace: bodyFont,
      fontSize: 10.2,
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
    color: theme.muted,
    align,
    margin: 0
  }, {
    group,
    skipOverlap: true
  });
}

module.exports = {
  addAccentRule,
  addBulletItem,
  addCompactCard,
  addPageBadge,
  addPanel,
  addReferenceNote,
  addSectionTitle,
  addStatChip,
  liveDemoUrl
};
