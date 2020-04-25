import ActionTypes from 'redux/ActionTypes';
import {
  updateNameValue,
  updateSurnameValue,
  updateBirthdayValue,
  updateBirthPlaceValue,
  updateAddressValue,
  updateCityValue,
  updatePostalCodeValue,
} from './PersonnalInformationActions';

// - Action dispatched to hide the splash screen
export const hideSplashScreen = () => {
  return {
    type: ActionTypes.hideSplashScreen,
    displayValue: false,
  };
};
export const initSplashScreenStatus = () => {
  return (dispatch, getState) => {
    const areInformationAlreadyInited =
      getState().personnalInformation.name.length > 0 &&
      getState().personnalInformation.surname.length > 0 &&
      getState().personnalInformation.birthday.length > 0 &&
      getState().personnalInformation.birthPlace.length > 0 &&
      getState().personnalInformation.address.length > 0 &&
      getState().personnalInformation.city.length > 0 &&
      getState().personnalInformation.postalCode.length > 0;
    if (areInformationAlreadyInited) {
      dispatch(hideSplashScreen());
    }
  };
};

// - Thunk dispatching personnal informations on splash screen form submit
export const submitSplashScreenForm = (values) => {
  return (dispatch) => {
    dispatch(updateNameValue(values.name));
    dispatch(updateSurnameValue(values.surname));
    dispatch(updateBirthdayValue(values.birthday));
    dispatch(updateBirthPlaceValue(values.birthPlace));
    dispatch(updateAddressValue(values.address));
    dispatch(updateCityValue(values.city));
    dispatch(updatePostalCodeValue(values.postalCode));
    dispatch(hideSplashScreen());
  };
};
