import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Styles from "../styles/Landing.module.css"

const Slideshow = () => {
  const SlideshowData = useStaticQuery(graphql`
    query {
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

  return (
    <div className="slideshow">
      <p>Slideshow goes here</p>
    </div>
  )
}

const Landing = () => {
  return (
    <div className={Styles.landing}>
      <Slideshow />
    </div>
  )
}

export default Landing
