import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Gallery = () => {
  const galleryData = useStaticQuery(graphql`
    query galleryData {
      allDatoCmsProduct(filter: { productType: { eq: "Footwear" } }) {
        nodes {
          productModel
          colorS
          sizes
          images {
            url
          }
          id
        }
      }
    }
  `)

  return (
    <div style={{ display: `flex`, flexWrap: `wrap` }}>
      {galleryData.allDatoCmsProduct.nodes.map(node => {
        const productModel = node.productModel
        const imagesArray = node.images
        console.log(productModel + " " + "Images include: ")
        imagesArray.forEach(array => {
          for (let i in array) {
            const url = array[i]
            console.log(url)
          }

          // console.log(array[i])
        })

        // return <img alt={JSON.stringify(node.images)}></img>

        // const imagesArray = node.images
        // imagesArray.forEach(array => {
        //   console.log(array)
        // })

        // imagesArray.forEach(image => {
        //   for (let p in image) console.log(image[p])
        // })
      })}
    </div>
  )
}

export default Gallery
