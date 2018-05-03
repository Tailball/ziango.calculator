import React from 'react';
import { connect } from 'react-redux';

const CalculatorInputButtons = () => {
  return (
    <div className="inputButtons">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="doubleSpan">0</button>
      <button>.</button>
    </div>
  );
};

export default connect()(CalculatorInputButtons);