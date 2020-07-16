// Code DigitalClicker Component Here

import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = { timesClicked: 0 };
  }

  //   Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
  handleClick = () => {
    this.setState((previousState) => {
      return {
        timesClicked: previousState.timesClicked + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
