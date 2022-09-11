import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class ClassFifteenOne extends Component {
    state = {
        number: 0,
        id: null,
        className: "btn btn-primary"
    }
    style = { color: "red" }
    // constructor(props) {
    //     super()
    //     const { value } = props
    //     console.log(value);
    // }
    constructor({ value, id, onDelete }) {
        super()
        this.state = {
            number: value,
            id: id,
            className: "btn btn-primary",
        }
    }


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
                <button className={this.state.className} onClick={this.decrement} style={this.style}>Decrement</button>
                <span className='mx-5'>{this.state.number}</span>
                <button className="btn btn-success" onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default ClassFifteenOne;