const defaultOperationReducerCache = {
  value: 0,
  workValue: '0',
  activeOperator: undefined
};

const OperationReducer = (state = defaultOperationReducerCache, action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default OperationReducer;