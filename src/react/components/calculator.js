import React from 'react';

import LogOverview from './logOverview';

class Calculator extends React.Component {
  render() {
    return ( 
      <div>
        <h1>This is our react Calculator app</h1>

        <LogOverview />
      </div>
    );
  }
}

export default Calculator;


// import { AddLog } from '../../redux/actions/logActions';