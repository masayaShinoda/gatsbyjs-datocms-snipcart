import { Link } from "gatsby"
import React from "react"
import Nav from "./nav"
import Styles from "../styles/Header.module.css"

import logoLight from "../images/logo-03.png"
import logoDark from "../images/logo-04.png"

//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      darkMode: false,
    }
    this.goDark = this.goDark.bind(this)
    this.goLight = this.goLight.bind(this)
  }

  goDark() {
    const parent = document.getElementById("parent")
    const app = document.getElementById("logo")
    app.src = logoDark
    parent.classList.add("dark")
    this.setState(() => {
      return {
        darkMode: true,
      }
    })
    console.log("go dark!")
    var mode = true
    localStorage.setItem("mode", JSON.stringify(mode))
  }

  goLight() {
    const parent = document.getElementById("parent")
    const app = document.getElementById("logo")
    app.src = logoLight

    parent.classList.remove("dark")
    this.setState(() => {
      return {
        darkMode: false,
      }
    })
    console.log("go light!")
    var mode = false
    localStorage.setItem("mode", JSON.stringify(mode))
  }

  componentDidMount() {
    // console.log(JSON.parse(localStorage.getItem("mode")))
    const storedData = JSON.parse(localStorage.getItem("mode"))
    // console.log(
    //   "the state of storeddata is " + JSON.stringify(this.state.darkMode)
    // )
    this.setState(() => {
      return {
        darkMode: storedData,
      }
    })
    if (storedData === true) {
      const parent = document.getElementById("parent")
      parent.classList.add("dark")
    }
    // console.log(
    //   "the state of darkmode is " + JSON.stringify(this.state.darkMode)
    // )
  }

  render() {
    return (
      <header className={Styles.Header}>
        <div className={Styles.headerContent}>
          <div className={Styles.logoContainer}>
            <Link to="/">
              <img
                className={Styles.logo}
                id="logo"
                src={logoLight}
                alt="logo"
              ></img>
            </Link>
          </div>
          <div style={{ display: `flex` }}>
            <Nav />
            <button
              onClick={
                this.state.darkMode === false ? this.goDark : this.goLight
              }
            >
              <FontAwesomeIcon
                size="1x"
                title="Lights on/off"
                icon={faMoon}
                style={{
                  fontSize: `2.5rem`,
                  maxWidth: `2.5rem`,
                  marginLeft: `2.5vmin`,
                }}
              />
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
