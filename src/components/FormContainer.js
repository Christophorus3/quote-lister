import React, {Component} from 'react'
import {Button, Form, FormGroup} from "react-bootstrap"

class FormContainer extends Component {
  constructor(props) {
    super(props)

    this.submit = props.submit

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

    this.submit({
      name: this.state.name,
      quote: this.state.quote
    })

    this.setState({name: "", quote: ""})
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