const {
  addAccentRule,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "closing",
  index: 27,
  title: "Conclusion"
};

const strengths = [
  {
    id: "research",
    x: 0.72,
    title: "Research",
    body: "web architecture\nagent-facing systems",
    icon: "network"
  },
  {
    id: "teaching",
    x: 3.88,
    title: "Teaching",
    body: "scalable web apps\nAI-aware practice",
    icon: "loop"
  },
  {
    id: "community",
    x: 7.04,
    title: "Reach",
    body: "tools, students\nindustry communities",
    icon: "bridge"
  }
];

function addNetworkIcon(canvas, pres, theme, x, y, group) {
  const nodes = [
    { x: x + 0.08, y: y + 0.34 },
    { x: x + 0.42, y: y + 0.12 },
    { x: x + 0.76, y: y + 0.34 },
    { x: x + 0.42, y: y + 0.58 }
  ];

  [
    [0, 1],
    [1, 2],
    [0, 3],
    [2, 3],
    [1, 3]
  ].forEach(([from, to], index) => {
    const start = nodes[from];
    const end = nodes[to];
    canvas.addShape(`conclusion-network-line-${group}-${index}`, pres.ShapeType.line, {
      x: start.x,
      y: start.y,
      w: end.x - start.x,
      h: end.y - start.y,
      line: { color: theme.primary, pt: 1.2 }
    }, {
      group
    });
  });

  nodes.forEach((node, index) => {
    canvas.addShape(`conclusion-network-node-${group}-${index}`, pres.ShapeType.ellipse, {
      x: node.x - 0.055,
      y: node.y - 0.055,
      w: 0.11,
      h: 0.11,
      line: { color: theme.primary, pt: 1 },
      fill: { color: "FFFFFF" }
    }, {
      group
    });
  });
}

function addLoopIcon(canvas, pres, theme, x, y, group) {
  canvas.addShape(`conclusion-loop-left-${group}`, pres.ShapeType.arc, {
    x: x + 0.08,
    y: y + 0.1,
    w: 0.72,
    h: 0.54,
    adjustPoint: 0.38,
    line: { color: theme.primary, pt: 2 }
  }, {
    group
  });

  canvas.addShape(`conclusion-loop-arrow-${group}`, pres.ShapeType.chevron, {
    x: x + 0.66,
    y: y + 0.28,
    w: 0.14,
    h: 0.18,
    rotate: 90,
    line: { color: theme.primary, transparency: 100 },
    fill: { color: theme.primary }
  }, {
    group
  });

  canvas.addShape(`conclusion-loop-dot-a-${group}`, pres.ShapeType.ellipse, {
    x: x + 0.22,
    y: y + 0.25,
    w: 0.12,
    h: 0.12,
    line: { color: theme.primary, transparency: 100 },
    fill: { color: theme.primary }
  }, {
    group
  });

  canvas.addShape(`conclusion-loop-dot-b-${group}`, pres.ShapeType.ellipse, {
    x: x + 0.5,
    y: y + 0.25,
    w: 0.12,
    h: 0.12,
    line: { color: theme.primary, transparency: 100 },
    fill: { color: theme.primary }
  }, {
    group
  });
}

function addBridgeIcon(canvas, pres, theme, x, y, group) {
  canvas.addShape(`conclusion-bridge-left-${group}`, pres.ShapeType.line, {
    x: x + 0.1,
    y: y + 0.58,
    w: 0,
    h: -0.34,
    line: { color: theme.primary, pt: 2 }
  }, {
    group
  });

  canvas.addShape(`conclusion-bridge-right-${group}`, pres.ShapeType.line, {
    x: x + 0.78,
    y: y + 0.58,
    w: 0,
    h: -0.34,
    line: { color: theme.primary, pt: 2 }
  }, {
    group
  });

  canvas.addShape(`conclusion-bridge-deck-${group}`, pres.ShapeType.line, {
    x: x + 0.1,
    y: y + 0.42,
    w: 0.68,
    h: 0,
    line: { color: theme.primary, pt: 2 }
  }, {
    group
  });

  canvas.addShape(`conclusion-bridge-arc-${group}`, pres.ShapeType.arc, {
    x: x + 0.12,
    y: y + 0.2,
    w: 0.64,
    h: 0.42,
    adjustPoint: 0.45,
    line: { color: theme.primary, pt: 1.5 }
  }, {
    group
  });
}

function addStrengthIcon(canvas, pres, theme, icon, x, y, group) {
  if (icon === "network") {
    addNetworkIcon(canvas, pres, theme, x, y, group);
    return;
  }

  if (icon === "loop") {
    addLoopIcon(canvas, pres, theme, x, y, group);
    return;
  }

  addBridgeIcon(canvas, pres, theme, x, y, group);
}

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Closing",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "discussion-rule",
    x: 7.5,
    y: 0.68,
    w: 1.78,
    group: "section-header"
  });

  canvas.addText("conclusion-framing", "What I bring to the department", {
    x: 0.76,
    y: 1.54,
    w: 7.7,
    h: 0.34,
    fontFace,
    fontSize: 15.2,
    bold: true,
    color: theme.accent,
    margin: 0,
    align: "center"
  }, {
    group: "conclusion-main"
  });

  strengths.forEach(({ id, x, title, body, icon }) => {
    const group = `conclusion-${id}`;
    addPanel(canvas, pres, theme, `${group}-panel`, {
      x,
      y: 2.08,
      w: 2.24,
      h: 1.82,
      lineColor: theme.light,
      fillColor: "FFFFFF",
      group
    });

    addStrengthIcon(canvas, pres, theme, icon, x + 0.68, 2.28, group);

    canvas.addText(`${group}-title`, title, {
      x: x + 0.18,
      y: 3.02,
      w: 1.88,
      h: 0.28,
      fontFace,
      fontSize: 13.0,
      bold: true,
      color: theme.accent,
      margin: 0,
      align: "center"
    }, {
      group
    });

    canvas.addText(`${group}-body`, body, {
      x: x + 0.2,
      y: 3.34,
      w: 1.84,
      h: 0.36,
      fontFace,
      fontSize: 9.2,
      color: theme.muted,
      margin: 0,
      align: "center"
    }, {
      group
    });
  });

  canvas.addShape("conclusion-arrow-left", pres.ShapeType.chevron, {
    x: 3.14,
    y: 2.86,
    w: 0.16,
    h: 0.34,
    line: { color: theme.light, transparency: 100 },
    fill: { color: theme.light }
  }, {
    group: "conclusion-flow",
    skipOverlap: true
  });

  canvas.addShape("conclusion-arrow-right", pres.ShapeType.chevron, {
    x: 6.3,
    y: 2.86,
    w: 0.16,
    h: 0.34,
    line: { color: theme.light, transparency: 100 },
    fill: { color: theme.light }
  }, {
    group: "conclusion-flow",
    skipOverlap: true
  });

  addPanel(canvas, pres, theme, "conclusion-value-panel", {
    x: 1.18,
    y: 4.34,
    w: 7.28,
    h: 0.76,
    rectRadius: 0.08,
    lineColor: theme.accent,
    fillColor: theme.accent,
    group: "conclusion-value"
  });

  canvas.addText("conclusion-value", "Research-based teaching, tested in real web practice, connected to developer communities.", {
    x: 1.42,
    y: 4.48,
    w: 6.8,
    h: 0.42,
    fontFace,
    fontSize: 12.4,
    bold: true,
    color: "FFFFFF",
    margin: 0,
    align: "center"
  }, {
    group: "conclusion-value"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
