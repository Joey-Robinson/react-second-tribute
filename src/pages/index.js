import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Wow from "../components/wow"
import FinalFantasy from "../components/finalfantasy"
import FavoriteCarousel from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Wow />
    <FinalFantasy />
    <FavoriteCarousel />
  </Layout>
)

export default IndexPage
