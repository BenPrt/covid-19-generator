import ActionTypes from 'redux/ActionTypes';

// - Action dispatched to set the outing values
export const setOutingValue = (outingValue) => {
  return {
    type: ActionTypes.setOutingValue,
    outingValue,
  };
};
// - Action dispatched to reset the outing values
export const resetOutingValue = () => {
  return {
    type: ActionTypes.resetOutingValue,
  };
};
