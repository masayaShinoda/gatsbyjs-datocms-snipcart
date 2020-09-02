// code for generating slug for each blog post
const path = require("path")

//create new page for every new post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const productTemplate = path.resolve("./src/templates/productPage.js")
  const res = await graphql(`
    query productData {
      allDatoCmsProduct {
        nodes {
          id
        }
      }
    }
  `)

  //2. Get product data
  res.data.allDatoCmsProduct.nodes.forEach(node => {
    createPage({
      //3. Create new pages
      component: productTemplate,
      path: `/product/${node.id}`, //dynamic based off of slug each post has
      context: {
        slug: node.id,
      },
    })
  })
}
