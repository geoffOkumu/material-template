const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators
  
    return graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                category
                templateKey
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }
  
      const posts = result.data.allMarkdownRemark.edges
  
      posts.forEach(edge => {
        const id = edge.node.id
        if (edge.node.frontmatter.templateKey === 'blog') {
            createPage({
                path: edge.node.fields.slug,
                component: path.resolve(
                  `src/templates/blog-post.js`
                ),
                // additional data can be passed via context
                context: {
                  id,
                },
            })
        }
      })
  
      // Tag pages:
      let categories = []
      // Iterate through each post, putting all found tags into `tags`
      posts.forEach(edge => {
        if (_.get(edge, `node.frontmatter.category`)) {
          categories = categories.concat(edge.node.frontmatter.category)
        }
      })
      // Eliminate duplicate tags
      categories = _.uniq(categories)
  
      // Make tag pages
      categories.forEach(category => {
        const categoryPath = `/topic/${_.kebabCase(category)}/`
        console.log(category)
  
        createPage({
          path: categoryPath,
          component: path.resolve(`src/templates/topics.js`),
          context: {
            category,
          },
        })
      })
    })
  }

  exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }