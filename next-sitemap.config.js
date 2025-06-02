/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://microspot.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/profil', '/messages'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://microspot.com/server-sitemap.xml', // Pour les annonces dynamiques
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
}
