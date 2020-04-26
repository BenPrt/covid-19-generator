import ActionTypes from 'redux/ActionTypes';

const initialState = {
  name: '',
  surname: '',
  birthday: '',
  birthPlace: '',
  address: '',
  city: '',
  postalCode: '',
};

// Reducer handling the personnal information management
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the name value
    case ActionTypes.setNameValue:
      return { ...state, name: action.name };
    // Setting the surname value
    case ActionTypes.setSurnameValue:
      return { ...state, surname: action.surname };
    // Setting the birthday value
    case ActionTypes.setBirthdayValue:
      return { ...state, birthday: action.birthday };
    // Setting the birth place value
    case ActionTypes.setBirthPlaceValue:
      return { ...state, birthPlace: action.birthPlace };
    // Setting the address value
    case ActionTypes.setAddressValue:
      return { ...state, address: action.address };
    // Setting the city value
    case ActionTypes.setCityValue:
      return { ...state, city: action.city };
    // Setting the postal code value
    case ActionTypes.setPostalCodeValue:
      return { ...state, postalCode: action.postalCode };
    // Erasing all the personnal information
    case ActionTypes.flushData:
      return initialState;
    default:
      return state;
  }
};
