export const LOG_ADD = 'log:ADD';

export const AddLog = (log) => ({
  type: LOG_ADD,
  payload: log
});