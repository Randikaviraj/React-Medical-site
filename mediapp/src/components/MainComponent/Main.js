import React from "react";
import {Link} from 'react-router-dom'
import "./Main.css";

export default function Main() {
  return (
    <div className="main-container">
      <video
        src="videos/Doctors.mp4"
        autoplay="true"
        loop="true"
        muted="true"
      />
      <h2 className="main-heading">WELCOME TO MEDI-APP</h2>
      <p className="main-subheading">Let's have a jorney...</p>
      <div className="btn-container">
        <Link to="/hospitals">
        <button className="btn btn-outline">GET STARTED</button>
        </Link>
        <Link to="/about">
        <button className="btn btn-solid">ABOUT US</button>
        </Link>
      </div>
    </div>
  );
}
