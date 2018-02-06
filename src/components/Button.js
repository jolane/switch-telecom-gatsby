import React from "react"
import Link from "gatsby-link"
import styled, { css } from "styled-components"

import { colors } from "../util/vars"

export const Submit = props => (
  <SubmitInput type="submit" value={` ${props.value} `} />
)

const Button = props => (
  <Container {...props}>
    <Inner>{props.children}</Inner>
  </Container>
)

export default Button

const Container = styled(Link)`
  display: inline-block;
  height: 2.5em;
  font-size: ${props => (props.size == "small" ? `1.2rem` : `1.5rem`)};
  background-color: ${colors.lightBlue};
  color: ${colors.white};
  padding: 0 1em;
  border-radius: 1.25em;
  transition: all 0.2s linear;
  width: auto;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  &:hover {
    background-color: ${colors.blue};
  }
  &:active {
    background-color: ${colors.lightBlue};
  }

  ${props =>
    props.dark === true &&
    css`
      background-color: ${colors.darkBlue};
    `};
`

const SubmitInput = Container.withComponent("input")

const Inner = styled.span`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 0.1em;
  white-space: nowrap;
`
