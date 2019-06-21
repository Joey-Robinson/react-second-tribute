import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Wow from "../components/wow"
import FinalFantasy from "../components/finalfantasy"
import WowCarousel from "../components/wow.carousel"
import FinalFantasyCarousel from "../components/finalfantasy.carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Wow />
    <WowCarousel />
    <FinalFantasy />
    <FinalFantasyCarousel />
  </Layout>
)

export default IndexPage
