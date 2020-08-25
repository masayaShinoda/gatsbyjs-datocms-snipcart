import { Link } from "gatsby"
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

const Header = () => (
  <header className={Styles.Header}>
    <div className={Styles.headerContent}>
      <div className={Styles.logoContainer}>
        <Link to="/">
          <p className={Styles.logoTitle}></p>
        </Link>
        <button onClick={goDark}>
          <FontAwesomeIcon
            title="Lights on/off"
            icon={faMoon}
            style={{ fontSize: `2.5rem`, marginLeft: `2.5vmin` }}
          />
        </button>
      </div>
      <Nav />
    </div>
  </header>
)

export default Header
