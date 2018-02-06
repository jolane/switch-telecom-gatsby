import React from "react"
import styled, { ThemeProvider } from "styled-components"
import "whatwg-fetch"

import Input from "../components/Input"
import Message from "../components/Message"
import { Submit } from "../components/Button"

const theme = {
  color: "#666",
  backgroundColor: "#f9f9f9",
  paddingLeft: "1em"
}

class ContactForm extends React.Component {
  constructor() {
    super()

    this.state = {
      values: {},
      formSubmitted: false
    }
  }

  updateValue(key, value) {
    let values = this.state.values
    values[key] = value
    this.setState({ values })
  }

  handleform(e) {
    e.preventDefault()
    fetch("http://jolane.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.values)
    })
      .then(res => res.text)
      .then(body => {
        console.log(body)
        const formSubmitted = true
        this.setState({ formSubmitted })
      })
  }
  render() {
    let { formSubmitted } = this.state
    return (
      <ThemeProvider theme={theme}>
        <div>
          {!formSubmitted && (
            <Form onSubmit={this.handleform.bind(this)}>
              <Field>
                <Input
                  label="Full Name"
                  name="full_name"
                  onChange={this.updateValue.bind(this)}
                />
              </Field>
              <Field>
                <Input
                  label="Phone Number"
                  name="phone_number"
                  onChange={this.updateValue.bind(this)}
                />
              </Field>
              <Field>
                <Input
                  label="Email Address"
                  name="email_address"
                  onChange={this.updateValue.bind(this)}
                />
              </Field>
              <Field full>
                <Message
                  defaultValue="Message"
                  name="message"
                  onChange={this.updateValue.bind(this)}
                />
              </Field>
              <Field full centered>
                <Submit value="Send Your Message" />
              </Field>
            </Form>
          )}
          {formSubmitted && (
            <Thankyou>
              <h3>Thank you for you enquiry.</h3>
              <p>A team member will be in touch with you shortly.</p>
            </Thankyou>
          )}
        </div>
      </ThemeProvider>
    )
  }
}
export default ContactForm

const Thankyou = styled.div`
  position: relative;
  max-width: 1200px;
  width: 90%;
  text-align: center;
  position: relative;
  margin: 5rem auto;
  font-size: 2rem;
`

const Form = styled.form`
  position: relative;
  max-width: 1200px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;
  flex-wrap: wrap;
  font-size: 1.6rem;
`

const Field = styled.div`
  margin-bottom: 2rem;
  width: calc(33.333% - 1rem);
  ${props =>
    props.full &&
    `
  	width: 100%
  `};
  ${props =>
    props.centered &&
    `
	display: flex;
	justify-content: center;
  `};
`
