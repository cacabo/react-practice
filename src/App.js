import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  render() {
    return (
      <div className="app" >
        <div className="app-header"></div>
        <div className="app-wrapper">
          <div className="app-nav">
            <div className="nav screen1">
              <p>Screen 1</p>
            </div>
            <div className="nav screen2">
              <p>Screen 2</p>
            </div>
            <div className="nav screen3">
              <p>Screen 3</p>
            </div>

          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App>
    <h1>This is a message</h1>
  </App>,
  document.getElementById('root')
);

export default App;
