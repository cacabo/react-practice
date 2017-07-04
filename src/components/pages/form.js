import React, { Component } from 'react';
import FormText from '../form/formText';

class Form extends Component {
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

  handleSubmit(e) {
    e.preventDefault();
    alert('Form submitted');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-block">
                <h1 className="card-title text-muted">
                  Form
                </h1>

                <div className="row">
                  <div className="col-12 col-md-6">
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" onChange={this.handleNameChange} />
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={this.handleEmailChange} />
                      </div>

                      <button type="submit" className="btn btn-outline-primary" onClick={this.handleSubmit}>Submit</button>
                    </form>
                  </div>

                  <div className="col-12 col-md-6">
                    <FormText name={this.state.name} email={this.state.email} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
