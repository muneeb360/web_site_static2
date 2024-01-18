import React from "react"

import FreeTrialImg from "../../images/free-trial-img.png"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"

const Newsletter = () => {
  return (
    <>
      <div className="free-trial-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="free-trial-image">
                <img src={FreeTrialImg} alt="Free Trial" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              {/* <div className="free-trial-content">
                <h2>Start your free trial</h2>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your business email here"
                  />
                  <button type="submit">Sign Up Free</button>
                </form>

                <p>
                  Test out the Machine Learning features for 14 days, no credit
                  card required.
                </p>
              </div> */}
               <form id="contactFormcontact"  className="contactform">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Phone number"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                     
                      <select name="subject" class="form-control">
                      <option value="" disabled selected>Select your service model</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                     
                      <select name="subject" class="form-control">
                      <option value="" disabled selected>How did you hear about Invozone</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                        </select>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Message"
                        className="form-control"
                        style={{ resize:"none" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                    <input type="checkbox"
                     id="termsAndConditions"
                      name="termsAndConditions"
                      />
<label for="termsAndConditions">I agree to the Terms and Conditions</label>
                    <br></br>
                  
                    
                  
                    <input type="checkbox"
                     id="termsAndConditions"
                      name="termsAndConditions"
                      />
<label for="termsAndConditions">get NDA</label>
                      </div>
                    </div>
                  

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
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

export default Newsletter
