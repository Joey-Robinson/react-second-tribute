import React from "react"
import styled from "styled-components"
import ishgard from "../images/ishgard.jpg"
import FinalFantasyMeer from "./api/finalfantasy/finalfantasy.api"

const FinalFantasyStyledSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(255, 125, 10, 0.5),
      rgba(0, 255, 150, 0.5)
    ),
    url(${ishgard}) no-repeat center center / cover;
  color: white;
  grid-row: 4;
`

const FinalFantasy = () => (
  <FinalFantasyStyledSection>
    <FinalFantasyMeer />
  </FinalFantasyStyledSection>
)

export default FinalFantasy
