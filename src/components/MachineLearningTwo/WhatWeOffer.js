import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Icon4 from "../../images/icon4.png"
import Icon5 from "../../images/icon5.png"
import Icon6 from "../../images/icon6.png"
import Icon7 from "../../images/icon7.png"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const WhatWeOffer = () => {
  return (
    <>
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What We Offer</span>
            <h2>Software Development & Consulting Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon4} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Web Application Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon5} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Mobile App Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Cloud/DevOps Services</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Blockchain Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">AI/CV/NLP Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Computer Vision</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Natural Language Processing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div> */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Big Data Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">UI & UX</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Icon" />
                </div>
                <h3>
                  <Link to="/service-details">Digital Marketing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link to="/service-details" className="learn-more-btn">
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
            
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
