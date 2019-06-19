import React from "react"
import styled from "styled-components"

const BackDiv = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 100%;
  height: 100%;
  a {
    color: white;
  }
  ul {
    list-style: none;
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    justify-self: left;
    padding: 1rem 3rem;
    font-size: 2.3rem;
    span {
      color: black;
      font-weight: 700;
    }
  }
  h1 {
    font-size: 3rem;
    grid-column: 1 / -1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }
`

const RistrettaBackCard = ({ dungeon, affixes, level, chests, link }) => {
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

export default RistrettaBackCard
