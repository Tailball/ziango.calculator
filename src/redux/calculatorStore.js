import { createStore, combineReducers } from 'redux';

import OperationReducer from './reducers/operationReducer';
import LogReducer from './reducers/logReducer';

const rootReducer = combineReducers({
  operation: OperationReducer,
  Logs: LogReducer
});

const CalculatorStore = createStore(rootReducer);

export default CalculatorStore;