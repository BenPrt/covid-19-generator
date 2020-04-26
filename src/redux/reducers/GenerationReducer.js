import ActionTypes from 'redux/ActionTypes';
import moment from 'moment';

const initialState = () => ({
  outingDate: moment().format('YYYY-MM-DD'),
  outingTime: moment().format('HH:mm'),
  generationDate: moment().format('YYYY-MM-DD'),
  generationTime: moment().subtract(8, 'minutes').format('HH:mm'),
});

// Reducer handling the generation data
export default (state = initialState(), action) => {
  switch (action.type) {
    // Setting the outing date value
    case ActionTypes.setOutingDateValue:
      let newDateValue = action.outingDateValue;
      return {
        ...state,
        outingDate: newDateValue,
        generationDate: newDateValue,
      };
    // Setting the outing value
    case ActionTypes.setOutingTimeValue:
      let newTimeValue = action.outingTimeValue;
      return {
        ...state,
        outingTime: newTimeValue,
        generationTime: moment(newTimeValue, 'HH:mm')
          .subtract(8, 'minutes')
          .format('HH:mm'),
      };
    // Resetting outing values
    case ActionTypes.resetOutingValue:
      return initialState();
    default:
      return state;
  }
};
