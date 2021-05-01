import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import Button from '../Button/Button'
import "./About.css"

export default class AboutPage extends Component {

    state={
        fname:"",
        lname:"",
        msg:"Enter message here...",

    }

    inputHandler=(event)=>{

        this.setState({[event.target.name]:event.target.value})
    }

    msgHandler=(event)=>{
        this.setState({msg:event.target.value})
    }

    handleSend=()=>{
        if (this.state.fname=="" || this.state.lname=="") {
            alert("We need your frist name and last name") 
            return
        }
        alert('Message  was send !');
        this.setState({
            fname:"",
            lname:"",
            msg:"Enter message here...",
        })
    }


    render() {
        return (
         <>
         <div className="about-container">
            <h1 className="about-heading">MEET OUR TEAM</h1>
            <div className="about-discription">
            We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
            <br/>
            I am Thakshila Rajapaksha from
            University of Kothalawala .We are a team of leading expert technology recruitment, so contact us today for a hiring consultation.
            </div>
            <div>
            <HashLink to="/about/#sendmsg"><Button classes="btn btn-outline btn-outline-red" onPress={this.contactUsHandler}>CONTACT US</Button>
            </HashLink>
            </div>
            <div>
                <img src="https://i.pinimg.com/236x/b0/31/24/b0312401e91635b4f91f241b14ab9413.jpg" alt="Profile pic" className="about-profile-img"/>
            </div>
            <div className="profile-disc" id="sendmsg">
                <strong>Thakshila Rajapaksha</strong>
                <br/>
                <small>CEO Team MEDI APP</small>
                <small>thakshila@gmail.com</small>
            </div>
            <form id="usrform">
            <div className="form-names">
                <div className="name-div">
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.inputHandler} />
                </div>
                <div className="name-div">
                    <label for="lname">Last name:</label>
                    <br/>
                    <input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.inputHandler}/>
                </div>
            </div>
            <div className="msg-box">
                <label for="lname">Message:</label>
                <br/>
                <textarea name="msg" form="usrform" rows="5"  style={{borderRadius:"10px"}} value={this.state.msg} onChange={this.msgHandler} ></textarea>
            </div>
            </form>
            <div>
            <Button classes="btn btn-outline btn-solid-green" onPress={this.handleSend}>SEND MESSAGE</Button>
            </div>

         </div>
         </>
        )

    }
}
