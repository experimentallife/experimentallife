import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header" className="site-header header-style-1">
        <nav className="navigation navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                <img src="/logo84x54.png" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
