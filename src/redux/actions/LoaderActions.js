import ActionTypes from 'redux/ActionTypes';

// - Action dispatched to toggle the loader frame
export const toggleLoader = (toggleValue) => {
  return {
    type: ActionTypes.toggleLoader,
    toggleValue,
  };
};
