module.exports = {
  siteMetadata: {
    title: `Space Tourism`,
    description: `My solution to the "Space Tourism" Frontend Mentor challenge.`,
    author: ``,
    siteUrl: `https://sw-space-tourism.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bellefair\:400`, `Barlow\:400`, `Barlow Condensed\:400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
  ],
};
