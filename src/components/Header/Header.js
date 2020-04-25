import React from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

import './Header.scss';
import { toggleSettings } from 'redux/actions/SettingsActions';

function Header() {
  const dispatch = useDispatch();

  const handleToggleSettings = () => {
    dispatch(toggleSettings(true));
  };

  return (
    <div className="Header">
      <h1>Générer une attestation</h1>
      <IconButton
        aria-label="settings"
        onClick={handleToggleSettings.bind(this)}
      >
        <SettingsIcon />
      </IconButton>
    </div>
  );
}

export default Header;
