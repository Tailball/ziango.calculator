import React from 'react';

import LogOverview from './logOverview';
import CalculatorScreen from './calculatorScreen';
import CalculatorInputButtons from './calculatorInputButtons';
import CalculatorOperatorButtons from './calculatorOperatorButtons';
import CalculatorMachineButtons from './calculatorMachineButtons';

class Calculator extends React.Component {
  render() {
    return ( 
      <div>
        <h1>This is our react Calculator app</h1>

        <div className="calculator">
          <CalculatorScreen />

          <div className="buttons">
            <CalculatorMachineButtons />
            <CalculatorInputButtons />
            <CalculatorOperatorButtons />
          </div>
        </div>

        <LogOverview />
      </div>
    );
  }
}

export default Calculator;

// import { AddLog } from '../../redux/actions/logActions';