import React from "react"
import { Link } from "gatsby"
//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faTimes,
  faInfoCircle,
  faHome,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons"

//styles import
import Styles from "../styles/Header.module.css"
import mobileNavStyles from "../styles/MobileNav.module.css"

const NavList = () => {
  return (
    <ul className={Styles.navList}>
      <li>
        <Link to="/">
          <FontAwesomeIcon
            size="1x"
            icon={faHome}
            style={{ marginRight: `.5em`, maxWidth: `2.5rem` }}
          />
          Home
        </Link>
      </li>
      <li>
        <Link to="/products">
          <FontAwesomeIcon
            size="1x"
            icon={faShoppingBag}
            style={{ marginRight: `.5em`, maxWidth: `2.5rem` }}
          />
          Products
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={"snipcart-checkout" + " " + Styles.snipcartCheckoutCart}
        >
          <span>
            <FontAwesomeIcon
              size="1x"
              icon={faShoppingCart}
              style={{ marginRight: `.5em`, maxWidth: `2.5rem` }}
            />
            Cart
          </span>
          <div className={"snipcart-summary" + " " + Styles.snipcartSummary}>
            <p>Items:</p>
            <p className={"snipcart-total-items" + " " + Styles.itemCount}></p>
            <p>Total:</p>
            <p className={"snipcart-total-price" + " " + Styles.itemCount}></p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon
            size="1x"
            icon={faInfoCircle}
            style={{ marginRight: `.5em`, maxWidth: `2.5rem` }}
          />
          About
        </Link>
      </li>
    </ul>
  )
}

const MobileOverlay = () => {
  return (
    <div className={Styles.mobileOverlay} id="mobileOverlay">
      <NavList />
      <button
        onClick={exitMobileNav}
        onKeyDown={exitMobileNav}
        className={Styles.exitBtn}
      >
        <FontAwesomeIcon size="1x" icon={faTimes} />
      </button>
    </div>
  )
}

const handleMobileNav = () => {
  const MobileOverlay = document.getElementById("mobileOverlay")
  MobileOverlay.style.height = `100%`
  MobileOverlay.style.display = `flex`
  document.getElementById("parent").style.height = "100vh"
  document.getElementById("parent").style.overflow = "hidden"
}
const exitMobileNav = () => {
  const MobileOverlay = document.getElementById("mobileOverlay")
  MobileOverlay.style.height = `0`
  MobileOverlay.style.display = `none`
  document.getElementById("parent").style.height = "auto"
  document.getElementById("parent").style.overflow = "visible"
}

const Nav = () => {
  return (
    // <Router>
    <div>
      <MobileOverlay />
      <nav>
        <NavList />
        <button
          onClick={handleMobileNav}
          onKeyDown={handleMobileNav}
          className={mobileNavStyles.mobileNav}
          id="mobileNav"
          tabindex="-1" //remove from tab order so that desktop versions dont accidentally open mobileNav
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
    </div>
    // </Router>
  )
}

export default Nav
