/*
  Posie - script.js
  Builds the header, footer, gift cards and gift pages from the lists in content.js.
  You normally don't need to edit this file.
*/
(function () {
  "use strict";

  var C = window.POSIE;
  var page = document.body.getAttribute("data-page");

  // ---------- small helpers ----------

  // h("a", {href: "x", text: "Hello"}, child1, child2) creates an element safely.
  function h(tag, attrs) {
    var el = document.createElement(tag);
    var a = attrs || {};
    Object.keys(a).forEach(function (k) {
      if (k === "class") el.className = a[k];
      else if (k === "text") el.textContent = a[k];
      else el.setAttribute(k, a[k]);
    });
    for (var i = 2; i < arguments.length; i++) {
      var kid = arguments[i];
      if (kid === null || kid === undefined) continue;
      el.appendChild(typeof kid === "string" ? document.createTextNode(kid) : kid);
    }
    return el;
  }

  function $(selector) { return document.querySelector(selector); }

  // A pastel "sample photo" picture, used until you add real photos.
  var PALETTE = ["#ECE6D8", "#EADFDC", "#DFE6DD", "#E1E1E9", "#EFE3D6", "#DCE5EA"];
  function placeholder(seed, number) {
    var bg = PALETTE[Math.abs(seed) % PALETTE.length];
    var petals = "";
    for (var k = 0; k < 6; k++) {
      petals += '<ellipse cx="0" cy="-48" rx="26" ry="46" transform="rotate(' + k * 60 + ')"/>';
    }
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">' +
      '<rect width="400" height="500" fill="' + bg + '"/>' +
      '<g fill="#3B3835" fill-opacity="0.14" transform="translate(200 220)">' + petals +
      '<circle r="18" fill-opacity="0.28"/></g>' +
      '<text x="200" y="430" text-anchor="middle" font-family="sans-serif" font-size="18" ' +
      'fill="#3B3835" fill-opacity="0.7">sample photo ' + number + "</text></svg>";
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function imagesFor(product) {
    var index = C.products.indexOf(product);
    if (product.images && product.images.length) {
      return product.images.map(function (src, n) {
        return { src: src, alt: product.name + ", photo " + (n + 1) };
      });
    }
    return [0, 1, 2].map(function (n) {
      return { src: placeholder(index + n, n + 1), alt: product.name + ", sample photo " + (n + 1) };
    });
  }

  function productUrl(product) {
    return "product.html?id=" + encodeURIComponent(product.id);
  }

  function card(product) {
    var first = imagesFor(product)[0];
    var link = h("a", { class: "card", href: productUrl(product) },
      h("span", { class: "card-img" },
        h("img", { src: first.src, alt: first.alt, loading: "lazy", width: "400", height: "500" })
      ),
      h("span", { class: "card-label" },
        h("span", { class: "card-name", text: product.name }),
        h("span", { class: "card-short", text: product.short }),
        product.price ? h("span", { class: "card-price", text: product.price }) : null
      )
    );
    return h("li", {}, link);
  }

  function fillGrid(list, products) {
    list.textContent = "";
    products.forEach(function (p) { list.appendChild(card(p)); });
  }

  function mailtoFor(subject) {
    return "mailto:" + C.email + "?subject=" + encodeURIComponent(subject);
  }

  // ---------- header and footer ----------

  function buildHeader() {
    var target = $("#site-header");
    if (!target) return;
    var links = [
      { label: "Gifts", href: "products.html", id: "gifts" },
      { label: "About", href: "about.html", id: "about" },
      { label: "Contact", href: "#contact", id: "contact" }
    ];
    var ul = h("ul", { class: "nav" });
    links.forEach(function (l) {
      var a = h("a", { href: l.href, text: l.label });
      if (l.id === page || (l.id === "gifts" && page === "product")) a.setAttribute("aria-current", "page");
      ul.appendChild(h("li", {}, a));
    });
    target.appendChild(
      h("div", { class: "wrap" },
        C.logo
          ? h("a", { class: "brand brand-logo", href: "index.html", "aria-label": C.brand + " home" },
              h("img", { src: C.logo, alt: C.brand }))
          : h("a", { class: "brand", href: "index.html", text: C.brand }),
        h("p", { class: "brand-by", style: "margin: -6px 0 0; font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase;", text: "by Kriszta Boros" }),
        h("nav", { "aria-label": "Main" }, ul)
      )
    );
  }

  function buildFooter() {
    var target = $("#site-footer");
    if (!target) return;

    // The social links are shown as a centred row of buttons (name only).
    var socials = h("div", { class: "hero-actions", style: "margin-top: 28px;" });
    C.socials.forEach(function (s) {
      if (!s.url) return;
      socials.appendChild(
        h("a", { class: "btn btn-outline", href: s.url, target: "_blank", rel: "noopener", text: s.name })
      );
    });
    if (C.email) socials.appendChild(h("a", { class: "btn", href: mailtoFor("Hello Posie"), text: "Email Posie" }));

    target.appendChild(
      h("div", { class: "wrap", style: "text-align: center;" },
        h("h2", { text: "Where you can find me" }),
        h("p", { style: "margin-inline: auto;", text: "If you like my work, feel free to get in touch with me on social media. I'd love to hear from you." }),
        socials,
        h("p", { class: "fine", text: "\u00a9 " + new Date().getFullYear() + " Posie by Kriszta Boros" })
      )
    );
  }

  // ---------- pages ----------

  function homePage() {
    var hp = $("#hero-photos");
    if (hp) {
      for (var n = 0; n < 3; n++) {
        var src = (C.heroPhotos && C.heroPhotos[n]) || placeholder(n + 3, n + 1);
        hp.appendChild(h("li", {}, h("img", { src: src, alt: "", width: "400", height: "500" })));
      }
    }

    var list = $("#featured");
    if (list) fillGrid(list, C.products.slice(0, 3));

    // Clicking the hanging tag makes it swing again.
    var flower = $(".tag-flower");
    if (flower && C.tagPhoto) {
      flower.src = C.tagPhoto;
      flower.classList.add("tag-photo");
    }

    var hang = $("#hang");
    if (hang) {
      hang.addEventListener("click", function () {
        hang.classList.remove("swing");
        void hang.offsetWidth; // restart the animation
        hang.classList.add("swing");
      });
    }
  }

  function giftsPage() {
    var list = $("#all-gifts");
    var filters = $("#filters");
    if (!list) return;

    // A gift can belong to several groups: "category" in content.js may be one name or a list of names.
    function groupsOf(p) { return [].concat(p.category || []); }

    // The order of the filter buttons comes from "categories" in content.js.
    var categories = (C.categories && C.categories.length) ? C.categories.slice() : [];
    if (!categories.length) {
      C.products.forEach(function (p) {
        groupsOf(p).forEach(function (c) { if (categories.indexOf(c) === -1) categories.push(c); });
      });
    }

    function show(category) {
      var chosen = category === "All" ? C.products : C.products.filter(function (p) { return groupsOf(p).indexOf(category) !== -1; });
      fillGrid(list, chosen);
      Array.prototype.forEach.call(filters.querySelectorAll("button"), function (b) {
        b.setAttribute("aria-pressed", b.textContent === category ? "true" : "false");
      });
    }

    if (filters && categories.length > 1) {
      ["All"].concat(categories).forEach(function (c) {
        var b = h("button", { class: "chip", type: "button", "aria-pressed": "false", text: c });
        b.addEventListener("click", function () { show(c); });
        filters.appendChild(h("li", {}, b));
      });
      show("All");
    } else {
      if (filters) filters.remove();
      fillGrid(list, C.products);
    }
  }

  function productPage() {
    var root = $("#product-root");
    if (!root) return;

    var id = new URLSearchParams(window.location.search).get("id");
    var product = C.products.filter(function (p) { return p.id === id; })[0];

    if (!product) {
      document.title = "Gift not found | " + C.brand;
      root.appendChild(
        h("div", { class: "empty" },
          h("h1", { text: "We couldn't find that gift" }),
          h("p", { text: "It may have been renamed or removed." }),
          h("a", { class: "btn", href: "products.html", text: "See all gifts" })
        )
      );
      return;
    }

    document.title = product.name + " | " + C.brand;

    var images = imagesFor(product);
    var main = h("img", { src: images[0].src, alt: images[0].alt });
    var thumbs = h("div", { class: "thumbs" });

    images.forEach(function (img, n) {
      var b = h("button", { class: "thumb", type: "button", "aria-label": "Show photo " + (n + 1) },
        h("img", { src: img.src, alt: "" })
      );
      b.setAttribute("aria-current", n === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        main.src = img.src;
        main.alt = img.alt;
        Array.prototype.forEach.call(thumbs.children, function (t) { t.setAttribute("aria-current", "false"); });
        b.setAttribute("aria-current", "true");
      });
      thumbs.appendChild(b);
    });

    var gallery = h("div", {}, h("div", { class: "gallery-main" }, main));
    if (images.length > 1) gallery.appendChild(thumbs);

    var info = h("div", {}, h("h1", { text: product.name }));
    if (product.price) info.appendChild(h("p", { class: "product-price", text: product.price }));
    (product.description || []).forEach(function (para) { info.appendChild(h("p", { text: para })); });

    if (product.details && product.details.length) {
      var dl = h("dl", { class: "facts" });
      product.details.forEach(function (row) {
        dl.appendChild(h("dt", { text: row[0] }));
        dl.appendChild(h("dd", { text: row[1] }));
      });
      info.appendChild(dl);
    }

    var firstSocial = C.socials.filter(function (s) { return s.url; })[0];
    var href = C.email ? mailtoFor("About: " + product.name) : (firstSocial ? firstSocial.url : "index.html#contact");
    info.appendChild(h("a", { class: "btn", href: href, text: (!C.email && firstSocial) ? "Contact me on " + firstSocial.name : "Contact me" }));
    info.appendChild(h("p", { class: "note", text: "Like this one? Come and tell me about it on social media." }));

    root.appendChild(h("div", { class: "product" }, gallery, info));

    var more = C.products.filter(function (p) { return p !== product; }).slice(0, 3);
    var moreList = $("#more-gifts");
    if (moreList) fillGrid(moreList, more);
  }

  // Pictures marked data-placeholder show a sample photo until you swap in a real one.
  function fillPlaceholders() {
    Array.prototype.forEach.call(document.querySelectorAll("img[data-placeholder]"), function (img) {
      img.src = placeholder(parseInt(img.getAttribute("data-placeholder"), 10) || 0, "");
    });
  }

  buildHeader();
  buildFooter();
  fillPlaceholders();
  if (page === "home") homePage();
  if (page === "gifts") giftsPage();
  if (page === "product") productPage();
})();
