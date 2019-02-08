import React, { Component } from 'react';
import logo from './logo.svg';
import Form from "./components/Form"
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <main>
          <Form/>
        </main>
      </div>
    );
  }
}

export default App;
