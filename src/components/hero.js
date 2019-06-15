import React from "react"
import style from "styled-components"

const StyledHero = style.section`
background: #e7e0e0;
display: grid;
  grid-column: 1;
  grid-row: 1;
`

const Hero = () => (
  <StyledHero>
    <h1>From the hero component</h1>
  </StyledHero>
)

export default Hero
