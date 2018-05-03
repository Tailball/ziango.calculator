import React from 'react';
import { connect } from 'react-redux';

const CalculatorMachineButtons = () => {
  return (
    <div className="machineButtons">
      <button>On/Off</button>
      <button>AC</button>
    </div>
  );
};

export default connect()(CalculatorMachineButtons);