import { Component } from "react"
import React from 'react'

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} as {this.props.heroName}</h1>
    }
}

export default Welcome