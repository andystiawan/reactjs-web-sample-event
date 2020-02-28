import React, { Component } from 'react';
import Slider from "react-slick";
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';

// --- import asset ---
import "./../../assets/css/header.css"

// const imgDesignCarousels = {
//   borderRadius: '40px'
// }

const imgDesignCarouselsRight = {
  borderTopLeftRadius: '60px',
  borderBottomLeftRadius: '60px'
};

const imgDesignCarouselsLeft = {
  borderTopRightRadius: '60px',
  borderBottomRightRadius: '60px'
};

const fontColor ={
  color:'black',
  fontFamily: 'sans-serif'
}

const button ={
  borderRadius: '30px'
}

class CarouselDesign extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false
    };

    return(
      <Slider {...settings} >
        <div id='sliderDesign'>
          <Row>
            <Col
              xs={7}
              md={7}
              align='right'
            >
              <div
                align='center'

                style={{
                  width: '430px',
                  marginTop: '80px',


                }}
              >

                <p style={fontColor} id='txtDesignCarousels'>Prepare Yourself For</p>
                <p style={fontColor} id='txtDesignCarousels1'>Amazing Concert</p>
                <p style={fontColor} id='txtDesignCarousels2'>Launch Apps</p>
                <p style={fontColor} id='txtDesignCarousels3'>25 December 2019 -Jakarta</p>

                <Button style={button} variant="primary" href="events">Buy Ticket Now</Button>
              </div>
            </Col>
            <Col
              xs={5}
              md={5}
            >
              <img
                alt='Gambar Jumbotron'
                src={require('./../../assets/img/venzy.png')}
                width='100%'
                height='400px'
                style={imgDesignCarouselsRight}
              />
            </Col>
          </Row>
        </div>
        <div id='sliderDesign'>
          <Row>
            <Col
              xs={5}
              md={5}
            >
              <img
                alt='Gambar Jumbotron'
                src={require('./../../assets/img/venzy.png')}
                width='100%'
                height='400px'
                style={imgDesignCarouselsLeft}
              />
            </Col>
            <Col
              xs={7}
              md={7}
              align='left'
            >
              <div
                align='center'
                style={{
                  width: '430px',
                  marginTop: '80px'
                }}
              >
                <p style={fontColor} id='txtDesignCarousels'>Prepare Yourself For</p>
                <p style={fontColor} id='txtDesignCarousels1'>Amazing Concert</p>
                <p style={fontColor} id='txtDesignCarousels2'>Launch Apps</p>
                <p style={fontColor} id='txtDesignCarousels3'>25 December 2019 -Jakarta</p>
                <Button style={button} variant="primary" href="/events">Buy Ticket Now</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Slider>

    );
  }
}

export default CarouselDesign;
