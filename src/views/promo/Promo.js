import React, { Component } from 'react';

// --- core component ---
import HeaderWithoutCarousels from './../../components/headerDesign/HeaderWithoutCarousels';

class Promo extends Component {
  render() {
    return(
      <div>
        <HeaderWithoutCarousels />
        <p>Promo content in here ...</p>
      </div>
    );
  }
}

export default Promo;
