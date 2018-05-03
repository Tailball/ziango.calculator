import React from 'react';
import { connect } from 'react-redux';

const CalculatorInputButtons = (props) => {
  return (
    <div className="inputButtons">
      <button disabled={props.isDisabled}>7</button>
      <button disabled={props.isDisabled}>8</button>
      <button disabled={props.isDisabled}>9</button>
      <button disabled={props.isDisabled}>4</button>
      <button disabled={props.isDisabled}>5</button>
      <button disabled={props.isDisabled}>6</button>
      <button disabled={props.isDisabled}>1</button>
      <button disabled={props.isDisabled}>2</button>
      <button disabled={props.isDisabled}>3</button>
      <button disabled={props.isDisabled} className="doubleSpan">0</button>
      <button disabled={props.isDisabled}>.</button>
    </div>
  );
};

export default connect()(CalculatorInputButtons);