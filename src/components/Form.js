import React, {Component} from 'react'

class Form extends Component {
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
    fetch('http://localhost:8080/quote')
      .then(res => res.text())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        This is the form:
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br/>
          <input
            type="text"
            name="quote"
            value={this.state.quote}
            onChange={this.handleChange}
          />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form