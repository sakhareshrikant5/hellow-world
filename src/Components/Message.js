import { Component } from "react"
import React from 'react'

class Message extends Component {

    constructor(){
        super();
        //Create State Object
        this.state = {
            message: "Message Welcome Dear Visitor"
        }
    }

    changeMessage(){
        this.setState({
            message : "You have sucessfully Subsribed"
        })
    }
    render(){
        return (
            <div>
                {/*<h1>Message Visitor</h1>*/}
                <h1>{this.state.message}</h1>
                <button onClick ={() => this.changeMessage()}>Subscrib</button>
            </div>
        )
    }
}

export default Message