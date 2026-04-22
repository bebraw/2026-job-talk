const {
  addAccentRule,
  addBulletItem,
  addPageBadge,
  addPanel,
  addSectionTitle
} = require("../generator/helpers");
const {
  bulletItemHeight,
  createFrame,
  insetFrame,
  sectionContentFrame,
  titleStackLayout
} = require("../generator/layout");
const { fontFace } = require("../generator/theme");
const { createSlideCanvas } = require("../generator/validation");

const slideConfig = {
  type: "content",
  index: 9,
  title: "Why simplification matters"
};

function createSlide(pres, theme, options = {}) {
  const canvas = createSlideCanvas(pres, slideConfig, options);
  const { slide } = canvas;
  const panelFrame = sectionContentFrame({
    left: 0.78,
    right: 8.78,
    top: 2.12,
    bottom: 5.04
  });
  const panelInset = insetFrame(panelFrame, {
    top: 0.26,
    right: 0.4,
    bottom: 0.34,
    left: 0.32
  });
  const contentLayout = titleStackLayout(createFrame({
    x: panelInset.x,
    y: panelInset.y,
    w: panelInset.w,
    h: panelInset.h
  }), {
    titleHeight: 0.2,
    titleGap: 0.22,
    itemGap: 0.24,
    justify: "top",
    items: [
      {
        height: bulletItemHeight({
          body: "Smaller system models are easier to learn, teach, and maintain.",
          bodyH: 0.34
        })
      },
      {
        height: bulletItemHeight({
          body: "Less machinery can improve payload, startup, and energy use.",
          bodyH: 0.34
        })
      },
      {
        height: bulletItemHeight({
          body: "Structured, linkable systems are easier for humans and agents.",
          bodyH: 0.24
        })
      }
    ]
  });
  slide.background = { color: theme.bg };

  addSectionTitle(
    canvas,
    theme,
    "Highlight 2",
    slideConfig.title
  );

  addAccentRule(canvas, pres, theme, {
    id: "simple-why-rule",
    x: 7.3,
    y: 0.68,
    w: 1.98,
    group: "section-header"
  });

  addPanel(canvas, pres, theme, "simple-why-panel", {
    x: panelFrame.x,
    y: panelFrame.y,
    w: panelFrame.w,
    h: panelFrame.h,
    lineColor: theme.primary,
    linePt: 1.1,
    fillColor: theme.panel,
    group: "simple-why-main"
  });

  canvas.addText("simple-why-title", "Design consequences", {
    x: panelInset.x,
    y: contentLayout.titleY,
    w: panelInset.w,
    h: 0.2,
    fontFace,
    fontSize: 11.6,
    bold: true,
    color: theme.accent,
    margin: 0
  }, {
    group: "simple-why-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-why-bullet-maintain",
    x: panelInset.x,
    y: contentLayout.items[0].y,
    w: panelInset.w,
    title: "Conceptual simplicity helps maintainability.",
    body: "Smaller system models are easier to learn, teach, and maintain.",
    bodyH: 0.34,
    group: "simple-why-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-why-bullet-performance",
    x: panelInset.x,
    y: contentLayout.items[1].y,
    w: panelInset.w,
    title: "Lighter architectures often improve performance.",
    body: "Less machinery can improve payload, startup, and energy use.",
    bodyH: 0.34,
    group: "simple-why-main"
  });

  addBulletItem(canvas, pres, theme, {
    id: "simple-why-bullet-agents",
    x: panelInset.x,
    y: contentLayout.items[2].y,
    w: panelInset.w,
    title: "This also aligns with agentic use.",
    body: "Structured, linkable systems are easier for humans and agents.",
    bodyH: 0.24,
    group: "simple-why-main"
  });

  addPageBadge(canvas, pres, theme, slideConfig.index);
  return canvas.finalize();
}

module.exports = { createSlide, slideConfig };
