import React from "react"
import "../styles/styles.css"
import Styles from "../styles/Product.module.css"

//component that renders a single product
const Product = props => {
  return (
    <div className={Styles.productContainer}>
      <section>
        <img src={props.imagesUrl} alt={props.imagesAlt}></img>
      </section>
      <section>
        <div>
          <h1>{props.productModel}</h1>
          <p>{props.brand}</p>
          <h2>${props.price}</h2>
        </div>
      </section>
    </div>
  )
}

export default Product
