# Malířství Eda

Website of Malířství Eda – painting, wallpapering and decorative wall techniques.
Built with [Vue 3](https://vuejs.org/) and [Vite](https://vite.dev/), hosted on GitHub Pages.

**Live site:** https://f-hluchnik.github.io/malby-hluchnik/

## Development

Requires Node.js 22 (or 20.19+).

```sh
npm install
npm run dev       # dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project structure

```
index.html                 page shell (title, meta, favicon)
public/                    files copied as-is (favicons)
src/
  main.js                  app entry
  App.vue                  page layout
  data/site.js             all texts, contacts and the tab list – edit content here
  components/              SiteHeader, TabNav, HeroPanel, ContactCard, PhotoCard, SiteFooter
  composables/useHashTab.js  keeps the active tab in the URL (#kontakt, #tapety, …)
  assets/                  logo and photos
  styles/base.css          global styles
```

To add or change a tab, edit the `tabs` array in `src/data/site.js`.
Each tab can be linked directly, e.g. `…/malby-hluchnik/#dekoracni-techniky`.

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which lints, builds and
publishes `dist/` to GitHub Pages. Pull requests are linted and built but not deployed.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The build uses a relative base path (`base: './'` in `vite.config.js`), so it works
under `/malby-hluchnik/` as well as on a custom domain. To use a custom domain, set it in
**Settings → Pages → Custom domain** and point the domain's DNS at GitHub Pages.
