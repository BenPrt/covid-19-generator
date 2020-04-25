import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './LaterSection.scss';
import { toggleLaterSection } from 'redux/actions/SectionsActions';

function LaterSection() {
  const dispatch = useDispatch();

  const isLaterSectionDisplayed = useSelector(
    (state) => state.sectionsDisplayData.isLaterSectionDisplayed,
  );

  const handleLaterSectionToggle = () => {
    dispatch(toggleLaterSection(!isLaterSectionDisplayed));
  };

  const handleGenerateLater = () => {
    dispatch();
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
        <KeyboardArrowDownIcon className={`later-section-header-icon ${
          isLaterSectionDisplayed ? 'opened' : ''
        }`}/>
      </div>
      <div
        className={`later-section-content ${
          isLaterSectionDisplayed ? 'displayed' : ''
        }`}
      >
        Générer une attestion pour une heure précise
      </div>
    </div>
  );
}

export default LaterSection;
