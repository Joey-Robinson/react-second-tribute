import React from "react"
import styled from "styled-components"
import Meerkats from "./api/meer/meerkatz.api"
import Ristretta from "./api/ristretta/ristretta.api"
import wowbg from "../images/wowbg.jpg"
import pepe from "../images/dancingpepe.gif"

const DancingDiv = styled.div`
  display: block;
  position: relative;
  grid-column: 1 / 3;
  grid-row: 8;
  left: 0;
  bottom: -13px;
  img {
    display: block;
    width: 10rem;
    height: 10rem;
  }
  a {
    display: block;
    width: 10rem;
    height: 10rem;
  }
`

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
    <Meerkats />
    <Ristretta />
    <DancingDiv>
      <a href={pepe} target="_blank" rel="noopener noreferrer">
        <img src={pepe} alt="Dancing Pepe" />
      </a>
    </DancingDiv>
  </WowStyledSection>
)

export default Wow
