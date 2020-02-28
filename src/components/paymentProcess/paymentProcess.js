import React, { Component, useState } from 'react';
import {
  Container,

  Media,

  Button,
  ButtonToolbar,
  Card,
	Carousel,
  CardDeck ,
  Form,

} from 'react-bootstrap';

// --- core component ---
import HeaderWithoutCarousels from './../../components/headerDesign/HeaderWithoutCarousels';

//--- Import Assets ---
import "./../../assets/css/event.css";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel interval={4500} indicators={false}  fade={true} activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../assets/img/background-buy.png')}
          alt="First slide"
          style={{ height: '500px'}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../assets/img/concert02.png')}
          alt="Second slide"
          style={{ height: '500px'}}

        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../assets/img/concert03.png')}
          alt="Third slide"
          style={{ height: '500px'}}
        />

      </Carousel.Item>
    </Carousel>
  );
}


class PaymentProcess extends Component {
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
      <div  >
			 <ControlledCarousel />
        <HeaderWithoutCarousels />
        <Container align="center" style={{ marginLeft:'auto',marginTop:'-250px'}}>
          {this.state.dataApi.map((item, key) =>
          <Card align="left" style={{ borderRadius:'35px', width:'75%'}}>
          <Card.Title >
             <Media>
              <img alt=" "style={{width:'200px', height:'200px', borderRadius:'30px'}} src={item.image} />
              <img alt=" " style={{marginTop:'130px',marginLeft:'-55px'}} src={item.verified} />
              <Media.Body style={{marginTop:'50px'}}>
              <span style={{marginLeft:'10%',fontWeight:'Bold',fontSize:'37px'}}> {item.name}  </span>
              <Button variant="light" href="/events" style={{marginLeft:'20%',marginTop:'-10%'}}><img alt=''src={require('./../../assets/img/close.png')}/></Button>
              <p><span style={{marginLeft:'10%'}}> {item.penyelenggara}  </span></p>
              </Media.Body>
             </Media>

             <ButtonToolbar align="center" style={{ marginLeft:'30%', marginTop:'-5%'}}>
              <Button style={{borderRadius:'30px'}}variant="light" href="#">Technology</Button>
              <Button style={{marginLeft:'2%',borderRadius:'30px'}}  variant="light" href="#">Exhibition</Button>
              <Button style={{marginLeft:'2%',borderRadius:'30px'}}  variant="light" href="#">Free Register</Button>
             </ButtonToolbar>



             <p style={{marginLeft: '200px',marginTop:'5px'}}>
             <p><img alt=''src={require('./../../assets/img/IC-Time.png')}/>
              <span style={{marginLeft:'5%'}}>{item.time}</span></p>
             <p><img alt=''src={require('./../../assets/img/IC-Location.png')}/>
              <span style={{marginLeft:'5%'}}>{item.lokasi}</span></p>
             <p><img alt=''src={require('./../../assets/img/IC-ShareLoc.png')}/>
              <span style={{marginLeft:'5%'}}>{item.share}</span></p>
             </p>
          </Card.Title>
          <Card.Text style={{marginLeft:'5%', marginRight:'5%'}}>
          <p> Deskripsi</p>
          <p align="justify"> {item.deskripsi} </p>
          </Card.Text>
          <Card>
          <p style={{margin:'2%'}}>
          <img alt=" " style={{width:'10%'}} src={require('./../../assets/img/People-Booked.png')}/>
          <span style={{marginLeft:'10px'}}> + 102 People go to this event </span>
          </p>
          </Card>
          <Card>


          <Form>
              {['checkbox'].map(type => (
                <div key={`custom-inline-${type}`} className="mb-3">
                <p>
                <CardDeck style={{margin:'1%'}}>
                <Card style={{margin:'1%',borderRadius:'20px', border:'1 solid'}}>
                <p>
                <Form.Check
                  custom
                  inline
                  label=""
                  type={type}
                  id={`custom-inline-${type}-1`}
                  style={{position:'absolute',top:'25%'}}
                />
                <img alt=" " style={{width:'60%', marginLeft:'10%',marginTop:'2%'}} src={require('./../../assets/img/Silver.png')}/>
                </p>
                </Card>

                <Card style={{margin:'1%',borderRadius:'20px', border:'1 solid'}}>
                <Form.Check
                  custom
                  inline
                  label=""
                  type={type}
                  id={`custom-inline-${type}-2`}
                  style={{position:'absolute',top:'25%'}}
                />
                <img alt=" " style={{width:'60%', marginLeft:'10%',marginTop:'2%'}} src={require('./../../assets/img/Gold.png')}/>
                </Card>

                <Card style={{margin:'1%',borderRadius:'20px', border:'1 solid'}}>
                <Form.Check
                  custom
                  inline
                  label=""
                  type={type}
                  id={`custom-inline-${type}-3`}
                  style={{position:'absolute',top:'25%'}}
                />
                <img alt=" " style={{width:'60%', marginLeft:'10%',marginTop:'2%'}} src={require('./../../assets/img/Platinum.png')}/>
                </Card>
                </CardDeck>
              </p>
              </div>
              ))}
            </Form>
          </Card>
          <ButtonToolbar>
          <Button variant="info" className="boderRadiusButton" href='/process' style={{ margin:'1.5%' , width:'30%', fontSize:'27px', fontWeight:'Bold', fontFamily:'sans-serif'}}> Buy Now</Button>
          <div align="right" style={{marginLeft:'30%'}}>
          <a href="# "><img style={{width:'30%'}}  alt=''src={require('./../../assets/img/Comment.png')}/></a>
          <a href="# "><img style={{width:'30%'}} alt=''src={require('./../../assets/img/Love.png')}/></a>
          </div>
          </ButtonToolbar>
          </Card>
          )}
        </Container>
      </div>
    );
  }
}

export default PaymentProcess;
