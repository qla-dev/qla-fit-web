# Web

Production origin: `https://fit.qla.dev`; backend mount: `/endpoints`, API base: `https://fit.qla.dev/endpoints/api`.
Use pnpm with the committed lockfile. Validate with `pnpm build` and `pnpm lint`.
Apache serves `dist` through root `.htaccess`, preserving the `redeploy.php` and `endpoints` paths, following Freightbook.
Do not commit dependencies, generated builds, `.env` or `.deploy-token`.
