import { OPERATION_SWITCH } from '../actions/operationActions';

const defaultOperationReducerCache = {
  value: 0,
  workValue: '0',
  activeOperator: undefined,
  switchedOn: true
};

const OperationReducer = (state = defaultOperationReducerCache, action) => {
  switch(action.type){
    case OPERATION_SWITCH:
      return { 
        ...state,
        switchedOn: !state.switchedOn               
      };

    default:
      return state;
  }
};

export default OperationReducer;