const { createPdfPresentation } = require("./pdf-renderer");
const { normalizeTextRuns } = require("./text-metrics");

const REQUEST_TIMEOUT_MS = 15000;
const MAX_CONCURRENCY = 4;

function extractUrl(hyperlink) {
  if (!hyperlink) {
    return null;
  }

  if (typeof hyperlink === "string") {
    const trimmed = hyperlink.trim();
    return trimmed || null;
  }

  if (typeof hyperlink === "object" && typeof hyperlink.url === "string") {
    const trimmed = hyperlink.url.trim();
    return trimmed || null;
  }

  return null;
}

function collectTextUrls(text, options) {
  const urls = [];
  const topLevelUrl = extractUrl(options.hyperlink);

  if (topLevelUrl) {
    urls.push(topLevelUrl);
  }

  for (const run of normalizeTextRuns(text)) {
    const runUrl = extractUrl(run.options && run.options.hyperlink);
    if (runUrl) {
      urls.push(runUrl);
    }
  }

  return urls;
}

function collectDeckLinks(pres) {
  const byUrl = new Map();

  pres.slides.forEach((slide, slideIndex) => {
    slide.operations.forEach((operation) => {
      if (operation.kind !== "text") {
        return;
      }

      const urls = collectTextUrls(operation.text, operation.options);
      for (const url of urls) {
        const entry = byUrl.get(url) || {
          slides: new Set(),
          url
        };

        entry.slides.add(slideIndex + 1);
        byUrl.set(url, entry);
      }
    });
  });

  return Array.from(byUrl.values())
    .map((entry) => ({
      slides: Array.from(entry.slides).sort((left, right) => left - right),
      url: entry.url
    }))
    .sort((left, right) => left.url.localeCompare(right.url));
}

function shouldRetryWithGet(status) {
  return [405, 408, 429, 500, 501, 502, 503, 504].includes(status);
}

async function request(url, method) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: method === "GET"
        ? { Range: "bytes=0-0" }
        : undefined,
      method,
      redirect: "manual",
      signal: controller.signal
    });

    const redirectedUrl = response.headers.get("location");
    const finalUrl = redirectedUrl
      ? new URL(redirectedUrl, url).toString()
      : response.url;

    return {
      finalUrl,
      method,
      ok: response.status < 400,
      status: response.status
    };
  } catch (error) {
    return {
      error,
      method,
      ok: false
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function validateUrl(url) {
  const headResult = await request(url, "HEAD");
  if (headResult.ok || !headResult.status || !shouldRetryWithGet(headResult.status)) {
    return headResult;
  }

  return request(url, "GET");
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;

  async function runNext() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => runNext());
  await Promise.all(workers);
  return results;
}

async function main() {
  const { pres } = createPdfPresentation();
  const links = collectDeckLinks(pres);

  if (!links.length) {
    process.stdout.write("Link validation passed: no hyperlinks found.\n");
    return;
  }

  const results = await mapLimit(links, MAX_CONCURRENCY, async (entry) => ({
    ...entry,
    result: await validateUrl(entry.url)
  }));

  const failures = [];
  const warnings = [];

  for (const entry of results) {
    const location = `slides ${entry.slides.join(", ")}`;
    if (entry.result.ok) {
      const resolvedSuffix = entry.result.finalUrl && entry.result.finalUrl !== entry.url
        ? ` -> ${entry.result.finalUrl}`
        : "";
      process.stdout.write(`[ok] ${entry.url} (${location}, ${entry.result.method}${resolvedSuffix})\n`);
      continue;
    }

    if (entry.result.status === 401 || entry.result.status === 403) {
      warnings.push(entry);
      process.stdout.write(`[warn] ${entry.url} (${location}): HTTP ${entry.result.status} via ${entry.result.method}\n`);
      continue;
    }

    const reason = entry.result.status
      ? `HTTP ${entry.result.status} via ${entry.result.method}`
      : entry.result.error
        ? entry.result.error.message
        : "Unknown error";
    failures.push(entry);
    process.stderr.write(`[fail] ${entry.url} (${location}): ${reason}\n`);
  }

  if (!failures.length) {
    const warningSuffix = warnings.length
      ? ` with ${warnings.length} warning(s) for access-restricted links`
      : "";
    process.stdout.write(`Link validation passed for ${results.length} URL(s)${warningSuffix}.\n`);
    return;
  }

  process.exitCode = 1;
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exitCode = 1;
});
