import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { above, below } from "../util/vars"

const links = [
  {
    to: "/about-us",
    title: "About Us"
  },
  {
    to: "/our-approach",
    title: "Our Approach"
  },
  {
    to: "/case-studies",
    title: "Case Studies"
  },
  {
    to: "/products",
    title: "Products"
  },
  {
    to: "/services",
    title: "Services"
  },
  {
    to: "/contact",
    title: "Contact Us"
  }
]

const Nav = ({ nav_open, toggleNav }) => (
  <Container nav_open={nav_open}>
    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <NavLink
            activeClassName="is-active"
            to={link.to}
            onClick={e => toggleNav()}
          >
            {link.title}
          </NavLink>
        </Item>
      ))}
    </List>
  </Container>
)

export default Nav

const Container = styled.nav`
  width: auto;
  transition: all 0.2s;
  ${below.tablet`
  	position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1001;
    background-color: white;
    opacity: ${props => (props.nav_open ? `1` : `0`)};
    visibility: ${props => (props.nav_open ? `visible` : `hidden`)};
	`};
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  ${below.tablet`
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`
const Item = styled.li`
  list-style-type: none;
  margin: 0;
  font-size: 1.6rem;
  margin: 0 2em 0 0;
  color: white;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &.is-active {
    text-decoration: underline;
  }
`
