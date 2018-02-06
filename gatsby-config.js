module.exports = {
  siteMetadata: {
    title: `Switch Telecom - noy you-re talking`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `insideSwitch`,
        path: `${__dirname}/src/images/insideswitch/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gvpup2u78q44`,
        accessToken: `ee75460a7b2069f159385a76ad6d043afb4241a68f7af3dbaa8cde3405fcea51`
      }
    }
  ]
}
