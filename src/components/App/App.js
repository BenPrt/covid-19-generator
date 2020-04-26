import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';

import SplashScreen from 'components/SplashScreen/SplashScreen';
import SettingsPanel from 'components/SettingsPanel/SettingsPanel';
import Header from 'components/Header/Header';
import { fetchData } from 'redux/actions/PersonnalInformationActions';
import Loader from 'components/Loader/Loader';
import NowSection from 'components/NowSection/NowSection';
import LaterSection from 'components/LaterSection/LaterSection';

function App() {
  const dispatch = useDispatch();

  const calculateViewPortUnit = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    const initAppViewPortHeight = () => {
      calculateViewPortUnit();
      window.addEventListener('resize', () => {
        calculateViewPortUnit();
      });
    };

    initAppViewPortHeight();

    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <Loader />
      <SplashScreen />
      <SettingsPanel />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <Header />
            <NowSection />
            <LaterSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
