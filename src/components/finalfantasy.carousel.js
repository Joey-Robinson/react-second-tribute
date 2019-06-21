import React from "react"
import styled from "styled-components"
import home from "../images/finalfantasybackground.jpg"
import mists from "../images/churningmists.jpg"
import forelands from "../images/dravanianforelands.jpg"
import ffeight from "../images/ffeight.png"
import ffeightteen from "../images/ffeighteen.png"
import ffeleven from "../images/ffeleven.png"
import fffifteen from "../images/fffifteen.png"
import fffive from "../images/fffive.png"
import fffour from "../images/fffour.png"
import fffourteen from "../images/fffourteen.png"
import fffourty from "../images/fffourty.jpg"
import fffourtyfive from "../images/fffourtyfive.jpg"
import fffourtyfour from "../images/fffourtyfour.jpg"
import fffourtyone from "../images/fffourtyone.jpg"
import fffourtyseven from "../images/fffourtyseven.jpg"
import fffourtysix from "../images/fffourtysix.jpg"
import fffourtythree from "../images/fffourtythree.jpg"
import fffourtytwo from "../images/fffourtytwo.jpg"
import ffnine from "../images/ffnine.png"
import ffnineteen from "../images/ffnineteen.jpg"
import ffone from "../images/ffone.jpg"
import ffseven from "../images/ffseven.png"
import ffseventeen from "../images/ffseventeen.png"
import ffsix from "../images/ffsix.png"
import ffsixteen from "../images/ffsixteen.png"
import fften from "../images/fften.png"
import ffthirteen from "../images/ffthirteen.png"
import ffthirty from "../images/ffthirty.jpg"
import ffthirtyeight from "../images/ffthirtyeight.jpg"
import ffthirtyfive from "../images/ffthirtyfive.jpg"
import ffthirtyfour from "../images/ffthirtyfour.jpg"
import ffthirtynine from "../images/ffthirtynine.jpg"
import ffthirtyone from "../images/ffthirtyone.jpg"
import ffthirtyseven from "../images/ffthirtyseven.jpg"
import ffthirtysix from "../images/ffthirtysix.jpg"
import ffthirtythree from "../images/ffthirtythree.jpg"
import ffthirtytwo from "../images/ffthirtytwo.jpg"
import ffthree from "../images/ffthree.png"
import fftwelve from "../images/fftwelve.png"
import fftwenty from "../images/fftwenty.jpg"
import fftwentyeight from "../images/fftwentyeight.jpg"
import fftwentyfive from "../images/fftwentyfive.jpg"
import fftwentyfour from "../images/fftwentyfour.jpg"
import fftwentynine from "../images/fftwentynine.jpg"
import fftwentyone from "../images/fftwentyone.jpg"
import fftwentyseven from "../images/fftwentyseven.jpg"
import fftwentysix from "../images/fftwentysix.jpg"
import fftwentythree from "../images/fftwentythree.jpg"
import fftwentytwo from "../images/fftwentytwo.jpg"
import fftwo from "../images/fftwo.png"
import fish from "../images/fishgotaway.jpg"

import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"

const CarouselContainer = styled.section`
  grid-column: 1;
  grid-row: 5;
  max-height: 100vh;
  height: 100vh;
  padding: 0;
  margin: 0;
  img {
    display: block;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
`

const FinalFantasyCarousel = () => {
  const images = [
    {
      original: home,
      originalAlt: "Final Fantasy House",
      description: "Final Fantasy House",
    },
    {
      original: mists,
      originalAlt: "Churning Mists",
      description: "Churning Mists",
    },
    {
      original: forelands,
      originalAlt: "Dravanian Forelands",
      description: "Dravanian Forelands",
    },
    {
      original: ffeight,
      originalAlt: "Scenic Final Fantasy #8",
      description: "Scenic Final Fantasy #8",
    },
    {
      original: ffeightteen,
      originalAlt: "Scenic Final Fantasy #18",
      description: "Scenic Final Fantasy #18",
    },
    {
      original: ffeleven,
      originalAlt: "Scenic Final Fantasy #11",
      description: "Scenic Final Fantasy #11",
    },
    {
      original: fffifteen,
      originalAlt: "Scenic Final Fantasy #15",
      description: "Scenic Final Fantasy #15",
    },
    {
      original: fffive,
      originalAlt: "Scenic Final Fantasy #5",
      description: "Scenic Final Fantasy #5",
    },
    {
      original: fffour,
      originalAlt: "Scenic Final Fantasy #4",
      description: "Scenic Final Fantasy #4",
    },
    {
      original: fffourteen,
      originalAlt: "Scenic Final Fantasy #14",
      description: "Scenic Final Fantasy #14",
    },
    {
      original: fffourty,
      originalAlt: "Scenic Final Fantasy #40",
      description: "Scenic Final Fantasy #40",
    },
    {
      original: fffourtyfive,
      originalAlt: "Scenic Final Fantasy #45",
      description: "Scenic Final Fantasy #45",
    },
    {
      original: fffourtyfour,
      originalAlt: "Scenic Final Fantasy #44",
      description: "Scenic Final Fantasy #44",
    },
    {
      original: fffourtyone,
      originalAlt: "Scenic Final Fantasy #41",
      description: "Scenic Final Fantasy #41",
    },
    {
      original: fffourtyseven,
      originalAlt: "Scenic Final Fantasy #47",
      description: "Scenic Final Fantasy #47",
    },
    {
      original: fffourtysix,
      originalAlt: "Scenic Final Fantasy #46",
      description: "Scenic Final Fantasy #46",
    },
    {
      original: fffourtythree,
      originalAlt: "Scenic Final Fantasy #43",
      description: "Scenic Final Fantasy #43",
    },
    {
      original: fffourtytwo,
      originalAlt: "Scenic Final Fantasy #42",
      description: "Scenic Final Fantasy #42",
    },
    {
      original: ffnine,
      originalAlt: "Scenic Final Fantasy #9",
      description: "Scenic Final Fantasy #9",
    },
    {
      original: ffnineteen,
      originalAlt: "Scenic Final Fantasy #19",
      description: "Scenic Final Fantasy #19",
    },
    {
      original: ffone,
      originalAlt: "Scenic Final Fantasy #1",
      description: "Scenic Final Fantasy #1",
    },
    {
      original: ffseven,
      originalAlt: "Scenic Final Fantasy #7",
      description: "Scenic Final Fantasy #7",
    },
    {
      original: ffseventeen,
      originalAlt: "Scenic Final Fantasy #17",
      description: "Scenic Final Fantasy #17",
    },
    {
      original: ffsix,
      originalAlt: "Scenic Final Fantasy #6",
      description: "Scenic Final Fantasy #6",
    },
    {
      original: ffsixteen,
      originalAlt: "Scenic Final Fantasy #16",
      description: "Scenic Final Fantasy #16",
    },
    {
      original: fften,
      originalAlt: "Scenic Final Fantasy #10",
      description: "Scenic Final Fantasy #10",
    },
    {
      original: ffthirteen,
      originalAlt: "Scenic Final Fantasy #13",
      description: "Scenic Final Fantasy #13",
    },
    {
      original: ffthirty,
      originalAlt: "Scenic Final Fantasy #30",
      description: "Scenic Final Fantasy #30",
    },
    {
      original: ffthirtyeight,
      originalAlt: "Scenic Final Fantasy #38",
      description: "Scenic Final Fantasy #38",
    },
    {
      original: ffthirtyfive,
      originalAlt: "Scenic Final Fantasy #35",
      description: "Scenic Final Fantasy #35",
    },
    {
      original: ffthirtyfour,
      originalAlt: "Scenic Final Fantasy #34",
      description: "Scenic Final Fantasy #34",
    },
    {
      original: ffthirtynine,
      originalAlt: "Scenic Final Fantasy #39",
      description: "Scenic Final Fantasy #39",
    },
    {
      original: ffthirtyone,
      originalAlt: "Scenic Final Fantasy #31",
      description: "Scenic Final Fantasy #31",
    },
    {
      original: ffthirtyseven,
      originalAlt: "Scenic Final Fantasy #37",
      description: "Scenic Final Fantasy #37",
    },
    {
      original: ffthirtysix,
      originalAlt: "Scenic Final Fantasy #36",
      description: "Scenic Final Fantasy #36",
    },
    {
      original: ffthirtythree,
      originalAlt: "Scenic Final Fantasy #33",
      description: "Scenic Final Fantasy #33",
    },
    {
      original: ffthirtytwo,
      originalAlt: "Scenic Final Fantasy #32",
      description: "Scenic Final Fantasy #32",
    },
    {
      original: ffthree,
      originalAlt: "Scenic Final Fantasy #3",
      description: "Scenic Final Fantasy #3",
    },
    {
      original: fftwelve,
      originalAlt: "Scenic Final Fantasy #12",
      description: "Scenic Final Fantasy #12",
    },
    {
      original: fftwenty,
      originalAlt: "Scenic Final Fantasy #20",
      description: "Scenic Final Fantasy #20",
    },
    {
      original: fftwentyeight,
      originalAlt: "Scenic Final Fantasy #28",
      description: "Scenic Final Fantasy #28",
    },
    {
      original: fftwentyfive,
      originalAlt: "Scenic Final Fantasy #25",
      description: "Scenic Final Fantasy #25",
    },
    {
      original: fftwentyfour,
      originalAlt: "Scenic Final Fantasy #24",
      description: "Scenic Final Fantasy #24",
    },
    {
      original: fftwentynine,
      originalAlt: "Scenic Final Fantasy #29",
      description: "Scenic Final Fantasy #29",
    },
    {
      original: fftwentyone,
      originalAlt: "Scenic Final Fantasy #21",
      description: "Scenic Final Fantasy #21",
    },
    {
      original: fftwentyseven,
      originalAlt: "Scenic Final Fantasy #27",
      description: "Scenic Final Fantasy #27",
    },
    {
      original: fftwentysix,
      originalAlt: "Scenic Final Fantasy #26",
      description: "Scenic Final Fantasy #26",
    },
    {
      original: fftwentythree,
      originalAlt: "Scenic Final Fantasy #23",
      description: "Scenic Final Fantasy #23",
    },
    {
      original: fftwentytwo,
      originalAlt: "Scenic Final Fantasy #22",
      description: "Scenic Final Fantasy #22",
    },
    {
      original: fftwo,
      originalAlt: "Scenic Final Fantasy #2",
      description: "Scenic Final Fantasy #2",
    },
    {
      original: fish,
      originalAlt: "The Fish Got Away",
      description: "THE FISH GOT AWAY! THE FISH GOT AWAY!",
    },
  ]
  return (
    <CarouselContainer>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        lazyLoad={true}
      />
    </CarouselContainer>
  )
}

export default FinalFantasyCarousel
