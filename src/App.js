import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './components/HomePage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "home">
        <HomePage/>
      </div>
    );
  }
}

export default App;
