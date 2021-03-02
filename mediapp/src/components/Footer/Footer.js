import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <p>Stay tune with us,to recive the latest updates of Medi-APP</p>
        <div className="flex-container">
          <div className="list-container">
            <h2 className="heading">About Us</h2>
            <ul>
              <li>How it works</li>
              <li>Careers</li>
              <li>Investers</li>
              <li>Terms of service</li>
            </ul>
          </div>
          <div className="list-container">
            <h2 className="heading">Contact Us</h2>
            <ul>
              <li>Contact</li>
              <li>Support</li>
              <li>Sponserships</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="list-container">
            <h2 className="heading">Social Media</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="flex-container">
          <div className="app-logo">
            Medi-APP
            <i class="fab fa-medrt"></i>
          </div>
          <div className="year">site design / logo © 2021</div>
          <div className="socila-media">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
