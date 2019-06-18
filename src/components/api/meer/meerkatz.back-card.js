import React from "react"
import style from "styled-components"

const BackDiv = style.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  ul {
    list-style: none;
  }
  h1 {
    font-size: 3rem;
    grid-column: 1 / -1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }
`

const MeerkatzBackCard = ({ dungeon, affixes, level, chests, link }) => {
  return (
    <BackDiv>
      <h1>Most Recent M+</h1>
      <ul>
        <li>
          <span>Dungeon:</span>
          {dungeon}
        </li>
        <li>
          <span>Affixes:</span>
          {affixes}
        </li>
        <li>
          <span>Level:</span>
          {level}
        </li>
        <li>
          <span>Chests:</span>
          {chests}
        </li>
        <li>
          <span>Link:</span>
          {link}
        </li>
      </ul>
    </BackDiv>
  )
}

export default MeerkatzBackCard
