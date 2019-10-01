// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    event.preventDefault;
    const coordsArray = [];
    coordsArray.push(event.clientX);
    coordsArray.push(event.clientY);
    this.props.onReceiveCoordinates(coordsArray);
  }

 render() {
   return <button onClick={this.handleClick}>Button</button>
 } 
}