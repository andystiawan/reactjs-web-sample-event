import React, { Component } from 'react';
import {
  Container,

} from 'react-bootstrap';

// --- core component ---
import HeaderWithCarousels from './../../components/headerDesign/HeaderWithCarousels';
import PopularEventHome from './../../components/homeDesign/PopularEventHome';
import FindEventsHome from './../../components/homeDesign/FindEventsHome';
import HighlightHome from './../../components/homeDesign/HighlightHome';
import Footer from './../../views/home/Footer';


const containerHome = {
  paddingTop: '120px',
  paddingBottom: '120px'
}

class Home extends Component {

  render() {
    return (
      <div style={{background:'#EFEFEF'}}>
        <HeaderWithCarousels />
        <Container style={containerHome}>


        <PopularEventHome />
        <FindEventsHome />

        </Container>
        <HighlightHome />
        <img alt=' ' src={require("./../../assets/img/downloadnow.png")}/>

        <Footer/>
      </div>


    );
  }

}

export default Home;
