import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles.css';

import CalculatorStore from './redux/calculatorStore';
import Calculator from './react/components/calculator';


const baseJSX = (
  <Provider store={CalculatorStore}>
    <Calculator />
  </Provider>
);

ReactDOM.render(baseJSX, document.querySelector('#reactContainer'));