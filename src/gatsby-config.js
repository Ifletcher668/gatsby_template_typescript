const dfult = 'client';
const projectFolder = `${process.argv[2] ? process.argv[2] : dfult}`;

export default {
    siteMetadata: {
        title: `Portfolio`,
        description: `A portfolio website template`,
        author: `Isiah Fletcher`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${projectFolder}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
    ],
};
