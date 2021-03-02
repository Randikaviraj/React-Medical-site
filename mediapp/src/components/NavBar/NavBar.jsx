import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    click: true,
    page_no: 1,
  };

  handleMenu = () => {
    this.setState({ click: !this.state.click });
  };

  closeMenu = (page_num) => {
    this.setState({ click: true, page_no: page_num });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link className="navbar-logo" to="/" onClick={()=>this.closeMenu(1)}>
              Medi-APP
              <i class="fab fa-medrt"></i>
            </Link>
            <div className="menu-icon" onClick={this.handleMenu}>
              <i
                className={this.state.click ? "fas fa-bars" : "fas fa-times"}
              ></i>
            </div>
            <ul className={!this.state.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    this.state.page_no == 1
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(1)}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    this.state.page_no == 2
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(2)}
                >
                  HOSPITALS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    this.state.page_no == 3
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(3)}
                >
                  DOCTORS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    this.state.page_no == 4
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(4)}
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
