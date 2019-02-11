import React, { Component } from 'react'
//import logo from './logo.svg';
import FormContainer from "./components/FormContainer"
import Quotes from "./components/Quotes"
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import {Card, Col, Container, Navbar, NavbarBrand, Row} from 'react-bootstrap'

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
        <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
          <NavbarBrand>QuoteStorer</NavbarBrand>
        </Navbar>
        <main>
          <Container>
            <Row>
              <Col xs={8} className="mx-auto">
                <Card body className="my-5">
                  <FormContainer/>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={8} className="mx-auto">
                <Quotes quotes={this.state.quotes}/>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
