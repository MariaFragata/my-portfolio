# christine — portfolio

Personal developer portfolio for Christine. Built with React + Vite (JavaScript/JSX + plain CSS).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Structure

- `src/App.jsx` — page composition
- `src/components/` — one component + CSS file per section (`Hero`, `About`, `Toolkit`, `Education`, `Projects`, `ContactCTA`, ...) and shared pieces (`Button`, `Reveal`, `SectionHeading`, `SectionLabel`, `Tags`, `SparkIcon`, `Sticker`); placeholder content lives in `src/data.js`
- `src/hooks/` — `useInView` (scroll reveals), `useTypewriter`
- `src/data.js` — name, email, GitHub, nav links
- `src/index.css` — design tokens (palette, fonts, easing) and global styles

Palette: `#D8A2A2` dusty pink · `#FFDCDC` pastel pink · `#FFF9D6` cream · `#8EA66B` sage, on warm neutrals.
Fonts: Fraunces (display), Plus Jakarta Sans (body), DM Mono (code/labels).
