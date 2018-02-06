import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { injectGlobal } from "styled-components"
import styledNormalize from "styled-normalize"

import Header from "../sections/Header"
import Footer from "../sections/Footer"
import * as vars from "../util/vars"
import fonts from "../../static/fonts/fonts.css"

injectGlobal`
  ${styledNormalize}
  ${fonts}
  html {
    font-size: 10px;
    font-family: 'Gotham';
    font-weight: 300;
  }
  * {
    box-sizing: border-box;
  }
`

const Main = styled.main`
  min-height: calc(100vh - ${vars.footerHeight});
`

class TemplateWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      nav_open: false
    }
  }
  toggleNav() {
    let nav_open = !this.state.nav_open
    this.setState({ nav_open })
  }
  closeNav() {
    this.setState({ nav_open: false })
  }
  render() {
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[{ name: "description", content: "Sample" }]}
        />
        <Header
          toggleNav={this.toggleNav.bind(this)}
          closeNav={this.closeNav.bind(this)}
          nav_open={this.state.nav_open}
          siteTitle={this.props.data.site.siteMetadata.title}
        />
        <Main>
          {this.props.children({
            ...this.props,
            toggleNav: this.toggleNav.bind(this)
          })}
        </Main>
        <Footer products={this.props.data.products.edges} />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    products: allContentfulProducts {
      edges {
        node {
          name
          tagLine
          icon
        }
      }
    }
  }
`

export default TemplateWrapper
