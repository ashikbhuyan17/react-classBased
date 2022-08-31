import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ClassFifteen from './class-15/ClassFifteen';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/class-15" element={<ClassFifteen />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;