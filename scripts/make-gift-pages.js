// Builds one ready-made page per gift: gifts/<id>.html
// Why: product.html fills itself in with JavaScript, so Google first sees 98 identical,
// almost empty pages. These pages already contain the gift's name, photo and description.
// Runs automatically on GitHub whenever content.js or a page changes - you never edit them.
// The design comes from product.html, so a change there shows up on every gift page.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE = "https://posie.hu";
const OUT = "gifts";

// Read the product list from content.js
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("content.js", "utf8"), sandbox);
const C = sandbox.window.POSIE || {};
const products = C.products || [];
if (!products.length) throw new Error("No products found in content.js - gift pages not changed.");
const brand = C.brand || "Posie";

const template = fs.readFileSync("product.html", "utf8");

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function absolute(src) {
  if (!src) return SITE + "/images/og-image.jpg";
  if (/^https?:\/\//.test(src)) return src;
  return SITE + "/" + String(src).replace(/^\.?\//, "");
}

function summary(p) {
  const text = p.short || (p.description || [])[0] || "A handmade piece from " + brand + ".";
  const clean = String(text).replace(/\s+/g, " ").trim();
  return clean.length > 155 ? clean.slice(0, 152).replace(/\s+\S*$/, "") + "..." : clean;
}

// The same markup script.js builds, so the page looks right even before JavaScript runs.
function productHtml(p) {
  const images = (p.images || []).filter(Boolean);
  let gallery = "";
  if (images.length) {
    gallery = '<div class="gallery-main"><img src="' + esc(images[0]) + '" alt="' + esc(p.name + ", photo 1") + '"></div>';
    if (images.length > 1) {
      gallery += '<div class="thumbs">' + images.map(function (src, n) {
        return '<button class="thumb" type="button" aria-label="Show photo ' + (n + 1) + '" aria-current="' + (n === 0) + '">' +
          '<img src="' + esc(src) + '" alt=""></button>';
      }).join("") + "</div>";
    }
  }
  let info = "<h1>" + esc(p.name) + "</h1>";
  if (p.price) info += '<p class="product-price">' + esc(p.price) + "</p>";
  (p.description || []).forEach(function (para) { info += "<p>" + esc(para) + "</p>"; });
  if (p.details && p.details.length) {
    info += '<dl class="facts">' + p.details.map(function (row) {
      return "<dt>" + esc(row[0]) + "</dt><dd>" + esc(row[1]) + "</dd>";
    }).join("") + "</dl>";
  }
  return '<div class="product"><div>' + gallery + "</div><div>" + info + "</div></div>";
}

// Replaces exactly one marker in the template; stops with an error if product.html changed shape.
function swap(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error("Could not find " + label + " in product.html - gift pages not changed.");
  return html.replace(pattern, replacement);
}

function pageFor(p) {
  const url = SITE + "/" + OUT + "/" + p.id + ".html";
  const title = esc(p.name + " | " + brand);
  const desc = esc(summary(p));
  const image = esc(absolute((p.images || [])[0]));
  let html = template;

  // <base href="/"> keeps every relative link (style.css, images/, products.html) working from the gifts folder.
  html = swap(html, /<meta charset="utf-8">/i,
    '<meta charset="utf-8">\n<base href="/">\n<link rel="canonical" href="' + esc(url) + '">', "the charset line");
  html = swap(html, /<title>[^<]*<\/title>/i, "<title>" + title + "</title>", "the title");
  html = swap(html, /(<meta name="description" content=")[^"]*(")/i, "$1" + desc + "$2", "the description");
  html = swap(html, /(<meta property="og:type" content=")[^"]*(")/i, "$1product$2", "og:type");
  html = swap(html, /(<meta property="og:title" content=")[^"]*(")/i, "$1" + title + "$2", "og:title");
  html = swap(html, /(<meta property="og:description" content=")[^"]*(")/i, "$1" + desc + "$2", "og:description");
  html = swap(html, /(<meta property="og:image" content=")[^"]*(")/i, "$1" + image + "$2", "og:image");
  html = swap(html, /(<meta name="twitter:title" content=")[^"]*(")/i, "$1" + title + "$2", "twitter:title");
  html = swap(html, /(<meta name="twitter:description" content=")[^"]*(")/i, "$1" + desc + "$2", "twitter:description");
  html = swap(html, /(<meta name="twitter:image" content=")[^"]*(")/i, "$1" + image + "$2", "twitter:image");
  // The product photo is not 1200x630 like the default picture, so drop those size hints.
  html = html.replace(/\n?<meta property="og:image:(width|height)" content="[^"]*">/gi, "");
  html = html.replace('<meta property="og:image" content="' + image + '">',
    '<meta property="og:image" content="' + image + '">\n<meta property="og:url" content="' + esc(url) + '">');
  html = swap(html, /<body data-page="product">/i,
    '<body data-page="product" data-product-id="' + esc(p.id) + '">', "the body tag");
  html = swap(html, /href="#main"/i, 'href="' + OUT + "/" + esc(p.id) + '.html#main"', "the skip link");
  html = swap(html, /<div id="product-root"><\/div>/i,
    '<div id="product-root">' + productHtml(p) + "</div>", "the product box");
  html = html.replace(/\n?<noscript>[\s\S]*?<\/noscript>/i, "");
  return html;
}

// Start from an empty folder so pages of removed gifts disappear too.
fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) {
  if (f.endsWith(".html")) fs.unlinkSync(path.join(OUT, f));
}

const seen = new Set();
let count = 0;
for (const p of products) {
  if (!p.id || seen.has(p.id)) continue;
  if (!/^[A-Za-z0-9_-]+$/.test(p.id)) {
    console.log("Skipped (id has unusual characters): " + p.id);
    continue;
  }
  seen.add(p.id);
  fs.writeFileSync(path.join(OUT, p.id + ".html"), pageFor(p));
  count++;
}
console.log(count + " gift pages written to " + OUT + "/");
