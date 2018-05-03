import React from 'react';
import { connect } from 'react-redux';

import LogOverview from './logOverview';
import Wrapper from './wrapper';
import CalculatorScreen from './calculatorScreen';
import CalculatorInputButtons from './calculatorInputButtons';
import CalculatorOperatorButtons from './calculatorOperatorButtons';
import CalculatorMachineButtons from './calculatorMachineButtons';

import { AddLog } from '../../redux/actions/logActions';
import { 
  AddDigit, 
  UpdateOperator, 
  PerformCalculation 
} from '../../redux/actions/operationActions';

class Calculator extends React.Component {
  constructor(props){
    super(props);

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  checkIfNumber(input) {
    return input === "1" || input
  }

  handleButtonPress(button) {
    let isNumber = !isNaN(button);
    let canAddPoint = button === '.' && String(this.props.valueRight).indexOf('.') === -1;
    
    if(isNumber || canAddPoint) {
      this.props.dispatch(AddDigit(button));
      return;
    }

    let canAddOperator = (button === '/' || button === '+' || button === '*' || button === '-') && 
                         (!this.props.activeOperator);
    if(canAddOperator) {
      this.props.dispatch(UpdateOperator(button));
      return;
    }

    let canCalculate = (button === '=' && this.props.activeOperator);
    if (canCalculate) {
      let calculation = {
        valueLeft: this.props.valueLeft,
        valueRight: this.props.valueRight,
        operator: this.props.activeOperator,
        //would do this differently if I had more time :)
        result: parseFloat(eval(`${this.props.valueLeft} ${this.props.activeOperator} ${this.props.valueRight}`)) 
      };
      
      this.props.dispatch(PerformCalculation(calculation));
      this.props.dispatch(AddLog(calculation));
      return;
    }
  }

  render() {
    return ( 
      <Wrapper>

        <div>
          <div className="calculator">
            <CalculatorScreen />

            <div className="buttons">
              
              <div className="leftButtons">
                <CalculatorMachineButtons
                  isDisabled={!this.props.switchedOn} 
                />

                <CalculatorInputButtons 
                  isDisabled={!this.props.switchedOn} 
                  buttonPressHandler={this.handleButtonPress}
                />
              </div>

              <div className="rightButtons">
                <CalculatorOperatorButtons 
                  isDisabled={!this.props.switchedOn} 
                  buttonPressHandler={this.handleButtonPress}
                />
              </div>

            </div>
          </div>

          <LogOverview />
        </div>

      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  valueLeft: state.operation.valueLeft,
  valueRight: state.operation.valueRight,
  activeOperator: state.operation.activeOperator,
  switchedOn: state.operation.switchedOn
});

export default connect(mapStateToProps)(Calculator);

