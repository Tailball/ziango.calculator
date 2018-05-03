import React from 'react';
import { connect } from 'react-redux';

const CalculatorOperatorButtons = (props) => {
  return (
    <div className="operatorButtons">
      <button onClick={() => props.buttonPressHandler('/')} disabled={props.isDisabled}>&divide;</button>
      <button onClick={() => props.buttonPressHandler('*')} disabled={props.isDisabled}>&times;</button>
      <button onClick={() => props.buttonPressHandler('-')} disabled={props.isDisabled}>&minus;</button>
      <button onClick={() => props.buttonPressHandler('+')} disabled={props.isDisabled}>+</button>
      <button onClick={() => props.buttonPressHandler('=')} disabled={props.isDisabled}>=</button>
    </div>
  );
};

export default connect()(CalculatorOperatorButtons);