import React, { Component } from "react";
import FlipCard from "../Card/FlipCard";
import "./Hospital.css";

export default class HospitalPage extends Component {
  render() {
    return (
      <div className="hospital-cord-container">
        <div className="hospital-cord">
          <FlipCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6M273NMCcEK9BBFH8SzNatkZk1YZWTDV2w&usqp=CAU"  buttonTitle="CHECK OUT" title="Looking for a hospital?">
              You can find,hospital details by giving the name of hospital.
          </FlipCard>
        </div>
        <div className="hospital-cord">
          <FlipCard imageUrl="https://lh3.googleusercontent.com/proxy/-KdQKOwCaWLLlK7wiIG0vo9bMWwiae3nsrg_RF4ROKdhpZQznc-grVdJSHZyaDTz59xGlzzib31IwX8sH93iDTy5kCF59UsiIRuVBfMlTDjyQFWIplKKKA" buttonTitle="CHECK OUT" title="Looking for a today?">
              Are you looking for doctors available on a specified date ?Checkout with your hospital.
          </FlipCard>
        </div>
      </div>
    );
  }
}
