const redish = `#c5484d`;

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: "Bricolage",
    author: "Kyle Mathews",
    homeCity: "San Francisco",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-774017-3`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bricolage",
        short_name: "Bricolage",
        icon: "static/logo.png",
        start_url: "/",
        background_color: redish,
        theme_color: redish,
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
