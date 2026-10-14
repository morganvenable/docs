# Svalboard docs

Source for https://docs.svalboard.com: the user guide, the build guide and the Keybard manual.

Edit any page with the **Edit page** link at its bottom, or in `src/content/docs/`. Every change to `main` deploys. Pull requests build and check without deploying.

```
npm ci
npm run dev
```

`npm run check` checks wording; `npm run build` checks every internal link.
