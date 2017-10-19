import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button class="c-btn">{this.props.buttonText}</button>
    );
  }
}

export default Button;
