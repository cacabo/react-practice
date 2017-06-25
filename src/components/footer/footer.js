import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4'>
              <h4>This is the footer</h4>
              <p>
                Here is some content for the footer where I talk about this website and what its purpose is.
              </p>
              <p>
                Created by <a href="http://cameroncabo.com" target='_blank'>Cameron Cabo.</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
