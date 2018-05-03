import { 
  OPERATION_SWITCH, 
  OPERATION_AC,
  OPERATION_ADDDIGIT 
} from '../actions/operationActions';

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
        value: 0,
        workValue: '0',
        activeOperator: undefined,
        switchedOn: !state.switchedOn               
      };

    case OPERATION_AC:
      return {
        ...state,
        value: 0,
        workValue: '0',
        activeOperator: undefined
      };

    case OPERATION_ADDDIGIT:
      return{
        ...state,
        workValue: state.workValue + action.payload
      };

    default:
      return state;
  }
};

export default OperationReducer;