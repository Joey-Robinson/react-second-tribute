import React from "react"
import styled from "styled-components"
import monk from "../../../images/monk.png"

const styleBG = {
  width: `100%`,
  backgroundImage: `linear-gradient(to right bottom, #00FF96, #FF7D0A), url(${monk})`,
  backgroundRepeat: `no-repeat`,
  gridColumn: `1`,
  gridRow: `1`,
  backgroundSize: `cover`,
  height: `23rem`,
  backgroundBlendMode: `hue`,
  clipPath: `polygon(0 0, 100% 0, 100% 85%, 0 100%)`,
}

const StyledCard = styled.div`
  height: 50rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr repeat(5, 1fr);
  ul {
    list-style: none;
    grid-row: 2 / -1;
    justify-self: center;
    display: grid;
    font-size: 1.8rem;
    padding: 0;
    margin: 1.5rem 0 0 0;
    li {
      padding: 1rem;
    }
    li:not(:last-child) {
      border-bottom: 0.2rem solid #eee;
    }
    span {
      font-weight: bold;
    }
  }
  h4 {
    grid-row: 1;
    font-size: 2.4rem;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    background: #00ff96;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 40%;
    span {
      padding: 1.5rem 2rem;
      box-decoration-break: clone;
    }
  }
`

const RistrettaFrontCard = ({
  name,
  classSpec,
  spec,
  healerRank,
  realmRank,
  realm,
  ilvl,
}) => (
  <StyledCard>
    <div style={styleBG} />
    <h4>
      <span>{name}</span>
    </h4>
    <ul>
      <li>
        <span>Spec:</span> {classSpec} {spec}
      </li>
      <li>
        <span>Healer Realm Rank</span> {healerRank}
      </li>
      <li>
        <span>Realm Rank</span> {realmRank}
      </li>
      <li>
        <span>Realm:</span> {realm}
      </li>
      <li>
        <span>Item Level:</span> {ilvl}
      </li>
    </ul>
  </StyledCard>
)

export default RistrettaFrontCard
