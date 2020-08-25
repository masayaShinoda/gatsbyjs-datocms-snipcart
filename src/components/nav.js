import React from "react"
import { Link } from "gatsby"
//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faArrowCircleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

//styles import
import Styles from "../styles/Header.module.css"

const MobileOverlay = () => {
  return (
    <div className={Styles.mobileOverlay} id="mobileOverlay">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon
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
              icon={faShoppingCart}
              style={{ marginRight: `.5em` }}
            />
            Cart
          </Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <button
            onClick={exitMobileNav}
            onKeyDown={exitMobileNav}
            className={Styles.exitBtn}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </li>
      </ul>
    </div>
  )
}

const handleMobileNav = () => {
  const MobileOverlay = document.getElementById("mobileOverlay")
  MobileOverlay.style.height = `100%`
  MobileOverlay.style.display = `flex`
}
const exitMobileNav = () => {
  const MobileOverlay = document.getElementById("mobileOverlay")
  MobileOverlay.style.height = `0`
  MobileOverlay.style.display = `none`
}

const Nav = () => {
  return (
    // <Router>
    <div>
      <MobileOverlay />
      <div>
        <nav>
          <ul className={Styles.navList}>
            <li>
              <Link to="/">
                <FontAwesomeIcon
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
                  icon={faShoppingCart}
                  style={{ marginRight: `.5em` }}
                />
                Cart
              </Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
          <button
            onClick={handleMobileNav}
            onKeyDown={handleMobileNav}
            className={Styles.mobileNav}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </nav>
      </div>
    </div>
    // </Router>
  )
}

export default Nav
