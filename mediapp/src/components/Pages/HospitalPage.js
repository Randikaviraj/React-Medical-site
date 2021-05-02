import React, { Component } from "react";
import FlipCard from "../Card/FlipCard";
import TextField from "@material-ui/core/TextField";
import "./Hospital.css";

export default class HospitalPage extends Component {
  render() {
    return (
      <div className="hospital-cord-container">
        <div className="hospital-cord">
          <FlipCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6M273NMCcEK9BBFH8SzNatkZk1YZWTDV2w&usqp=CAU"
            buttonTitle="CHECK OUT"
            title="Looking for a hospital?"
            Typography="You can find,hospital details by giving the name of hospital."
          >
            <TextField
              id="outlined-basic"
              label="Hospital Name"
              variant="outlined"
              style={{ marginTop: "0.4em" }}
            />
          </FlipCard>
        </div>
        <div className="hospital-cord">
          <FlipCard
            imageUrl="https://www.lankahospitals.com/wp-content/uploads/2020/11/LH_consultation_2560x1000_02d.jpg"
            buttonTitle="CHECK OUT"
            title="Looking for a today?"
            Typography="Are you looking for doctors available on a specified date ?Checkout with your hospital."
          >
            <TextField
              id="outlined-basic"
              label="Hospital Name"
              variant="outlined"
              style={{ marginTop: "0.4em" }}
            />
            <TextField
              id="outlined-basic"
              label="Weekday"
              variant="outlined"
              style={{ marginTop: "0.4em" }}
            />
          </FlipCard>
        </div>
      </div>
    );
  }
}
