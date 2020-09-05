module.exports = {
  siteMetadata: {
    title: `Test E-commerce Project`,
    description: `E-commerce site built with GatsbyJS and DatoCMS.`,
    author: `Masaya`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masaya Store`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3A2A8A`,
        theme_color: `#3A2A8A`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `527b207c0abc424cae03c0a5f9cd8c`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "Yzg2Y2Q2MTctODgwOS00Yjg3LTllN2UtZjUwY2MyYjkyNzY0NjM3MzM4NzExMDk3MDkxMDU5",
        autopop: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
