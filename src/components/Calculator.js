import React, { Component } from 'react';
import calculate from './logic/calculate';
import '../styles/calculator.css';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const btnValue = btn.target.textContent;
    this.setState((e) => calculate(e, btnValue));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="wrapper">
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <div className="keyBoard">
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-0"
          >
            0
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-1"
          >
            1
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-2"
          >
            2
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn btn-3"
          >
            3
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn btn-4"
          >
            4
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-5"
          >
            5
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn btn-6"
          >
            6
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn btn-7"
          >
            7
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-8"
          >
            8
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-9"
          >
            9
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-Add"
          >
            +
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-Minus"
          >
            -
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-Div"
          >
            /
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-Multiply"
          >
            x
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-Equal"
          >
            =
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-Percentage"
          >
            %
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-AllClear"
          >
            AC
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-MasMin"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-Decimal"
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
