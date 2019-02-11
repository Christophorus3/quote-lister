import React, { Component } from 'react';
//import logo from './logo.svg';
import Form from "./components/Form"
import Quotes from "./components/Quotes"
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    fetch('/quotes')
      .then(response => response.json())
      .then(quotes => {
        this.setState({quotes})
      })
  }

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
          <Quotes quotes={this.state.quotes}/>
        </main>
      </div>
    );
  }
}

export default App;
