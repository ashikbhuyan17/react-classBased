import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// class Component { //{props:{num,id,onIncrement,onDecrement}}
//     constructor(a) {
//         this.props = a
//     }
// }

class ClassEighteenOne extends Component {
    state = {
        className: "btn btn-primary"
    }

    style = { color: "red" }

    constructor(props) {
        super(props)
    }


    increment = () => {
        this.props.onIncrement(this.props.id)
    }
    decrement = () => {
        this.props.onDecrement(this.props.id)
    }
    delete = () => {
        // first e amake bujte hbe kon box ta delete korthe kortaci
        // index wala value ta array theke remove kore dithe hbe

        const { id } = this.props
        this.props.onDelete(id)
    }

    render() {
        return (
            <div>
                <button className={this.state.className} onClick={this.decrement} style={this.style}>Decrement</button>
                <span className='mx-5'>{this.props.num}</span>
                <button className="btn btn-success" onClick={this.increment}>Increment</button>
                <button className="btn btn-success mx-5" onClick={this.delete}>Delete</button>
            </div>
        );
    }
}

export default ClassEighteenOne;