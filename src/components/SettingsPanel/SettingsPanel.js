import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './SettingsPanel.scss';
import { toggleSettings } from 'redux/actions/SettingsActions';
import SettingsContent from 'components/SettingsContent/SettingsContent';

function SettingsPanel() {
  const isSettingsPanelDisplayed = useSelector(
    (state) => state.settingsFrameIsDisplayed,
  );

  const dispatch = useDispatch();

  const handleExitSettings = () => {
    dispatch(toggleSettings(false));
  };

  return (
    <div className="SettingsPanel">
      <div
        className={`settings-overlay ${
          isSettingsPanelDisplayed ? 'displayed' : ''
        }`}
        onClick={handleExitSettings.bind(this)}
        role="button"
        tabIndex={0}
      ></div>
      <div
        className={`settings-frame ${
          isSettingsPanelDisplayed ? 'displayed' : ''
        }`}
      >
        <div id="settings-header">
          <IconButton
            aria-label="closeSettings"
            onClick={handleExitSettings.bind(this)}
          >
            <ArrowBackIcon />
          </IconButton>
          <h2 id="settings-frame-title">Paramètres</h2>
        </div>
        <SettingsContent />
      </div>
    </div>
  );
}

export default SettingsPanel;
