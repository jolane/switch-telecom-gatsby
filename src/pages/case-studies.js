import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import PageBanner from "../components/PageBanner"
import General from "../sections/General"
import Button from "../components/Button"

const CaseStudiesPages = ({ data }) => (
  <div>
    <PageBanner resolutions={data.bannerImage.childImageSharp.resolutions}>
      Case Studies
    </PageBanner>
    <General>
      <h3>Our Wonderful Clients</h3>
      <p>
        Switch Telecom brings integrity, clarity and innovative solutions to
        people in the complex world of telecommunications. We leverage technical
        expertise alongside responsive customer support for unbeatable value.
      </p>
    </General>
    {data.caseStudies.edges.map((n, index) => (
      <Section alt={index % 2 === 0 ? true : false} key={index}>
        <Inner>
          <Col>
            {/* <Img sizes={n.node.image.sizes} /> */}
            <VideoContainer>
              <div>
                <Video
                  src={`https://player.vimeo.com/video/${
                    n.node.vimeoCode
                  }?title=0&byline=0&portrait=0`}
                  width="640"
                  height="360"
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                />
              </div>
            </VideoContainer>
          </Col>
          <Col>
            <h4>{n.node.title}</h4>
            <p>{n.node.description.childMarkdownRemark.excerpt}</p>
          </Col>
        </Inner>
      </Section>
    ))}
  </div>
);

export default CaseStudiesPages

export const query = graphql`
         query CaseStudiesPageQuery {
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
           caseStudies: allContentfulCaseStudies {
             edges {
               node {
                 title
                 vimeoCode
                 description {
                   childMarkdownRemark {
                     excerpt
                   }
                 }
               }
             }
           }
         }
       `;

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
  width: calc(60% - 2.5%);
  font-size: 2rem;
  &:nth-child(2) {
    width: calc(40% - 2.5%);
  }
`

const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: 56.25%;
  }

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`