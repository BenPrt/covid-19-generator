import ActionTypes from 'redux/ActionTypes';

export const simpleAction = () => (dispatch) => {
  dispatch({
    type: ActionTypes.simpleAction,
    payload: 'result_of_simple_action',
  });
};
