import { 
  OPERATION_SWITCH, 
  OPERATION_AC,
  OPERATION_ADDDIGIT,
  OPERATION_UPDATEOPERATOR,
  OPERATION_EQUALS
} from '../actions/operationActions';

const defaultOperationReducerCache = {
  valueLeft: '0',
  valueRight: '0',
  activeOperator: undefined,
  switchedOn: true
};

const OperationReducer = (state = defaultOperationReducerCache, action) => {
  switch(action.type){
    case OPERATION_SWITCH:
      return { 
        valueLeft: '0',
        valueRight: '0',
        activeOperator: undefined,
        switchedOn: !state.switchedOn               
      };

    case OPERATION_AC:
      return {
        ...state,
        valueLeft: '0',
        valueRight: '0',
        activeOperator: undefined
      };

    case OPERATION_ADDDIGIT:
      return {
        ...state,
        valueRight: state.valueRight === '0' ? action.payload : state.valueRight + action.payload
      };

    case OPERATION_UPDATEOPERATOR:
      return {
        ...state,
        activeOperator: action.payload,
        valueLeft: state.valueRight,
        valueRight: '0'
      };

     case OPERATION_EQUALS:
     console.log(action.payload);
      return {
        ...state,
        activeOperator: undefined,
        valueLeft: '0',
        valueRight: action.payload.result
       };

    default:
      return state;
  }
};

export default OperationReducer;