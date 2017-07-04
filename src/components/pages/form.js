import React, { Component } from 'react';

class Form extends Component {
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

                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Forn;
