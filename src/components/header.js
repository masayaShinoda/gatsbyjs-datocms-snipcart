import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import Styles from "../styles/Header.module.css"

//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

const goDark = () => {
  const parent = document.getElementById("parent")
  parent.classList.toggle("dark")
}

const Header = ({ siteTitle }) => (
  <header className={Styles.Header}>
    <div className={Styles.headerContent}>
      <div className={Styles.logoContainer}>
        <Link to="/">
          <h1 className={Styles.logoTitle}>{siteTitle}</h1>
        </Link>
        <button onClick={goDark} style={{ color: `white` }}>
          <FontAwesomeIcon icon={faMoon} style={{ marginLeft: `2.5vmin` }} />
        </button>
      </div>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
