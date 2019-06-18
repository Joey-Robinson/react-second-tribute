import React from "react"
import styled from "styled-components"
import Meerkats from "./api/meer/meerkatz.api"

const WowStyledSection = styled.section`
  background: #e7e0e0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-row: 3;
`

const Wow = () => (
  <WowStyledSection>
    <Meerkats />
  </WowStyledSection>
)

export default Wow
