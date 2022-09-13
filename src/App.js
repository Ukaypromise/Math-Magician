/*eslint-disable*/
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar'; 
import Quote from './components/Quote';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
render() {
return (
  <>
    <Router>
      <Navbar />
      <section className="content">
        <Routes>
          <Route path="/math-magician" element={<Home />} />
          <Route
            path="/Calculator"
            element={<Calculator className="calculator" />}
          />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </section>
    </Router>
  </>
);
}
}
// eslint-disable for using exported App as identifier

export default App;
