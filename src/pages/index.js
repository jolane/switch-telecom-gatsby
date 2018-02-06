import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"

import Hero from "../sections/Hero"
import ActionBar from "../sections/ActionBar"
import Statsbar from "../sections/StatsBar"
import Testimonials from "../sections/Testimonials"
import ServicesList from "../sections/ServicesList"
import Products from "../sections/Products"

const IndexPage = ({ data }) => (
  <div>
    <Hero imgSizes={data.file.childImageSharp.hero} />
    <ServicesList />
    <Products products={data.products.edges} />
    <Statsbar />
    <ActionBar />
    <Testimonials />
  </div>
)

export default IndexPage

export const query = graphql`
  query HomeQuery {
    file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        hero: sizes(maxWidth: 1600) {
          base64
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
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
