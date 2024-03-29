import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {onPageSetAction} from "../ReduxStore/actions"
import "./NavBar.css";

class NavBar extends Component {
  state = {
    click: true,
  };

  handleMenu = () => {
    this.setState({ click: !this.state.click });
  };

  closeMenu = (page_num) => {
    this.setState({ click: true});
    this.props.onPageSet(page_num)
  };


  render() {
    console.log(this.props.page_no)
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
              >
              </i>
            </div>
            <ul className={!this.state.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    this.props.page_no == 1
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
                  to="/hospitals"
                  className={
                    this.props.page_no == 2
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
                  to="/doctors"
                  className={
                    this.props.page_no == 3
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
                  to="/about"
                  className={
                    this.props.page_no == 4
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

const  mapStateToProps=(state)=>{
  return{
    page_no:state.pageNum
  }
}

const mapDispachToProps=(dispach)=>{
  return{
    onPageSet:(page_no)=>dispach(onPageSetAction(page_no)),
  }
}
export default connect(mapStateToProps,mapDispachToProps)(NavBar);
