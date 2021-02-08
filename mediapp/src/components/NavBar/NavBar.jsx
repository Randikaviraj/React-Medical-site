import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    click: true,
  };

  handleMenu = () => {
    this.setState({ click: !this.state.click });
  };

  closeMenu=()=>{
    this.setState({click:true})
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link className="navbar-logo" to="/">
              Medi-APP
              <i class="fab fa-medrt"></i>
            </Link>
            <div className="menu-icon" onClick={this.handleMenu}>
              <i
                className={this.state.click ? "fas fa-bars" : "fas fa-times"}
              ></i>
            </div>
            <ul className={!this.state.click ? "nav-menu active":"nav-menu" }>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={this.closeMenu}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={this.closeMenu}>
                  HOSPITALS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={this.closeMenu}>
                  DOCTORS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={this.closeMenu}>
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
