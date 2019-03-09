import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton, SectionButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery-1"
import Menu from "../components/HomePageComponents/Menu"
import { Link } from "gatsby"
import "../components/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Link to="/menu/" style={{ textDecoration: "none" }}>
        <Banner title="eatery" subtitle="14 church st, ashok nagar, bengaluru">
          <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
        </Banner>
      </Link>
    </HomeHeader>
    <QuickInfo />
    <Link to="/about/" style={{ textDecoration: "none" }}>
      <SectionButton style={{ margin: "0 auto 2rem auto" }}>
        about
      </SectionButton>
    </Link>
    <Gallery />
    <Menu />
    <Link to="/menu/" style={{ textDecoration: "none" }}>
      <SectionButton style={{ margin: "0 auto 4rem auto" }}>menu</SectionButton>
    </Link>
  </Layout>
)

export default IndexPage
