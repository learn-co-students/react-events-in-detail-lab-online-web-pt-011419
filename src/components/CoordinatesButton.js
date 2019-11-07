import React, { Component } from 'react';

export default class CoordiantesButton extends Component {

    handleClick = (e) => {this.props.onReceiveCoordinates([e.clientX, e.clientY])}

    render(){
        return (
            <button onClick={this.handleClick}> Coordiantes Button </button>
        )
    }
}