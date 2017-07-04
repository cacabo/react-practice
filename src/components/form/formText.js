import React, { Component } from 'react';

class FormText extends Component {
  render() {
    return (
      <p>
        Hi there{" " + this.props.name}! Hope you are having a good time. It seems to me your email is{ " " + this.props.email}.
      </p>
    )
  }
}

export default FormText;
