/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: process.env.NEXT_PUBLIC_URL,
   generateRobotsTxt: true,
   additionalPaths: async (config) => {
      /** @type {import('next-sitemap').ISitemapField[]} */
      const paths = []

      return paths
   },
}
