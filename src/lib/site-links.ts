// External destinations linked from the site. Account creation, sign-in and
// verification all happen in the portal; this site only links there.

// Returning customers.
export const PORTAL_LOGIN_URL = 'https://portal.pvnvoice.com/login?next=%2F';

// New accounts: the portal's sign-up page. After sign-up the portal runs
// business verification (Didit) and a team review before activation.
export const PORTAL_SIGNUP_URL = 'https://portal.pvnvoice.com/signup';
