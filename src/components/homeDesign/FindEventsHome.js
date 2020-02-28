import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// --- Import Assets ---
import './../../assets/css/recommended.css';

class FindEventsHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    return(
      <div className='populerContainer'>
        <div className='populerContainerDesign'>
          <div className='populerTextContent'>
            <h3>Find Events By Category</h3>
                <div className='FindContainerLink'>
                <p className='FindContainerLink'>
                <a href="# "><span>All</span></a>
                <a href="# "><span style={{marginLeft:'3%'}}>Nearest</span></a>
                <a href="# "><span style={{marginLeft:'3%'}}>For You</span></a>
                <a href="# "><span style={{marginLeft:'3%'}}>Music</span></a>
                <a href="# "><span style={{marginLeft:'3%'}}>Food & Beverage</span></a>
                <a href="# "><span style={{marginLeft:'3%'}}>Technology</span></a>
                <a href="# "><span style={{marginLeft:'3%'}}>Culture</span></a>
                <a href="# "><span style={{marginLeft:'3%'}}>Exhibition</span></a>
                </p>
                </div>
            <Row>
              {this.state.dataApi.map((item, key) =>
              <Col style={{paddingTop:'1px'}}  xs={12} md={4} xl={3} key={item.id}>

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

export default FindEventsHome;
