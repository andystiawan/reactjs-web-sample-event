import React, { Component } from 'react';

// --- import asset ---
import "./../../assets/css/header.css"
import NavbarDesign from './NavbarDesign';

class HeaderWithoutCarousels extends Component {
  render() {
    return(
      <header>
        <div className='headerContentDesign'>
          <NavbarDesign check='false' />
        </div>
      </header>
    );
  }
}

export default HeaderWithoutCarousels;
