import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-block">
                <h1 className="card-title text-muted">
                  Home
                </h1>
                <p className="card-text">
                  This is some content for the home page
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
