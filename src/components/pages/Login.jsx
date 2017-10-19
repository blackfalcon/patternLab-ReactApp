import React, { Component } from 'react';
import LogoImage from '../atoms/LogoImage.jsx';
import Button from '../atoms/Button.jsx';
import Field from '../molecules/Field.jsx';

class Login extends Component {
  render() {
    return (
      <div className="c-box">
        <div className="c-box__header">
          <LogoImage alt="logo image"/>
        </div>

        <Field label="Username" type="text "id="account-username" placeholder="Username and email address" fieldnote="Enter your username or email address"/>
        <Field label="Password" type="password" id="account-password" placeholder="Password" fieldnote="Minimum of 6 characters. " fieldnoteLink="#" fieldnoteLinkText="Forgot password?"/>

        <Button buttonText="Log Me In!"/>
      </div>
    );
  }
}

export default Login;
