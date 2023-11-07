import React, { Component } from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import PartnerImg1 from "../../images/partner-img/icons8-node-js-48.png"
import PartnerHoverImg1 from "../../images/partner-img/icons8-node-js-48.png"
import PartnerImg2 from "../../images/partner-img/icons8-.net-framework-48.png"
import PartnerHoverImg2 from "../../images/partner-img/icons8-.net-framework-48.png"
import PartnerImg3 from "../../images/partner-img/icons8-react-native-48.png"
import PartnerHoverImg3 from "../../images/partner-img/icons8-react-native-48.png"
import PartnerImg4 from "../../images/partner-img/icons8-ruby-48.png"
import PartnerHoverImg4 from "../../images/partner-img/icons8-ruby-48.png"
import PartnerImg5 from "../../images/partner-img/django_icon.png"
import PartnerHoverImg5 from "../../images/partner-img/django_icon.png"
import PartnerImg6 from "../../images/partner-img/icons8-angular-48.png"
import PartnerHoverImg6 from "../../images/partner-img/icons8-angular-48.png"
import PartnerImg7 from "../../images/partner-img/icons8-vue-js-48.png"
import PartnerHoverImg7 from "../../images/partner-img/icons8-vue-js-48.png"
import mobileappimage1 from "../../images/partner-img/swift_mobile_app.png"
import flutterimage2 from "../../images/partner-img/flutter_icon.png"
import mobileimageionic from "../../images/partner-img/Ionic_icon.png"
import mobileimageclanguage from "../../images/partner-img/c_langauge.png"
import blockchainimage1 from "../../images/partner-img/blockchain_p.png"
import blockchainimage2 from "../../images/partner-img/ethereum.png"
import blockchainimage3 from "../../images/partner-img/cardano_logo.png"
import ainplmlimage from "../../images/partner-img/tensorflow_logo.png"
import ainplmlimage2 from "../../images/partner-img/chatgptimage.png"
import phythonlogo from "../../images/partner-img/phytonlogo.png"
import gcplogoimg from "../../images/partner-img/gcp_logo.png"
import gcplogoimg2 from "../../images/partner-img/azure.png"
import gcplogoimg23 from "../../images/partner-img/aws_logo.png"


class PricingStyleFour extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabs_item")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByTagName("li")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "")
    }

    document.getElementById(tabNmae).style.display = "block"
    evt.currentTarget.className += "current"
  }

  render() {
    return (
      <>
        <div className="pricing-area pb-50">
          <div className="container">
            <div className="section-title">
              <h2>Technologies We Work</h2>
              <div className="bar"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="tab pricing-tab bg-color">
              <ul className="tabs">
              <li
                  className="current"
                  onClick={e => this.openTabSection(e, "tab1")}
                  aria-hidden="true"
                >
                  Web
                </li>

                <li
                  onClick={e => this.openTabSection(e, "tab2")}
                  aria-hidden="true"
                >
                  Mobile App
                </li>
                <li
                  onClick={e => this.openTabSection(e, "tab3")}
                  aria-hidden="true"
                >
                  AI/ML/CV/NLP
                </li>
                <li
                  onClick={e => this.openTabSection(e, "tab4")}
                  aria-hidden="true"
                >
                  Cloud
                </li>
                <li
                  onClick={e => this.openTabSection(e, "tab5")}
                  aria-hidden="true"
                >
                  BlockChain
                </li>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                     <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
                        <div className="container">
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            breakpoints={{
                              0: {
                                slidesPerView: 2,
                              },
                              768: {
                                slidesPerView: 4,
                              },
                              1200: {
                                slidesPerView: 6,
                              },
                            }}
                            autoplay={{
                              delay: 6500,
                              disableOnInteraction: true,
                              pauseOnMouseEnter: true,
                            }}
                            modules={[Autoplay]}
                            className="partner-slides"
                          >
                            <SwiperSlide className="single-ml-partner">
                              <img src={PartnerImg1} alt="Partner" />
                              <img src={PartnerHoverImg1} alt="Partner" />
                            </SwiperSlide>

                            <SwiperSlide className="single-ml-partner">
                              <img src={PartnerImg2} alt="Partner" />
                              <img src={PartnerHoverImg2} alt="Partner" />
                            </SwiperSlide>

                            <SwiperSlide className="single-ml-partner">
                              <img src={PartnerImg3} alt="Partner" />
                              <img src={PartnerHoverImg3} alt="Partner" />
                            </SwiperSlide>

                            <SwiperSlide className="single-ml-partner">
                              <img src={PartnerImg4} alt="Partner" />
                              <img src={PartnerHoverImg4} alt="Partner" />
                            </SwiperSlide>

                            <SwiperSlide className="single-ml-partner">
                              <img src={PartnerImg5} alt="Partner" />
                              <img src={PartnerHoverImg5} alt="Partner" />
                            </SwiperSlide>

                            <SwiperSlide className="single-ml-partner">
                              <img src={PartnerImg6} alt="Partner" />
                              <img src={PartnerHoverImg6} alt="Partner" />
                            </SwiperSlide>

                            <SwiperSlide className="single-ml-partner">
                              <img src={PartnerImg7} alt="Partner" />
                              <img src={PartnerHoverImg7} alt="Partner" />
                            </SwiperSlide>
                            <SwiperSlide className="single-ml-partner">
                              <img src={phythonlogo} alt="Partner" />
                              <img src={phythonlogo} alt="Partner" />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                    </div>
                </div>

                <div id="tab2" className="tabs_item">
                <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
                    <div className="container">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                          0: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 4,
                          },
                          1200: {
                            slidesPerView: 6,
                          },
                        }}
                        autoplay={{
                          delay: 6500,
                          disableOnInteraction: true,
                          pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay]}
                        className="partner-slides"
                      >
                        <SwiperSlide className="single-ml-partner">
                          <img src={mobileappimage1} alt="Partner" />
                          <img src={mobileappimage1} alt="Partner" />
                        </SwiperSlide>

                      
                        <SwiperSlide className="single-ml-partner">
                          <img src={PartnerHoverImg3} alt="Partner" />
                          <img src={PartnerHoverImg3} alt="Partner" />
                        </SwiperSlide>

                        <SwiperSlide className="single-ml-partner">
                          <img src={flutterimage2} alt="Partner" />
                          <img src={flutterimage2} alt="Partner" />
                        </SwiperSlide>
                      
                      <SwiperSlide className="single-ml-partner">
                          <img src={mobileimageionic} alt="Partner" />
                          <img src={mobileimageionic} alt="Partner" />
                        </SwiperSlide>
                        <SwiperSlide className="single-ml-partner">
                          <img src={mobileimageclanguage} alt="Partner" />
                          <img src={mobileimageclanguage} alt="Partner" />
                        </SwiperSlide>
                      </Swiper>
                      
                    </div>
                  </div>
                </div>
              </div>

             
                <div id="tab3" className="tabs_item">
                <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
                    <div className="container">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                          0: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 4,
                          },
                          1200: {
                            slidesPerView: 6,
                          },
                        }}
                        autoplay={{
                          delay: 6500,
                          disableOnInteraction: true,
                          pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay]}
                        className="partner-slides"
                      >
                        <SwiperSlide className="single-ml-partner">
                          <img src={ainplmlimage} alt="Partner" />
                          <img src={ainplmlimage} alt="Partner" />
                        </SwiperSlide>
                        <SwiperSlide className="single-ml-partner">
                          <img src={ainplmlimage2} alt="Partner" />
                          <img src={ainplmlimage2} alt="Partner" />
                        </SwiperSlide>
                        <SwiperSlide className="single-ml-partner">
                          <img src={phythonlogo} alt="Partner" />
                          <img src={phythonlogo} alt="Partner" />
                        </SwiperSlide>

                      </Swiper>
                    </div>
                  </div> 
                  </div>
                

                <div id="tab4" className="tabs_item">
                <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
        <div className="container">
         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide className="single-ml-partner">
              <img src={gcplogoimg} alt="Partner" />
              <img src={gcplogoimg} alt="Partner" />
            </SwiperSlide>
            <SwiperSlide className="single-ml-partner">
              <img src={gcplogoimg2} alt="Partner" />
              <img src={gcplogoimg2} alt="Partner" />
            </SwiperSlide>
            <SwiperSlide className="single-ml-partner">
              <img src={gcplogoimg23} alt="Partner" />
              <img src={gcplogoimg23} alt="Partner" />
            </SwiperSlide>
            
          
          </Swiper> 
        </div>
      </div>
                </div>
                <div id="tab5" className="tabs_item">
                <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
                  <div className="container">
                  <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 4,
                        },
                        1200: {
                          slidesPerView: 6,
                        },
                      }}
                      autoplay={{
                        delay: 6500,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                      }}
                      modules={[Autoplay]}
                      className="partner-slides"
                    >
                      <SwiperSlide className="single-ml-partner">
                        <img src={blockchainimage1} alt="Partner" />
                        <img src={blockchainimage1} alt="Partner" />
                      </SwiperSlide>
                      <SwiperSlide className="single-ml-partner">
                        <img src={blockchainimage2} alt="Partner" />
                        <img src={blockchainimage2} alt="Partner" />
                      </SwiperSlide>
                      
                      <SwiperSlide className="single-ml-partner">
                        <img src={blockchainimage3} alt="Partner" />
                        <img src={blockchainimage3} alt="Partner" />
                      </SwiperSlide>
                    
                    </Swiper> 
                    
                  </div>
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
}

export default PricingStyleFour
