import React, { Component } from 'react'
import "./Button.css"

export default class Button extends Component {

    render() {
        return (
        <button className={this.props.classes}>{this.props.children}</button>
        )
    }
}
