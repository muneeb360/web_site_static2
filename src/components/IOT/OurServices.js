import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const OurServices = () => {
  return (
    <>
      <div className="iot-services-area pt-80 pb-50">
        <div className="container justify-content-center">
          <div className="section-title">
            <h2>Industries</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-repair-services bg1">
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>

                <h3>Ecommerce</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed 
                </p>

                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-repair-services bg2">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>Health Tech</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed 
                </p>

                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-repair-services bg3">
                <div className="icon">
                  <i className="flaticon-skyline"></i>
                </div>

                <h3>Ed Tech</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, 
                </p>

                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-repair-services bg4">
                <div className="icon">
                  <i className="flaticon-car-insurance"></i>
                </div>

                <h3>IoT</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed 
                </p>

                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-repair-services bg5">
                <div className="icon">
                  <i className="flaticon-factory"></i>
                </div>

                <h3>CRM</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed 
                </p>

                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-repair-services bg6">
                <div className="icon">
                  <i className="flaticon-chip"></i>
                </div>

                <h3>BlockChain</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed 
                </p>

                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-repair-services bg6">
                <div className="icon">
                  <i className="flaticon-chip"></i>
                </div>

                <h3>On-Demand Services</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed 
                </p>

                <Link to="/service-details">
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices
