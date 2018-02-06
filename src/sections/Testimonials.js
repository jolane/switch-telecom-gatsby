import React from "react"
import styled from "styled-components"
import Flickity from "react-flickity-component"
import flickityStyles from "flickity/css/flickity.css"

const items = [
  {
    title: "Negotiis",
    text: {
      __html:
        "&quot;Please note that as well as helping us set up our system when we first relocated, Switch Telecom has continued to be our ISP provider for Internet, land lines and mobiles.<br /><br />During our time we have appreciated the “one bill” and the level of service when our internet or mobiles have had problems. As an accountancy firm the internet is paramount to our business and Switch Telecom recognise this and act appropriately.&quot;"
    },
    author: "Ron Holman, Director",
    company: "Negotiis"
  },
  {
    title: "Form 700",
    text: {
      __html:
        "&quot;We didn’t realise how big a job our office relocation was going to be. From design of the inbound and outbound call system, to the transition of going with a product like Direct Indial, to the wiring at the new premises, to the coordination of trades, building managers, Telstra Techs and our own IT staff, we are extremely glad we ended up going with Switch Telecom.<br /><br />There is no way the move would have been as successful as it was. They thought of everything, explained it to us clearly and made sure we were on the ball regarding the details.&quot;"
    },
    author: "Graham Connolly, Lead Design &amp; Document Control ",
    company: "Form 700"
  }
]

const flickityOptions = {
  pageDots: false,
  adaptiveHeight: true
}

const Testimonials = () => (
  <Wrapper>
    <Inner>
      <Heading>Testimonials</Heading>
    </Inner>
    <Carousel options={flickityOptions}>
      {items.map((item, index) => (
        <Slide key={index}>
          <Inner>
            <Title>{item.title}</Title>
            <Text dangerouslySetInnerHTML={item.text} />
            <Author>
              {item.author} - <span>{item.company}</span>
            </Author>
          </Inner>
        </Slide>
      ))}
    </Carousel>
  </Wrapper>
)

export default Testimonials

const Wrapper = styled.section`
  width: 100%;
  padding: 5rem 0;
  background-image: url(/images/testimonials-pattern.jpg),
    url(/images/testimonials-background.jpg);
  background-position: left center, right center;
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;
  font-size: 1.5rem;

  .flickity-prev-next-button.next {
    position: absolute;
    margin-left: -550px;
    top: auto;
    left: 50%;
    border-radius: 0;
    background-color: #009bde;
    color: #fff;
    bottom: -5rem;
  }

  .flickity-prev-next-button.previous {
    position: absolute;
    top: auto;
    bottom: -5rem;
    left: 50%;
    border-radius: 0;
    background-color: #009bde;
    color: #fff;
    margin-left: -600px;
  }
  .flickity-prev-next-button .arrow {
    fill: #fff;
  }
`

const Inner = styled.div`
  max-width: 1200px;
  width: 90%;
  position: relative;
  margin: 0 auto;
`

const Heading = styled.h3`
  color: #000;
  font-size: 3.75em;
  font-weight: 200;
  line-height: 1;
  margin: 0 0 0.75em 0;
`

const Carousel = styled(Flickity)`
  width: 100%;
`

const Slide = styled.div`
  width: 100%;
  padding-bottom: 6rem;
`

const Title = styled.h5`
  color: #1f355e;
  font-weight: 700;
  margin: 0 0 0.75em 0;
  font-size: 1.5em;
`

const Text = styled.div`
  font-size: 1.125em;
  line-height: 1.66;
  color: #333;
  font-weight: 300;
  width: 70%;
`

const Author = styled.p`
  color: #333;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 1.2em;
  span {
    color: #666;
  }
`
