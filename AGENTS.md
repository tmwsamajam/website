# website (Tambaram Malayalee Welfare Samajam / TMWS)

Static, dependency-free brochure website: plain HTML/CSS/vanilla JS in the repo root (`index.html`, `about.html`, `management.html`, `events.html`, `gallery.html`, `gallery-1.html`, `album.html`, `contact.html`) with assets under `assets/`. Deployed to GitHub Pages via `.github/workflows/static.yml` on push to `main`.

## Cursor Cloud specific instructions

- There is no package manager, build step, lint config, or automated test suite. Nothing to install; the update script is a no-op.
- Run the site with any static file server from the repo root, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/index.html`. Serving via HTTP (not `file://`) best mirrors GitHub Pages and keeps relative asset paths / the gallery lightbox JS working.
- Some gallery/album images referenced in `assets/js/main.js` (e.g. under `assets/images/gallery/vishu-2026/`) are not committed yet, so those thumbnails render as broken images. This is a missing-content gap, not an environment problem; expected filenames are listed in `assets/images/README.txt`.
