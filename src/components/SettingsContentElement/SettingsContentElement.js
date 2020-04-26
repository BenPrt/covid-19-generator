import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditIcon from '@material-ui/icons/Edit';
import { TextField, IconButton } from '@material-ui/core';

import './SettingsContentElement.scss';
import { updateField } from 'redux/actions/PersonnalInformationActions';

function SettingsContentElement(props) {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.personnalInformation[props.fieldKey],
  );

  const [isInEditMode, toggleEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState(value);

  const handleEditionToggle = () => {
    toggleEditMode(true);
  };

  const handleFieldChange = (event) => {
    setFieldValue(event.target.value);
  };

  const handleFieldEdition = (event) => {
    event.preventDefault();
    if (fieldValue.length > 0) {
      dispatch(updateField(props.fieldKey, fieldValue));
    }
    toggleEditMode(false);
  };

  return (
    <div className="SettingsContentElement">
      <Row className="settings-section">
        <Col className="settings-section-label" xs={5}>
          {props.label}
        </Col>
        {!isInEditMode ? (
          <Col className="settings-section-content" xs={7}>
            <p>{value} </p>
            <IconButton size="small" onClick={handleEditionToggle.bind(this)}>
              <EditIcon />
            </IconButton>
          </Col>
        ) : (
          <Col className="settings-section-content" xs={7}>
            <form
              className="settings-edition-form"
              onSubmit={handleFieldEdition.bind(this)}
            >
              <TextField
                className="settings-edition-field"
                value={fieldValue}
                onChange={handleFieldChange.bind(this)}
                onBlur={handleFieldEdition.bind(this)}
                inputProps={{ autoFocus: true }}
              />
            </form>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default SettingsContentElement;
