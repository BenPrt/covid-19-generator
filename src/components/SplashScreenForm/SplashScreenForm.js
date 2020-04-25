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
  const dispatch = useDispatch();

  // Name Field state declaration, change event handler and validator
  const [nameValue, setNameValue] = useState('');
  const [nameErrorValue, setNameErrorValue] = useState(false);
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
    validateNameValue(event.target.value);
  };
  const validateNameValue = (value) => {
    let returnValue = false;
    if (value.length > 0 && value.length < 40) {
      setNameErrorValue(false);
      returnValue = true;
    } else {
      setNameErrorValue(true);
    }
    return returnValue;
  };

  // Surname Field state declaration, change event handler and validator
  const [surnameValue, setSurnameValue] = useState('');
  const [surnameErrorValue, setSurnameErrorValue] = useState(false);
  const handleSurnameChange = (event) => {
    setSurnameValue(event.target.value);
    validateSurnameValue(event.target.value);
  };
  const validateSurnameValue = (value) => {
    let returnValue = false;
    if (value.length > 0 && value.length < 40) {
      setSurnameErrorValue(false);
      returnValue = true;
    } else {
      setSurnameErrorValue(true);
    }
    return returnValue;
  };

  // Birthday Field state declaration, change event handler and validator
  const [birthdayValue, setBirthdayValue] = useState('');
  const [birthdayErrorValue, setBirthdayErrorValue] = useState(false);
  const handleBirthdayChange = (event) => {
    setBirthdayValue(event.target.value);
    validateBirthdayValue(event.target.value);
  };
  const validateBirthdayValue = (value) => {
    const birthdayRegex = RegExp(
      '^(19|20)\\d\\d([- /.])(0[1-9]|1[012])\\2(0[1-9]|[12][0-9]|3[01])$',
    );
    let returnValue = false;
    if (value.length > 0 && value.length < 11 && value.match(birthdayRegex)) {
      setBirthdayErrorValue(false);
      returnValue = true;
    } else {
      setBirthdayErrorValue(true);
    }
    return returnValue;
  };

  // Birth Place Field state declaration, change event handler and validator
  const [birthPlaceValue, setBirthPlaceValue] = useState('');
  const [birthPlaceErrorValue, setBirthPlaceErrorValue] = useState(false);
  const handleBirthPlaceChange = (event) => {
    setBirthPlaceValue(event.target.value);
    validateBirthPlaceValue(event.target.value);
  };
  const validateBirthPlaceValue = (value) => {
    let returnValue = false;
    if (value.length > 0 && value.length < 30) {
      setBirthPlaceErrorValue(false);
      returnValue = true;
    } else {
      setBirthPlaceErrorValue(true);
    }
    return returnValue;
  };

  // Address Field state declaration, change event handler and validator
  const [addressValue, setAddressValue] = useState('');
  const [addressErrorValue, setAddressErrorValue] = useState(false);
  const handleAddressChange = (event) => {
    setAddressValue(event.target.value);
    validateAddressValue(event.target.value);
  };
  const validateAddressValue = (value) => {
    let returnValue = false;
    if (value.length > 0 && value.length < 60) {
      setAddressErrorValue(false);
      returnValue = true;
    } else {
      setAddressErrorValue(true);
    }
    return returnValue;
  };

  // City Field state declaration, change event handler and validator
  const [cityValue, setCityValue] = useState('');
  const [cityErrorValue, setCityErrorValue] = useState(false);
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
    validateCityValue(event.target.value);
  };
  const validateCityValue = (value) => {
    let returnValue = false;
    if (value.length > 0 && value.length < 30) {
      setCityErrorValue(false);
      returnValue = true;
    } else {
      setCityErrorValue(true);
    }
    return returnValue;
  };

  // Postal Code Field state declaration, change event handler and validator
  const [postalCodeValue, setPostalCodeValue] = useState('');
  const [postalCodeErrorValue, setPostalCodeErrorValue] = useState(false);
  const postalCodeRegex = RegExp('\\b\\d{5}\\b');
  const handlePostalCodeChange = (event) => {
    setPostalCodeValue(event.target.value);
    validatePostalCodeValue(event.target.value);
  };
  const validatePostalCodeValue = (value) => {
    let returnValue = false;
    if (value.length > 0 && value.length < 30 && value.match(postalCodeRegex)) {
      setPostalCodeErrorValue(false);
      returnValue = true;
    } else {
      setPostalCodeErrorValue(true);
    }
    return returnValue;
  };

  // Form Validator
  const formIsCorrect = () => {
    return (
      validateNameValue(nameValue) &&
      validateSurnameValue(surnameValue) &&
      validateBirthdayValue(birthdayValue) &&
      validateBirthPlaceValue(birthPlaceValue) &&
      validateAddressValue(addressValue) &&
      validateCityValue(cityValue) &&
      validatePostalCodeValue(postalCodeValue)
    );
  };

  // Form submission handler
  const handleFormSubmit = () => {
    if (formIsCorrect()) {
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
            <form
              id="splash-screen-form"
              onSubmit={handleFormSubmit.bind(this)}
            >
              <TextField
                className="splash-screen-form-input"
                label="Nom"
                value={nameValue}
                onChange={handleNameChange.bind(this)}
                error={nameErrorValue}
                inputProps={{
                  autoComplete: 'family-name',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Prénom"
                value={surnameValue}
                onChange={handleSurnameChange.bind(this)}
                error={surnameErrorValue}
                inputProps={{
                  autoComplete: 'given-name',
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
                  autoComplete: 'bday',
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
                  autoComplete: 'address-line1',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Ville"
                value={cityValue}
                onChange={handleCityChange.bind(this)}
                error={cityErrorValue}
                inputProps={{
                  autoComplete: 'address-level2',
                }}
              />
              <TextField
                className="splash-screen-form-input"
                label="Code Postal"
                value={postalCodeValue}
                onChange={handlePostalCodeChange.bind(this)}
                error={postalCodeErrorValue}
                inputProps={{
                  autoComplete: 'postal-code',
                  inputMode: 'numeric',
                  pattern: '[0-9]{5}',
                  min: '00000',
                  max: '99999',
                }}
              />
              <Button
                id="get-started-button"
                variant="contained"
                color="primary"
                onClick={handleFormSubmit.bind(this)}
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
