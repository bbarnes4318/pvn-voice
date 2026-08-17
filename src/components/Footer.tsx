// The site footer lives in SiteFooter. This module stays as the entry point the
// older routes already import, so every page — rebuilt or legacy — renders the
// same chrome and no page's footer can link to a retired route.
export { default } from './SiteFooter';
