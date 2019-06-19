import React from "react"
import styled from "styled-components"
import Typed from "react-typed"

const StyledHero = styled.section`
  background: #e7e0e0;
  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  h1,
  h2 {
    grid-column: 1 / -1;
    justify-self: center;
    grid-row: 3;
    align-self: center;
    font-size: 5rem;
    display: inline-block;
    span {
      color: black;
    }
  }
  h1 {
    color: orange;
  }
  h2 {
    color: #00ff96;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <h1>
        <Typed
          strings={[`<h1>Meerkatz</h1>`, `<h2>Ristretta</h2>`]}
          typeSpeed={90}
          backSpeed={110}
          backDelay={1000}
          loop
        />
      </h1>
    </StyledHero>
  )
}

export default Hero
