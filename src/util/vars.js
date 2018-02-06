import styled, { css } from "styled-components"

const sizes = {
  giant: 1440,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const below = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

// iterate through the sizes and create a media template
export const above = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const headerHeight = `8rem`
export const footerHeight = `3rem`
export const globalPadding = `3vw`

export const colors = {
  white: `#fff`,
  lightBlue: `#009bde`,
  darkBlue: `#1f355e`,
  blue: `#174a7c`
}

export const H2 = styled.h2`
  font-size: 8.6rem;
  color: ${props => (props.color ? props.color : colors.white)};
  font-weight: 200;
`

export const H3 = styled.h3`
  font-size: 6.6rem;
  color: ${props => (props.color ? props.color : colors.white)};
  font-weight: 200;
`

export const H4 = styled.h4`
  font-size: 3.7rem;
  color: ${props => (props.color ? props.color : colors.white)};
  font-weight: 200;
`

export const H5 = styled.h5`
  font-size: 2.7rem;
  font-weight: 700;
  color: ${props => (props.color ? props.color : colors.white)};
`

export const H6 = styled.h6`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => (props.color ? props.color : colors.white)};
`
