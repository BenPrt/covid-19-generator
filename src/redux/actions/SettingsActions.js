import ActionTypes from 'redux/ActionTypes';

// - Action dispatched to toggle the settings panel
export const toggleSettings = (toggleValue) => {
  return {
    type: ActionTypes.toggleSettings,
    toggleValue,
  };
};
