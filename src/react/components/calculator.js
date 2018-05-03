import React from 'react';
import { connect } from 'react-redux';

import LogOverview from './logOverview';
import Wrapper from './wrapper';
import CalculatorScreen from './calculatorScreen';
import CalculatorInputButtons from './calculatorInputButtons';
import CalculatorOperatorButtons from './calculatorOperatorButtons';
import CalculatorMachineButtons from './calculatorMachineButtons';

import { AddDigit } from '../../redux/actions/operationActions';

class Calculator extends React.Component {
  constructor(props){
    super(props);

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(button){
    this.props.dispatch(AddDigit(button));
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
  switchedOn: state.operation.switchedOn
});

export default connect(mapStateToProps)(Calculator);

