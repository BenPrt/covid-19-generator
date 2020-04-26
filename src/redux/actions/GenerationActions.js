import ActionTypes from 'redux/ActionTypes';

// - Action dispatched to set the outing date value
export const setOutingDateValue = (value) => {
  return {
    type: ActionTypes.setOutingDateValue,
    outingDateValue: value,
  };
};

// - Action dispatched to set the outing time value
export const setOutingTimeValue = (value) => {
  return {
    type: ActionTypes.setOutingTimeValue,
    outingTimeValue: value,
  };
};

// - Action dispatched to reset the outing values
export const resetOutingValue = () => {
  return {
    type: ActionTypes.resetOutingValue,
  };
};
