const siteTitle = `SIN - SINoALICE`;
const siteUrl = `https://sofelfam.github.io/sin-sinoalice`;
const siteDescription = `Tools for SINoALICE`;
const backgroundColor = `#09090f`;
const themeColor = `#3f51b5`;

const siteMetadata = {
  pathPrefix: "/sin-sinoalice",
  siteTitle,
  siteTitleAlt: `SIN - SINoALICE - @sofelfam/sin-sinoalice`,
  siteHeadline: `SIN - SINoALICE - Tools for SINoALICE from @sofelfam`,
  siteUrl,
  siteDescription,
  siteLanguage: `jp`,
  author: `@sofelfam`, // twitter account id
  basePath: `/`,
  social: {
    twitter: `https://twitter.com/sofelfam`,
    github: `https://github.com/sofelfam`,
  },
};

export default {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        //trackingId: `UA-149661454-1`,
      },
    },
    // gatsby-plugin-manifest should be described before gatsby-plugin-offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `standalone`,
        icon: `./assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto+Sans+JP:400,500,700']
        },
      }
    }
  ],
};
