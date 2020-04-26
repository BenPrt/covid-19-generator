import React from 'react';
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';

import './SettingsContent.scss';
import SettingsContentElement from 'components/SettingsContentElement/SettingsContentElement';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/SettingsBackupRestore';
import { erasePersonnalInformation } from 'redux/actions/PersonnalInformationActions';

function SettingsContent() {
  const dispatch = useDispatch();

  const handleDataDeletion = () => {
    dispatch(erasePersonnalInformation());
  };

  return (
    <div className="SettingsContent">
      <Container className="settings-content-container" fluid>
        <SettingsContentElement label="Nom" fieldKey="name" />
        <SettingsContentElement label="Prénom" fieldKey="surname" />
        <SettingsContentElement label="Date de naissance" fieldKey="birthday" />
        <SettingsContentElement
          label="Lieu de naissance"
          fieldKey="birthPlace"
        />
        <SettingsContentElement label="Adresse" fieldKey="address" />
        <SettingsContentElement label="Ville" fieldKey="city" />
        <SettingsContentElement label="Code Postal" fieldKey="postalCode" />
        <Row className="justify-content-center">
          <Col xs={8}>
            <Button
              id="settings-delete-button"
              variant="contained"
              size="large"
              startIcon={<DeleteIcon />}
              onClick={handleDataDeletion.bind(this)}
            >
              Effacer toutes mes données
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SettingsContent;
