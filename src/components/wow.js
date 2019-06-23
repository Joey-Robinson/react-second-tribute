import React from "react"
import styled from "styled-components"
import Meerkats from "./api/meer/meerkatz.api"
import Ristretta from "./api/ristretta/ristretta.api"
import wowbg from "../images/wowbg.jpg"

const WowStyledSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(255, 125, 10, 0.5),
      rgba(0, 255, 150, 0.5)
    ),
    url(${wowbg}) no-repeat center center / cover;
  display: grid;
  grid-row: 2;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const Wow = () => (
  <WowStyledSection>
    <a id="wow" href="wow" />
    <Meerkats />
    <Ristretta />
  </WowStyledSection>
)

export default Wow
