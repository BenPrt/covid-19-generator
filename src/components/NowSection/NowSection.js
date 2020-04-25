import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './NowSection.scss';
import { toggleNowSection } from 'redux/actions/SectionsActions';

function NowSection() {
  const dispatch = useDispatch();

  const isNowSectionDisplayed = useSelector(
    (state) => state.sectionsDisplayData.isNowSectionDisplayed,
  );

  const handleNowSectionToggle = () => {
    dispatch(toggleNowSection(!isNowSectionDisplayed));
  };

  const handleGenerateNow = () => {
    dispatch();
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
      </div>
    </div>
  );
}

export default NowSection;
