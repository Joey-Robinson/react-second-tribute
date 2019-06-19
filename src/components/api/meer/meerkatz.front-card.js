import React from "react"
import styled from "styled-components"
import druid from "../../../images/druid.png"

const styleBG = {
  backgroundBlendMode: `hue`,
  backgroundImage: `linear-gradient(to right bottom, #FF7D0A, #e7e0e0), url(${druid})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  clipPath: `polygon(0 0, 100% 0, 100% 85%, 0 100%)`,
  gridColumn: `1`,
  gridRow: `1`,
  height: `23rem`,
  width: `100%`,
}

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr repeat(5, 1fr);
  height: 50rem;
  ul {
    display: grid;
    font-size: 1.8rem;
    grid-row: 2 / -1;
    justify-self: center;
    list-style: none;
    margin: 1.5rem 0 0 0;
    padding: 0;
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
    background: orange;
    color: #fff;
    font-size: 2.4rem;
    grid-row: 1;
    text-transform: uppercase;
    text-align: right;
    position: absolute;
    right: 2rem;
    top: 12rem;
    width: 40%;
    span {
      box-decoration-break: clone;
      padding: 1.5rem 2rem;
    }
  }
`

const MeerkatzFrontCard = ({
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

export default MeerkatzFrontCard
