import ActionTypes from 'redux/ActionTypes';
import { initSplashScreenStatus } from './SplashScreenActions';

// - Action and thunks called to update name value
export const setNameValue = (name) => {
  return {
    type: ActionTypes.setNameValue,
    name,
  };
};
export const updateNameValue = (name) => {
  return (dispatch) => {
    localStorage.setItem('name', name);
    dispatch(setNameValue(name));
  };
};
export const fetchNameValue = () => {
  return (dispatch) => {
    if (localStorage.getItem('name')) {
      dispatch(setNameValue(localStorage.getItem('name')));
    }
  };
};

// - Action and thunks called to update surname value
export const setSurnameValue = (surname) => {
  return {
    type: ActionTypes.setSurnameValue,
    surname,
  };
};
export const updateSurnameValue = (surname) => {
  return (dispatch) => {
    localStorage.setItem('surname', surname);
    dispatch(setSurnameValue(surname));
  };
};
export const fetchSurnameValue = () => {
  return (dispatch) => {
    if (localStorage.getItem('surname')) {
      dispatch(setSurnameValue(localStorage.getItem('surname')));
    }
  };
};

// - Action and thunks called to update birthday value
export const setBirthdayValue = (birthday) => {
  return {
    type: ActionTypes.setBirthdayValue,
    birthday,
  };
};
export const updateBirthdayValue = (birthday) => {
  return (dispatch) => {
    localStorage.setItem('birthday', birthday);
    dispatch(setBirthdayValue(birthday));
  };
};
export const fetchBirthdayValue = () => {
  return (dispatch) => {
    if (localStorage.getItem('birthday')) {
      dispatch(setBirthdayValue(localStorage.getItem('birthday')));
    }
  };
};

// - Action and thunks called to update birthday value
export const setBirthPlaceValue = (birthPlace) => {
  return {
    type: ActionTypes.setBirthPlaceValue,
    birthPlace,
  };
};
export const updateBirthPlaceValue = (birthPlace) => {
  return (dispatch) => {
    localStorage.setItem('birthPlace', birthPlace);
    dispatch(setBirthPlaceValue(birthPlace));
  };
};
export const fetchBirthPlaceValue = () => {
  return (dispatch) => {
    if (localStorage.getItem('birthPlace')) {
      dispatch(setBirthPlaceValue(localStorage.getItem('birthPlace')));
    }
  };
};

// - Action and thunks called to update address value
export const setAddressValue = (address) => {
  return {
    type: ActionTypes.setAddressValue,
    address,
  };
};
export const updateAddressValue = (address) => {
  return (dispatch) => {
    localStorage.setItem('address', address);
    dispatch(setAddressValue(address));
  };
};
export const fetchAddressValue = () => {
  return (dispatch) => {
    if (localStorage.getItem('address')) {
      dispatch(setAddressValue(localStorage.getItem('address')));
    }
  };
};

// - Action and thunks called to update city value
export const setCityValue = (city) => {
  return {
    type: ActionTypes.setCityValue,
    city,
  };
};
export const updateCityValue = (city) => {
  return (dispatch) => {
    localStorage.setItem('city', city);
    dispatch(setCityValue(city));
  };
};
export const fetchCityValue = () => {
  return (dispatch) => {
    if (localStorage.getItem('city')) {
      dispatch(setCityValue(localStorage.getItem('city')));
    }
  };
};

// - Action and thunks called to update city value
export const setPostalCodeValue = (postalCode) => {
  return {
    type: ActionTypes.setPostalCodeValue,
    postalCode,
  };
};
export const updatePostalCodeValue = (postalCode) => {
  return (dispatch) => {
    localStorage.setItem('postalCode', postalCode);
    dispatch(setPostalCodeValue(postalCode));
  };
};
export const fetchPostalCodeValue = () => {
  return (dispatch) => {
    if (localStorage.getItem('postalCode')) {
      dispatch(setPostalCodeValue(localStorage.getItem('postalCode')));
    }
  };
};

// Thunk updating a specific field with a key/value passed in parameter
export const updateField = (key, value) => {
  return (dispatch) => {
    switch (key) {
      case 'name':
        dispatch(updateNameValue(value));
        break;
      case 'surname':
        dispatch(updateSurnameValue(value));
        break;
      case 'birthday':
        dispatch(updateBirthdayValue(value));
        break;
      case 'birthPlace':
        dispatch(updateBirthPlaceValue(value));
        break;
      case 'address':
        dispatch(updateAddressValue(value));
        break;
      case 'city':
        dispatch(updateCityValue(value));
        break;
      case 'postalCode':
        dispatch(updatePostalCodeValue(value));
        break;
      default:
        break;
    }
  };
};

// Action and thunk deleting all the stored personnal information
export const flushPersonnalInformation = () => {
  return {
    type: ActionTypes.flushData,
  };
};
export const erasePersonnalInformation = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(flushPersonnalInformation());
    document.location.reload(true);
  };
};

// Thunk fetching all the stored informations from local storage
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchNameValue());
    dispatch(fetchSurnameValue());
    dispatch(fetchBirthdayValue());
    dispatch(fetchBirthPlaceValue());
    dispatch(fetchAddressValue());
    dispatch(fetchCityValue());
    dispatch(fetchPostalCodeValue());
    dispatch(initSplashScreenStatus());
  };
};
