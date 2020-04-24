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
  const [nameErrorValue, setNameErrorValue] = useState(false);
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
    if (event.target.value.length > 0 && event.target.value.length < 40) {
      setNameErrorValue(false);
    } else {
      setNameErrorValue(true);
    }
  };

  const [surnameValue, setSurnameValue] = useState('');
  const [surnameErrorValue, setSurnameErrorValue] = useState(false);
  const handleSurnameChange = (event) => {
    setSurnameValue(event.target.value);
    if (event.target.value.length > 0 && event.target.value.length < 40) {
      setSurnameErrorValue(false);
    } else {
      setSurnameErrorValue(true);
    }
  };

  const [birthdayValue, setBirthdayValue] = useState('');
  const [birthdayErrorValue, setBirthdayErrorValue] = useState(false);
  const handleBirthdayChange = (event) => {
    const birthdayRegex = RegExp(
      '^(19|20)\\d\\d([- /.])(0[1-9]|1[012])\\2(0[1-9]|[12][0-9]|3[01])$',
    );
    setBirthdayValue(event.target.value);
    if (
      event.target.value.length > 0 &&
      event.target.value.match(birthdayRegex)
    ) {
      setBirthdayErrorValue(false);
    } else {
      setBirthdayErrorValue(true);
    }
  };

  const [birthPlaceValue, setBirthPlaceValue] = useState('');
  const [birthPlaceErrorValue, setBirthPlaceErrorValue] = useState(false);
  const handleBirthPlaceChange = (event) => {
    setBirthPlaceValue(event.target.value);
    if (event.target.value.length > 0 && event.target.value.length < 40) {
      setBirthPlaceErrorValue(false);
    } else {
      setBirthPlaceErrorValue(true);
    }
  };

  const [addressValue, setAddressValue] = useState('');
  const [addressErrorValue, setAddressErrorValue] = useState(false);
  const handleAddressChange = (event) => {
    setAddressValue(event.target.value);
    if (event.target.value.length > 0 && event.target.value.length < 60) {
      setAddressErrorValue(false);
    } else {
      setAddressErrorValue(true);
    }
  };

  const [cityValue, setCityValue] = useState('');
  const [cityErrorValue, setCityErrorValue] = useState(false);
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
    if (event.target.value.length > 0 && event.target.value.length < 30) {
      setCityErrorValue(false);
    } else {
      setCityErrorValue(true);
    }
  };

  const [postalCodeValue, setPostalCodeValue] = useState('');
  const [postalCodeErrorValue, setPostalCodeErrorValue] = useState(false);
  const handlePostalCodeChange = (event) => {
    setPostalCodeValue(event.target.value);
    if (event.target.value.length > 0 && event.target.value.length < 6) {
      setPostalCodeErrorValue(false);
    } else {
      setPostalCodeErrorValue(true);
    }
  };

  const dispatch = useDispatch();

  const formIsCorrect = () => {
    return (
      !nameErrorValue &&
      nameValue &&
      !surnameErrorValue &&
      surnameValue &&
      !birthdayErrorValue &&
      birthdayValue &&
      !birthPlaceErrorValue &&
      birthPlaceValue &&
      !addressErrorValue &&
      addressValue &&
      !cityErrorValue &&
      cityValue &&
      !postalCodeErrorValue &&
      postalCodeValue
    );
  };

  const handleFormSubmit = () => {
    if (!formIsCorrect) {
      const values = {
        name: nameValue,
        surname: surnameValue,
        birthday: birthdayValue,
        birthPlace: birthPlaceValue,
        address: addressValue,
        city: cityValue,
        postalCode: postalCodeValue,
      };
      alert(JSON.stringify(values));
      dispatch(hideSplashScreen());
    }
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
                error={nameErrorValue}
                inputProps={{
                  autocomplete: 'family-name',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Prénom"
                value={surnameValue}
                onChange={handleSurnameChange.bind(this)}
                error={surnameErrorValue}
                inputProps={{
                  autocomplete: 'given-name',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Date de Naissance"
                type="date"
                value={birthdayValue}
                onChange={handleBirthdayChange.bind(this)}
                error={birthdayErrorValue}
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
                error={birthPlaceErrorValue}
              />
              <TextField
                className="splash-screen-form-input"
                label="Adresse"
                value={addressValue}
                onChange={handleAddressChange.bind(this)}
                error={addressErrorValue}
                inputProps={{
                  autocomplete: 'address-line1',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Ville"
                value={cityValue}
                onChange={handleCityChange.bind(this)}
                error={cityErrorValue}
                inputProps={{
                  autocomplete: 'address-level2',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Code Postal"
                value={postalCodeValue}
                onChange={handlePostalCodeChange.bind(this)}
                error={postalCodeErrorValue}
                inputProps={{
                  autocomplete: 'postal-code',
                  inputmode: 'numeric',
                  pattern: '[0-9]{5}',
                  min: '00000',
                  max: '99999',
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
