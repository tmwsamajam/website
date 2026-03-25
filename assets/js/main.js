(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const next = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(next));
    });
  }

  document.querySelectorAll("[data-dropdown]").forEach((dd) => {
    const btn = dd.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    document.querySelectorAll("[data-dropdown].open").forEach((dd) => {
      if (!dd.contains(target)) {
        dd.classList.remove("open");
        const btn = dd.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Simple hero slider (optional)
  const slides = Array.from(document.querySelectorAll("[data-hero-slide]"));
  if (slides.length > 1) {
    let idx = 0;
    slides[0].classList.add("active");
    window.setInterval(() => {
      slides[idx].classList.remove("active");
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add("active");
    }, 4500);
  } else if (slides.length === 1) {
    slides[0].classList.add("active");
  }
})();

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

const albums = {
  onam: [
    "assets/images/gallery/onam-2025/1.jpg",
    "assets/images/gallery/onam-2025/2.jpg",
    "assets/images/gallery/onam-2025/3.jpg"
  ],
  vishu: [
    "assets/images/gallery/vishu-2026/1.jpg",
    "assets/images/gallery/vishu-2026/2.jpg"
  ]
};

function toggleAlbum(name) {
  const container = document.getElementById("album-container");

  // toggle close
  if (container.getAttribute("data-open") === name) {
    container.innerHTML = "";
    container.removeAttribute("data-open");
    return;
  }

  container.setAttribute("data-open", name);
  container.innerHTML = "";

  albums[name].forEach(img => {
    container.innerHTML += `
      <div class="card col-3">
        <img src="${img}" class="gallery-img">
      </div>
    `;
  });

  enableLightbox();
}