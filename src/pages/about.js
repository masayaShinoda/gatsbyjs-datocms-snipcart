import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  const aboutData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const data = aboutData.site.siteMetadata
  return (
    <Layout>
      <div>
        <h1 style={{ margin: `3.25vmax 0` }}>About {data.title}</h1>
        <h3>
          A small e-commerce store built with GatsbyJS, sourcing content from
          DatoCMS with payment handled by Snipcart.
        </h3>
        <p>
          Glad you gave this starter a try! Any suggestions or constructive
          criticism regarding the code are welcome! If there are issues
          encountered, please notify me on Github and I will help as best as I
          can.
        </p>
        <p>
          Please refer to the documentation for information on how to modify the
          code.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
