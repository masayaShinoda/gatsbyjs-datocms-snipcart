import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Product from "./product"
import Styles from "../styles/ProductListing.module.css"

const Products = () => {
  //is the component for products listing

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

  var productTypes = []
  var sortedProductTypes = []

  const productTypeNodes = productData.allDatoCmsProduct.nodes

  productTypeNodes.forEach(node => {
    productTypes.push(node.productType)
    // console.log(productTypes)
  })

  const removeDuplicates = data => {
    sortedProductTypes = [...new Set(data)]
  }

  removeDuplicates(productTypes)

  return (
    <>
      {sortedProductTypes.map(productType => {
        //return a product category for each product type that has been sorted
        return (
          <>
            <h2 className={Styles.ProductCategory}>{productType}</h2>
            <div id="ProductListing" className={Styles.ProductListing}>
              {productData.allDatoCmsProduct.nodes.map(node => {
                if (node.productType === productType) {
                  return (
                    <Product
                      productModel={node.productModel}
                      brand={node.brand}
                      price={node.price}
                      image={node.displayimg.url}
                    />
                  )
                }
              })}
            </div>
          </>
        )
      })}
    </>
  )
}

export default Products
