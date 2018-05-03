import React from 'react';
import { connect } from 'react-redux';

const CalculatorScreen = (props) => (
  <div className="screen">{props.workValue}</div>
);

const mapStateToProps = (state) => ({
  workValue: state.operation.workValue
});

export default connect(mapStateToProps)(CalculatorScreen);