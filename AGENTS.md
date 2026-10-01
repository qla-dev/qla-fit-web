# Web

Production origin: `https://fit.qla.dev`; backend mount: `/endpoints`, API base: `https://fit.qla.dev/endpoints/api`.
Use pnpm with the committed lockfile. Validate with `pnpm build` and `pnpm lint`.
Apache serves `dist` through root `.htaccess`, preserving the `redeploy.php` and `endpoints` paths, following Freightbook.
Do not commit dependencies, generated builds, `.env` or `.deploy-token`.

# Deployment

After pushing, redeploy by opening (plain-text streamed output):

- Web: https://fit.qla.dev/redeploy.php — `git pull --ff-only`, `pnpm install --frozen-lockfile`, `pnpm build`; a failed build gets one `pnpm install --force` and a retry
- Backend: https://fit.qla.dev/endpoints/redeploy.php — `git pull --ff-only`, `composer install --no-dev`, clears caches, `config:cache`

`pnpm install --frozen-lockfile` requires `pnpm-lock.yaml` to be committed and in sync with `package.json`.
