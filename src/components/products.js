import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Product from "./product"
import "../styles/styles.css"

const Products = () => {
  //is the component for products listing

  const productData = useStaticQuery(graphql`
    query productData {
      allDatoCmsProduct {
        nodes {
          productModel
          brand
          colorS
          price
          images {
            url
            alt
          }
        }
      }
    }
  `)

  let count = 0

  return (
    <div>
      {productData.allDatoCmsProduct.nodes.map(node => {
        const imageCount = count + 1
        console.log(node.images[imageCount].alt)
        return (
          <Product
            imagesUrl={node.images[imageCount].url}
            imagesAlt={node.images[imageCount].alt}
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
