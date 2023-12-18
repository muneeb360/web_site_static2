import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleFour from "../components/_App/NavbarStyleFour"
import MainBanner from "../components/MachineLearning/MainBanner"
import Partner from "../components/MachineLearningTwo/Partner"
import WhatWeOffer from "../components/MachineLearningTwo/WhatWeOffer"
import AboutUsContent from "../components/MachineLearningTwo/AboutUsContent"
import OurServices from "../components/MachineLearningTwo/OurServices"
import FunFactsArea from "../components/Common/FunFactsArea"
import Projects from "../components/MachineLearningTwo/Projects"
import PricingStyleFour from "../components/PricingPlans/PricingStyleFour"
import TechnologyWeWork from "../components/MachineLearningTwo/TechnologyWeWork"
import FeedbackStyleFour from "../components/Common/FeedbackStyleFour"
import BlogCard from "../components/MachineLearningTwo/BlogCard"
import Newsletter from "../components/Common/Newsletter"
import Footer from "../components/_App/Footer"
import Services from "../components/BigdataAnalytics/Services"
import Navbar from "../components/_App/Navbar"
import OurServicesN from "../components/IOT/OurServices"
import OurServicess from "../components/ITStartupTwo/OurServices"

const MachineLearningHomePage2 = () => (
  <Layout>
     <Navbar />
    {/* <NavbarStyleFour /> */}
    <MainBanner />
    
    {/* <Partner /> */}
    {/* <WhatWeOffer /> */}
    <OurServicess />
    <AboutUsContent />
    {/* <Services /> */}
    
   <OurServicesN />
    <FunFactsArea />
    <Projects />
    <PricingStyleFour />
    <FeedbackStyleFour />
    {/* <BlogCard /> */}
    <Newsletter />
    {/* <TechnologyWeWork /> */}
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Machine Learning 2" />

export default MachineLearningHomePage2
