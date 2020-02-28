import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const imgDesign = {
  borderRadius: '30px'
};

class Category extends Component {
  render() {
    return(
      <Container
        style={{
          paddingTop: '160px',
          paddingBottom: '160px'
        }}
      >
        <Row>
          <Col
            xs={12}
            md={12}
            style={{
              paddingBottom: '40px'
            }}
          >
            <div align='center'>
              <h2>Category Events</h2>
              <p>Discover Your Based on Your Day</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <div align='center'>
              <img
                alt=''
                src={require('./../../assets/img/IC-Education.png')}
                width='150px'
                height='150px'
                style={imgDesign}
              />
              <p
                style={{
                  paddingTop: '12px'
                }}
              >
                EDUCATION
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <div align='center'>
              <img
                alt=''
                src={require('./../../assets/img/IC-Sport.png')}
                width='150px'
                height='150px'
                style={imgDesign}
              />
              <p
                style={{
                  paddingTop: '12px'
                }}
              >
                SPORT
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <div align='center'>
              <img
                alt=''
                src={require('./../../assets/img/IC-Concert.png')}
                width='150px'
                height='150px'
                style={imgDesign}
              />
              <p
                style={{
                  paddingTop: '12px'
                }}
              >
                CONCERT
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <div align='center'>
              <img
                alt=''
                src={require('./../../assets/img/IC-Culture.png')}
                width= '150px'
                height= '150px'
                style={imgDesign}
              />
              <p
                style={{
                  paddingTop: '12px'
                }}
              >
                CULTURE
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Category;
