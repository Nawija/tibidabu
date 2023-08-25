/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: ``,
        description: ``,
        author: `Tibidabu`,
        siteUrl: `https://tibidabu.pl`,
    },
    plugins: [
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "f1a313f4c2495df96cd4805efd50e5",
            },
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `none`,
                },
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-sitemap",
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                showSpinner: false,
                minimum: 0.1,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Tibidabu`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#19C0B6`,
                theme_color: `#19C0B6`,
                display: `standalone`,
                icon: `src/images/logo.jpg`,
            },
        },
    ],
};
