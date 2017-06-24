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

// Assets
import './assets/css/default.min.css';

// Appication
class App extends Component {
  render() {
    return (
      <div className="app" >
        <Nav />

        <div className="pageWrapper">
          <div className="space"></div>
          <Home />
          <div className="space"></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App;
