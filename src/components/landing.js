import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { Slide } from "react-slideshow-image"
import "../styles/Landing.css"
import "react-slideshow-image/dist/styles.css"

// const slideImages = [
//   "https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//   "https://images.unsplash.com/photo-1541996206728-9e1c3466a148?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//   "https://images.unsplash.com/photo-1527254660609-90f9237bfe13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
// ]

const Slideshow = () => {
  const featuredProductsData = useStaticQuery(graphql`
    query {
      allDatoCmsFeaturedProduct {
        edges {
          node {
            productName
            description
            gallery {
              url
            }
          }
        }
      }
    }
  `)

  const featuredProductNames = []
  const featuredProductImage = []

  const data = featuredProductsData.allDatoCmsFeaturedProduct.edges
  //   .forEach(node => {

  //   featuredProductNames.push(node.productNames)
  // })
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min
  }
  // randomNumber(1, 5)

  for (var i = 0; i < data.length; i++) {
    featuredProductNames.push(data[i].node.productName)
    if (data[i].node.gallery.length > 1) {
      const ranNum = Math.floor(randomNumber(0, data[i].node.gallery.length))
      featuredProductImage.push(data[i].node.gallery[ranNum]["url"])
    } else {
      featuredProductImage.push(data[i].node.gallery[0]["url"])
    }
  }

  // console.log(featuredProductNames)

  // for (var i = 0; i < data.gallery.length; i++) {
  //   console.log(data.gallery[i]["url"])
  // }

  return (
    <div className="slide-container">
      <Slide
        duration="3000"
        transitionDuration="250"
        Easing="ease"
        pauseOnHover="true"
      >
        {data.map(edge => {
          return (
            <div className="each-slide">
              <div className="slideImageContainer">
                <img
                  src={
                    //chooses a random image from featuredProduct gallery
                    edge.node.gallery[
                      Math.floor(randomNumber(0, edge.node.gallery.length))
                    ]["url"]
                  }
                ></img>
                <span>Title</span>
              </div>
              <div className="slideDescriptionContainer">
                <h1>{edge.node.productName}</h1>
                <p>
                  <q>{edge.node.description}</q>
                </p>
              </div>
            </div>
          )
        })}
      </Slide>
    </div>
  )
}

const Landing = props => {
  return (
    <div className="Landing">
      <section>
        <h1 style={{ marginBottom: `2.5vmax` }}>Welcome to {props.title}</h1>
        <Link to="/products">
          <h4>
            See what we have in store{" "}
            <FontAwesomeIcon
              size="1x"
              icon={faArrowRight}
              style={{
                fontSize: `2.5rem`,
                maxWidth: `2.5rem`,
              }}
            ></FontAwesomeIcon>
          </h4>
        </Link>
      </section>
      <center>
        <h2 style={{ marginTop: `7.5vmax` }}>Featured products:</h2>
      </center>
      <Slideshow />
    </div>
  )
}

export default Landing
