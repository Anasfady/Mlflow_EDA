# MLOps Best Practices — React Presentation

A full Vite + React + Tailwind project that renders the "MLOps Best Practices" slide deck as an
interactive, click-through presentation in the browser.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site to `dist/` that you can deploy anywhere (Netlify, Vercel,
GitHub Pages, S3, etc).

## Controls

- **Next / Prev** buttons, or the dot navigation, to jump to any slide
- **Left / Right arrow keys** (or Space) to move between slides

## Project structure

```
mlops-presentation/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx               # React entry point
    ├── index.css              # Tailwind directives
    ├── App.jsx                # Mounts the presentation
    └── MLOpsPresentation.jsx  # All 21 slides + the viewer/navigation
```

## Editing slides

Each slide is its own function component (`Slide01` … `Slide21`) inside
`src/MLOpsPresentation.jsx`, registered in the `SLIDES` array at the bottom of the file. Edit a
slide's JSX/content directly, or add a new slide function and insert it into `SLIDES` to expand
the deck.
