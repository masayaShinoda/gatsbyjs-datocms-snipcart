import React from "react"
import { Link, useStaticQuery } from "gatsby"
import "../styles/Landing.css"

import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

const slideImages = [
  "https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1541996206728-9e1c3466a148?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
]

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
            }}
          >
            <span>Slide 1</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis
            </p>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
          <div>
            <p>
              or. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, na
            </p>
          </div>
        </div>
      </Slide>
    </div>
  )
}

const Landing = () => {
  return (
    <div className="Landing">
      <Slideshow />
    </div>
  )
}

export default Landing
