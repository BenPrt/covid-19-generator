import React from 'react';
import { useSelector } from 'react-redux';

import './Loader.scss';
import LoaderImage from 'ressources/coronavirus_loader_image.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Loader() {
  const isLoaderDisplayed = useSelector((state) => state.loaderIsDisplayed);

  return (
    <div className="Loader">
      <div
        className={`loader-overlay ${isLoaderDisplayed ? '' : 'hidden'}`}
      ></div>
      <div className={`loader-frame ${isLoaderDisplayed ? '' : 'hidden'}`}>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={5} md={3} xl={1}>
              <img
                id="loader-spinner"
                alt="covid-19 loading image"
                src={LoaderImage}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Loader;
