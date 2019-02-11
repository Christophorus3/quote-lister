import React, {Component} from 'react'
import {Button, Form, FormGroup} from "react-bootstrap"

class FormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      quote: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit was hit: ", this.state)

    fetch('/quote', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        quote: this.state.quote
      })
    })
      .then(res => res.text())
      .then(text => console.log(text))
  }

  render() {
    return (
      <div>
        <p>Enter famous quote below:</p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Who said this?"/>
          </FormGroup>
          <FormGroup>
            <Form.Label>Quote:</Form.Label>
            <Form.Control
              as="textarea"
              name="quote"
              value={this.state.quote}
              onChange={this.handleChange}
              placeholder="What did they say?"/>
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default FormContainer