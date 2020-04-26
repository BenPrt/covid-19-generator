import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import ReasonsList from 'ressources/ReasonsList';

import './NowSection.scss';
import { displaySection } from 'redux/actions/SectionsActions';
import ReasonGenerationButton from 'components/ReasonGenerationButton/ReasonGenerationButton';

function NowSection() {
  const dispatch = useDispatch();

  const isNowSectionDisplayed = useSelector(
    (state) => state.sectionsDisplayData.isNowSectionDisplayed,
  );

  const handleNowSectionToggle = () => {
    dispatch(displaySection('now', !isNowSectionDisplayed));
  };

  return (
    <div className="NowSection">
      <div
        id="now-section-header"
        role="button"
        tabIndex={0}
        onClick={handleNowSectionToggle.bind(this)}
      >
        <h2 id="now-section-title">Pour maintenant</h2>
        <KeyboardArrowDownIcon
          className={`now-section-header-icon ${
            isNowSectionDisplayed ? 'opened' : ''
          }`}
        />
      </div>
      <div
        className={`now-section-content ${
          isNowSectionDisplayed ? 'displayed' : ''
        }`}
      >
        <h3 id="now-section-content-subtitle">
          Sélectionner le motif de votre sortie pour générer votre attestation :
        </h3>
        {ReasonsList.map((reason, index) => (
          <ReasonGenerationButton key={index} reason={reason} />
        ))}
      </div>
    </div>
  );
}

export default NowSection;
