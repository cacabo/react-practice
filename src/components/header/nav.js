import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <h2>This is the navbar</h2>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
