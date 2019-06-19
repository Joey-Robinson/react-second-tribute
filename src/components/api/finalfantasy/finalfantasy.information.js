import React from "react"
import styled from "styled-components"

const FFInformationDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  a {
    color: white;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0 3rem;
  }
  span {
    grid-column: 3 / 6;
    display: block;
    height: 100%;
    grid-row: 1 / -1;
    justify-self: right;
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

const FinalFantasyInformation = ({
  name,
  birthday,
  server,
  armory,
  freecompany,
  avatar,
}) => (
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
        <a href={armory}>Lodestone Link &rarr;</a>
      </h1>
    </ArmoryDiv>
    <FreeCompanyDiv>
      <h1>
        <a href={freecompany}>Free Company: The Last Homely House</a>
      </h1>
    </FreeCompanyDiv>
    <AvatarImageDiv>
      <a href={avatar}>
        <img src={avatar} alt="" />
      </a>
    </AvatarImageDiv>
  </FFInformationDiv>
)

export default FinalFantasyInformation
