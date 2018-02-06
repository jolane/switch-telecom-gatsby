import React from "react"
import { findDOMNode } from "react-dom"
import Link from "gatsby-link"
import styled from "styled-components"

import * as vars from "../util/vars"

import Hamburger from "../components/Hamburger"
import Nav from "../components/Nav"
import Button from "../components/Button"
import SwitchTelecomIcon from "../icons/SwitchTelecomIcon"

const Container = styled.header`
  position: ${props => (props.scrollStage > 0 ? `fixed` : `absolute`)};
  top: ${props => (props.scrollStage > 0 ? `-${vars.headerHeight}` : `0`)};
  left: 0;
  width: 100%;
  height: ${vars.headerHeight};
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-color: ${props =>
    props.scrollStage > 0 ? `rgba(0,0,0,0.6)` : `transparent`};
  padding: 0 ${vars.globalPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s linear;
  transform: translateY(${props => (props.scrollStage == 2 ? `100%` : `0`)});
  z-index: 10;
  > h1 {
    postion: relative;
    z-index: 1002;
  }
`

const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollStage: 0
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this))
  }
  handleScroll(e) {
    const containerElement = findDOMNode(this)

    if (window.pageYOffset > window.innerHeight / 2) {
      this.setState({ scrollStage: 2 })
    } else if (window.pageYOffset > containerElement.offsetHeight) {
      this.setState({ scrollStage: 1 })
    } else {
      this.setState({ scrollStage: 0 })
    }
  }
  render() {
    return (
      <Container ref="container" scrollStage={this.state.scrollStage}>
        <h1 onClick={e => this.props.closeNav()}>
          <Link to="/" title={this.props.siteTitle}>
            <SwitchTelecomIcon width="200" />
          </Link>
        </h1>
        <RightSection>
          <Nav {...this.props} />
          <Button to="/">Switch Now</Button>
        </RightSection>
        <Hamburger {...this.props} />
      </Container>
    )
  }
}

export default Header
