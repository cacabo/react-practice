import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <h3>This is the navbar</h3>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
