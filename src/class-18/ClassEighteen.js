import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassEighteenOne from './ClassEighteenOne.js';
class ClassEighteen extends Component {

    state = {
        boxes: []
    }

    getSingleBox = () => {
        return (
            <div>
                <ClassEighteenOne />
                <br />
            </div>
        )
    }

    getBoxes = () => {
        const { boxes } = this.state
        return boxes.map(() => (
            <div>
                <ClassEighteenOne />
                <br />
            </div>
        ))

    }

    createBox = () => {
        const { boxes } = this.state
        this.setState({ boxes: [...boxes, 0] })
    }

    onDelete = (id) => {
        const filterArray = (number, index) => {
            if (id == index) return false
            else return true
        }
        const deleteValue = this.state.boxes
        // const updateBoxes = deleteValue.filter((number, index) => id !== index)
        const updateBoxes = deleteValue.filter(filterArray)
        console.log("...................", updateBoxes);
        this.setState({ boxes: updateBoxes })
    }
    onIncrement = (id) => {
        const arr = [...this.state.boxes]
        arr[id]++
        this.setState({ boxes: arr })

    }
    onDecrement = (id) => {
        const arr = [...this.state.boxes]
        arr[id]--
        this.setState({ boxes: arr })

    }

    render() {
        return (
            <div>
                <br />
                <button className="btn btn-primary" onClick={this.createBox} style={this.style}>Add New Box</button>
                <br /><br />
                {
                    // this.getBoxes()
                    this.state.boxes.map((num, index) => (
                        <div key={index}>
                            <ClassEighteenOne
                                num={num}
                                id={index}
                                onDelete={this.onDelete}
                                onIncrement={this.onIncrement}
                                onDecrement={this.onDecrement}
                            />
                            <br />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ClassEighteen;