import React, { Component } from 'react';
class Footer extends Component {

  render() {
    return (
      <div style={{backgroundColor: 'white', paddingTop: '1%'}}>
          <p>
          <span style={{color: '#008C9C'}}> © 2019 Venzy </span>
          <a href="/about"><span style={{marginLeft:'15%'}}>About</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Blog</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Help</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Careers</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Investors</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Developers</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Terms</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Privacy</span></a>
          <a href="# "><span style={{marginLeft:'3%'}}>Cookies</span></a>


          <a href="# "><span style={{marginLeft:'15%'}}>English</span></a>
          </p>
      </div>


    );
  }

}

export default Footer;
