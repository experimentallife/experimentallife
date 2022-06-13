import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-image">
                <a href="index.html">
                  <img src="" alt="" />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-sub">
                <p>
                  <i className="fa fa-copyright"></i>Copyright - 2020
                  <span> Developed with &#10084;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
