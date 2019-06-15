import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"

const MeerkatzCard = ({ name, type }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div onMouseEnter={() => setIsFlipped(!isFlipped)}>
      <ReactCardFlip
        isFlipped={() => setIsFlipped(!isFlipped)}
        flipDirection="vertical"
      >
        <div key="front">{name}</div>

        <div key="back">{type}</div>
      </ReactCardFlip>
    </div>
  )
}

export default MeerkatzCard
