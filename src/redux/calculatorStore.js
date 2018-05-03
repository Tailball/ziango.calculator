import { createStore } from 'redux';

const rootReducer = (state = 'Hello', action) => {
  return state
}

const CalculatorStore = createStore(rootReducer);

export default CalculatorStore;