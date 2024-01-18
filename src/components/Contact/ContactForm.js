import React from "react"

import ContactImg from "../../images/contact-img.png"

const ContactForm = () => {
  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={ContactImg} alt="Contact" />
            </div>

            <div className="col-lg-6 col-md-12">
            <form id="contactFormcontactpage"  className="contactform">
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
      </div>
    </>
  )
}

export default ContactForm
