import React, { useState } from 'react';
import calculate from './logic/calculate';
import '../styles/calculator.css';

const Calculator = () => {
  const stateObj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [state, setState] = useState(stateObj);

  const handleClick = (btn) => {
    const btnValue = btn.target.textContent;
    const newState = { ...state };
    setState(calculate(newState, btnValue));
  };

  return (
    <div className="wrapper">
      <div className="display">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div className="keyBoard">
        <button type="button" onClick={handleClick} className="btn btn-0">
          0
        </button>
        <button type="button" onClick={handleClick} className="btn btn-1">
          1
        </button>
        <button type="button" onClick={handleClick} className="btn btn-2">
          2
        </button>
        <button type="button" onClick={handleClick} className=" btn btn-3">
          3
        </button>
        <button type="button" onClick={handleClick} className=" btn btn-4">
          4
        </button>
        <button type="button" onClick={handleClick} className="btn btn-5">
          5
        </button>
        <button type="button" onClick={handleClick} className=" btn btn-6">
          6
        </button>
        <button type="button" onClick={handleClick} className=" btn btn-7">
          7
        </button>
        <button type="button" onClick={handleClick} className="btn btn-8">
          8
        </button>
        <button type="button" onClick={handleClick} className="btn btn-9">
          9
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-Add"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-Minus"
        >
          -
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-Div"
        >
          ÷
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-Multiply"
        >
          x
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-Equal"
        >
          =
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-Percentage"
        >
          %
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-AllClear"
        >
          AC
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-MasMin"
        >
          +/-
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-Decimal"
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
