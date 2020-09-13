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

    parent.classList.add("dark")
    this.setState(() => {
      return {
        darkMode: true,
      }
    })
    console.log("go dark!")
    var mode = true
    localStorage.setItem("mode", JSON.stringify(mode))
    document.getElementById("logo").src = logoDark

    var logo = logoDark
    localStorage.setItem("logo", JSON.stringify(logo))
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
    document.getElementById("logo").src = logoLight
    var logo = logoLight
    localStorage.setItem("logo", JSON.stringify(logo))
  }

  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem("mode"))
    this.setState(() => {
      return {
        darkMode: storedData,
      }
    })
    if (storedData === true) {
      const parent = document.getElementById("parent")
      parent.classList.add("dark")
    }

    //check stored session to see if logo should be light or dark
    const storedLogo = JSON.parse(localStorage.getItem("logo"))

    const logoImg = document.getElementById("logo")
    logoImg.src = storedLogo
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
              className={Styles.moon}
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
