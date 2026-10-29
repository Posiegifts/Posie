// Builds sitemap.xml from content.js (every product) and the site's pages.
// Runs automatically on GitHub whenever content.js or a page changes.
const fs = require("fs");
const vm = require("vm");

const SITE = "https://posie.hu";

// Read the product list from content.js
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("content.js", "utf8"), sandbox);
const products = (sandbox.window.POSIE && sandbox.window.POSIE.products) || [];
if (!products.length) throw new Error("No products found in content.js - sitemap not changed.");

// Fixed pages (a page is only listed if its file exists)
const pages = ["", "about.html", "products.html", "craft.html"].filter(
  (p) => p === "" || fs.existsSync(p)
);

const urls = pages.map((p) => `${SITE}/${p}`);
const seen = new Set();
for (const p of products) {
  if (!p.id || seen.has(p.id)) continue;
  seen.add(p.id);
  urls.push(`${SITE}/product.html?id=${encodeURIComponent(p.id)}`);
}

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n") +
  "\n</urlset>\n";

fs.writeFileSync("sitemap.xml", xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
