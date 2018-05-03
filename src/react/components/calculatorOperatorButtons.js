import React from 'react';
import { connect } from 'react-redux';

const CalculatorOperatorButtons = (props) => {
  return (
    <div className="operatorButtons">
      <button disabled={props.isDisabled}>&divide;</button>
      <button disabled={props.isDisabled}>&times;</button>
      <button disabled={props.isDisabled}>&minus;</button>
      <button disabled={props.isDisabled}>+</button>
    </div>
  );
};

export default connect()(CalculatorOperatorButtons);