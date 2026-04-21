const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const diagrams = [
  {
    input: path.join(__dirname, "..", "slides", "assets", "diagrams", "research-teaching-loop.dot"),
    output: path.join(__dirname, "..", "slides", "assets", "diagrams", "research-teaching-loop.png"),
    engine: "dot"
  },
  {
    input: path.join(__dirname, "..", "slides", "assets", "diagrams", "agentic-hypermedia.dot"),
    output: path.join(__dirname, "..", "slides", "assets", "diagrams", "agentic-hypermedia.png"),
    engine: "dot"
  }
];

function renderDiagram({ input, output, engine }) {
  fs.mkdirSync(path.dirname(output), { recursive: true });

  const args = [
    `-K${engine}`,
    "-Tpng:cairo",
    "-Gdpi=180",
    input,
    "-o",
    output
  ];

  const result = spawnSync("dot", args, {
    encoding: "utf8"
  });

  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `Failed to render diagram: ${path.basename(input)}`);
  }
}

for (const diagram of diagrams) {
  renderDiagram(diagram);
}
