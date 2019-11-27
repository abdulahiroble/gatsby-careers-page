// const path = require('path');

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === 'MarkdonwRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md');

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     });
//   }
// };

// module.exports.createPages = async (({graphql, actions}) => {
//     const { createPage } = actions
//     const blogTemplate = path.resolve('./src/templates/blog.js')
//     const res = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)
//     res.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage ({
//             component: blogTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     })
// })

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (_.get(node, 'internal.type') === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, 'parent'));

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: 'collection',
      value: _.get(parent, 'sourceInstanceName'),
    });
  }
};
