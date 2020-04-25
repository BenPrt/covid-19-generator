import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isNowSectionDisplayed: true,
  isLaterSectionDisplayed: false,
};

// Reducer handling the sections display
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the now section toggle value
    case ActionTypes.toggleNowSection:
      return { ...state, isNowSectionDisplayed: action.toggleValue };
    // Setting the later section toggle value
    case ActionTypes.toggleLaterSection:
      return { ...state, isLaterSectionDisplayed: action.toggleValue };
    default:
      return state;
  }
};
