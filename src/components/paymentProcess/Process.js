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

class Process extends Component {
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
        <Card style={{borderRadius:'25px', width:'70%', marginLeft:'-5%'}}>
        <Card.Body style={cardBody}>
        <Media>
        <img alt=' ' src={require('./../../assets/img/Checklis.png')}/>
        <Media.Body style={{marginLeft:'1%'}}>
        <span style={{color:'#008C9C', fontWeight:'bold',fontSize:'24px'}}>Signed In</span> <img alt=' ' style={{marginLeft:'53%',width:'30%'}} src={require('./../../assets/img/Verified User logo.png')}/><br/>
        <span style={{color:'#C7C7C7', fontWeight:'bold', fontSize:'20px'}}> as Dwi Prastya Baskoro</span>
        </Media.Body>
        </Media>
        </Card.Body>
        <Card.Body style={cardBody}>
        <Media>
        <img alt=' ' src={require('./../../assets/img/2.png')}/>
        <Media.Body style={{marginLeft:'1%'}}>
        <span style={{color:'#008C9C', fontWeight:'bold',fontSize:'24px'}}>Payment Method</span>
        </Media.Body>
        </Media>
        </Card.Body>
        <Card.Body style={cardBody}>
        <ButtonToolbar align="center"  >
        <Button  style={{ backgroundColor:'transparent', margin:'1%', width:'30%'}} variant="light"> <img alt=" " style={{width:'70%'}} src={require('./../../assets/img/BCA.png')}/> </Button>
        <Button style={{ backgroundColor:'transparent', margin:'1%', width:'30%'}} variant="light"> <img alt=" " style={{width:'70%'}} src={require('./../../assets/img/mandiri.png')}/> </Button>
        <Button style={{ backgroundColor:'transparent', margin:'1%', width:'30%'}} variant="light"> <img alt=" " style={{width:'70%'}} src={require('./../../assets/img/bni.png')}/> </Button>
        </ButtonToolbar>
        <ButtonToolbar align="center" >
        <Button style={{ backgroundColor:'transparent', margin:'1%',width:'30%'}} variant="light"> <img alt=" " style={{width:'70%'}} src={require('./../../assets/img/bri.png')}/> </Button>
        <Button style={{ backgroundColor:'transparent', margin:'1%',width:'30%'}} variant="light"> <img alt=" " style={{width:'70%'}} src={require('./../../assets/img/alfamart.png')}/> </Button>
        <Button style={{ backgroundColor:'transparent', margin:'1%',width:'30%'}} variant="light"> <img alt=" " style={{width:'70%'}} src={require('./../../assets/img/indomaret.png')}/> </Button>
        </ButtonToolbar>
        </Card.Body>
        <Card.Body>
        <Media>
        <img alt=' ' src={require('./../../assets/img/dis3.png')}/>
        <Media.Body style={{marginLeft:'1%'}}>
        <span style={{color:'#008C9C', fontWeight:'bold',fontSize:'24px'}}>Confirmation</span>
        </Media.Body>
        </Media>
        </Card.Body>
        </Card>
        <Col style={{marginLeft:'4%',border:'1px #D9D9D9 solid', borderRadius:'25px'}}>
        <h3 style={{borderBottom:'1px solid #D9D9D9', height:'35px', color:'#008C9C'}}align="center">Order Summary</h3>
        <Media>
         <img alt=" "style={{width:'100px', height:'100px', borderRadius:'27px'}} src={item.image} />
         <img alt=" " style={{marginTop:'60px',marginLeft:'-30px',width:'5%'}} src={item.verified} />
         <Media.Body style={{marginTop:'10px',marginLeft:'10%'}}>
        <h5 style={{color:'#8B8B8B'}}>{item.name}</h5>
        <span>{item.penyelenggara}</span>
         </Media.Body>
        </Media>
        <br/>
        <br/>
        <p align="right">
        <img alt=' ' src={require('./../../assets/img/Harga.png')}/>
        </p>
        <br/>
        <br/>
        <br/>
        <br/>

        <p>
        <Button block href='/confirm' style={{backgroundColor:'#008C9C',borderRadius:'30px',margin:'1%', fontSize:'20px', fontWeight:'bold'}}> Checkout </Button>
        </p>
        </Col>
        </Row>
          )}
        </div>

        </Container>
      </div>
    );
  }
}

export default Process;
