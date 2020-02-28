import React, { Component } from 'react';
import { Navbar, Nav, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import SearchBox from './../../components/headerDesign/SearchBox';
import makeExpanding from './../../components/headerDesign/expanding-animation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideBar from './../../components/headerDesign/SideBar';


// --- Import Assets ---
import "./../../assets/css/header.css";



const ExpandingSearchBox = makeExpanding(SearchBox);

// --- CSS inline ---
const navTextDesign = {
  color : '#8B8B8B',
  textTransform: 'uppercase',
  paddingTop: '11px',
  marginRight: '10px'
};

const navbarButtonRegister = {
  border: '0.5px solid black',
  width: '100px',
  height: '30px',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  paddingLeft: '12px',
  paddingRight: '12px',
  boxShadow: 'none',
  fontWeight: 'Bold',
  textAlign:'center'
}

const navbarButtonLogin = {
  border: 'none',
  width: '100px',
  height: '30px',
  textAlign: 'center',
  fontWeight: 'Bold',
  borderRadius: '4px',
  backgroundColor: 'white',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '1px',
  boxShadow: 'none'
}

const navbarKeranjangContainer = {

  paddingRight: '18px',
  paddingLeft: '14px',
  marginRight: '10px'
}

const navbarKeranjang = {
  color: 'grey',
  width: '26px',
  height: '26px',
  paddingTop: '4px'
}


const style = {
  width: '26px',
  height: '26px',
  paddingTop: '4px',
  position:'relative',
  transform: 'translate(-50%, -50%)',
}



class NavbarDesign extends Component {



  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      isLoggedIn : false
    };
    this.onScroll = this.onScroll.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });

    if (localStorage.getItem('access_token') !== null) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }

  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  checkUpdate() {
    if (this.props.check === 'true') {
      return this.state.isTop ? 'navNoScrollDesign' : 'navScrollDesign'
    } else {
      return 'navScrollDesign'
    }
  }

  onLogout(e) {
    e.preventDefault();
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_type');
    localStorage.clear();
    this.setState({ isLoggedIn: false })
  }

  render() {
    return(
      <MuiThemeProvider >
      <Navbar
        fixed='top'
        collapseOnSelect
        expand="lg"
        className={this.checkUpdate()}
        style={{ backgroundColor:'transparent'}}
      >
        <Navbar.Brand
          href="/home"
          style={{
            color: 'transparent'
          }}
        >
          <img
            alt='logo'
            src={process.env.PUBLIC_URL + '/logo_venzy192.png'}
            width="30"
            height="36"
            className="d-inline-block align-top"
          />
          <span
            style={{
              display: 'inline-block',
              paddingLeft: '13px',
              fontSize: '30px',
              fontStyle: 'Century Gothic',
              color : '#8B8B8B'
            }}
          >
            Venzy
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ml-auto'>

            <div style={style}>
                <ExpandingSearchBox/>
            </div>

            <Nav.Link href="#" style={{display: this.state.isLoggedIn ? 'block' : 'none'}}>
              <OverlayTrigger
                trigger="click"
                key='bottom'
                placement='bottom'
                overlay={
                  <Popover
                    style=
                      {{
                        marginTop: '14px',
                        display: this.state.isLoggedIn ? 'block' : 'none'
                      }}
                    id={`popover-positioned-bottom`}
                  >
                    <Popover.Title as="h3">Hello, {localStorage.getItem('user_type')}</Popover.Title>
                    <Popover.Content>
                      <a href='/' onClick={this.onLogout}>
                        Logout
                      </a>
                    </Popover.Content>
                  </Popover>
                }
              >
              <SideBar/>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link href="/register" style={{display: this.state.isLoggedIn ? 'none' : 'block'}}>
              <div style={navbarButtonRegister}>
                <p style={{color: 'black'}}>Register</p>
              </div>
            </Nav.Link>
            <Nav.Link href="/login" style={{display: this.state.isLoggedIn ? 'none' : 'block'}}>
              <div style={navbarButtonLogin}>
                <p style={{color: 'black'}}>Login</p>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </MuiThemeProvider>
    );
  }
}

export default NavbarDesign;
