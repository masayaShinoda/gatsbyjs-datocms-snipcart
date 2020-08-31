import { Link } from "gatsby"
import React from "react"
import Nav from "./nav"
import Styles from "../styles/Header.module.css"

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

  // goDark() {
  //   const parent = document.getElementById("parent")
  //   // console.log(this.state.darkMode)
  //   if (this.state.darkMode === false) {
  //     parent.classList.toggle("dark")
  //     this.setState(() => {
  //       return {
  //         darkMode: true,
  //       }
  //     })
  //     var mode = true
  //     console.log("before click its light")
  //   }
  //   if (this.state.darkMode === true) {
  //     parent.classList.toggle("dark")
  //     this.setState(() => {
  //       return {
  //         darkMode: false,
  //       }
  //     })
  //     var mode = false
  //     console.log("before click its dark")
  //   }

  //   // var mode = this.state.darkMode
  //   localStorage.setItem("mode", JSON.stringify(mode))
  //   console.log(
  //     "the value being stored is " + JSON.parse(localStorage.getItem("mode"))
  //   )
  // }

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
  }

  goLight() {
    const parent = document.getElementById("parent")
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
    console.log(
      "the state of storeddata is " + JSON.stringify(this.state.darkMode)
    )
    this.setState(() => {
      return {
        darkMode: storedData,
      }
    })
    if (storedData === true) {
      const parent = document.getElementById("parent")
      parent.classList.add("dark")
    }
    console.log(
      "the state of darkmode is " + JSON.stringify(this.state.darkMode)
    )
  }

  render() {
    return (
      <header className={Styles.Header}>
        <div className={Styles.headerContent}>
          <div className={Styles.logoContainer}>
            <Link to="/">
              <p className={Styles.logoTitle}></p>
            </Link>
            <button
              onClick={
                this.state.darkMode === false ? this.goDark : this.goLight
              }
            >
              <FontAwesomeIcon
                size="sm"
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
  }
}

export default Header
