import React from "react"
import Link from "gatsby-link"
import styled, { ThemeProvider } from "styled-components"

import * as vars from "../util/vars"

import Icon from "../components/Icon"
import SwitchTelecomIcon from "../icons/SwitchTelecomIcon"
import FooterWidget from "../components/FooterWidget"
import Input from "../components/Input"

const theme = {
  color: "#fff",
  backgroundColor: "#143f69",
  paddingLeft: "1em"
}

const Footer = ({ products }) => (
  <Container>
    <Inner>
      <div>
        <SwitchTelecomIcon width="225" />
        <p>
          To bring integrity, clarity and innovative solutions for people in the
          complex world of Telecommunications
        </p>
        <List>
          <li>
            <FooterWidget to="http://jolane.net" icon="locationPin">
              GPO Box 4222,<br /> Melbourne 3000
            </FooterWidget>
          </li>
          <li>
            <FooterWidget
              to="mailto:customerservice@switchtelecom.com.au"
              icon="envelope"
            >
              customerservice@switchtelecom.com.au
            </FooterWidget>
          </li>
          <li>
            <FooterWidget to="tel:1800800723" icon="phone">
              1800 800 723
            </FooterWidget>
          </li>
        </List>
      </div>
      <div>
        <Heading>Products</Heading>
        <List>
          {products.map((product, index) => (
            <li key={index}>
              <FooterWidget
                to={`/products/#${product.node.name}`}
                icon={product.node.icon}
              >
                {product.node.name}
              </FooterWidget>
            </li>
          ))}
        </List>
      </div>
      <div>
        <Heading>Services</Heading>
        <List>
          <li>
            <FooterWidget to="/services/startup" icon="serviceStartUp">
              Startup
            </FooterWidget>
          </li>
          <li>
            <FooterWidget to="/services/relocation" icon="serviceRelocation">
              Relocation
            </FooterWidget>
          </li>
          <li>
            <FooterWidget to="/services/expanding" icon="serviceExpanding">
              Expanding
            </FooterWidget>
          </li>
          <li>
            <FooterWidget to="/services/growth" icon="serviceGrowth">
              Growth
            </FooterWidget>
          </li>
        </List>
      </div>
      <div>
        <Heading>Mailing List</Heading>
        <p>Sign up for our mailing list to get latest updates and offers.</p>
        <Form>
          <ThemeProvider theme={theme}>
            <Input name="email_address" label="Enter you email" />
          </ThemeProvider>
          <button />
        </Form>
      </div>
    </Inner>
    <Lower>
      <div>Copyrights © 2016 by SWITCHTELECOM. All Rights Reserved.</div>
    </Lower>
  </Container>
)
export default Footer

const Container = styled.footer`
  width: 100%;
  height: ${vars.colors.footerHeight};
  background-color: ${vars.colors.blue};
  color: white;
  padding: 5rem 0 0;
  font-size: 1.6em;
  & a {
    color: inherit;
    text-decoration: none;
  }
`

const Inner = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  div {
    margin-left: 2rem;
    flex-shrink: 1;
  }
  div:first-child,
  div:last-child {
    flex: 0 1 36rem;
    margin-left: 0;
  }
`

const Heading = styled.h6`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 0 0 1em 0;
  color: #fff;
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  & li {
    list-style-type: none;
    margin: 0 0 1em 0;
  }
`

const Lower = styled.div`
  background-color: ${vars.colors.darkBlue};
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin-top: 2rem;
  > div {
    width: 100%;
    max-width: 1200px;
  }
`

const Form = styled.form`
  display: flex;
  & *:fist-child {
    flex-grow: 1;
  }
`
