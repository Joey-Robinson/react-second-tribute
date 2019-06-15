import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Wow from "../components/wow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Wow />
  </Layout>
)

export default IndexPage
