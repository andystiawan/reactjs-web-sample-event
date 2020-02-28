import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavbarLoginAndRegister extends Component {
  render() {
    return(
      <Navbar style={{
        paddingLeft: '60px',
        paddingTop: '20px'
      }}>
        <Navbar.Brand href="/home">
          <img
            src={process.env.PUBLIC_URL + '/logo_venzy192.png'}
            width="30"
            height="36"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span
            style={{
              display: 'inline-block',
              paddingTop: '3px',
              paddingLeft: '12px'
            }}
          >
            Venzy-ID
          </span>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavbarLoginAndRegister;
