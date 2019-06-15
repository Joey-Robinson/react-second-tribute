import React from "react"
import style from "styled-components"
import Meerkats from "./api/meer/meerkatz.api"

const WowStyledSection = style.section`
  background: #e7e0e0;
  display: grid;
  grid-column: 1;
  grid-row: 3;
`

const Wow = () => (
  <WowStyledSection>
    <h1>From the Wow component</h1>
    <Meerkats />
  </WowStyledSection>
)

export default Wow
