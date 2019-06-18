import React, { useState, useEffect } from "react"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import MeerkatzFrontCard from "./meerkatz.front-card"
import WowModal from "../../modal"
import MeerkatzBackCard from "./meerkatz.back-card"
import List from "./list"

const Meerkats = () => {
  const [meerkatsApiCall, setMeerkatsApiCall] = useState({})
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

  // Mythic Plus Recent - For CardBack
  const recentRunsTop = { ...meerkatsApiCall.mythic_plus_recent_runs }
  const recentRunsMiddle = recentRunsTop[0]
  const recentRuns = { ...recentRunsMiddle }

  // const affixesOne = { ...meerkatsApiCall.mythic_plus_recent_runs }
  // const affixesTwo = affixesOne
  // const affixesThree = affixesTwo.affixes
  // console.log(affixesThree)
  // const recentAffixes = []
  // for (let [key, value] of Object.entries(affixesThree)) {
  //   recentAffixes.push(<li>{value.name}</li>)
  // }
  // console.log(recentAffixes)
  return (
    <Flippy
      style={{
        gridColumn: "2 / 5",
        gridRow: "3",
        height: "52em",
        width: `100%`,
      }}
      flipOnHover={true}
      flipOnClick={false}
      flipDirection="horizontal"
    >
      <FrontSide style={{ background: "white", height: "52em", width: `100%` }}>
        <MeerkatzFrontCard
          name={meerkatsApiCall.name}
          spec={meerkatsApiCall.class}
          classSpec={meerkatsApiCall.active_spec_name}
          realm={meerkatsApiCall.realm}
          ilvl={itemLevel}
          healerRank={healerRank.realm}
          realmRank={realmRank.realm}
        />
      </FrontSide>
      <BackSide
        style={{
          color: "white",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          background: "white",
          height: "100%",
          width: "100%",
          backgroundImage: `linear-gradient(to right bottom, #00FF96, #FF7D0A)`,
        }}
      >
        <MeerkatzBackCard
          dungeon={recentRuns.dungeon}
          level={recentRuns.mythic_level}
          chests={recentRuns.num_keystone_upgrades}
          link={recentRuns.url}
        />
        <WowModal />
      </BackSide>
    </Flippy>
  )
}

export default Meerkats
