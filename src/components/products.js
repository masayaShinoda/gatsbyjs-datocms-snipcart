import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Product from "./product"
import Styles from "../styles/ProductListing.module.css"

const Products = () => {
  //is the component for products listing

  //query only items that have productType of "Footwear"
  const footwearProductData = useStaticQuery(graphql`
    query footwearProductData {
      allDatoCmsProduct(filter: { productType: { eq: "Footwear" } }) {
        nodes {
          productType
          productModel
          brand
          colorS
          sizes
          price
          images {
            url
            alt
          }
          id
        }
      }
    }
  `)

  return (
    <div id="ProductListing" className={Styles.ProductListing}>
      {footwearProductData.allDatoCmsProduct.nodes.map(node => {
        return (
          <Product
            productModel={node.productModel}
            brand={node.brand}
            price={node.price}
          />
        )
      })}
    </div>
  )
}

export default Products
