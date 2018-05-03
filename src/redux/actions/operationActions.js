export const OPERATION_SWITCH = 'operation:SWITCH';
export const OPERATION_AC = 'operation:AC';
export const OPERATION_ADDDIGIT = "operation:ADDDIGIT";

export const SwitchOnOff = () => ({
  type: OPERATION_SWITCH
});

export const ClearWorkMem = () => ({
  type: OPERATION_AC
});

export const AddDigit = (digit) => ({
  type: OPERATION_ADDDIGIT,
  payload: digit
});
