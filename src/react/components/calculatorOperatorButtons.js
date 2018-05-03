import React from 'react';
import { connect } from 'react-redux';

const CalculatorOperatorButtons = () => {
  return (
    <div className="operatorButtons">
      <button>&divide;</button>
      <button>&times;</button>
      <button>&minus;</button>
      <button>+</button>
    </div>
  );
};

export default connect()(CalculatorOperatorButtons);