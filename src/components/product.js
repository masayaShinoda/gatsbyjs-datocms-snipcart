import React from "react"
import { Link } from "gatsby"
import Styles from "../styles/Product.module.css"

//component that renders a single product
const Product = props => {
  return (
    <div className={Styles.productContainer}>
      <Link to={"/product/" + props.id} className={Styles.itemLink}>
        <section className={Styles.upperSection}>
          <div className={Styles.gallery}>
            <img src={props.image}></img>
          </div>
        </section>
        <section className={Styles.lowerSection}>
          <div>
            <h1 className={Styles.productModel}>{props.productModel}</h1>
            <p className={Styles.productBrand}>{props.brand}</p>
            <h2 className={Styles.productPrice}>${props.price}</h2>
            <a
              href="#"
              className="snipcart-add-item"
              data-item-id={props.id}
              data-item-price={props.price}
              data-item-image={props.image}
              data-item-name={props.productModel}
              data-item-url={`/`}
            >
              Add to cart
            </a>
          </div>
        </section>
      </Link>
    </div>
  )
}

export default Product
