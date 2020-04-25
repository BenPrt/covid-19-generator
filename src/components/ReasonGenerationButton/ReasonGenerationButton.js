import React from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from '@material-ui/core';

import './ReasonGenerationButton.scss';

function ReasonGenerationButton(props) {
  const dispatch = useDispatch();

  const handleGenerateNow = () => {
    alert(props.reason.name);
    // dispatch();
  };

  return (
    <div
      className="ReasonGenerationButton"
      role="button"
      tabIndex={0}
      onClick={handleGenerateNow.bind(this)}
    >
      <div className="reason-icon-wrapper">
        <Icon className="reason-icon">{props.reason.icon}</Icon>
      </div>
      <p className="reason-description">{props.reason.description}</p>
    </div>
  );
}

export default ReasonGenerationButton;
