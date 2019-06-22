import React, { useState, useEffect } from "react"
import FinalFantasyInformation from "./finalfantasy.information"

const FinalFantasyMeer = () => {
  const [finalFantasyCall, setFinalFantasyCall] = useState({})
  useEffect(() => {
    fetch("https://xivapi.com/Character/10803092?key=e6a0198acbbf45bda79ab685")
      .then(data => data.json())
      .then(response => setFinalFantasyCall(response))
  }, [])

  const meerkatsCompareTop = { ...finalFantasyCall.Character }
  const name = meerkatsCompareTop.Name
  const avatar = meerkatsCompareTop.Portrait
  const birthday = meerkatsCompareTop.Nameday
  const server = meerkatsCompareTop.Server
  const armory = "https://na.finalfantasyxiv.com/lodestone/character/10803092/"
  const freecompany =
    "https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/"

  return (
    <div>
      <FinalFantasyInformation
        name={name}
        avatar={avatar}
        birthday={birthday}
        server={server}
        armory={armory}
        freecompany={freecompany}
      />
    </div>
  )
}

export default FinalFantasyMeer
