import React from 'react';
import { connect } from 'react-redux';

const CalculatorInputButtons = (props) => {
  return (
    <div className="inputButtons">
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('7')}>7</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('8')}>8</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('9')}>9</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('4')}>4</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('5')}>5</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('6')}>6</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('1')}>1</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('2')}>2</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('3')}>3</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('0')} className="doubleSpan">0</button>
      <button disabled={props.isDisabled} onClick={() => props.buttonPressHandler('.')}>.</button>
    </div>
  );
};

export default connect()(CalculatorInputButtons);