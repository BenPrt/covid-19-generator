import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import SettingsReducer from './SettingsReducer';
import PersonnalInformationReducer from './PersonnalInformationReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  settingsFrameIsDisplayed : SettingsReducer,
  personnalInformation : PersonnalInformationReducer,
});
