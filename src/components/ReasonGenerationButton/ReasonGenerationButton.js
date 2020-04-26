import React from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from '@material-ui/core';

import './ReasonGenerationButton.scss';
import { generatePDFFile } from 'redux/actions/GenerationActions';

function ReasonGenerationButton(props) {
  const dispatch = useDispatch();

  const handleGeneratePDF = () => {
    dispatch(generatePDFFile(props.reason.name));
  };

  return (
    <div
      className="ReasonGenerationButton"
      role="button"
      tabIndex={0}
      onClick={handleGeneratePDF.bind(this)}
    >
      <div className="reason-icon-wrapper">
        <Icon className="reason-icon">{props.reason.icon}</Icon>
      </div>
      <p className="reason-description">{props.reason.description}</p>
    </div>
  );
}

export default ReasonGenerationButton;
