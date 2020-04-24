import ActionTypes from 'redux/ActionTypes';

// - Action dispatched to hide the splash screen
export const hideSplashScreen = () => {
  return {
    type: ActionTypes.hideSplashScreen,
    displayValue: false,
  };
};
