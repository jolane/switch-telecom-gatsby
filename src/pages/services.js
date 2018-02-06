import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import PageBanner from "../components/PageBanner"

const ServicesPage = ({ data }) => (
  <div>
    <PageBanner resolutions={data.bannerImage.childImageSharp.resolutions}>
      Services
    </PageBanner>
    {data.services.edges.map((n, index) => (
      <Section alt={index % 2 === 1 ? true : false} key={index}>
        <Inner>
          <Col>
            <Img sizes={n.node.image.sizes} />
          </Col>
          <Col>
            <h4>{n.node.title}</h4>
            <br />
            <h6>{n.node.subTitle}</h6>
            <div
              dangerouslySetInnerHTML={{
                __html: n.node.description.childMarkdownRemark.html
              }}
            />
          </Col>
        </Inner>
      </Section>
    ))}
  </div>
)

export default ServicesPage

export const query = graphql`
  query ServicesPageQuery {
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
    services: allContentfulServices {
      edges {
        node {
          title
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            sizes {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

const Section = styled.section`
  width: 100%;
  padding: 6rem 0;
  background-color: ${props => (props.alt ? "#f9f9f9" : "#fff")};
  & > div {
    flex-direction: ${props => (props.alt ? "row-reverse" : "row")};
  }
`

const Inner = styled.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Col = styled.div`
  width: calc(50% - 2.5%);
  font-size: 2rem;
`
