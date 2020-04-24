import ActionTypes from 'redux/ActionTypes';

// Reducer handling the settings panel display
export default (state = false, action) => {
  switch (action.type) {
    // Setting the settings panel toggle value
    case ActionTypes.toggleSettings:
      return action.toggleValue;
    default:
      return state;
  }
};
