(() => {
  const content = window.HUB_CONTENT ?? { work: [], life: [] };

  const makeCard = (item, index) => {
    const card = document.createElement("article");
    card.className = `image-card tone-${item.tone ?? "default"}`;

    const media = document.createElement("div");
    media.className = "card-media";
    const imagePath = item.image ?? (item.file ? `assets/images/${item.file}` : null);
    if (imagePath) {
      const image = document.createElement("img");
      image.src = imagePath;
      image.alt = item.alt ?? "";
      image.loading = "lazy";
      image.addEventListener("error", () => {
        const placeholder = makePlaceholder(item, index);
        media.replaceChildren(placeholder);
      }, { once: true });
      media.append(image);
    } else {
      media.append(makePlaceholder(item, index));
    }

    const meta = document.createElement("div");
    meta.className = "card-meta";
    const title = document.createElement("span");
    title.className = "card-title";
    title.textContent = item.title;
    const label = document.createElement("span");
    label.className = "card-label";
    label.textContent = item.label;
    meta.append(title, label);
    card.append(media, meta);

    if (item.view) {
      card.classList.add("card-openable");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${item.title}. Open About view`);
      const openAbout = () => setView(item.view);
      card.addEventListener("click", openAbout);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openAbout();
        }
      });
    }
    return card;
  };

  const makePlaceholder = (item, index) => {
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", `${item.title} image placeholder`);
    const number = document.createElement("span");
    number.className = "placeholder-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const prompt = document.createElement("span");
    prompt.className = "placeholder-prompt";
    prompt.textContent = "IMAGE SLOT";
    placeholder.append(number, prompt);
    return placeholder;
  };

  const render = (target, items) => {
    target.replaceChildren(...items.map(makeCard));
  };

  render(document.getElementById("work-gallery"), content.work ?? []);
  render(document.getElementById("life-gallery"), content.life ?? []);

  function setView(viewId) {
    document.querySelectorAll(".view").forEach((view) => {
      view.hidden = view.id !== viewId;
    });
    document.querySelectorAll("[data-view-target]").forEach((button) => {
      const active = button.dataset.viewTarget === viewId;
      if (button.matches("button")) button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    });
    const nextHash = `#${viewId}`;
    if (window.location.hash !== nextHash) history.replaceState(null, "", nextHash);
  }

  document.querySelectorAll("[data-view-target]").forEach((control) => {
    control.addEventListener("click", (event) => {
      event.preventDefault();
      setView(control.dataset.viewTarget);
    });
  });
  setView(window.location.hash === "#about" ? "about" : "gallery");
})();
