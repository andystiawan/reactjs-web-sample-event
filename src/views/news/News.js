import React, { Component } from 'react';

// --- core component ---
import HeaderWithoutCarousels from './../../components/headerDesign/HeaderWithoutCarousels';


class News extends Component {
  render() {
    return(
      <div>
        <HeaderWithoutCarousels />
        <p>News content in here ...</p>
      </div>
    );
  }
}

export default News;
