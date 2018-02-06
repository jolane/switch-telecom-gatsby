import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled, { ThemeProvider } from "styled-components"

import PageBanner from "../components/PageBanner"
import ActionBar from "../sections/ActionBar"
import General from "../sections/General"
import Map from "../components/Map"
import Icon from "../components/Icon"
import ContactForm from "../sections/ContactForm"

const ContactPage = ({ data }) => (
  <div>
    <PageBanner resolutions={data.file.childImageSharp.resolutions}>
      Contact Us
    </PageBanner>
    <General>
      <h2>We have a win-win attitude</h2>
    </General>
    <ContactDetailsWrapper>
      <div>
        <Icon icon="contactPhone" />
        <br />
        <strong>Phone</strong>
        <br /> 1800 800 723
      </div>
      <div>
        <Icon icon="contactLocation" />
        <br />
        <strong>Address</strong>
        <br />
        GPO Box 4222, Melbourne 3000 <br />
        Level 1, 100 Overton Road, <br />
        Williams Landing 3027
      </div>
      <div>
        <Icon icon="contactEmail" />
        <br />
        <strong>Email</strong>
        <br />
        <a
          href="mailto:info@switchtelecom.com.au"
          title="info@switchtelecom.com.au"
        >
          info@switchtelecom.com.au
        </a>
      </div>
    </ContactDetailsWrapper>
    <ContactForm />

    <Map />
    <ActionBar
      question="Careers at Switch"
      text="Word of warning: working at Switch is not for everyone! You will need to be sure that you can reflect the value that Switch Telecom places on integrity, teamwork, and our commitment to superior customer service."
      button="Enquire Now"
    />
  </div>
)

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    file(relativePath: { eq: "home-hero.jpg" }) {
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
  }
`

const ContactDetailsWrapper = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 5rem auto 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.6rem;
  line-height: 1.5;

  > div {
    max-width: 40rem;
    text-align: center;
    width: 100%;

    strong {
      font-weight: 700;
      margin: 0.5em 0 0.3em;
    }
  }

  svg {
    height: 2.5em;
    width: 2.5em;
    display: inline-block;
    margin-bottom: 0.7em;
  }
`
