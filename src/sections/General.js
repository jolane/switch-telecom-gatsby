import React from "react"
import styled, { injectGlobal } from "styled-components"

const General = ({ children = null }) => <Wrapper>{children}</Wrapper>

export default General

const Wrapper = styled.section`
  margin: 5rem auto;
  text-align: center;
  width: 90%;
  position: relative;
  max-width: 1200px;
  font-size: 2rem;
`

injectGlobal`
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}
h2 {
  font-weight: 300;
  font-size: 3.75em;
  color: #1f355e;
  margin-bottom: 1.2em;
}
h3 {
  font-weight: 300;
  font-size: 1.875em;
  color: #1f355e;
  margin-bottom: 1.2em;
}
h4 {
  font-size: 1.5em;
  font-weight: 700;
  color: #1f355e;
  margin-bottom: 1.2em;
}
h5 {
  font-size: 1.125em;
  font-weight: 700;
  color: #1f355e;
  margin-bottom: 1.2em;
}
h6 {
  font-size: 1em;
  font-weight: 600;
  color: #1f355e;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 1.2em;
}
strong {
  font-weight: 600;
}
a {
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}

blockquote {
  border: 1px solid #ecf0f1;
  padding: 3.33em 7.2em 3.33em 4em;
  color: #666;
  font-weight: 700;
  font-style: italic;
  line-height: 1.6;
  font-size: 0.88em;
  position: relative;
  width: 95%;
  margin: 2rem 0 2.5rem 5%;
}
blockquote:after {
  content: '';
  display: block;
  width: 0.56em;
  height: 100%;
  background-color: #009bde;
  position: absolute;
  top: 0;
  left: 0;
}
blockquote:before {
  content: '';
  display: block;
  height: 3.5em;
  width: 3.5em;
  position: absolute;
  top: 2em;
  right: 2em;
  background-image: url("../images/quotes.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
ul,
ol {
  font-size: 1em;
  padding: 0 0 0 1em;
}
ul li,
ol li {
  padding-left: 0.2em;
  list-style-position: inside;
  margin-bottom: 0.5em;
}
table {
  font-size: 0.77em;
  margin: 2em 0;
  color: #666;
}
td,
th {
  border: 1px solid #ecf0f1;
  text-align: left;
  padding: 0.5em 1.2em;
}
th {
  font-weight: 700;
  color: #2c3e50;
  background-color: #f8f9f9;
  border: 0;
}
th:hover {
  background-color: #ecf0f1;
}
`
