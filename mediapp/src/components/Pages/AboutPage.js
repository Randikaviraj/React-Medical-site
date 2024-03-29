import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import CircularProgress from "@material-ui/core/CircularProgress";
import {connect} from "react-redux";
import {onPageSetAction,} from "../ReduxStore/actions"
import Button from "../Button/Button";
import "./About.css";

class AboutPage extends Component {
  state = {
    fname: "",
    lname: "",
    msg: "Enter message here...",
    windowWidth: window.innerWidth,
    waiting: false,
  };

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  msgHandler = (event) => {
    this.setState({ msg: event.target.value });
  };

  handleSend = () => {
    if (this.state.fname == "" || this.state.lname == "") {
      alert("We need your frist name and last name");
      return;
    }
    this.setState({ waiting: true });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        message: this.state.msg,
      }),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert("Message  was send !");
        this.setState({
          fname: "",
          lname: "",
          msg: "Enter message here...",
          waiting: false,
        });
      })
      .catch((err) => {
        alert("Sending message  was  failed !");
        this.setState({ waiting: false });
        console.error(err);
      });
  };

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.props.onPageSet(4)
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    let element;
    if (this.state.waiting) {
      element = (
        <div className="circular-progres">
          <CircularProgress
            color="secondary"
            size={this.state.windowWidth / 10}
          />
        </div>
      );
    } else {
      element = this.formRendering();
    }

    return (
      <>
        <div className="about-container">
          <h1 className="about-heading">MEET OUR TEAM</h1>
          <div className="about-discription">
            We are all very different. We were born in different cities, at
            different times, we love different music, food, movies. But we have
            something that unites us all. It is our company. We are its heart.
            We are not just a team, we are a family.
            <br />I am Thakshila Rajapaksha from University of Kothalawala .We
            are a team of leading expert technology recruitment, so contact us
            today for a hiring consultation.
          </div>
          <div>
            <HashLink to="/about/#sendmsg">
              <Button
                classes="btn btn-outline btn-outline-red"
                onPress={this.contactUsHandler}
              >
                CONTACT US
              </Button>
            </HashLink>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/236x/b0/31/24/b0312401e91635b4f91f241b14ab9413.jpg"
              alt="Profile pic"
              className="about-profile-img"
            />
          </div>
          <div className="profile-disc" id="sendmsg">
            <strong>Thakshila Rajapaksha</strong>
            <br />
            <small>CEO Team MEDI APP</small>
            <small>thakshila@gmail.com</small>
            {element}
          </div>
        </div>
      </>
    );
  }

  formRendering = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <form id="usrform">
          <div className="form-names">
            <div className="name-div">
              <label for="fname">First name:</label>
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                value={this.state.fname}
                onChange={this.inputHandler}
              />
            </div>
            <div className="name-div">
              <label for="lname">Last name:</label>
              <br />
              <input
                type="text"
                id="lname"
                name="lname"
                value={this.state.lname}
                onChange={this.inputHandler}
              />
            </div>
          </div>
          <div className="msg-box">
            <label for="lname">Message:</label>
            <br />
            <textarea
              name="msg"
              form="usrform"
              rows="5"
              style={{ borderRadius: "10px" }}
              value={this.state.msg}
              onChange={this.msgHandler}
            ></textarea>
          </div>
        </form>
        <div>
          <Button
            classes="btn btn-outline btn-solid-green"
            onPress={this.handleSend}
          >
            SEND MESSAGE
          </Button>
        </div>
      </div>
    );
  };
}

const mapDispachToProps=(dispach)=>{
  return{
    onPageSet:(page_no)=>dispach(onPageSetAction(page_no)),
  }
}

export default connect(null,mapDispachToProps)(AboutPage)