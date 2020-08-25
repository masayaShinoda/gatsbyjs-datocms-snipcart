import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/styles.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Products {
      site {
        siteMetadata {
          title
        }
      }
      allDatoCmsProduct {
        nodes {
          productModel
          brand
          colorS
          price
          images {
            url
            alt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>
        {data.allDatoCmsProduct.nodes.map(node => {
          return <p>{node.price}</p>
        })}
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
