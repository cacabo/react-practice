import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Components
import Nav from './components/header/nav';
import Footer from './components/footer/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Form from './components/pages/form';

// Assets
import './assets/css/default.min.css';

// Appication
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app" >
          <Nav />

          <div className="pageWrapper">
            <div className="space"></div>

            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/form' component={Form} />
            
            <div className="space"></div>
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
