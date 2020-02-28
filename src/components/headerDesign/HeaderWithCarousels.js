import React, { Component } from 'react';

// --- Component Header ---
import NavbarDesign from './NavbarDesign';
/*import CarouselDesign from './CarouselDesign';*/

class HeaderWithCarousels extends Component {

  render() {
    return(
      <header>
        <div id='carouselsDesign'>
          <div className='headerContentDesign'>
            <NavbarDesign check='true' />
          </div>
          <div>
            {/* <CarouselDesign /> */}
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderWithCarousels;
