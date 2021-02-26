import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import LandingPage from "../Screens/LandingPage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
  </Layout>
)

export default IndexPage
