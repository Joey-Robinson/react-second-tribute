import React from "react"
import styled from "styled-components"
import dalaran from "../images/legiondalaran.jpg"
import home from "../images/finalfantasybackground.jpg"
import nagrand from "../images/nagrand.jpg"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"

const CarouselContainer = styled.section`
  grid-column: 1;
  max-height: 100vh;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const FavoriteCarousel = () => {
  const images = [
    {
      original: "http://lorempixel.com/1000/600/nature/1/",
    },
    {
      original: "http://lorempixel.com/1000/600/nature/2/",
    },
    {
      original: "http://lorempixel.com/1000/600/nature/3/",
    },
  ]
  return (
    <CarouselContainer>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
      />
    </CarouselContainer>
  )
}

export default FavoriteCarousel
