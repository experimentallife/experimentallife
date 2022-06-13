import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section id="home" className="hero hero-slider-wrapper hero-style-1">
        <div className="hero-slider">
          <div className="slide">
            <div className="slider-image">
              <img src="" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col col-md-8 col-sm-12 slide-caption">
                  <div className="slide-subtitle">
                    <h4>I Am Alberto Llamocca</h4>
                  </div>
                  <div className="slide-title">
                    <h2>Fullstack Developer</h2>
                  </div>
                  <div className="btns">
                    <a href="#contact" className="theme-btn go-contact-area">
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>Breaking my limiter</p>
        </div>
      </section>
    );
  }
}

export default Banner;
