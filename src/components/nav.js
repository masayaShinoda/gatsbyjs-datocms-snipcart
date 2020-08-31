import React from "react"
import { Link } from "gatsby"
//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faArrowCircleRight,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"

//styles import
import Styles from "../styles/Header.module.css"

const NavList = () => {
  return (
    <ul className={Styles.navList}>
      <li>
        <Link to="/">
          <FontAwesomeIcon
            size="1x"
            icon={faArrowCircleRight}
            style={{ marginRight: `.5em` }}
          />
          Sign In
        </Link>
      </li>
      <li>
        <Link to="/">
          {" "}
          <FontAwesomeIcon
            size="1x"
            icon={faShoppingCart}
            style={{ marginRight: `.5em` }}
          />
          Cart
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon
            size="1x"
            icon={faInfoCircle}
            style={{ marginRight: `.5em` }}
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
          className={Styles.mobileNav}
          id="mobileNav"
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
