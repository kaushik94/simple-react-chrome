import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
// import './bootstrap.css';

const stores = {};

var go = function() {
    var event = document.createEvent('Event');
    event.initEvent('hello');
    document.dispatchEvent(event);
    console.log("dispatched event");
}

go();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Create New Store</Button>
        <Button>Add Url to ruleset</Button>
      </div>
    );
  }
}

export default App;
