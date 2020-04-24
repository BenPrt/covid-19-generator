import ActionTypes from 'redux/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.simpleAction:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
