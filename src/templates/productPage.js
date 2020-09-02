import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Styles from "./ProductPage.module.css"

const ProductPage = () => {
  const currentProductData = useStaticQuery(graphql`
    query {
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
        }
      }
    }
  `)
  return (
    <div className={Styles.productPageContainer}>
      <span className={Styles.productDetails}>
        <h1>{currentProductData.allDatoCmsProduct.nodes[3].productModel}</h1>
        <h3>{currentProductData.allDatoCmsProduct.nodes[3].brand}</h3>
        <h2>${currentProductData.allDatoCmsProduct.nodes[3].price}</h2>
        <p>
          Available in: {currentProductData.allDatoCmsProduct.nodes[3].colorS}
        </p>
      </span>
      <div className={Styles.gallery}>
        {currentProductData.allDatoCmsProduct.nodes[3].images.map(image =>
          // console.log(image.url)
          {
            return <img src={image.url} alt={image.alt}></img>
          }
        )}
      </div>
    </div>
  )
}

export default ProductPage
