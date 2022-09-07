import React, { Component } from 'react';
import Keyboard from './Keyboard';
import '../styles/calculator.css';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <p className="display">0 </p>
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;
