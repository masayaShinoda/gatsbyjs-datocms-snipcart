import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Gallery from "../components/gallery"
import ProductPage from "../templates/productPage"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    {/* <h1>Hi from the second page</h1> */}
    {/* <p>Welcome to page 2</p> */}
    {/* <Gallery /> */}
    <ProductPage></ProductPage>
  </Layout>
)

export default SecondPage
