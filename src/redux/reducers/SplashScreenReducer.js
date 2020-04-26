import ActionTypes from 'redux/ActionTypes';

// Reducer handling the splash screen display value
export default (state = true, action) => {
  switch (action.type) {
    // Setting the splash screen display value
    case ActionTypes.hideSplashScreen:
      return false;
    default:
      return state;
  }
};
