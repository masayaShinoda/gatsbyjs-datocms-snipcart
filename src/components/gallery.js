import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Gallery = () => {
  const galleryData = useStaticQuery(graphql`
    query galleryData {
      allDatoCmsProduct(filter: { productType: { eq: "Footwear" } }) {
        nodes {
          images {
            url
            alt
          }
        }
      }
    }
  `)
  // productType
  // productModel
  // brand
  // colorS
  // sizes
  // price
  // images {
  //   url
  //   alt
  // }
  // id

  // const galleryArray = galleryData.allDatoCmsProduct.nodes
  // galleryArray.forEach(item => {
  //   let key = "url"
  //   console.log(item)
  //   const productGallery = item

  //   // const imgagesArray = item.images
  //   // // console.log(imgagesArray)
  //   // imgagesArray.forEach(image => {
  //   //   console.log(image[key])
  //   // })
  // })

  return (
    <div>
      <p></p>
    </div>
  )
}

export default Gallery
