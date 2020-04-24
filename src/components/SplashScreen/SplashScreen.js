import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './SplashScreen.scss';

import SplashScreenForm from 'components/SplashScreenForm/SplashScreenForm';

function SplashScreen() {
  const isSplashScreenDisplayed = useSelector(
    (state) => state.splashScreenIsDisplayed,
  );

  return (
    <div className="SplashScreen">
      <div
        className={`splash-screen-overlay ${
          isSplashScreenDisplayed ? '' : 'hidden'
        }`}
      ></div>
      <div
        className={`splash-screen-frame ${
          isSplashScreenDisplayed ? '' : 'hidden'
        }`}
      >
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10} xl={6}>
              <h2 id="splash-screen-title">Entrez vos informations :</h2>
              <SplashScreenForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SplashScreen;
