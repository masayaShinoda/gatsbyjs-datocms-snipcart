import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backBtn"
import Styles from "./ProductPage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const ProductPage = ({ pageContext }) => {
  const { currentProductData } = pageContext

  return (
    <Layout>
      <div className={Styles.productPageContainer}>
        <div className={Styles.upperDiv}>
          <BackButton destination="/" />
        </div>
        <div className={Styles.gallery}>
          {currentProductData.images.map(image =>
            // console.log(image.url)
            {
              return <img src={image.url} alt={image.alt}></img>
            }
          )}
        </div>
        <div className={Styles.productDetails}>
          <h1>{currentProductData.productModel}</h1>
          <h3>{currentProductData.brand}</h3>
          <h2>${currentProductData.price}</h2>
          <p>Available in: {currentProductData.colorS}</p>
          <span
            style={{
              display: `inline-flex`,
              alignItems: `center`,
              width: `100%`,
              justifyContent: `space-between`,
            }}
          >
            <a
              style={{ display: `flex`, alignItems: `center` }}
              href="#"
              className={"snipcart-add-item" + " " + Styles.addToCartBtn}
              data-item-id={currentProductData.id}
              data-item-price={currentProductData.price}
              data-item-image={currentProductData.image}
              data-item-name={currentProductData.productModel}
              data-item-url={`/`}
            >
              <FontAwesomeIcon
                size="xs"
                icon={faShoppingCart}
                style={{ marginRight: `.5rem`, maxWidth: `2.5rem` }}
              />{" "}
              Add to cart
            </a>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
