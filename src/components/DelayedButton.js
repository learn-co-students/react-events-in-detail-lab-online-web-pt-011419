// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    clickHandlerDelayedButton = (event) => {
        event.persist()
        // console.log(event)
        // console.log(delayedEvent)
        // console.log(() => this.props.onDelayedClick(delayedEvent))
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
    

    render(){
        return(
            <button onClick={this.clickHandlerDelayedButton}>Click Me for Delayed Button</button>
        )
    }
}