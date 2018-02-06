import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"

import PageBanner from "../components/PageBanner"
import General from "../sections/General"

const OurApproachPage = ({ data }) => (
  <div>
    <PageBanner resolutions={data.bannerImage.childImageSharp.resolutions}>
      Our Approach
    </PageBanner>
    <General>
      <h3>The Switch Approach</h3>
      <ul>
        <li>
          You will be assigned to a team that will look after you for the life
          of your business.
        </li>
        <li>
          Not matter what phase you go through – start-up, expansion,
          relocation, or technology overhaul, your team will ensure that your
          business is communicating
        </li>
        <li>
          Products enable - your team will ensure you get the right products to
          reach your goals
        </li>
        <li>
          Services: one bill, choice of networks, direct contact, project
          management
        </li>
        <li>High touch approach</li>
        <li>Customer centric</li>
        <li>Detailed</li>
        <li>Project managed</li>
      </ul>
      <p>&nbsp;</p>
      <p>Want to see how your Switch team will put it all into action?&nbsp;</p>
    </General>
    <TeamsOfThree>
      <Img sizes={data.teamsImage.childImageSharp.sizes} />
    </TeamsOfThree>
  </div>
)

export default OurApproachPage

export const query = graphql`
  query OurApproachPageQuery {
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
    teamsImage: file(relativePath: { eq: "teams.png" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
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
  }
`

const TeamsOfThree = styled.section`
  width: 100%;
  background-color: #f6f6f6;
  padding: 5rem 0;
  > div {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`
