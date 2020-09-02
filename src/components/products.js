import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Product from "./product"
import Styles from "../styles/ProductListing.module.css"

const Products = () => {
  //is the component for products listing

  //query only items that have productType of "Footwear"
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
        }
      }
    }
  `)

  const nodes = productData.allDatoCmsProduct.nodes

  var arr = ["banana", "apple", "orange", "apple", "lemon", "lemon"]

  const removeDuplicates = data => {
    return [...new Set(data)]
  }

  console.log(removeDuplicates(arr))

  return (
    <>
      {nodes.map(node => {
        const productTypes = []
        console.log(productTypes)
      })}
      <div id="ProductListing" className={Styles.ProductListing}>
        {productData.allDatoCmsProduct.nodes.map(node => {
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
    </>
  )
}

export default Products
