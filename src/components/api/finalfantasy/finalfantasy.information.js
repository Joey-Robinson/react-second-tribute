import React, { useState } from "react"
import styled from "styled-components"
import choco from "../../../images/cutechoco.gif"

const FFInformationDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(10, 1fr);
  a {
    color: #50131c;
  }
  h1 {
    font-size: 2.5rem;
    margin: 0 3rem;
  }
`

const NameDiv = styled.div`
  align-self: center;
  grid-column: 1 / 4;
  grid-row: 2;
  justify-self: left;
`

const BirthdayDiv = styled.div`
  align-self: center;
  grid-column: 1 / 4;
  grid-row: 3;
  justify-self: left;
`

const ServerDiv = styled.div`
  align-self: center;
  grid-column: 1 / 4;
  grid-row: 4;
  justify-self: left;
`

const ArmoryDiv = styled.div`
  align-self: center;
  grid-column: 1 / 4;
  grid-row: 5;
  justify-self: left;
`

const FreeCompanyDiv = styled.div`
  align-self: center;
  grid-column: 1 / 4;
  grid-row: 6;
  justify-self: left;
`

const AvatarImageDiv = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: right;
  a {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    justify-self: right;

    display: block;
  }
`

const ChocoDiv = styled.div`
  display: block;
  position: relative;
  grid-column: 1 / 3;
  grid-row: 8;
  left: 0;
  bottom: -26.3px;
  img {
    display: block;
    width: 10rem;
    height: 10rem;
  }
`

const FinalFantasyInformation = ({
  name,
  birthday,
  server,
  armory,
  freecompany,
  avatar,
}) => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <FFInformationDiv>
      <NameDiv>
        <h1>Name: {name}</h1>
      </NameDiv>
      <BirthdayDiv>
        <h1>Nameday: {birthday}</h1>
      </BirthdayDiv>
      <ServerDiv>
        <h1>Server: {server}</h1>
      </ServerDiv>
      <ArmoryDiv>
        <h1>
          <a target="_blank" rel="noopener noreferrer" href={armory}>
            Lodestone Link &rarr;
          </a>
        </h1>
      </ArmoryDiv>
      <FreeCompanyDiv>
        <h1>
          <a target="_blank" rel="noopener noreferrer" href={freecompany}>
            Free Company: The Last Homely House
          </a>
        </h1>
      </FreeCompanyDiv>
      <AvatarImageDiv>
        <a target="_blank" rel="noopener noreferrer" href={avatar}>
          <img src={avatar} alt="" />
        </a>
      </AvatarImageDiv>
      <ChocoDiv>
        <img src={choco} alt="" />
      </ChocoDiv>
    </FFInformationDiv>
  )
}

export default FinalFantasyInformation
