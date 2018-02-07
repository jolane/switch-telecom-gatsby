exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /flickty/,
      loader: "null-loader"
    });
    config.loader("null", { test: /@vimeo\/player"/, loader: "null-loader" });
  }
};

const path = require(`path`);
const slugify = require('slugify');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "ContentfulProducts") {

    const slug = `/products/${slugify(node.name, { lower: true })}/`;

    console.log(slug)

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });

  }
};


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProducts {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulProducts.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};