
# **AOSSIE's Website**

This repository contains the assets required to build the **AOSSIE website**. We're glad that you want to contribute!

Contributions to the project are very much welcomed! Please reach out with ideas for new content or issues with existing content!

The website is a **Next.js** project using **Tailwind CSS** for styling and design, with content authored in **MDX** for idea pages.

## Prerequisites

- Node.js 18 or 20 (recommended). You can check with `node -v`.
- npm 8+ (comes with Node). Check with `npm -v`.
- Git for version control.

If you use `nvm`, select an appropriate Node version: `nvm use 18`.

# **Getting Started**

To contribute to this repository you will need to:
- **Fork this repository**
- **Push changes to a new branch in your fork**
- **Create a pull request from that branch to the master branch of this repository**

Forking only needs to be done once, after which you can push changes to your fork.

# **Running the website Locally**

In order to run the site locally,
- Fork the website and clone that fork on your system
- Open a terminal/command prompt window and change the current directory to the directory of the cloned fork on your system.
- In the root directory, you can run the following commands:

```
npm install
npm run dev
```

The website will be active at **http://localhost:3000**.

## Common Commands

- `npm run dev` — start the development server with hot reload.
- `npm run lint` — run ESLint checks (Next.js core web vitals rules).
- `npm run build` — build the site for production. This project uses Next.js static export, outputting to `output/`.
- `npm start` — runs `next start` (useful for SSR builds). For static export, serve `output/` with a static server, e.g. `npx serve output`.

## Environment Variables

Create a `.env.local` in the project root to configure environment variables used at build time. The site references:

- `NEXT_PUBLIC_SITE_URL` — used for generating RSS links (`src/pages/_document.jsx`). Example:

```
NEXT_PUBLIC_SITE_URL=https://aossie.org
```

Restart the dev server after changing environment variables.

## Project Structure

- `src/pages` — Next.js pages (including `ideas/` by year and MDX files).
- `src/components` — reusable React components.
- `src/style/tailwind.css` — Tailwind base imports and global styles.
- `tailwind.config.js` — Tailwind configuration.
- `next.config.mjs` — Next.js configuration (MDX enabled, static export).
- `src/helper` — utilities for loading idea content (e.g., `getAllIdeas.js`).

Path aliases are configured in `jsconfig.json` (`@/*` → `src/*`). Example import: `import { Header } from '@/components/Header'`.

## Adding Ideas

- Add new idea entries as `.mdx` under `src/pages/ideas/<year>/`.
- Year list pages live under `src/pages/ideas/<year>/index.jsx`.
- The landing ideas page uses `src/helper/getAllIdeas.js` (currently set to load from `2025`). Update helpers if the source year changes.

## Styling

- Tailwind CSS is used throughout. Global Tailwind imports live in `src/style/tailwind.css`.
- A global smooth scrolling behavior is enabled via `html { scroll-behavior: smooth; }`.

## Troubleshooting

- If you see a Browserslist warning, update the database: `npx update-browserslist-db@latest`.
- After adding new dependencies, re-run `npm install` and restart `npm run dev`.
- For static export previews, use `npm run build` then `npx serve output`.


# **Contributing**

You can contribute by:

* Raising any issues you find
* Fixing issues by opening Pull Requests
* Improving website
* Talking about AOSSIE


If you want to get in touch with us first before contributing, you can use:

* [AOSSIE Discord Channel](https://discord.gg/hjUhu33uAn)


# **License**

This project is licensed under the **MIT License**, a permissive license that allows commercial and private use, modification, distribution, and sublicensing, provided that copyright and license notices are included in all copies.

- Full license text (OSI): https://opensource.org/licenses/MIT
- Choose a License reference: https://choosealicense.com/licenses/mit/

By contributing to this repository, you agree that your contributions are licensed under the MIT License.
