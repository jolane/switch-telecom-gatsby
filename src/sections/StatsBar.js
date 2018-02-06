import React from "react"
import styled from "styled-components"

import Icon from "../components/Icon"

const stats = [
  {
    icon: "statClients",
    number: 421,
    desc: {
      __html: "Happy <span>Clients</span>"
    }
  },
  {
    icon: "statServices",
    number: 17683,
    desc: {
      __html: "Active <span>Services</span>"
    }
  },
  {
    icon: "statLightBulb",
    number: 6570,
    desc: {
      __html: "Brainstorm <span>Sessions</span>"
    }
  },
  {
    icon: "statCoffee",
    number: 50,
    desc: {
      __html: "Cups a <span>Day</span>"
    }
  }
]

const StatsBar = () => (
  <Wrapper>
    <List>
      {stats.map((stat, index) => (
        <Item key={index}>
          <Badge>
            <Icon icon={stat.icon} />
          </Badge>
          <Number>{stat.number}</Number>
          <Desc dangerouslySetInnerHTML={stat.desc} />
        </Item>
      ))}
    </List>
  </Wrapper>
)

export default StatsBar

const Wrapper = styled.section`
  font-size: 0.75vw;
  width: 100%;
  background-color: #010101;
  padding: 6em 0;
`

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

const Item = styled.div`
  text-align: center;
  margin: 0 5%;
`

const Badge = styled.div`
  height: 6em;
  width: 6em;
  position: relative;
  margin: 0 auto;
  color: #fff;
  margin-bottom: 4em;
  &:after {
    content: "";
    display: block;
    height: 140%;
    width: 140%;
    background-color: #fff;
    background-color: #211d29;
    position: absolute;
    top: -20%;
    left: -20%;
    z-index: 0;
    border-radius: 10%;
    transform: rotate(45deg);
  }
  svg {
    width: 6em;
    height: 6em;
    fill: white;
    position: relative;
    z-index: 1;
  }
`

const Number = styled.div`
  font-size: 7.2em;
  font-weight: 100;
  color: #009bde;
`

const Desc = styled.div`
  font-weight: 300;
  color: #009bde;
  font-size: 1.5em;
  span {
    font-weight: 700;
    color: #fff;
  }
`
