import React from "react"
import styled from "styled-components"
import Typed from "react-typed"
import pepethree from "../images/pepethree.png"

const StyledHero = styled.section`
  background-image: linear-gradient(
    to right top,
    #e7e0e0,
    #ebe6e7,
    #efebed,
    #f4f1f3,
    #f8f7f8,
    #f7f6f7,
    #f5f5f5,
    #f4f4f4,
    #ececec,
    #e3e3e3,
    #dbdbdb,
    #d3d3d3
  );
  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  h1,
  h2 {
    align-self: center;
    display: inline-block;
    font-size: 7rem;
    grid-column: 1 / -1;
    grid-row: 3;
    justify-self: center;
    text-shadow: 2px 2px black;
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

const imagestyles = {
  position: "absolute",
  left: "0",
  bottom: "0",
  width: "2rem",
  height: "2rem",
}

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
      <img style={imagestyles} src={pepethree} alt="" />
    </StyledHero>
  )
}

export default Hero
