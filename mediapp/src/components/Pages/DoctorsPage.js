import React, { Component } from "react";
import FlipCard from "../Card/FlipCard";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import DetailTable from "../Table/DetailTable";
import "./Hospital.css";
import {connect} from "react-redux";
import {onPageSetAction,} from "../ReduxStore/actions"

class DoctorsPage extends Component {
  state = {
    doctor1: "",
    specializedField: "",
    weekday: "",
    waitingcardone: false,
    waitingcardTwo: false,
    windowWidth: window.innerWidth,
  };

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.props.onPageSet(3)

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  cardInputHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };


  cardSubmit = (key) => {
    let requestOptions;
    let apiurl;
    let waiting;

    switch (key) {
      case 1:
        waiting = "waitingcardone";
        apiurl = "https://api.com";
        requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            doctor: this.state.doctor1,
          }),
        };
        break;

      case 2:
        waiting = "waitingcardTwo";
        apiurl = "https://encrypted-tbn0.gstatic.com";
        requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            specializedfield: this.state.specializedField,
          }),
        };
        break;
    }
    this.setState({ [waiting]: true });

    fetch(apiurl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          doctor1: "",
          specializedField: "",
          weekday: "",
          [waiting]: false,
        });
      })
      .catch((err) => {
        alert("Error occured !");
        this.setState({ [waiting]: false });
        console.error(err);
      });
  };

  render() {
    let heading = ["topic1", "topic2", "topic3", "topic4"];
    let data = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ];
    let cardOne = this.state.waitingcardone ? (
      <CircularProgress color="secondary" size={this.state.windowWidth / 20} />
    ) : (
      this.cardOneRender()
    );
    let cardTwo = this.state.waitingcardTwo ? (
      <CircularProgress color="secondary" size={this.state.windowWidth / 20} />
    ) : (
      this.cardTwoRender()
    );
    return (
      <div className="hospital-container">
        <div className="hospital-cord-container">
          <div className="hospital-cord">
            <FlipCard
              imageUrl="https://aawafi.com/uploads/partners/profile/doctor.jpg"
              buttonTitle="CHECK OUT"
              title="Looking for a Doctor?"
              Typography="You can find,doctor details by giving the name of doctor."
              onSubmit={() => this.cardSubmit(1)}
            >
              {cardOne}
            </FlipCard>
          </div>
          <div className="hospital-cord">
            <FlipCard
              imageUrl="https://previews.123rf.com/images/angellodeco/angellodeco1703/angellodeco170300037/74422182-doctor-holding-tablet-with-the-drawing-of-a-heart-and-the-title-cardiologist-cardiologist-working-wi.jpg"
              buttonTitle="CHECK OUT"
              title="Looking for a specialist?"
              Typography="Are you looking for specialists ?You can find by chosing the specilized field"
              onSubmit={() => this.cardSubmit(2)}
            >
              {cardTwo}
            </FlipCard>
          </div>
        </div>
        <div className="hospital-table">
          <DetailTable data={data} tableHeadins={heading} />
        </div>
      </div>
    );
  }

  cardOneRender = () => {
    return (
      <TextField
        id="doctor1"
        label="Doctor Name"
        variant="outlined"
        style={{ marginTop: "0.4em" }}
        value={this.state.hospitalNameOne}
        onChange={this.cardInputHandler}
      />
    );
  };

  cardTwoRender = () => {
    return (
      <>
        <InputLabel htmlFor="specializedField">Specialized Field</InputLabel>
        <Select
          native
          value={this.state.specializedField}
          onChange={this.cardInputHandler}
          inputProps={{
            name: 'specializedField',
            id: 'specializedField',
          }}
          style={{color:"black"}}
        >
          <option aria-label="None" value="" />
          <option value={"Allergists"}>Allergists</option>
          <option value={"Dermatologists"}>Dermatologists</option>
          <option value={"Ophthalmologists"}>Ophthalmologists</option>
          <option value={"Cardiologists"}>Cardiologists</option>
          <option value={"Endocrinologists"}>Endocrinologists</option>
          <option value={"Gastroenterologists"}>Gastroenterologists</option>
        </Select>
      </>
    );
  };
}

const mapDispachToProps=(dispach)=>{
  return{
    onPageSet:(page_no)=>dispach(onPageSetAction(page_no)),
  }
}

export default connect(null,mapDispachToProps)(DoctorsPage)