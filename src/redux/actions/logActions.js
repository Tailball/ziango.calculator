export const LOG_ADD = 'log:ADD';
export const LOG_CLEAR = 'log:CLEAR';

export const AddLog = (log) => ({
  type: LOG_ADD,
  payload: log
});

export const ClearLog = () => ({
  type: LOG_CLEAR
});