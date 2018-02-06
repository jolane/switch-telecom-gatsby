import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"

import PageBanner from "../components/PageBanner"
import InsideSwitch from "../sections/InsideSwitch"
import General from "../sections/General"
import CompanyPurpose from "../sections/CompanyPurpose"
import Staff from "../sections/Staff"

const AboutPage = ({ data }) => (
  <div>
    <PageBanner resolutions={data.bannerImage.childImageSharp.resolutions}>
      About Us
    </PageBanner>
    <InsideSwitch images={data.insideSwitchImages.edges} />
    <TeamsOfThree>
      <Img sizes={data.teamsImage.childImageSharp.sizes} />
    </TeamsOfThree>
    <General>
      <p>
        At Switch, we support each of our customers with a dedicated team of 3
        from the initial engagement, through to the end of migration and ongoing
        support for the life of the customer. The team is made up of Business
        Account Manager, Project Manager and Technical Specialist.
      </p>
      <h3>Empowering our people</h3>
      <p>
        Working in small, collaborative teams enables us to deliver superior
        customer service because each team member understands the customer and
        all that is required for successful outcomes.
      </p>
      <p>Our people are also the key to our success. We are committed to:</p>
      <ul>
        <li>Collaboration</li>
        <li>Agility – constant improvement and flexibility</li>
        <li>Client partnership</li>
        <li>Giving our teams the power to fix problems</li>
      </ul>
    </General>
    <CompanyPurpose />
    <Staff data={data.staffList} />
  </div>
)

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
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
    insideSwitchImages: allFile(
      filter: { relativePath: { glob: "insideswitch/*.jpg" } }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600, maxHeight: 600, cropFocus: ATTENTION) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
    staffList: allContentfulStaff {
      edges {
        node {
          firstName
          lastName
          profileImage {
            resolutions(width: 600, height: 900, cropFocus: FACES) {
              base64
              aspectRatio
              src
              srcSet
            }
          }
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
