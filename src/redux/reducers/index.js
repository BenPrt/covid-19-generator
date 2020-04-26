import { combineReducers } from 'redux';
import SplashScreenReducer from './SplashScreenReducer';
import SettingsReducer from './SettingsReducer';
import PersonnalInformationReducer from './PersonnalInformationReducer';
import LoaderReducer from './LoaderReducer';
import SectionsReducer from './SectionsReducer';
import GenerationReducer from './GenerationReducer';

export default combineReducers({
  loaderIsDisplayed: LoaderReducer,
  splashScreenIsDisplayed: SplashScreenReducer,
  settingsFrameIsDisplayed: SettingsReducer,
  personnalInformation: PersonnalInformationReducer,
  sectionsDisplayData: SectionsReducer,
  generationData: GenerationReducer,
});
