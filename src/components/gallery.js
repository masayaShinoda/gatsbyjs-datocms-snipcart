import React from "react"
import { StaticQuery, graphql } from "gatsby"

class Gallery extends React.Component {
  constructor() {
    super()
    this.state = {
      productNames: [],
      imgUrls: [],
    }
    this.extractImages = this.extractImages.bind(this)
  }

  extractImages(i) {
    const nodes = this.props.nodes
    // console.log(nodes[i])
    const productModel = nodes[i].productModel
    const imagesArray = nodes[i].images
    const productImages = []

    imagesArray.forEach(array => {
      for (let i in array) {
        const url = array[i]
        console.log(productModel)
        // console.log(url)
        productImages.push(url)
        // console.log(productImages)
        // const imageTag = "<img src=" + { url } + " ></img>"
      }
    })

    productImages.map(productImage => {
      console.log(productImage)
      this.state.imgUrls.push(productImage)
      this.state.productNames.push(productModel)
    })
  }

  componentDidMount() {
    const nodes = this.props.nodes
    // console.log(nodes.length)
    for (var i = 0; i < nodes.length; i++) {
      console.log(i)
      // more statements
      this.extractImages(i)
    }
  }

  render() {
    return (
      <div style={{ display: `flex`, flexWrap: `wrap` }}>
        {this.state.imgUrls.map(imgUrl => (
          <img style={{ width: `25vmin` }} src={imgUrl} alt={imgUrl}></img>
        ))}
        {this.state.productNames.map(productName => {
          return <p>{productName}</p>
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
