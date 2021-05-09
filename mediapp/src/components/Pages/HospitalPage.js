import React, { Component } from "react";
import FlipCard from "../Card/FlipCard";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import DetailTable from "../Table/DetailTable";
import "./Hospital.css";
import {connect} from "react-redux";
import {onPageSetAction,} from "../ReduxStore/actions"

class HospitalPage extends Component {
  state = {
    hospital1: "",
    hospital2: "",
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
    this.props.onPageSet(2)
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
            hospital: this.state.hospital1,
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
            hospital: this.state.hospital2,
            weekday: this.state.weekday,
          }),
        };
        break;
    }
    this.setState({ [waiting]: true });

    fetch(apiurl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hospital1: "",
          hospital2: "",
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
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6M273NMCcEK9BBFH8SzNatkZk1YZWTDV2w&usqp=CAU"
              buttonTitle="CHECK OUT"
              title="Looking for a hospital?"
              Typography="You can find,hospital details by giving the name of hospital."
              onSubmit={() => this.cardSubmit(1)}
            >
              {cardOne}
            </FlipCard>
          </div>
          <div className="hospital-cord">
            <FlipCard
              imageUrl="https://www.lankahospitals.com/wp-content/uploads/2020/11/LH_consultation_2560x1000_02d.jpg"
              buttonTitle="CHECK OUT"
              title="Looking for a today?"
              Typography="Are you looking for doctors available on a specified date ?Checkout with your hospital."
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
        id="hospital1"
        label="Hospital Name"
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
        <TextField
          id="hospital2"
          label="Hospital Name"
          variant="outlined"
          style={{ marginTop: "0.4em" }}
          value={this.state.hospitalNameTwo}
          onChange={this.cardInputHandler}
        />
        <TextField
          id="outlined-basic"
          label="Weekday"
          variant="outlined"
          style={{ marginTop: "0.4em" }}
          onChange={this.cardInputHandler}
        />
      </>
    );
  };
}


const mapDispachToProps=(dispach)=>{
  return{
    onPageSet:(page_no)=>dispach(onPageSetAction(page_no)),
  }
}

export default connect(null,mapDispachToProps)(HospitalPage)