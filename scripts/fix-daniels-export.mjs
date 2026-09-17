import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../public/originais/daniels-barber/", import.meta.url));
const basePath = "/originais/daniels-barber";
const siteOrigin = "https://zoryon-web.duduwwl.chatgpt.site";
const changed = [];

async function fixDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await fixDirectory(path);
      continue;
    }
    if (!/\.(html|txt|js)$/.test(entry.name)) continue;

    const before = await readFile(path, "utf8");
    let after = before;
    if (entry.name.endsWith(".js")) {
      // The archived Next.js client bundle was built without its hosting subpath.
      after = after.replaceAll(
        'e.i(49309).default.env.NEXT_PUBLIC_BASE_PATH??""',
        `"${basePath}"`,
      );
    } else {
      after = after.replace(
        /(?<![A-Za-z0-9_-])\/(logo-transparent-v2|hero-barber|daniel-portrait-v2|vinicius-portrait-v2|og)\.png/g,
        `${basePath}/$1.png`,
      );
      after = after.replace(
        /(?<![A-Za-z0-9_-])\/(agendar|gerencia)(?=[/#"\\])/g,
        `${basePath}/$1`,
      );
      after = after.replace(
        /(?<![A-Za-z0-9_-])\/#(inicio|contato|barbearia)/g,
        `${basePath}/#$1`,
      );
      after = after.replaceAll('href="/"', `href="${basePath}/"`);
      after = after.replaceAll('"href":"/"', `"href":"${basePath}/"`);
      after = after.replaceAll('\\"href\\":\\"/\\"', `\\"href\\":\\"${basePath}/\\"`);
      after = after.replaceAll(
        "https://originais/daniels-barber.duduwwl.chatgpt.site/og.png",
        `${siteOrigin}${basePath}/og.png`,
      );
      after = after.replaceAll(
        "https://originais/daniels-barber.duduwwl.chatgpt.site/",
        `${siteOrigin}${basePath}/`,
      );
    }
    if (after !== before) {
      await writeFile(path, after, "utf8");
      changed.push(path);
    }
  }
}

await fixDirectory(root);
console.log(`Corrected ${changed.length} Daniel's Barber export files.`);
