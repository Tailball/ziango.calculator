import React from 'react';
import { connect } from 'react-redux';

import LogOverview from './logOverview';
import Wrapper from './wrapper';
import CalculatorScreen from './calculatorScreen';
import CalculatorInputButtons from './calculatorInputButtons';
import CalculatorOperatorButtons from './calculatorOperatorButtons';
import CalculatorMachineButtons from './calculatorMachineButtons';

class Calculator extends React.Component {
  render() {
    return ( 
      <Wrapper>

        <div>
          <div className="calculator">
            <CalculatorScreen />

            <div className="buttons">
              <CalculatorMachineButtons isDisabled={!this.props.switchedOn} />
              <CalculatorInputButtons isDisabled={!this.props.switchedOn} />
              <CalculatorOperatorButtons isDisabled={!this.props.switchedOn} />
            </div>
          </div>

          <LogOverview />
        </div>

      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  switchedOn: state.operation.switchedOn
});

export default connect(mapStateToProps)(Calculator);

