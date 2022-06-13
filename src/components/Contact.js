import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div
        id="contact"
        className="contact-page-area section-padding go-contact-area"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <div className="contact-page-item">
                <h2>My Contacts</h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <div className="adress">
                  <h3>Address</h3>
                  <span>245 King Street, Touterie Victoria 8520 Australia</span>
                </div>
                <div className="phone">
                  <h3>Phone</h3>
                  <span>+51 991860232</span>
                </div>
                <div className="email">
                  <h3>Email</h3>
                  <span>contact@experimentallife.dev</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7">
              <div className="contact-area contact-area-2 contact-area-3">
                <h2>Quick Contact Form</h2>
                <div className="contact-form">
                  <form
                    method="post"
                    className="contact-validation-active"
                    id="contact-form"
                  >
                    <div className="half-col">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="half-col">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="half-col">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="half-col">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control"
                        name="note"
                        id="note"
                        placeholder="Your Massage..."
                      ></textarea>
                    </div>
                    <div className="submit-btn-wrapper">
                      <button type="submit" className="theme-btn-s3">
                        Submit
                      </button>
                      <div id="loader">
                        <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                      </div>
                    </div>
                    <div className="clearfix error-handling-messages">
                      <div id="success">Thank you</div>
                      <div id="error">
                        Error occurred while sending email. Please try again
                        later.
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
