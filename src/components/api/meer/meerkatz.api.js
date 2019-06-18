import React, { useState, useEffect } from "react"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import WowModal from "../../modal"
import MeerkatzFrontCard from "./meerkatz.front-card"
import MeerkatzBackCard from "./meerkatz.back-card"

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

  // Mythic Plus Recent Affixes - For CardBack
  const recentAffixesTop = { ...meerkatsApiCall.mythic_plus_recent_runs }
  const recentAffixesMiddle = recentAffixesTop[0]
  const recentAffixes = { ...recentAffixesMiddle }
  const recent = { ...recentAffixes.affixes }
  const affixName = []
  for (let [key, value] of Object.entries(recent)) {
    affixName.push(
      <p style={{ display: "inline-block" }} key={key}>
        {value.name}&nbsp;
      </p>
    )
  }
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
          affixes={affixName}
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
