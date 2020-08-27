import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Gallery = () => {
  const galleryData = useStaticQuery(graphql`
    query galleryData {
      allDatoCmsProduct {
        nodes {
          images {
            url
            alt
          }
        }
      }
    }
  `)
  const galleryArray = galleryData.allDatoCmsProduct.nodes
  galleryArray.forEach(item => {
    let key = "url"
    console.log(item)
    const productGallery = item

    // const imgagesArray = item.images
    // // console.log(imgagesArray)
    // imgagesArray.forEach(image => {
    //   console.log(image[key])
    // })
  })

  return (
    <div>
      <p></p>
    </div>
  )
}

export default Gallery
