import React from "react"
import { Link } from "gatsby"
//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
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
            <span
              style={{
                display: `inline-flex`,
                alignItems: `center`,
                width: `100%`,
                justifyContent: `space-between`,
              }}
            >
              <h2 className={Styles.productPrice}>${props.price}</h2>
              <a
                style={{ display: `flex`, alignItems: `center` }}
                href="#"
                className={"snipcart-add-item" + " " + Styles.addToCartBtn}
                data-item-id={props.id}
                data-item-price={props.price}
                data-item-image={props.image}
                data-item-name={props.productModel}
                data-item-url={`/`}
              >
                <FontAwesomeIcon
                  size="xs"
                  icon={faShoppingCart}
                  style={{ marginRight: `.5rem`, maxWidth: `2.5rem` }}
                />{" "}
                Add
              </a>
            </span>
          </div>
        </section>
      </Link>
    </div>
  )
}

export default Product
