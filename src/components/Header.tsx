// The site header lives in SiteHeader. This module stays as the entry point the
// older routes already import, so every page — rebuilt or legacy — renders the
// same chrome and no page's nav can link to a retired route.
export { default } from './SiteHeader';
