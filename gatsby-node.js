const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
 // const blogPost = path.resolve('./src/templates/blog-post.js')
  const employeePost = path.resolve('./src/templates/employee-post.js')
  const result = await graphql(
    `
      {
        allContentfulEmployee {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulEmployee.nodes

  // Create employee posts pages
  // But only if there's at least one employee post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousEmpPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextEmpPostSlug =
          index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/team/${post.slug}/`,
        component: employeePost,
        context: {
          slug: post.slug,
          previousEmpPostSlug,
          nextEmpPostSlug,
        },
      })
    })
  }

}
