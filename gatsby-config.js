module.exports = {
  siteMetadata: {
    title: `Baby's Coders`,
    author: `Mik@el`,
    description: `Excercice Hardcoders de création e-commerce avec Gatsby et Snipcart`,
    siteUrl: `https://baby-coders.netlify.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Snipcart Starter`,
        short_name: `Gatsby Snipcart`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `thistle`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        //replace with own Snipcart API key
        apiKey: 'OTlkOGE5ZjMtMGNmNC00NDExLWFkZjItYTAwZDhlZDQ4ZDM5NjM3MDkxNDU1NTUxMzk3MjQ4',
        autopop: true,
          }
    },
    `gatsby-plugin-styled-components`,
  ],
}
