import React from 'react';
import { connect } from 'react-redux';

import { ClearLog } from '../../redux/actions/logActions';
import { SwitchOnOff } from '../../redux/actions/operationActions';

class CalculatorMachineButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleSwitchOnOff = this.handleSwitchOnOff.bind(this);
  }

  handleSwitchOnOff() {
    this.props.dispatch(SwitchOnOff());
    this.props.dispatch(ClearLog());
  }

  render () {
    return (
      <div className="machineButtons">
        <button onClick={this.handleSwitchOnOff}>On/Off</button>
        <button disabled={this.props.isDisabled}>AC</button>
      </div>
    );
  }
};

export default connect()(CalculatorMachineButtons);