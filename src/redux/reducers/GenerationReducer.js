import ActionTypes from 'redux/ActionTypes';
import moment from 'moment';

const initialState = () => ({
  outingTime: moment().format('hh:mm'),
  generationTime: moment().subtract(8, 'minutes').format('hh:mm'),
});

// Reducer handling the generation data
export default (state = initialState(), action) => {
  switch (action.type) {
    // Setting the outing value
    case ActionTypes.setOutingValue:
      return {
        ...state,
        outingTime: action.outingValue,
        generationTime: moment(action.outingValue, 'hh:mm')
          .subtract(8, 'minutes')
          .format('hh:mm'),
      };
    case ActionTypes.resetOutingValue:
      return initialState();
    default:
      return state;
  }
};
