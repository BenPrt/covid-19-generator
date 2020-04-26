import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { TextField } from '@material-ui/core';

import ReasonsList from 'ressources/ReasonsList';

import './LaterSection.scss';
import { displaySection } from 'redux/actions/SectionsActions';
import ReasonGenerationButton from 'components/ReasonGenerationButton/ReasonGenerationButton';
import { setOutingDateValue, setOutingTimeValue } from 'redux/actions/GenerationActions';

function LaterSection() {
  const dispatch = useDispatch();

  const isLaterSectionDisplayed = useSelector(
    (state) => state.sectionsDisplayData.isLaterSectionDisplayed,
  );
  const outingDateValue = useSelector((state) => state.generationData.outingDate);
  const outingHourValue = useSelector((state) => state.generationData.outingTime);

  const handleLaterSectionToggle = () => {
    dispatch(displaySection('later', !isLaterSectionDisplayed));
  };

  const handleOutingDateChange = (event) => {
    dispatch(setOutingDateValue(event.target.value));
  };

  const handleOutingHourChange = (event) => {
    dispatch(setOutingTimeValue(event.target.value));
  };

  return (
    <div className="LaterSection">
      <div
        id="later-section-header"
        role="button"
        tabIndex={0}
        onClick={handleLaterSectionToggle.bind(this)}
      >
        <h2 id="later-section-title">Pour une heure de sortie précise</h2>
        <KeyboardArrowDownIcon
          className={`later-section-header-icon ${
            isLaterSectionDisplayed ? 'opened' : ''
          }`}
        />
      </div>
      <div
        className={`later-section-content ${
          isLaterSectionDisplayed ? 'displayed' : ''
        }`}
      >
        <div className="later-section-section">
          <h3 className="later-section-content-subtitle">
            Sélectionner vos date et heure de sortie :
          </h3>
          <form id="later-form" noValidate>
            <TextField
              id="later-form-date-input"
              type="date"
              defaultValue={outingDateValue}
              onChange={handleOutingDateChange.bind(this)}
              onBlur={handleOutingDateChange.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="later-form-time-input"
              type="time"
              defaultValue={outingHourValue}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={handleOutingHourChange.bind(this)}
              onBlur={handleOutingHourChange.bind(this)}
            />
          </form>
        </div>
        <div className="later-section-section">
          <h3 className="later-section-content-subtitle">
            Et sélectionner la raison de votre sortie pour générer votre
            attestation :
          </h3>
          {ReasonsList.map((reason, index) => (
            <ReasonGenerationButton key={index} reason={reason} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaterSection;
