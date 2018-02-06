import React from "react"
import styled, { injectGlobal } from "styled-components"

import Button from "../components/Button"
import Icon from "../components/Icon"

const Products = ({ products }) => (
  <section className="OurProducts">
    <div className="OurProducts-container">
      <h4 className="OurProducts-heading">Products</h4>
      <h5 className="OurProducts-subHeading">
        We Deliver on our commitments to each other
      </h5>
      <List>
        {products.map((product, index) => (
          <li className="OurProducts-product" key={index}>
            <div className="OurProducts-icon">
              <Icon icon={product.node.icon} />
            </div>

            <h4 className="OurProducts-title">{product.node.name}</h4>
            <p className="OurProducts-desc">{product.node.tagLine}</p>
            <Button to={`/products/#${product.node.name}`}>Read More</Button>
          </li>
        ))}
      </List>
    </div>
  </section>
)

export default Products

const List = styled.ul`
  width: 90%;
  max-width: 1200px;
  position: relative;
  margin: 4rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

injectGlobal`
.OurProducts {
  background-color: #1f355e;
  color: #fff;
	padding: 5rem 0 3rem;
  font-size: 1.5rem;
  
}
.OurProducts-heading {
  font-weight: 300;
  text-align: center;
  font-size: 3.75em;
  margin: 0;
  color: #fff;
}
.OurProducts-subHeading {
  font-weight: 700;
  text-align: center;
  font-size: 1.5em;
  margin: 0 0 2em;
  color: #fff;
}
.OurProducts-product {
  width: 40%;
  display: inline-block;
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 5em;
}
.OurProducts-title {
  font-size: 1.5em;
  font-weight: 700;
  color: #fff;
  margin-top: 1em;
}
.OurProducts-icon {
  height: 3em;
  width: 3em;
	position: relative;
	svg {
		fill: #fff;
	}
}
.OurProducts-desc {
  margin-bottom: 2em;
}`
