import React from 'react';
import { connect } from 'react-redux';

const CalculatorScreen = (props) => (
  <div className="screen">{props.value}</div>
);

const mapStateToProps = (state) => ({
  value: state.operation.valueRight
});

export default connect(mapStateToProps)(CalculatorScreen);