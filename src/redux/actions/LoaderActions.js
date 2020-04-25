import ActionTypes from 'redux/ActionTypes';

// - Action dispatched to toggle the settings panel
export const toggleLoader = (toggleValue) => {
  return {
    type: ActionTypes.toggleLoader,
    toggleValue,
  };
};
