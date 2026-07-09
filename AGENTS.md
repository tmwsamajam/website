# AGENTS.md

## Cursor Cloud specific instructions

This repository is a purely static website (plain HTML/CSS/vanilla JS) for the Tambaram Malayalee Welfare Samajam (TMWS). There is no build system, package manager, backend, or database — pages are the `*.html` files at the repo root, with `assets/{css,js,images}`.

### Running the site (dev)

There is no dependency install step. Serve the repo root with any static HTTP server, e.g.:

```bash
python3 -m http.server 8000   # then open http://localhost:8000/index.html
```

Serving over HTTP (rather than opening `file://`) is preferred so relative asset paths resolve correctly.

### Lint / test / build

- There are no automated tests, no linter config, and no build step in this repo.
- "Deployment" is handled by `.github/workflows/static.yml`, which uploads the repo as-is to GitHub Pages (no build).

### Notes / gotchas

- The gallery lightbox (`assets/js/main.js`) opens when clicking a thumbnail image, not the event collection cards on `gallery.html`.
- Some gallery event thumbnails reference image files that are not present in `assets/images/` yet, so those cards show a broken-image icon. This is missing content, not an environment issue.
