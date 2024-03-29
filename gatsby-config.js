/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Amber Suratte`,
    description: `Front-End Web Developer`,
    author: `asuratte`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 95,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-161999249-1",
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: 'src/data'
      }
    },
    'gatsby-transformer-json',
{
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      `Montserrat\:400,700`,
      `Lato\:400,700,400italic,700italic` 
    ],
    display: 'swap'
  }
},
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}