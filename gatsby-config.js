module.exports = {
    siteMetadata: {
        title: "Meu primeiro Gatsby site"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
        },
      ],
};