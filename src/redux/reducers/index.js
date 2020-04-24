import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
  splashScreenIsDisplayed : SplashScreenReducer,
  settingsFrameIsDisplayed : SettingsReducer,
});
