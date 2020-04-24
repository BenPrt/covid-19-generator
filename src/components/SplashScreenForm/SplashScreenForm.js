import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { hideSplashScreen } from 'redux/actions/SplashScreenActions';
import './SplashScreenForm.scss';

function SplashScreenForm() {
  const [nameValue, setNameValue] = useState('');
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const [surnameValue, setSurnameValue] = useState('');
  const handleSurnameChange = (event) => {
    setSurnameValue(event.target.value);
  };
  
  const [birthdayValue, setBirthdayValue] = useState('1970-01-01');
  const handleBirthdayChange = (event) => {
    setBirthdayValue(event.target.value);
  };

  const [birthPlaceValue, setBirthPlaceValue] = useState('');
  const handleBirthPlaceChange = (event) => {
    setBirthPlaceValue(event.target.value);
  };
  
  const [addressValue, setAddressValue] = useState('');
  const handleAddressChange = (event) => {
    setAddressValue(event.target.value);
  };
  
  const [cityValue, setCityValue] = useState('');
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };
  
  const [postalCodeValue, setPostalCodeValue] = useState('');
  const handlePostalCodeChange = (event) => {
    setPostalCodeValue(event.target.value);
  };
  
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    const values = {
      name: nameValue,
      surname : surnameValue,
      birthday : birthdayValue,
      birthPlace: birthPlaceValue,
      address : addressValue,
      city : cityValue,
      postalCode : postalCodeValue,
    };
    alert(JSON.stringify(values));
    dispatch(hideSplashScreen());
  };

  return (
    <div className="SplashScreenForm">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={6}>
            <form id="splash-screen-form">
              <TextField
                className="splash-screen-form-input"
                label="Nom"
                value={nameValue}
                onChange={handleNameChange.bind(this)}
                inputProps={{
                  autocomplete: 'family-name',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Prénom"
                value={surnameValue}
                onChange={handleSurnameChange.bind(this)}
                inputProps={{
                  autocomplete: 'given-name',
                }}
              />
              <TextField
                id="date"
                label="Date de Naissance"
                type="date"
                value={birthdayValue}
                onChange={handleBirthdayChange.bind(this)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  autocomplete: 'bday',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Lieu de Naissance"
                value={birthPlaceValue}
                onChange={handleBirthPlaceChange.bind(this)}
              />
              <TextField
                className="splash-screen-form-input"
                label="Adresse"
                value={addressValue}
                onChange={handleAddressChange.bind(this)}
                inputProps={{
                  autocomplete: 'address-line1',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Ville"
                value={cityValue}
                onChange={handleCityChange.bind(this)}
                inputProps={{
                  autocomplete: 'address-level2',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Code Postal"
                value={postalCodeValue}
                onChange={handlePostalCodeChange.bind(this)}
                inputProps={{
                  autocomplete: 'postal-code',
                }}
              />
              <Button
                id="get-started-button"
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleFormSubmit}
              >
                Valider <ArrowForwardIcon />
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SplashScreenForm;
