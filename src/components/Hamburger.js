import React from "react"
import styled from "styled-components"

import { above, below } from "../util/vars"

const Container = styled.div`
  width: 2.7rem;
  height: 2.2rem;
  position: relative;
  z-index: 1002;
  cursor: pointer;
  display: none;
  color: ${props => (props.color ? props.color : "#fff")};
  ${below.tablet`
  	display: block;
	`};
`

const Line = styled.div`
  height: 0.4rem;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  top: 0;
  left: 0;

  &:nth-child(1) {
    top: 0;
    transition: top 0.2s linear 0.2s, transform 0.2s linear 0s;
    ${props =>
      props.nav_open &&
      `
			top: 50%;
			margin-top: -0.2rem;
			transform: rotate(45deg);
			transition: top .2s linear, transform .2s linear .2s;
		`};
  }

  &:nth-child(2) {
    top: 50%;
    transition: transform 0.2s linear 0s;
    margin-top: -0.2rem;
    ${props =>
      props.nav_open &&
      `
			transform: rotate(-45deg);
			transition: transform .2s linear .2s;
		`};
  }

  &:nth-child(3) {
    top: 100%;
    transition: top 0.2s linear 0.2s, transform 0.2s linear 0s;
    margin-top: -0.4rem;
    ${props =>
      props.nav_open &&
      `
			top: 50%;
			margin-top: -0.2rem;
			transform: rotate(-45deg);
			transition: top .2s linear, transform .2s linear .2s;
		`};
  }
`

const Hamburger = props => (
  <Container
    color={props.color}
    onClick={e => {
      props.toggleNav()
    }}
  >
    <Line nav_open={props.nav_open} />
    <Line nav_open={props.nav_open} />
    <Line nav_open={props.nav_open} />
  </Container>
)

export default Hamburger
