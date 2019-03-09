import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"
import QuickInfo from "../components/HomePageComponents/QuickInfo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="about us" subtitle="a little about us" />
    </PageHeader>
    <QuickInfo />
  </Layout>
)

export default AboutPage
