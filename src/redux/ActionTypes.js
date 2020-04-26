export const ActionTypes = {
  // Loader Actions
  toggleLoader: 'TOGGLE_LOADER',
  // Splash Screen Actions
  hideSplashScreen: 'HIDE_SPLASH_SCREEN',
  // SettingsFrame Actions
  toggleSettings: 'TOGGLE_SETTINGS',
  // Personnal Informations Action
  setNameValue: 'SET_NAME_VALUE',
  setSurnameValue: 'SET_SURNAME_VALUE',
  setBirthdayValue: 'SET_BIRTHDAY_VALUE',
  setBirthPlaceValue: 'SET_BIRTH_PLACE_VALUE',
  setAddressValue: 'SET_ADDRESS_VALUE',
  setCityValue: 'SET_CITY_VALUE',
  setPostalCodeValue: 'SET_POSTAL_CODE_VALUE',
  flushData: 'FLUSH_DATA',
  // Sections display Actions
  toggleNowSection: 'TOGGLE_NOW_SECTION',
  toggleLaterSection: 'TOGGLE_LATER_SECTION',
  // Certificate Generation Actions
  setOutingDateValue: 'SET_OUTING_DATE_VALUE',
  setOutingTimeValue: 'SET_OUTING_TIME_VALUE',
  resetOutingValue: 'RESET_OUTING_VALUE',
};

export default ActionTypes;
