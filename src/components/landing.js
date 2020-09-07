import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { Slide } from "react-slideshow-image"
import "../styles/Landing.css"
import "react-slideshow-image/dist/styles.css"

const slideImages = [
  "https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1541996206728-9e1c3466a148?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1527254660609-90f9237bfe13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
]

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div className="slideImageContainer">
            <img src={slideImages[0]}></img>
            <span>Slide 1</span>
          </div>
          <div className="slideDescriptionContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis
            </p>
          </div>
        </div>
        <div className="each-slide">
          <div className="slideImageContainer">
            <img src={slideImages[1]}></img>
            <span>Slide 2</span>
          </div>
          <div className="slideDescriptionContainer">
            <p>
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, na
            </p>
          </div>
        </div>
        <div className="each-slide">
          <div className="slideImageContainer">
            <img src={slideImages[2]}></img>
            <span>Slide 3</span>
          </div>
          <div className="slideDescriptionContainer">
            <p>
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient penatibus et magnis dis parturient montes, na
            </p>
          </div>
        </div>
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
      <Slideshow />
    </div>
  )
}

export default Landing
