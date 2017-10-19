import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class LogoImage extends Component {
  render() {
    return (
      <img src={logo} class="c-logo" alt={this.props.alt} />
    );
  }
}

export default LogoImage;
