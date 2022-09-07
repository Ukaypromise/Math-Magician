import React, { Component } from 'react';
import '../styles/keyboard.css';

export class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="keyBoard">
        <button type="button" className="btn btn-0">
          0
        </button>
        <button type="button" className="btn btn-1">
          1
        </button>
        <button type="button" className="btn btn-2">
          2
        </button>
        <button type="button" className=" btn btn-3">
          3
        </button>
        <button type="button" className=" btn btn-4">
          4
        </button>
        <button type="button" className="btn btn-5">
          5
        </button>
        <button type="button" className=" btn btn-6">
          6
        </button>
        <button type="button" className=" btn btn-7">
          7
        </button>
        <button type="button" className="btn btn-8">
          8
        </button>
        <button type="button" className="btn btn-9">
          9
        </button>
        <button type="button" className="btn btn-Add">
          +
        </button>
        <button type="button" className="btn btn-Minus">
          -
        </button>
        <button type="button" className="btn btn-Div">
          /
        </button>
        <button type="button" className="btn btn-Multiply">
          X
        </button>
        <button type="button" className="btn btn-Equal">
          =
        </button>
        <button type="button" className="btn btn-Percentage">
          %
        </button>
        <button type="button" className="btn btn-AllClear">
          AC
        </button>
        <button type="button" className="btn btn-MasMin">
          +/-
        </button>
        <button type="button" className="btn btn-Decimal">
          .
        </button>
      </div>
    );
  }
}

export default Keyboard;
