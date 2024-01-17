import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const OurServices = () => {
  return (
    <>
      <div className="services-area-two pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Software Development & Consulting Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link to="/web-application">Web App Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/web-application">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link to="/mobile-app-service">Mobile App Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/mobile-app-service">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link to="/cloud-devops-serverices">Cloud/DevOps Services</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/cloud-devops-serverices">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link to="/blockchain-development">Blockchain Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/blockchain-development">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link to="/ai-cv-nlp-development">AI/CV/NLP Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/ai-cv-nlp-development">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.HardDrive />
                </div>
                <h3>
                  <Link to="/big-data-analytics">Big Data Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/big-data-analytics">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>
    
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.MousePointer />
                </div>
                <h3>
                  <Link to="/ui-ux">UI & UX</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/ui-ux">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link to="/digital-marketing">Digital Marketing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <Link to="/digital-marketing">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>
           
           {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="1200"
              data-aos-once="false"
            >
               <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.Send />
                </div>
                <h3>
                  <Link to="/service-details">Modern Keyword Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices
