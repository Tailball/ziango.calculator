const defaultOperationReducerCache = {
  value: 0,
  workValue: undefined,
  activeOperator: undefined
};

const OperationReducer = (state = defaultOperationReducerCache, action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default OperationReducer;