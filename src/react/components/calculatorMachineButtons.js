import React from 'react';
import { connect } from 'react-redux';

import { ClearLog } from '../../redux/actions/logActions';
import { SwitchOnOff, ClearWorkMem } from '../../redux/actions/operationActions';

class CalculatorMachineButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleSwitchOnOff = this.handleSwitchOnOff.bind(this);
    this.handleClearWorkMem = this.handleClearWorkMem.bind(this);
  }

  handleSwitchOnOff() {
    this.props.dispatch(SwitchOnOff());
    this.props.dispatch(ClearLog());
  }

  handleClearWorkMem() {
    this.props.dispatch(ClearWorkMem());
  }

  render () {
    return (
      <div className="machineButtons">
        <button onClick={this.handleSwitchOnOff}>On/Off</button>
        <button onClick={this.handleClearWorkMem} 
                disabled={this.props.isDisabled}>AC</button>
      </div>
    );
  }
};

export default connect()(CalculatorMachineButtons);