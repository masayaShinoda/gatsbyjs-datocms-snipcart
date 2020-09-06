import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Product from "./product"
import BackButton from "./backBtn"
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
          id
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
            <BackButton destination="/" />
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
                      id={node.id}
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
