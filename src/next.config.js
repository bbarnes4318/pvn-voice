/** @type {import('next').NextConfig} */

// Routes retired in the site rebuild. Each one 301s to the closest live page so
// existing inbound links and search results do not land on a 404.
const retiredRoutes = [
  // Removed for advertising AI voice agents, which this site does not offer.
  { source: '/services/ai-voice-agents', destination: '/voip-for-call-centers' },
  { source: '/services/ai-powered-solutions', destination: '/voip-for-call-centers' },
  // The services index carried the same AI-agent copy in its own sections.
  { source: '/services', destination: '/voip-for-call-centers' },

  // Moved to top-level slugs.
  { source: '/services/voip-for-call-centers', destination: '/voip-for-call-centers' },
  { source: '/services/dialer-systems', destination: '/dialer-systems' },

  // Wrong audience or retired content.
  { source: '/contact-center', destination: '/voip-for-call-centers' },
  { source: '/unified-communications', destination: '/' },
  { source: '/phone-system', destination: '/' },
  { source: '/integrations', destination: '/' },
  { source: '/tips', destination: '/' },
  { source: '/about-us', destination: '/' },

  // Blog, its posts and its category filters.
  { source: '/blog', destination: '/' },
  { source: '/blog/:path*', destination: '/' },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return retiredRoutes.map((route) => ({ ...route, permanent: true }));
  },
};

module.exports = nextConfig;
