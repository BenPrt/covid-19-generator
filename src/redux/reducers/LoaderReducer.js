import ActionTypes from 'redux/ActionTypes';

// Reducer handling the loader display
export default (state = true, action) => {
  switch (action.type) {
    // Setting the loader toggle value
    case ActionTypes.toggleLoader:
      return action.toggleValue;
    default:
      return state;
  }
};
