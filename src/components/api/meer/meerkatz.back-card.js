import React from "react"
import styled from "styled-components"

const BackDiv = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  width: 100%;
  a {
    color: white;
  }
  ul {
    font-size: 2.3rem;
    grid-column: 1 / -1;
    grid-row: 2 / -1;
    justify-self: left;
    list-style: none;
    padding: 1rem 3rem;
    span {
      color: black;
      font-weight: 700;
    }
  }
  h1 {
    align-self: center;
    font-size: 3rem;
    grid-column: 1 / -1;
    grid-row: 1;
    justify-self: center;
  }
`

const MeerkatzBackCard = ({ dungeon, affixes, level, chests, link }) => {
  return (
    <BackDiv>
      <h1>Most Recent M+</h1>
      <ul>
        <li>
          <span>Dungeon:</span>&nbsp;
          {dungeon}
        </li>
        <li>
          <span>Affixes:</span>&nbsp;
          {affixes}
        </li>
        <li>
          <span>Level:</span>&nbsp;
          {level}
        </li>
        <li>
          <span>Chests:</span>&nbsp;
          {chests}
        </li>
        <li>
          <span>Link:</span>&nbsp;
          <a href={link} target="_blank" rel="noreferrer noopener">
            Raider.io Link
          </a>
        </li>
      </ul>
    </BackDiv>
  )
}

export default MeerkatzBackCard
