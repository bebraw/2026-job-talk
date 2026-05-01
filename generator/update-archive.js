const fs = require("fs");
const path = require("path");
const { outputBaseName, pdfFile } = require("./output-config");

const archiveDir = path.join(__dirname, "..", "archive");
const archiveFile = path.join(archiveDir, `${outputBaseName}.pdf`);

function main() {
  if (!fs.existsSync(pdfFile)) {
    throw new Error(`Build output not found: ${pdfFile}`);
  }

  fs.mkdirSync(archiveDir, { recursive: true });
  fs.copyFileSync(pdfFile, archiveFile);
  process.stdout.write(`${archiveFile}\n`);
}

try {
  main();
} catch (error) {
  process.stderr.write(`${error.stack || error}\n`);
  process.exitCode = 1;
}
