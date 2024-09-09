"use strict";

const mainContent = document.querySelector(".main-content");

async function loadContent(page) {
  try {
    const res = await fetch(`content/${page}.html`);
    const data = await res.text();
    mainContent.innerHTML = data;
    loadScript(page);
    loadCss(page);
  } catch (err) {
    console.log(err);
  }
}

function loadCss(page) {
  const href = `styles/${page}.css`;
  const existingLink = Array.from(
    document.head.getElementsByTagName("link")
  ).find((link) => link.href.includes(href));

  if (!existingLink) {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = href;
    document.head.appendChild(style);
  } else {
    console.log(`${page}.css is already loaded`);
  }
}

function loadScript(page) {
  const existingScript = document.querySelector(
    `script[src='scripts/${page}.js']`
  );
  if (existingScript) {
    existingScript.remove();
  }
  const script = document.createElement("script");
  script.src = `scripts/${page}.js`;
  script.type = "text/javascript";

  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
  const page = getPageNameFromUrl();
  loadContent(page);
});

function getPageNameFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") || "landing";
}
