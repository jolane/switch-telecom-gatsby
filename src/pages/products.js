import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Link from "gatsby-link"

import PageBanner from "../components/PageBanner"
import General from "../sections/General"
import { colors } from "../util/vars"

class ProductsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
      activeObj: null
    }
  }
  componentWillMount() {
    let activeIndex = this.props.data.products.edges.findIndex(
      item => this.props.location.pathname == item.node.fields.slug
    )
    console.log(activeIndex)
    if (activeIndex === -1) {
      activeIndex = 0
    }

    let activeItem = this.props.data.products.edges[activeIndex]
    this.setState({
      activeItem,
      activeIndex
    })
  }

  updateActive(index) {
    let activeItem = this.props.data.products.edges[index]
    let activeIndex = index
    this.setState({
      activeItem,
      activeIndex
    })
  }
  render() {
    let { name, tagLine, description } = this.state.activeItem.node
    return (
      <div>
        <PageBanner
          resolutions={this.props.data.bannerImage.childImageSharp.resolutions}
        >
          Our Products
        </PageBanner>
        <Tabs>
          {this.props.data.products.edges.map((product, index) => (
            <Tab to={product.node.fields.slug} key={index} active={index === this.state.activeIndex}>
              {product.node.name}
            </Tab>
          ))}
        </Tabs>
        <General>
          <h2>{name}</h2>
          <h4>{tagLine}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html
            }}
          />
        </General>
      </div>
    )
  }
}

export default ProductsPage

export const query = graphql`
  query ProductsPageQuery {
    bannerImage: file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        resolutions(width: 1600, height: 420, cropFocus: CENTER) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
    products: allContentfulProducts {
      edges {
        node {
          name
          tagLine
          fields {
            slug
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f3f3f3;
  padding-top: 5rem;
`

const Tab = styled(Link)`
  width: 280px;
  padding: 3rem 0;
  text-align: center;
  background-color: ${props => (props.active ? `#fff` : `#f3f3f3`)};
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.darkBlue};
  text-decoration: none;
`
