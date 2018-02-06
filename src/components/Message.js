import React from "react"
import styled from "styled-components"

class Message extends React.Component {
  updateValue() {
    this.props.onChange(this.props.name, this.input.value)
  }
  focus() {
    if (this.input.value == this.props.defaultValue) {
      this.input.value = ""
    }
  }
  blur() {
    if (this.input.value === "") {
      this.input.value = this.props.defaultValue
    }
  }
  render() {
    return (
      <Container
        defaultValue={this.props.defaultValue}
        theme={this.props.theme}
        onChange={this.updateValue.bind(this)}
        name={this.props.name}
        innerRef={comp => (this.input = comp)}
        onFocus={this.focus.bind(this)}
        onBlur={this.blur.bind(this)}
      />
    )
  }
}

const Container = styled.textarea`
  display: block;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  padding: ${props => props.theme.paddingLeft};
  width: 100%;
  height: 6.5em;
  line-height: 1.5;
  font-family: inherit;
  border: none;
`

Container.defaultProps = {
  theme: {
    backgroundColor: "#f1f1f1",
    color: "#000",
    paddingLeft: "1em"
  }
}

export default Message
