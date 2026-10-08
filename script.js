(() => {
  const content = window.HUB_CONTENT ?? { projects: [], resources: [] };
  const safeUrl = (value) => {
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:"].includes(url.protocol) ? url : null;
    } catch { return null; }
  };
  const externalAttrs = (url) => url.origin !== window.location.origin ? ' target="_blank" rel="noopener noreferrer"' : "";
  const renderItems = (targetId, items, kind) => {
    const target = document.getElementById(targetId);
    if (!Array.isArray(items) || items.length === 0) {
      target.innerHTML = `<article class="empty-state"><span class="empty-icon" aria-hidden="true">✳</span><div><h3>${kind === "project" ? "The first project is on its way." : "A few useful things, coming soon."}</h3><p>${kind === "project" ? "This space is ready for work worth sharing." : "Study guides, flashcards, and other resources will live here."}</p></div><span class="empty-tag">MORE SOON</span></article>`;
      return;
    }
    target.innerHTML = items.map((item) => {
      const href = safeUrl(item.url);
      const link = href ? `<a class="card-link" href="${href.href}"${externalAttrs(href)}>Open ${kind === "project" ? "project" : "resource"} <span aria-hidden="true">↗</span></a>` : "";
      const tag = item.tag ? `<span class="card-tag">${item.tag}</span>` : "";
      return `<article class="work-card ${kind}-card"><div class="card-top">${tag}<span class="card-arrow" aria-hidden="true">↗</span></div><h3>${item.title}</h3><p>${item.description}</p>${link}</article>`;
    }).join("");
  };
  renderItems("project-list", content.projects, "project");
  renderItems("resource-list", content.resources, "resource");
})();
