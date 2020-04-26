import ActionTypes from 'redux/ActionTypes';
import moment from 'moment';

const initialState = () => ({
  outingDate: moment().format('YYYY-MM-DD'),
  outingTime: moment().format('hh:mm'),
  generationTime: moment().subtract(8, 'minutes').format('hh:mm'),
});

// Reducer handling the generation data
export default (state = initialState(), action) => {
  switch (action.type) {
    // Setting the outing date value
    case ActionTypes.setOutingDateValue:
      return {
        ...state,
        outingDate: action.outingDateValue,
      };
    // Setting the outing value
    case ActionTypes.setOutingTimeValue:
      return {
        ...state,
        outingTime: action.value,
        generationTime: moment(action.outingTimevalue, 'hh:mm')
          .subtract(8, 'minutes')
          .format('hh:mm'),
      };
    // Resetting outing values
    case ActionTypes.resetOutingValue:
      return initialState();
    default:
      return state;
  }
};
