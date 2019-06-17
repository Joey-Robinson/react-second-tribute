import React, { useState, useEffect } from "react"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import MeerkatzCard from "./meerkatz.card"

const Meerkats = () => {
  const [meerkatsApiCall, setMeerkatsApiCall] = useState([])
  useEffect(() => {
    fetch(
      "https://raider.io/api/v1/characters/profile?region=us&realm=Burning%20Blade&name=Meerkatz&fields=gear%2Cmythic_plus_recent_runs%2Cmythic_plus_ranks%2Cmythic_plus_best_runs%2Cmythic_plus_highest_level_runs%2Cmythic_plus_weekly_highest_level_runs"
    )
      .then(data => data.json())
      .then(response => setMeerkatsApiCall(response))
  }, [])
  console.log(meerkatsApiCall)

  // Item Level Query
  const itemLevelGear = { ...meerkatsApiCall.gear }
  const itemLevel = itemLevelGear.item_level_equipped

  // Healer Rank Query
  const healerRankTop = { ...meerkatsApiCall.mythic_plus_ranks }
  const healerRankMiddle = healerRankTop.class_healer
  const healerRank = { ...healerRankMiddle }

  // Realm Rank Query
  const realmRankTop = { ...meerkatsApiCall.mythic_plus_ranks }
  const realmRankMiddle = realmRankTop.class
  const realmRank = { ...realmRankMiddle }

  const styles = {
    background: "black",
  }

  return (
    <Flippy
      style={{ gridColumn: "2 / 5", gridRow: "3", height: "52em" }}
      flipOnHover={true}
      flipOnClick={false}
      flipDirection="horizontal"
    >
      <FrontSide style={{ background: "white", height: "52em" }}>
        <MeerkatzCard
          name={meerkatsApiCall.name}
          spec={meerkatsApiCall.class}
          classSpec={meerkatsApiCall.active_spec_name}
          realm={meerkatsApiCall.realm}
          ilvl={itemLevel}
          healerRank={healerRank.realm}
          realmRank={realmRank.realm}
        />
      </FrontSide>
      <BackSide style={{ background: "white", height: "52em" }}>wewow</BackSide>
    </Flippy>
  )
}

export default Meerkats
