const path = require(`path`);
const _ = require('lodash');

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (_.get(node, 'internal.type') === `MarkdownRemark`) {
//     // Get the parent node
//     const slug = getNode(_.get(node, 'slug'));

//     // Create a field on this node for the "collection" of the parent
//     // NOTE: This is necessary so we can filter `allMarkdownRemark` by
//     // `collection` otherwise there is no way to filter for only markdown
//     // documents of type `post`.
//     createNodeField({
//       node,
//       name: 'slug',
//       value: _.get(slug, 'sourceInstanceName'),
//     });
//   }
// };

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // const value = createFilePath({ node, getNode });

    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/post.js`);
    const blogArticle = path.resolve(`./src/templates/blog.js`);
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    published
                    test
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;
        const test = result.data.allMarkdownRemark.edges;

        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });

        test.forEach(edge => {
          createPage({
            component: blogArticle,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });
      })
    );
  });
};
