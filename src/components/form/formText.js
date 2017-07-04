import React, { Component } from 'react';

class FormText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    return (
      <p>
        Hi there{" " + this.props.name}! Hope you are having a good time. It seems to me your email is{ " " + this.props.email}.
      </p>
    )
  }
}

export default FormText;
