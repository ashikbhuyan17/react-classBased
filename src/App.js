import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ClassFifteen from './class-15/ClassFifteen';
import ClassFifteenOne from './class-15/ClassFifteenOne.js';
import ClassEighteen from './class-18/ClassEighteen';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/class-15" element={<ClassFifteen />} />
          <Route path="/class-18" element={<ClassEighteen />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;