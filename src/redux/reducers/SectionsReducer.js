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
      return {
        ...state,
        isNowSectionDisplayed: action.toggleValue,
        isLaterSectionDisplayed:
          action.toggleValue && state.isLaterSectionDisplayed
            ? false
            : state.isLaterSectionDisplayed,
      };
    // Setting the later section toggle value
    case ActionTypes.toggleLaterSection:
      return {
        ...state,
        isNowSectionDisplayed:
          action.toggleValue && state.isNowSectionDisplayed
            ? false
            : state.isNowSectionDisplayed,
        isLaterSectionDisplayed: action.toggleValue,
      };
    default:
      return state;
  }
};
