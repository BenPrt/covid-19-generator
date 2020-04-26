import ActionTypes from 'redux/ActionTypes';
import { resetOutingValue } from './GenerationActions';

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

export const displaySection = (section, toggleValue) => {
  return (dispatch) => {
    switch (section) {
      case 'now':
        dispatch(toggleNowSection(toggleValue));
        if (toggleValue) {
          dispatch(resetOutingValue());
        }
        break;
      case 'later':
        dispatch(toggleLaterSection(toggleValue));
        if (!toggleValue) {
          dispatch(resetOutingValue());
        }
        break;
      default:
        break;
    }
  };
};
