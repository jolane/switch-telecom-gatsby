import React from "react"
import styled from "styled-components"

import * as vars from "../util/vars"
import Button from "../components/Button"

const Wrapper = styled.section`
  background-color: ${vars.colors.lightBlue};
  padding: ${vars.globalPadding} 0;
  color: white;
  & p {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
`

const Inner = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const Question = styled(vars.H3)`
  margin: 0 0 0.1em;
`

const ActionBar = ({
  question = "Ready to make the switch?",
  text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  to = "/contact",
  button = "Switch Now"
}) => (
  <Wrapper>
    <Inner>
      <div>
        <Question>{question}</Question>
        <p>{text}</p>
      </div>
      <div>
        <Button dark to={to}>
          {button}
        </Button>
      </div>
    </Inner>
  </Wrapper>
)

export default ActionBar
