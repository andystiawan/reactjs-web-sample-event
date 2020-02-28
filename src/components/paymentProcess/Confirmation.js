import React, { Component } from 'react';
import {Container,
Row,
Media,
Col,
Button,
ButtonToolbar,
Card,} from 'react-bootstrap';

// --- core component ---
import HeaderWithoutCarousels from './../../components/headerDesign/HeaderWithoutCarousels';


const cardBody = {
  borderBottom:'1px solid #D9D9D9',
  margin:'0.5%'
}

class Confirmation extends Component {
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
          image: require('./../../assets/img/EO-Test.png'),
          verified: require('./../../assets/img/verified.png'),
          penyelenggara: 'By The Event Co.',
          price: 'Rp. 250.000',
          name: 'EVA JAKARTA EVENT',
          share: 'maps.google.com/xxxxxxxxxxxxxxxxx',
          time: '22 - 24 November 2019 (09:00 - 14:00)',
          lokasi: 'Tower IT Developer Blok M, Jakarta Selatan',
          deskripsi: 'Acara tahunan untuk mengenalkan inovasi baru dan menjadi wadah untuk berdiskusi mengenai perkembangan dan manfaat dari teknologi AI. Solusi itu dapat mengelola berbagai solusi mulai dari pengelolaan percakapan, pengembangan asisten virtual untuk perusahaan, integrals antara chatbot dan operational customer service, membuat asisten virtual berbasis suara, hingga mengelola aktivitas kampanye pemasaran.',
        }
      ]
    }
}
  render() {
    return(
      <div>
        <HeaderWithoutCarousels />

        <Container>
        <div>
        {this.state.dataApi.map((item, key) =>
        <Row>
        <Card style={{borderRadius:'25px', width:'100%',height:'10%'}}>
        <Card.Body style={cardBody}>
        <Media>
        <img alt=' ' src={require('./../../assets/img/Checklis.png')}/>
        <Media.Body style={{marginLeft:'1%'}}>
        <span style={{color:'#008C9C', fontWeight:'bold',fontSize:'24px'}}>Signed In</span> <img alt=' ' style={{marginLeft:'66%',width:'20%'}} src={require('./../../assets/img/Verified User logo.png')}/><br/>
        <span style={{color:'#C7C7C7', fontWeight:'bold', fontSize:'20px'}}> as Dwi Prastya Baskoro</span>


        </Media.Body>
        </Media>
        </Card.Body>
        <Card.Body style={cardBody}>
        <Media>
        <img alt=' ' src={require('./../../assets/img/Checklis.png')}/>
        <Media.Body style={{marginLeft:'1%'}}>
        <span style={{color:'#008C9C', fontWeight:'bold',fontSize:'24px'}}>Payment Method</span>
        </Media.Body>
        </Media>
        </Card.Body>
        <Card.Body>
        <Media>
        <img alt=' ' src={require('./../../assets/img/3.png')}/>
        <Media.Body style={{marginLeft:'1%'}}>
        <span style={{color:'#008C9C', fontWeight:'bold',fontSize:'24px'}}>Confirmation</span>
        <p align="center" style={{marginTop:'5%'}}>
        <img alt=' ' src={require('./../../assets/img/BCApayment.png')} />
        </p>
        </Media.Body>
        </Media>
        </Card.Body>
        </Card>

        </Row>
          )}
        </div>

        </Container>
      </div>
    );
  }
}

export default Confirmation;
