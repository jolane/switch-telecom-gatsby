import React from "react"
import Scroll from "react-scroll"
import styled from "styled-components"

const scroll = Scroll.animateScroll

const ScrollDownWidget = () => {
  const scrollDown = e => {
    scroll.scrollTo(window.innerHeight)
  }
  return (
    <Wrapper onClick={e => scrollDown()}>
      <Mouse />
      <Arrows>
        <div />
        <div />
        <div />
      </Arrows>
    </Wrapper>
  )
}

export default ScrollDownWidget

const Wrapper = styled.div`
  font-size: 1.4rem;
  height: 6.75em;
  width: 1.5em;
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 4.7em;
    border-left: 1px dashed rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  &:after {
    content: "";
    display: block;
    height: 4px;
    width: 4px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Mouse = styled.div`
  width: 100%;
  height: 2.25em;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 1.125em;
  position: absolute;
  left: 0.5px;
  top: 1em;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    width: 0.2em;
    height: 0.56em;
    background-color: #fff;
    border-radius: 1.5px;
    position: absolute;
    left: 50%;
    top: 0.3em;
    transform: translateX(-50%);
  }
`

const Arrows = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  > div {
    width: 0.5em;
    height: 0.5em;
    display: block;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(135deg);
    position: relative;
    margin: 0 auto 0.1em auto;
  }
`
