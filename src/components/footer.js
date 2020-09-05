import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Styles from "../styles/Footer.module.css"

const Footer = () => {
  const FooterData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const year = new Date().getFullYear()
  return (
    <footer className={Styles.Footer}>
      &copy; {FooterData.site.siteMetadata.title} {year}
    </footer>
  )
}

export default Footer
