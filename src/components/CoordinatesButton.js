import React from 'react';

export default class CoordinatesButton extends React.Component {

  receiveMouseCoordinates = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={this.receiveMouseCoordinates}>The Coordinates!</button>
      </div>
    )
  }

}
