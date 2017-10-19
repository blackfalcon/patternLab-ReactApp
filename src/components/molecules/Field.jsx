import React, { Component } from 'react';

class Field extends Component {
  render() {
    return (
      <div class="c-field">
        <label for={this.props.id} class="c-field__label">{this.props.label}</label>
        <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} />

        <span class="c-field__note">
          {this.props.fieldnote}
          <a href={this.props.fieldnoteLink}>{this.props.fieldnoteLinkText}</a>
        </span>
      </div>
    );
  }
}

export default Field;
