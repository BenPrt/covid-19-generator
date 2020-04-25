import ActionTypes from 'redux/ActionTypes';

// - Action dispatched to toggle the settings panel
export const toggleNowSection = (toggleValue) => {
  return {
    type: ActionTypes.toggleNowSection,
    toggleValue,
  };
};

// - Action dispatched to toggle the settings panel
export const toggleLaterSection = (toggleValue) => {
  return {
    type: ActionTypes.toggleLaterSection,
    toggleValue,
  };
};
