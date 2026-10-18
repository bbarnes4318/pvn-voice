/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Retired: the site's own sign-up/sign-in (NextAuth) and KYC pages. Accounts
  // and verification live in the portal; /kyc explains that and links there.
  async redirects() {
    return [
      { source: '/kyc/:path+', destination: '/kyc', permanent: true },
      { source: '/auth/:path*', destination: '/kyc', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
    ];
  },
};

module.exports = nextConfig;
