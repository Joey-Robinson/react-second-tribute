import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pepefour from "../images/pepefour.png"
import shocked from "../images/shock.gif"

const ResourcesMessage = styled.section`
  grid-row: 1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-image: linear-gradient(
    to right top,
    #e7e0e0,
    #ebe6e7,
    #efebed,
    #f4f1f3,
    #f8f7f8,
    #f7f6f7,
    #f5f5f5,
    #f4f4f4,
    #ececec,
    #e3e3e3,
    #dbdbdb,
    #d3d3d3
  );
  h1 {
    justify-self: center;
    align-self: center;
    font-size: 2.5rem;
  }
`

const FFLayout = styled.section`
  grid-column: 1 / -1;
  grid-row: 2;
  padding: 1.5rem;
  margin: 0;
  background-image: linear-gradient(
    to right top,
    #e7e0e0,
    #ebe6e7,
    #efebed,
    #f4f1f3,
    #f8f7f8,
    #f7f6f7,
    #f5f5f5,
    #f4f4f4,
    #ececec,
    #e3e3e3,
    #dbdbdb,
    #d3d3d3
  );

  div {
    padding: 1.5rem;
  }
  a,
  p {
    font-size: 2rem;
    color: black;
  }
`

const WowLayout = styled.section`
  background-image: linear-gradient(
    to right top,
    #e7e0e0,
    #ebe6e7,
    #efebed,
    #f4f1f3,
    #f8f7f8,
    #f7f6f7,
    #f5f5f5,
    #f4f4f4,
    #ececec,
    #e3e3e3,
    #dbdbdb,
    #d3d3d3
  );

  grid-column: 1 / -1;
  grid-row: 3;
  padding: 1.5rem;
  margin: 0;
  div {
    padding: 1.5rem;
  }
  a,
  p {
    font-size: 2rem;
    color: black;
  }
`

const ffresources = [
  {
    link: "http://garlandtools.org/",
    name: "Garland Tools",
    description: "An unofficial resource & DB for FF14.",
  },
  {
    link: "http://en.ff14housing.com/",
    name: "FF14 Housing",
    description: "Check what ingame items look like.",
  },
  {
    link: "http://www.ffxivgardening.com/",
    name: "FF14 Gardening",
    description: "For all of your FF14 Gardening Needs.",
  },
  {
    link: "https://ffxivteamcraft.com/search",
    name: "FF14 Teamcraft",
    description: "Make and share lists for various projects.",
  },
  {
    link: "https://ffxivcrafting.com/crafting",
    name: "Crafting As A Service",
    description: "Crafting as a serivce. Everything you need for your craft.",
  },
  {
    link: "http://ffxiv.ariyala.com/",
    name: "Materia Toolkit",
    description: "Test materia values against current gear.",
  },
  {
    link: "http://ff14angler.com/",
    name: "FF14 Angler",
    description: "All things related to FF14 fishing.",
  },
  {
    link: "http://tolkiengateway.net/wiki/Rivendell",
    name: "The Last Homely House",
    description: "Free Company namesake",
  },
]

const wowresources = [
  {
    link: "https://www.wowhead.com/",
    name: "wowhead",
    description: "Search for items, quests, gear, and more.",
  },
  {
    link: "https://mythicpl.us/",
    name: "mythicplus",
    description: "See what this & next weeks affixes are.",
  },
  {
    link: "https://wago.io/",
    name: "Wago",
    description: "Search for WeakAuras.",
  },
  {
    link: "https://wow.curseforge.com/addons",
    name: "Curse",
    description: "Search for & download addons",
  },
  {
    link: "https://us.forums.blizzard.com/en/wow/",
    name: "Official WoW Forums",
    description: "Official WoW Forums",
  },
  {
    link: "https://www.reddit.com/r/CompetitiveWoW/",
    name: "Competitive WoW Subreddit",
    description: "Subreddit for competitive wow",
  },
  {
    link: "https://raider.io/mythic-dungeon-international/spring-2019-finals",
    name: "Raiderio",
    description: "Homepage for raiderio",
  },
  {
    link: "https://www.twitch.tv/directory/game/World%20of%20Warcraft",
    name: "Twitch.tv WoW directory",
    description: "Twitch for WoW. Watch popular streamer(s) do m+",
  },
]

const ShockedDiv = styled.div`
  grid-row: 4;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
`

const imagestyles = {
  position: "absolute",
  left: "0",
  bottom: "0",
  width: "2rem",
  height: "2rem",
}

const Resources = () => (
  <Layout>
    <SEO title="Resources" />
    <ResourcesMessage>
      <h1>This is the resources page!</h1>
      <img style={imagestyles} src={pepefour} alt="Cute Pepe Four" />
    </ResourcesMessage>
    <FFLayout>
      {ffresources.map(info => (
        <div key={info.name}>
          <a href={info.link}>{info.name}</a>
          <p>{info.description}</p>
        </div>
      ))}
    </FFLayout>
    <WowLayout>
      {wowresources.map(info => (
        <div key={info.name}>
          <a href={info.link}>{info.name}</a>
          <p>{info.description}</p>
        </div>
      ))}
    </WowLayout>
    <ShockedDiv>
      <img src={shocked} alt="Shocked Cat" />
    </ShockedDiv>
  </Layout>
)

export default Resources
