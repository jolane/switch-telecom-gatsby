import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import * as vars from "../util/vars"

const PageBanner = ({ resolutions, children }) => (
  <Wrapper>
    <Background resolutions={resolutions} />
    <Text>{children}</Text>
  </Wrapper>
)

export default PageBanner

const Wrapper = styled.section`
  width: 100%;
  position: relative;
`
const Text = styled.h3`
  text-align: center;
  color: #fff;
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
  font-size: 9rem;
  margin: 0;
  font-weight: 200;
  ${vars.below.giant`
	  font-size: 8vw;
  `};
`

const Background = styled(Img)`
  position: relative;
  z-index: 0;
  display: block;
  width: 100%;
  height: 26.3vw;
`
