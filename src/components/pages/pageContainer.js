import React, { Component } from 'react';

class PageContainer extends Component {
  render() {
    return (
      <div className="pageWrapper">
        <div className="space"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>

        <div className="space"></div>
      </div>
    );
  }
}

export default PageContainer;
