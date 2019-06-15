import React, { useState, useEffect } from "react"
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

  const itemLevelGear = { ...meerkatsApiCall.gear }
  const itemLevel = itemLevelGear.item_level_equipped

  return (
    <MeerkatzCard
      name={meerkatsApiCall.name}
      spec={meerkatsApiCall.class}
      classSpec={meerkatsApiCall.active_spec_name}
      realm={meerkatsApiCall.realm}
      ilvl={itemLevel}
    />
  )
}

export default Meerkats
