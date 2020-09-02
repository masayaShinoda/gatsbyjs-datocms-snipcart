import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Styles from "./ProductPage.module.css"

const ProductPage = ({ pageContext }) => {
  const { currentProductData } = pageContext

  return (
    <Layout>
      <div className={Styles.productPageContainer}>
        <span className={Styles.productDetails}>
          <h1>{currentProductData.productModel}</h1>
          <h3>{currentProductData.brand}</h3>
          <h2>${currentProductData.price}</h2>
          <p>Available in: {currentProductData.colorS}</p>
        </span>
        <div className={Styles.gallery}>
          {currentProductData.images.map(image =>
            // console.log(image.url)
            {
              return <img src={image.url} alt={image.alt}></img>
            }
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
