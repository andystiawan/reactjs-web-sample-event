import React, { Component } from 'react';
/*import Slider from "react-slick";*/
import {  Card, Row, Col } from 'react-bootstrap';

// --- Import Assets ---
import "./../../assets/css/populerEvents.css";
/*import iconCalender from "./../../assets/img/IC-Calender.png";
import iconTime from "./../../assets/img/IC-Time.png";
import iconLocation from "./../../assets/img/IC-Location.png";
import iconArrow from "./../../assets/img/IC-Arrow.png";*/

class PopularEventHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : {
        image: '',
        name: '',
        tanggal: '',
        jam: '',
        lokasi: ''
      },
      dataApi: [
        {
          id:'1',
          image: require('./../../assets/img/NTTstartup.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'2',
          image: require('./../../assets/img/BRInnovate.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'3',
          image: require('./../../assets/img/AkuHijabku.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'4',
          image: require('./../../assets/img/NTTstartup.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'5',
          image: require('./../../assets/img/BRInnovate.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'6',
          image: require('./../../assets/img/NTTstartup.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'7',
          image: require('./../../assets/img/BRInnovate.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'8',
          image: require('./../../assets/img/AkuHijabku.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
      ]
    }

  }

  render() {
    /*const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };*/
    return(
      <div className='populerContainer'>
        <div className='populerContainerDesign'>
          <div className='populerTextContent'>
            <h3>Popular Events</h3>
            <Row>
              {this.state.dataApi.map((item, key) =>
              <Col xs={12} md={4} xl={3} key={item.id}>
                <div  align='center'>
                  <Card className='eventContent' style={{ borderRadius:'30px', width: '100%', height:'auto'}}>
                    <Card.Img style={{height:'auto'}} variant="top" src={[item.image]} />
                      <p style={{paddingLeft:'10px',paddingRight:'10px'}} align="left">
                      <span align="left">{item.tanggal}</span>
                      <br/>
                      <span align="left" style={{fontWeight:'bold'}}><a href="/payment" style={{textDecoration:'none',color:'#8D8D8D'}}>{item.name}</a></span>
                      <br/>
                      
                      <span align="left" style={{color:'#8D8D8D'}}> {item.deskripsi} </span>
                      </p>
                      <p align="right">
                      <a href="# "><img alt='' style={{ width: '20%', margin:'2%'}} src={require('./../../assets/img/Share.png')}/></a>
                      <a href="# "><img alt='' style={{ width: '20%', margin:'2%'}} src={require('./../../assets/img/Like.png')}/></a>
                      </p>
                      </Card>
                     </div>

              </Col>
                )}
            </Row>
          </div>
                <a href="/events" style={{textDecoration:'none'}} variant="primary"><h3 align="center">See More</h3></a>
        </div>
      </div>
    );
  }
}

export default PopularEventHome;
