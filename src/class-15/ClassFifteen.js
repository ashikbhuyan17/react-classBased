import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassFifteenOne from './ClassFifteenOne.js';
class ClassFifteen extends Component {

  state = {
    boxes: [1, 2, 3, 4, 5]
  }

  getSingleBox = () => {
    return (
      <div>
        <ClassFifteenOne />
        <br />
      </div>
    )
  }

  getBoxes = () => {
    // const b = this.state.boxes
    const { boxes } = this.state
    // const updateArr = boxes.map(this.getSingleBox)
    // return updateArr;
    // map returns a array
    return boxes.map(() => (
      <div>
        <ClassFifteenOne />
        <br />
      </div>
    ))
    // const updateArr = boxes.map(() => {
    //   return (
    //     <div>
    //       <ClassFifteenOne />
    //       <br />
    //     </div>
    //   )
    // })
    // return updateArr

  }

  createBox = () => {
    const { boxes } = this.state
    this.setState({ boxes: [...boxes, 0] })
    console.log(boxes);
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
            <div key={num}>
              <ClassFifteenOne value={num} id={index} />
              {/* 
                const obj = new ClassFifteenOne({value:10})
              */}
              <br />
            </div>
          ))
        }
      </div>
    );
  }
}

export default ClassFifteen;