# your.fit.mitra

Website for **Your Fit Mitra**: personal fitness coaching, nutrition plans and online training.
Live site: https://your-fit-mitra.vercel.app

## Stack

- [Next.js](https://nextjs.org) 16 (App Router), React 19, JavaScript
- Tailwind CSS v4, with CSS variables for the light/dark theme (`src/app/globals.css`)
- framer-motion (mobile menu animation), lucide-react (icons)
- Hosted on Vercel

## Project structure

```
src/
  app/            routes: / (page.js), /about, /coaching, /mission, /contact
  components/     Navbar, Footer, PageTransition, and homepage sections
  assets/         images imported by pages (optimised by next/image)
public/           static files served as-is
```

## Local development

Requires **Node.js 24** (see `.nvmrc`; run `nvm use` if you use nvm).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
```

## Environment variables

The site doesn't need any environment variables yet. `.env.example` lists the variables
upcoming features will use, by **name only**.

- For local work, copy `.env.example` to `.env.local` and fill in **test** values. `.env.local` is git-ignored.
- Production values are set only in Vercel → Settings → Environment Variables.
- Variables starting with `NEXT_PUBLIC_` reach the browser. Secrets must never use that prefix.
- Never commit secrets or share them in chat, issues or pull requests.

## Branch and release workflow

- `main` is production. Vercel deploys it automatically.
- Each piece of work goes on its own branch (e.g. `phase-1/site-fixes`), and Vercel builds a Preview URL for it.
- Changes reach `main` only through a reviewed pull request. Check the Preview on a phone before merging.
- Rollback: Vercel → Deployments → Instant Rollback, then revert the PR.
  The tag `baseline-2026-11-13` marks the production state before the upgrade work began.
