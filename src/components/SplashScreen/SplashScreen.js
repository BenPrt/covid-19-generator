import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { hideSplashScreen } from 'redux/actions/SplashScreenActions';
import './SplashScreen.scss';


function SplashScreen() {
  const isSplashScreenDisplayed = useSelector(
    (state) => state.splashScreenIsDisplayed,
  );

  const dispatch = useDispatch();

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
              <Container>
                <Row className="justify-content-center">
                  <Col xs={10} md={6}>
                    <Button
                      id="get-started-button"
                      variant="contained"
                      color="primary"
                      onClick={() => dispatch(hideSplashScreen())}
                    >
                      Submit <ArrowForwardIcon />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SplashScreen;
