import React, { Component } from "react";
import {Link } from "react-router-dom";
import "bootstrap";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? "show" : "";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Space Explorer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
          >
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </button>
          <div className={"collapse navbar-collapse " + show}>
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link" to="/mars">
                Mars
              </Link>
              <Link className="nav-item nav-link" to="/iss">
                ISS Location
              </Link>
            </div>
          </div>
        </nav>
    );
  }
}
export default Header;
