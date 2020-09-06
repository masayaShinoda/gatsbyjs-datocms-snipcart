import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Landing from "../components/landing"
import SEO from "../components/seo"

import "../styles/styles.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query data {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <Landing />
    </Layout>
  )
}

export default IndexPage
