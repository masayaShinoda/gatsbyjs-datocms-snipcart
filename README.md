<p align="center">
  <a href="https://masayastore.netlify.app">
    <img alt="Store Logo" src="https://masayastore.netlify.app/static/logo-03-ddcb0a0dcba9574b7ccdce8950548bbb.png" width="128" />
  </a>
</p>
<h1 align="center">
  GatsbyJS + DatoCMS + Snipcart Starter
</h1>

**README IS IN PROGRESS**

## Features
* Product inventory is managed using the [DatoCMS](https://www.datocms.com/) dashboard
* Fully responsive minimalistic design
* And last but not least, dark mode :first_quarter_moon_with_face:!

## Setting up
I will walk you through how to make this site yours. You'll have your own online store in no time!
1. Create a new project
`gatsby new gatsby-simplefolio https://github.com/masayaShinoda/gatsbyjs-datocms-snipcart`
2. Changing site information
  * Information such as the site title and description is stored in `gatsby-config.js` 
    ```
    module.exports = {
      siteMetadata: {
        title: `Test E-commerce Project`,
        description: `E-commerce site built with GatsbyJS and DatoCMS.`,
        author: `Masaya`,
    },    
    ```
  * [`gatsby-plugin-manifest`](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/) plugin allows users to add your site to their home screen on most mobile browsers. Modify the code according to your need.
    ```
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masaya Store`,
        short_name: `Masaya Store`,
        start_url: `/`,
        background_color: `#3a2a8a`,
        theme_color: `#3a2a8a`,
        display: `Masaya Store`,
        icon: `src/images/logo-03.png`,
      },
    },
    ```
3. Accessing DatoCMS data:
  * Follow the official DatoCMS [documentation](https://www.datocms.com/docs/gatsby) for how to integrate with GatsbyJS
  * Once you've changed the API Token in `gatsby-config.js`,
    ```
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `YOUR API TOKEN`,
        preview: false,
        disableLiveReload: false,
      },
    },
    ```
    —you would want to query and render your own content (in this case, products) instead of mine.
  4. Here's how the product listing works in this website:
    * Products are queried using GraphQL's `useStaticQuery` found on line 10 of `.\src\components\products.js`:
      ```
      const productData = useStaticQuery(graphql`
        query productData {
          allDatoCmsProduct {
            nodes {
              productType
              productModel
              brand
              colorS
              sizes
              price
              displayimg {
                url
              }
              images {
                url
                alt
              }
              id
            }
          }
        }
      `)
      ```
5. While in development mode, navigate to `localhost:8000/_graphql` to see your personal DatoCMS nodes. In my case, my DatoCMS `Model` is `Product` and the fields can be queried by:
    ```
    query productData {
      allDatoCmsProduct {
        nodes {
          // YOUR FIELDS
        }
      }
    }
    ```
   
