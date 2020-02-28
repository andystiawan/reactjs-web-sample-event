import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// --- core component ---
import HeaderWithoutCarousels from './../../components/headerDesign/HeaderWithoutCarousels';

//--- Carousel ----
import Carousel from './../../views/events/Carousel.js';



/*const highlightContainer = {
  width: '100%',
  height: '50px',
  backgroundColor: '#5CEAE3',
  paddingTop: '13px',
}*/

class Highlight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataApi: [
        {
          id:'1',
          image: require('./../../assets/img/Gbr1.png'),
        },
        {
          id:'2',
          image: require('./../../assets/img/Gbr2.png'),
        },
        {
          id:'3',
          image: require('./../../assets/img/Gbr3.png'),
        },
        {
          id:'4',
          image: require('./../../assets/img/Gbr4.png'),
        },
        {
          id:'5',
          image: require('./../../assets/img/Gbr1.png'),
        },
        {
          id:'6',
          image: require('./../../assets/img/Gbr2.png'),
        },
        {
          id:'7',
          image: require('./../../assets/img/Gbr3.png'),
        },
        {
          id:'8',
          image: require('./../../assets/img/Gbr4.png'),
        },
        {
          id:'9',
          image: require('./../../assets/img/Gbr1.png'),
        },
        {
          id:'10',
          image: require('./../../assets/img/Gbr2.png'),
        },
        {
          id:'11',
          image: require('./../../assets/img/Gbr3.png'),
        },
        {
          id:'12',
          image: require('./../../assets/img/Gbr4.png'),
        },
        {
          id:'13',
          image: require('./../../assets/img/Gbr1.png'),
        },
        {
          id:'14',
          image: require('./../../assets/img/Gbr2.png'),
        },
        {
          id:'15',
          image: require('./../../assets/img/Gbr3.png'),
        },
        {
          id:'16',
          image: require('./../../assets/img/Gbr4.png'),
        },

      ]
    }

  }

  render() {
    return(
      <div>
      <HeaderWithoutCarousels/>
      <Container
        style={{
          paddingTop: '10px',
          paddingBottom: '100px'

        }}>
          <Carousel/>
          <Row>

          {this.state.dataApi.map((item, key) =>
          <Col style={{paddingTop:'1px'}}  xs={12} md={4} xl={3} key={item.id}>
            <div  className='eventContent' align='center'>
                <a href="/highlight"> <img alt=' 'style={{width: '100%', aspectRatio: '1'}} src={[item.image]} /></a>
            </div>
          </Col>
            )}

          </Row>
          </Container>
        </div>

    );
  }
}

export default Highlight;
