import { LOG_ADD, LOG_CLEAR } from '../actions/logActions';

const defaultLogReducerCache = [];

const LogReducer = (state = defaultLogReducerCache, action) => {
  switch(action.type){
    case LOG_ADD:
      return [...state, action.payload];

    case LOG_CLEAR:
      return [];

    default: 
      return state;
  }
};

export default LogReducer;



