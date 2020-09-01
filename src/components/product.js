import React from "react"
import Styles from "../styles/Product.module.css"

//component that renders a single product
const Product = props => {
  return (
    <div className={Styles.productContainer}>
      <section className={Styles.upperSection}>
        <div className={Styles.gallery}></div>
      </section>
      <section className={Styles.lowerSection}>
        <div>
          <h1 className={Styles.productModel}>{props.productModel}</h1>
          <p className={Styles.productBrand}>{props.brand}</p>
          <h2 className={Styles.productPrice}>${props.price}</h2>
        </div>
      </section>
    </div>
  )
}

export default Product
