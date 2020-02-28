import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Card,
  Media
} from 'react-bootstrap';

import {
  Modal,
  ModalFooter,
  ModalHeader
}from 'reactstrap';
//--- Import Assets ---
import "./../../assets/css/event.css";

// --- core component ---
import HeaderWithoutCarousels from './../../components/headerDesign/HeaderWithoutCarousels';

//--- Carousel ----
import Carousel from './../../views/events/Carousel.js';

//--- Page ----
import Page from './../../views/events/Page.js';

//--- Filter ----
import FilterButton from './../../views/events/Filter.js';


class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      loggedIn: false,

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
        {
          id:'9',
          image: require('./../../assets/img/BRInnovate.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'10',
          image: require('./../../assets/img/AkuHijabku.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'11',
          image: require('./../../assets/img/BRInnovate.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
        {
          id:'12',
          image: require('./../../assets/img/AkuHijabku.png'),
          name: 'NTT Startup Challenge 2019 Final Day',
          tanggal: '25 November 2019',
          deskripsi: 'Balai Kartini @Nusa Indah Theater...'

        },
      ]
    }
    this.toggle = this.toggle.bind(this);
    this.addCart = this.addCart.bind(this);

}

handleLogin = () => {
    const { state = {} } = this.props.location;
    const { prevLocation } = state;

    this.setState(
      {
        loggedIn: true,
      },
      () => {
        this.props.history.push(prevLocation || "/payment");
      },
    );
  }

  addCart(){
    this.setState()
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {




    return(
      <div>

      {this.state.dataApi.map((item, key) =>
      <Modal style={{opacity:'0.9'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Buy a ticket</ModalHeader>

          <Card.Title>
          <Media>
           <img alt=" "style={{width:'50%', borderRadius:'30px'}} src={item.image} />
           <Media.Body style={{marginLeft:'5%',marginTop:'50px'}}>
           <span style={{fontWeight:'Bold',fontSize:'20px'}}> {item.name}  </span>
           </Media.Body>
          </Media>
          </Card.Title>

          <ModalFooter>
            <Button variant="secondary" onClick={this.toggle}>Cancel</Button>
            <Button variant="dark" href='/cart' onClick={this.toggle}>Save</Button>
            <Button variant="primary" href='/payment' loggedIn={this.state.loggedIn}  onClick={this.toggle}>BUY</Button>
          </ModalFooter>
        </Modal>
        )}


        <HeaderWithoutCarousels />


        <Container
          style={{
            paddingTop: '10px',
            paddingBottom: '100px'


          }}>
          <Carousel/>
          <FilterButton/>
          <Row>
            {this.state.dataApi.map((item, key) =>
            <Col style={{paddingTop:'1px'}}  xs={12} md={4} xl={3} key={item.id}>

              <div  align='center'>
                <Card className='eventContent' style={{ borderRadius:'30px', width: 'auto', height:'auto'}}>
                  <Card.Img style={{height:'auto'}} variant="top" src={[item.image]} />
                  <Card.Title>
                    <p align="left">
                    <p style={{margin:'2%', fontFamily:'arial', color:'#008C9C'}}>
                    <span>{item.tanggal}</span>
                    </p>
                    <p style={{marginLeft:'2%',fontFamily:'sans-serif'}}>
                    <span><a href="/payment" style={{textDecoration:'none',color:'#8D8D8D'}}>{item.name}</a></span>
                    </p>
                    </p>
                   </Card.Title>
                   <span  style={{marginLeft:'2%',color:'#8D8D8D'}}> {item.deskripsi} </span>
                   <ButtonToolbar >
                   <Button block onClick={this.toggle} variant="info" style={{ marginTop: '-8%', marginRight: '20%', marginLeft: '20%', borderRadius:'30px',}}> Buy </Button>
                  </ButtonToolbar>
                   <p align="right">
                   <a href="# "><img alt='' style={{ width: '20%', margin:'2%'}} src={require('./../../assets/img/Share.png')}/></a>
                   <a href="# "><img alt='' style={{ width: '20%', margin:'2%'}} src={require('./../../assets/img/Like.png')}/></a>
                   </p>
                    </Card>
                   </div>

            </Col>
              )}
          </Row>
          <Page/>
        </Container>

      </div>

    );
  }
}


export default Events;
