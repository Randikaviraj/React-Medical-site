import React, { Component } from 'react'
import Button from '../Button/Button'
import "./About.css"

export default class AboutPage extends Component {
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
            <Button classes="btn btn-outline btn-outline-red">CONTACT US</Button>
            </div>
            <div>
                <img src="https://i.pinimg.com/236x/b0/31/24/b0312401e91635b4f91f241b14ab9413.jpg" alt="Profile pic" className="about-profile-img"/>
            </div>
            <div className="profile-disc">
                <strong>Thakshila Rajapaksha</strong>
                <br/>
                <small>CEO Team MEDI APP</small>
                <small>thakshila@gmail.com</small>
            </div>
            <form>
            </form>
         </div>
         </>
        )

    }
}
