# Srinivasan G — Portfolio (Angular)

Angular 18 (standalone components) conversion of the original HTML/CSS/jQuery
portfolio template. No jQuery, Bootstrap JS, or Isotope — filtering, the
carousel, the nav, and the project modals are all native Angular using
signals.

## Getting started

```bash
npm install
npm start        # ng serve, http://localhost:4200
npm run build     # production build to dist/srinivasan-portfolio
```

## Project structure

```
src/
  app/
    components/
      navbar/                Sticky nav + smooth scroll + active-link highlight
      home-section/          Hero
      work-section/          "My Work" 3-card row
      portfolio-carousel/    Draggable project carousel (prev/next/dots)
      portfolio-grid/        Filterable project grid (replaces Isotope.js)
      project-modal/         One reusable modal, data-driven, supports
                              plain image lists AND tabbed galleries
      resume-section/        Profile card + two animated skill-bar cards
      about-section/
      social-section/
      contact-section/       Reactive form wired to EmailJS
    data/
      portfolio-data.ts      All project cards, filters, modal galleries,
                              and skill lists live here — edit this file to
                              add/remove/update projects, no template edits
                              needed.
    services/
      scroll.service.ts      Smooth-scroll + scroll-spy for the nav
      modal.service.ts       Opens/closes the shared project modal
  assets/
    images/                  Only the images actually used by the site
                              (renamed to remove spaces for safe URLs)
    vendor/                  bootstrap.min.css + font-awesome.min.css (kept
                              for the grid utilities and icon classes)
    fonts/                   Font Awesome webfonts
  styles.css                 Global styles, ported from templatemo-style.css
```

## Wiring up the contact form

The form uses [EmailJS](https://www.emailjs.com) client-side (same library
the original template loaded via CDN). Create a free account, then fill in
your own IDs in `src/app/components/contact-section/contact-section.component.ts`:

```ts
private readonly serviceId = 'YOUR_EMAILJS_SERVICE_ID';
private readonly templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
private readonly publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
```

## Adding or editing a project

Everything about a project — thumbnail, title, blurb, filter category, and
which images show in its modal — lives in `src/app/data/portfolio-data.ts`.
For a normal project, add an entry to `PORTFOLIO_ITEMS` and a matching entry
in `MODAL_GALLERIES` with an `images: []` array. For a project with tabbed
sub-galleries (like "Graphic Design"), use `tabs: [{ label, images }]`
instead of `images`.

## Notes on the conversion

- Bootstrap's CSS (grid, buttons, modal chrome) and Font Awesome are kept as
  vendor stylesheets since they're just CSS utilities — but Bootstrap's jQuery
  plugins (`modal`, `tab`, `collapse`) are not used; those behaviors are
  native Angular now.
- The Isotope filter categories (`html`, `mobile`, `photoshop`, `figma`) are
  preserved exactly as in the original `data-filter` attributes.
- Only images referenced by the page were copied into `assets/` — the
  original asset folder also contained unused source files (PSDs, raw
  videos, duplicate exports) that aren't needed here.
