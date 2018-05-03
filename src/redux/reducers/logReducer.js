import { LOG_ADD, LOG_CLEAR } from '../actions/logActions';
const uuidv4 = require('uuid/v4');

const defaultLogReducerCache = [];

const LogReducer = (state = defaultLogReducerCache, action) => {
  switch(action.type){
    case LOG_ADD:
      action.payload.id = uuidv4();
      return [...state, action.payload];

    case LOG_CLEAR:
      return [];

    default: 
      return state;
  }
};

export default LogReducer;



