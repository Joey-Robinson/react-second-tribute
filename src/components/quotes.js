import React from "react"

const niceThings = [
  `The best healer I've ever played with, without a doubt. Always on point with CD's and is
  incredibly knowledgeable. Does a plethora of research ahead of time and always comes prepared for any and all
  content.`,
  `Always willing to do progressively harder and more difficult content, just for the fun of
  it. Can adapt to a variety of situations and very rarely will panic or collapse under pressure.`,
  `Keeps up to date on current meta compositions and is willing to play a variety of healers
  when needed. Can, and often does, make it a point to research individuals while forming a group. Will often
  ensure that people have the latest versions of addons and weakauras.`,
  `Has always been prepared. Both in the consumeable aspect as well as the knowledge aspect. If there's
  something not known, then it will be asked or explained, which goes a long way, especially with new(er) individuals.`,
]

// prettier-ignore
const randomNumber = Math.floor(Math.random() * (niceThings.length))
const Quotes = () => {
  return (
    <div>
      <p>{niceThings[randomNumber]}</p>
    </div>
  )
}

export default Quotes
