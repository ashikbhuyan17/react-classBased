import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class ClassFifteen extends Component {
  state = {
    number: 0,
    className: "btn btn-primary"
  }
  style = { color: "red" }

  increment = () => {
    const newNumber = this.state.number + 1
    const newState = { number: newNumber, className: "btn btn-primary" }
    this.setState(newState)
  }
  decrement = () => {
    const number = this.state.number
    if (number === 0) {
      const updateClassName = "btn btn-secondary"
      const newState = { number: this.state.number, className: updateClassName }
      this.setState(newState)
    } else {
      const newNumber = this.state.number - 1
      const newState = { number: newNumber }
      this.setState(newState)
    }
  }
  render() {
    return (
      <div>
        <button class={this.state.className} onClick={this.decrement} style={this.style}>-</button>
        <span className='mx-5'>{this.state.number}</span>
        <button class="btn btn-success" onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default ClassFifteen;