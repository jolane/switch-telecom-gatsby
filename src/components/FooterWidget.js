import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import Icon from "../components/Icon"

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1.4;
  & svg {
    display: block;
    height: 1.4em;
    width: 1.4em;
    fill: currentColor;
    margin-right: 0.4em;
  }
`

const FooterWidget = ({ icon, to, children }) => (
  <Wrapper to={to}>
    <Icon icon={icon} /> {children}
  </Wrapper>
)

export default FooterWidget
