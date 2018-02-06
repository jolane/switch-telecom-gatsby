import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import * as vars from "../util/vars"

import Button from "../components/Button"
import ScrollDownWidget from "../components/ScrollDownWidget"

const Wrapper = styled.section`
  width: 100%;
  position: relative;
`

const HeroImage = styled(Img)`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 0;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 10%;
  > h3 {
    font-weight: 200;
    font-size: 8vw;
    margin: 0 0 0.75em;
    color: #fff;
    ${vars.above.desktop`
      font-size: 8rem;
      max-width: 800px;
    `};
  }

  > p {
    font-weight: 200;
    font-size: 2.5vw;
    max-width: 70rem;
    line-height: 1.5;
    margin: 0 0 1.2em;
    ${vars.above.desktop`
      font-size: 2.5rem;
      max-width: 800px;
    `};
  }
`

const Hero = ({ imgSizes }) => (
  <Wrapper>
    <HeroImage sizes={imgSizes} />
    <Content>
      <h3>Bringing integrity and clarity</h3>
      <p>
        Switch Telecom's new approach towards managed services has set them
        apart as a leader in the complex world of telecommunications
      </p>
      <Button to="/register" size="small">
        Switch now
      </Button>
    </Content>
    <ScrollDownWidget />
  </Wrapper>
)

Hero.propTypes = {
  imgSizes: PropTypes.object
}

export default Hero
