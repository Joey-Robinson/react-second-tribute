import React from "react"
import style from "styled-components"

const StyledCard = style.div`
  grid-row: 3;
  grid-column: 2 / 5;
  background: white;
  color: black;
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
    margin: 0;
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
    background: orange;
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

const MeerkatzCard = ({
  name,
  classSpec,
  spec,
  healerRank,
  realmRank,
  realm,
  ilvl,
}) => (
  <StyledCard>
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

export default MeerkatzCard
