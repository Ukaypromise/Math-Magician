/*eslint-disable*/
import React, { Component } from 'react';
import CalculatorApp from './components/Calculator';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
render() {
return (
  <div className="App">
    <CalculatorApp />
  </div>
);
}
}
// eslint-disable for using exported App as identifier

export default App;
