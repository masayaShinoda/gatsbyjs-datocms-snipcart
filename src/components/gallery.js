import React from "react"
import { StaticQuery, graphql } from "gatsby"
class Gallery extends React.Component {
  constructor() {
    super()
    this.state = {
      product: "",
    }
    this.extractImages = this.extractImages.bind(this)
  }

  extractImages() {
    this.props.nodes.map(node => {
      const productModel = node.productModel
      this.setState(() => {
        return {
          product: productModel,
        }
      })
      const imagesArray = node.images
      //for each productModel, console log its images
      console.log(productModel + " " + "Images include: ")
      imagesArray.forEach(array => {
        for (let i in array) {
          const url = array[i]
          console.log(url)
        }
      })
    })
  }

  componentDidMount() {
    this.extractImages()
  }

  render() {
    console.log(this.state.product)
    return (
      <div style={{ display: `flex`, flexWrap: `wrap` }}>
        {this.props.nodes.map(node => {
          return (
            <div>
              <ul>
                <li>Product name: {this.state.product}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query galleryData {
        allDatoCmsProduct(filter: { productType: { eq: "Footwear" } }) {
          nodes {
            productModel
            colorS
            sizes
            images {
              url
            }
            id
          }
        }
      }
    `}
    render={galleryData => {
      return <Gallery nodes={galleryData.allDatoCmsProduct.nodes} />
    }}
  />
)
