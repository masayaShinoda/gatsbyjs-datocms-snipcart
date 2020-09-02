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

  // const imagesArray = footwearProductData.allDatoCmsProduct.nodes.images
  // imagesArray.forEach(array => {
  //   console.log(array[0])
  // })

  return (
    <div id="ProductListing" className={Styles.ProductListing}>
      {footwearProductData.allDatoCmsProduct.nodes.map(node => {
        const nodes = footwearProductData.allDatoCmsProduct.nodes

        return (
          <Product
            productModel={node.productModel}
            brand={node.brand}
            price={node.price}
            image={node.displayimg.url}
          />
        )
      })}
    </div>
  )
}

export default Products
