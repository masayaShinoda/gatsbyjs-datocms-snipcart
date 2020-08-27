import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Product from "./product"
import Styles from "../styles/ProductListing.module.css"

const Products = () => {
  //is the component for products listing

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
    <div className={Styles.ProductListing}>
      {footwearProductData.allDatoCmsProduct.nodes.map(node => {
        var count = -1
        const imageCount = ++count
        const urlKey = "url"
        const altKey = "alt"
        // console.log(node.images)
        const imagesArray = node.images
        imagesArray.forEach(image => console.log(image))
        // console.log(node.images[imageCount][urlKey])
        // console.log(node.images[imageCount][altKey])
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
