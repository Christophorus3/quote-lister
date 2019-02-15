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
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then(quotes => {
        this.setState({quotes})
      })
      .catch((err) => {console.log(err)})
  }

  handleSubmit = (data) => {


    fetch('/quote', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        quote: data.quote
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        let newEntry = {
          ...data,
          _id: json.id
        }
        console.log(newEntry)
        this.setState(state => {
          return { quotes: [...state.quotes, newEntry] }
        })
      })
      .catch((err) => {console.log(err)})
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
                  <FormContainer submit={this.handleSubmit}/>
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
