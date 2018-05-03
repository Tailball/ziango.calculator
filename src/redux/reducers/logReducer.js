import { LOG_ADD } from '../actions/logActions';

const defaultLogReducerCache = [
  {
    timeStamp: new Date().getMilliseconds() + 654545,
    valueLeft: 200,
    valueRight: 300,
    operator: 'x',
    result: 60000
  },
  {
    timeStamp: new Date().getMilliseconds() + 78797,
    valueLeft: 16,
    valueRight: 96,
    operator: '+',
    result: 112
  },
  {
    timeStamp: new Date().getMilliseconds() - 44687789,
    valueLeft: 80,
    valueRight: 25,
    operator: '-',
    result: 55
  },
];

const LogReducer = (state = defaultLogReducerCache, action) => {
  switch(action.type){
    case LOG_ADD:
      return [...state, action.payload];

    default: 
      return state;
  }
};

export default LogReducer;



