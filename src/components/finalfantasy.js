import React from "react"
import styled from "styled-components"
import FinalFantasyMeer from "./api/finalfantasy/finalfantasy.api"

const FinalFantasyStyledSection = styled.section`
  background: linear-gradient(
    0deg,
    rgba(212, 175, 55, 0.3),
    rgba(80, 19, 28, 0.3)
  );
  color: #50131c;
  max-height: 100vh;
  text-shadow: 0.5px 0.5px white;
  grid-row: 4;
`

const FinalFantasy = () => {
  return (
    <FinalFantasyStyledSection>
      <FinalFantasyMeer />
    </FinalFantasyStyledSection>
  )
}

export default FinalFantasy
