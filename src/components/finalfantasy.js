import React from "react"
import styled from "styled-components"
import ishgard from "../images/ishgard.jpg"
import FinalFantasyMeer from "./api/finalfantasy/finalfantasy.api"

const FinalFantasyStyledSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(212, 175, 55, 0.3),
      rgba(80, 19, 28, 0.3)
    ),
    url(${ishgard}) no-repeat center center / cover;
  color: #fff;
  text-shadow: 2px 2px black;
  grid-row: 4;
`

const FinalFantasy = () => (
  <FinalFantasyStyledSection>
    <FinalFantasyMeer />
  </FinalFantasyStyledSection>
)

export default FinalFantasy
