import React from "react"
import styled, { injectGlobal } from "styled-components"
import Img from "gatsby-image"

const InsideSwitch = ({ images }) => (
  <Wrapper>
    <Inner>
      <Side>
        <h3>Inside Switch</h3>
        <h5>What is so different about us?</h5>
        <p>
          We offer telco as it should be: we know your business, are fast,
          responsive and reliable.
        </p>
        <p>
          Managed services: We manage your services so you can get on with
          business.{" "}
        </p>
        <p>One team: We partner with you for the life of your business. </p>
        <p>
          Project managed: All projects are project managed to ensure budget and
          time constraints are met.
        </p>
        <p>
          We leverage technological expertise alongside responsive customer
          support for unbeatable value.
        </p>

        <p>
          Our people are the key to your communication success. Flexible, highly
          trained for complex services, and dedicated to the customer, each team
          member must be creative and able to jump hurdles in order to keep your
          business communicating.
        </p>
      </Side>
      <ImageGrid>
        {images.map((image, index) => (
          <Img key={index} sizes={image.node.childImageSharp.sizes} />
        ))}
      </ImageGrid>
    </Inner>
  </Wrapper>
)

export default InsideSwitch

const Wrapper = styled.section`
  width: 100%;
  background-position: left center;
  background-image: url(/images/testimonials-pattern.jpg);
  background-repeat: no-repeat;
  background-size: auto 100%;
  padding: 10rem 0;
`

const Inner = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2rem;
`

const Side = styled.div`
  width: 400px;
`

const ImageGrid = styled.div`
  width: calc(100% - 450px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-template-rows: min-content;
  grid-row-gap: 20px;
`
