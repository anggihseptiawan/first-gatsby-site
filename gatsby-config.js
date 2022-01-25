module.exports = {
  siteMetadata: {
    title: `my-second-gatsby-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          // posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
};
