import React from "react"
import Img from "gatsby-image"
import styled, { injectGlobal } from "styled-components"
import flickityStyles from "flickity/css/flickity.css"

import { colors, H3, H6, globalPadding } from "../util/vars"

class Staff extends React.Component {
  componentDidMount() {
    const Flickity = require("flickity")
    var flkty = new Flickity(this.input, {
      wrapAround: true,
      cellAlign: "left"
    });
  }


  render() {
    return <Wrapper>
        <H3 color={colors.blue}>Our Leadership Team</H3>
        <SubText color={colors.blue}>
          Meet the people who are changing the face of telco. See who is
          answering your calls, optimising your experience, and pushing the
          carriers to get your business communicating.
        </SubText>
        <Carousel innerRef={comp => {
            this.input = comp;
          }}>
          {this.props.data.edges.map((member, index) => <Slide key={index}>
              <Image key={index} resolutions={member.node.profileImage.resolutions} />
            </Slide>)}
        </Carousel>
      </Wrapper>;
  }
}
export default Staff

injectGlobal`
  ${flickityStyles}
`
const Wrapper = styled.section`
  text-align: center;
  margin: 7rem auto 0;
  & .flickity-page-dots {
    bottom: 3rem;
  }
  .flickity-prev-next-button {
    border-radius: 0;
    background-color: #009bde;
    color: #fff;

    .arrow {
      fill: #fff;
    }
  }

  .flickity-page-dots .dot {
    background: #1f355e;
  }
`

const Carousel = styled.div`
  width: 100%;
  margin-top: 4rem;
`
const Slide = styled.div`
  width: 33.333%;
  height: 49vw;
  & > div {
    height: 100%;
  }
`
const SubText = styled.p`
  max-width: 800px;
  position: relative;
  font-weight: 200;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  color: ${colors.blue};
  font-size: 2rem;
`
const Image = styled(Img)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
