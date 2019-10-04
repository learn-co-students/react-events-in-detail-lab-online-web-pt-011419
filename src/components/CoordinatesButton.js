// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {



  receiveMouseCoordinates = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };
  
  render() {
    return (
      <div>
        <button onClick={this.receiveMouseCoordinates}> The Coordinates! </button>
      </div>
    )
  }
}

export default CoordinatesButton;
