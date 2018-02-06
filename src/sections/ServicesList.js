import React from "react"
import styeld, { injectGlobal } from "styled-components"

import Icon from "../components/Icon"
import Button from "../components/Button"

const services = [
  {
    title: "Startup",
    tag: "Helping your business take off",
    icon: "serviceStartUpColor"
  },
  {
    title: "Relocation",
    tag: "Let Switch Manage Your Relocation",
    icon: "serviceRelocationColour"
  },
  {
    title: "Expansion",
    tag: "Ensuring scalable systems and preparing for growth",
    icon: "serviceExpansionColor"
  },
  {
    title: "Technology Overhaul",
    tag: "Take your business to the next level",
    icon: "serviceTechnologyOverhaulColour"
  }
]

const ServicesList = () => (
  <div className="WhySwitch">
    <div className="WhySwitch-content">
      <h3 className="WhySwitch-heading">Why Switch?</h3>
      <h4 className="WhySwitch-subHeading">How we do it:</h4>
      <ul className="WhySwitch-list">
        {services.map((service, index) => (
          <li className="WhySwitch-item" key={index}>
            <div className="WhySwitch-icon">
              <Icon icon={service.icon} />
            </div>
            <div>
              <h5 className="WhySwitch-title">{service.title}</h5>
              <p className="WhySwitch-desc">{service.tag}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button to="/services">Read More</Button>
    </div>
  </div>
)

export default ServicesList

injectGlobal`
.WhySwitch {
  width: 100%;
  background-image: url("/images/why-bg.jpg");
  background-position: top left;
  background-size: 90%;
  background-repeat: no-repeat;
  padding: 8em 0;
  font-size: 15px;
}
.WhySwitch-content {
  width: 100%;
  padding: 0 8% 4rem 37%;
}
.WhySwitch-heading {
  font-weight: 300;
  color: #000;
  font-size: 3.75em;
  line-height: 1;
  margin: 0 0 0.2em;
}
.WhySwitch-subHeading {
  font-weight: 300;
  color: #000;
  font-size: 2.5em;
  line-height: 1;
  margin: 0 0 1em 0;
  color: #1f355e;
}
.WhySwitch-list {
  padding: 0 0 1em 0;
}
.WhySwitch-item {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin: 0 0 3em 0;
  font-size: 2rem;
}
.WhySwitch-icon {
  height: 3em;
  width: 3em;
  position: static;
  margin-right: 1em;
}
.WhySwitch-title {
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 0 0.2em 0;
}
.WhySwitch-desc {
  font-size: 0.7em;
  margin: 0;
  color: #666;
  line-height: 1.5;
}
`
