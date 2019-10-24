// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
    clickEventHandler = (event) => {
        const coordinatesArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }
    
    render() {
        return(
            <button onClick={this.clickEventHandler}>Click Me For Coordinates</button>
        )
    }
}