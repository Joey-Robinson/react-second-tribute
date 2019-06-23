import React from "react"
import styled from "styled-components"
import dalaran from "../images/legiondalaran.jpg"
import nagrand from "../images/nagrand.jpg"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import gorgrond from "../images/gorgrond.jpg"
import krasarang from "../images/karasang.jpg"
import kunlai from "../images/kunlai.jpg"
import nagrandone from "../images/nagrandone.jpg"
import nagrandtwo from "../images/nagrandtwo.jpg"
import nagrandthree from "../images/nagrandthree.jpg"
import smv from "../images/shadowmoonvalley.jpg"
import smvone from "../images/shadowmoonvalleytwo.jpg"
import smvtwo from "../images/shadowmoonvalleytwo.jpg"
import spires from "../images/spiresofarak.jpg"
import spirestwo from "../images/spiresofarakone.jpg"
import spiresthree from "../images/spiresofaraktwo.jpg"
import talador from "../images/talador.jpg"
import taladorone from "../images/taladorone.jpg"
import taladortwo from "../images/taladortwo.jpg"
import vale from "../images/vale.jpg"
import visitor from "../images/visitor.jpg"
import wodnagrand from "../images/wodnagrand.jpg"
import zang from "../images/zangarmarsh.jpg"
import valeold from "../images/valeold.jpg"
import jarod from "../images/jarodisthebest.jpg"

const CarouselContainer = styled.section`
  grid-column: 1;
  grid-row: 3;
  max-height: 100vh;
  height: 100vh;
  padding: 0;
  margin: 0;
  img {
    display: block;
    width: 100vw;
    max-height: 100vh;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
`

const WowCarousel = () => {
  const images = [
    {
      original: visitor,
      originalAlt: "A visitor in a strange place",
      description: "A visitor",
    },
    {
      original: nagrand,
      originalAlt: "Legion Nagrand",
      description: "Legion Nagrand",
    },
    {
      original: gorgrond,
      originalAlt: "Gorgrond",
      description: "Gorgrond",
    },
    {
      original: dalaran,
      originalAlt: "Legion Dalaran",
      description: "Legion Dalaran",
    },
    {
      original: krasarang,
      originalAlt: "Krasarang Wilds",
      description: "Krasarang Wilds",
    },
    {
      original: kunlai,
      originalAlt: "Kunlai Summit",
      description: "Kunlai Summit",
    },
    {
      original: nagrandone,
      originalAlt: "Legion Nagrand One",
      description: "Legion Nagrand #1",
    },
    {
      original: nagrandtwo,
      originalAlt: "Legion Nagrand Two",
      description: "Legion Nagrand #2",
    },
    {
      original: nagrandthree,
      originalAlt: "Legion Nagrand Three",
      description: "Legion Nagrand #3",
    },
    {
      original: smv,
      originalAlt: "Shadowmoon Valley One",
      description: "Shadowmoon Valley #1",
    },
    {
      original: smvone,
      originalAlt: "Shadowmoon Valley Two",
      description: "Shadowmoon Valley #2",
    },
    {
      original: smvtwo,
      originalAlt: "Shadowmoon Valley Three",
      description: "Shadowmoon Valley #3",
    },
    {
      original: spires,
      originalAlt: "Spires Of Arak",
      description: "Spires Of Arak #1",
    },
    {
      original: spirestwo,
      originalAlt: "Spires Of Arak Two",
      description: "Spires Of Arak #2",
    },
    {
      original: spiresthree,
      originalAlt: "Spires Of Arak Three",
      description: "Spires Of Arak #3",
    },
    {
      original: talador,
      originalAlt: "Talador",
      description: "Talador #1",
    },
    {
      original: taladorone,
      originalAlt: "Talador Two",
      description: "Talador #2",
    },
    {
      original: taladortwo,
      originalAlt: "Talador Three",
      description: "Talador #3",
    },
    {
      original: vale,
      originalAlt: "Vale Of Eternal Blossoms - Post 5.4",
      description: "Vale Of Eternal Blossoms - Post 5.4",
    },
    {
      original: valeold,
      originalAlt: "Vale Of Eternal Blossoms - Pre 5.4",
      description: "Vale Of Eternal Blossoms - Pres 5.4",
    },
    {
      original: wodnagrand,
      originalAlt: "Draenor Nagrand",
      description: "Draenor Nagrand",
    },
    {
      original: zang,
      originalAlt: "Zangarmarsh",
      description: "Zangarmarsh",
    },
    {
      original: jarod,
      originalAlt: "Jarod Shadowsong",
      description: "Jarod Shadowsong Is LITERALLY The Best NPC. EVER.",
    },
  ]
  return (
    <CarouselContainer>
      <a id="wow-carousel" href="wowcarousel"></a>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        lazyLoad={true}
      />
    </CarouselContainer>
  )
}

export default WowCarousel
