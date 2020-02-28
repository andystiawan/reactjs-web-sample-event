import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import NavbarLoginAndRegister from './../../../components/headerDesign/NavbarLoginAndRegister';
import API from '../../../services/consumeRest';

// --- import CSS & IMG-->
// import { url_api, patch_api_login } from './../../../assets/linkFunction.js';
import "./../../../assets/css/profile.css";
import iconUser from './../../../assets/img/IC-User.png';
import iconSee from './../../../assets/img/IC-See.png';
import iconSeeHide from './../../../assets/img/IC-See-Hide.png';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSee: false,
      name: ['', '', '', ''],
      focused: [false, false],
      dataPost: {
        email: '',
        password: '',
        remember_me: false
      }
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.handelType = this.handelType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkedChange = this.checkedChange.bind(this);
  }

  onFocus(angka) {
    if (this.state.focused[angka] === false) {
      let f = this.state.focused.slice();
      f[angka] = true;
      this.setState({focused: f});
    }
  }

  onBlur(angka) {
    if (this.state.focused[angka] === true && this.state.name[angka] === '') {
      let f = this.state.focused.slice();
      f[angka] = false;
      this.setState({focused: f});
    }
  }

  handelType = (angka) => {

    const inputType = this.refs.inputPassword;
    if (inputType.type === 'password') {
      inputType.type = 'text';
      if (this.state.isSee === false) {
        let seeHide = this.state.isSee;
        seeHide = true;
        this.setState({isSee: seeHide});
      }
    } else {
      inputType.type = 'password';
      if (this.state.isSee === true) {
        let see = this.state.isSee;
        see = false;
        this.setState({isSee: see});
      }
    }
  }

  handelChange(angka, e) {
    const data = e.target.value;
    let n = this.state.name.slice();
    n[angka] = data;
    this.setState({name: n});

    let newDataPost = {...this.state.dataPost};
    newDataPost[e.target.name] = e.target.value;
    this.setState({dataPost: newDataPost});
  }

  checkedChange(e) {
    let newDataPost = {...this.state.dataPost};
    newDataPost[e.target.name] = true;
    this.setState({dataPost: newDataPost});
  }

  onSubmit(e) {
    e.preventDefault();


    API.postLoginUser(this.state.dataPost).then((result) => {
      if (result.data.status) {

        localStorage.setItem('access_token', result.data.data.access_token);
        localStorage.setItem('token_type', result.data.data.token_type);
        localStorage.setItem('expires_at', result.data.data.expires_at);
        localStorage.setItem('username', result.data.data.user_data.username);
        localStorage.setItem('email', result.data.data.user_data.email);
        localStorage.setItem('user_id', result.data.data.user_data.user_id);
        localStorage.setItem('user_type', result.data.data.user_data.user_type);

        this.setState({
          dataPost: {
            email: '',
            password: '',
            remember_me: false
          },
          isLoggedIn: true
        })
      }
    })

    // var querystring = require('querystring');
    // axios.post(url_api + patch_api_login,
    //   querystring.stringify(this.state.dataPost), {
    //     headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
    //   }).then(res => {
    //     if (res.data.status === true) {
    //       console.log(res);
    //       localStorage.setItem('access_token', res.data.data.access_token);
    //       localStorage.setItem('token_type', res.data.data.token_type);
    //       localStorage.setItem('expires_at', res.data.data.expires_at);
    //       localStorage.setItem('user_type', res.data.data.user_type);
    //       this.setState({isLoggedIn: true});
    //     }
    //   }).catch(err => {
    //     console.log(err);
    //   });
  }

  componentDidMount() {
    if(localStorage.getItem('access_token') === null) {
      this.setState({isLoggedIn: false});
    }
  }

  render() {

    if (this.state.isLoggedIn) {
      return <Redirect to='/' />
    }

    return(
      <div id='contentProfile2'>
        <NavbarLoginAndRegister />
        <div align='right'>
          <div
            style={{
              width: '450px',
              height: '420px',
              backgroundColor: 'white',
              borderRadius: '40px',
              marginTop: '44px',
              marginRight: '60px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
          >

            <div
              align='center'
              style={{
                paddingTop : '26px',
                paddingLeft: '60px',
                paddingRight: '60px'
              }}
            >
              <img alt='' src={iconUser} style={{borderRadius: '20px'}}/>
              <div align='left'>
                <h5
                  style={{
                    marginTop: '4px',
                    marginBottom: '8px'
                  }}
                >
                  Sign In
                </h5>
                <p
                  style={{
                    fontSize: '12px',
                    marginBottom: '16px'
                  }}
                >
                  Explore Much Experience on Venzy-Id
                </p>

                <form onSubmit={this.onSubmit}>

                  <div
                    className='contentInputContainer'
                    style={{
                      paddingTop: this.state.focused[0] ? '0px' : '7px'
                    }}
                  >
                    <fieldset
                      className='contentFieldsetContainer'
                      style={{border: this.state.focused[0] ? '1px solid #4FCFDC' : '1px solid #707070'}}
                    >
                      <legend
                        className='contentLegendDesign'
                        style={{
                          display: this.state.focused[0] ? 'block' : 'none',
                          color: this.state.focused[0] ? '#4FCFDC' : 'black'
                        }}
                      >
                        Email Address
                      </legend>
                      <input
                        className='inputContentDesign'
                        type='text'
                        name='email'
                        placeholder={this.state.focused[0] ? '' : 'Email Address'}
                        onFocus={() => this.onFocus(0)}
                        onBlur={() => this.onBlur(0)}
                        onChange={(e)=>this.handelChange(0, e)}
                        style={{
                          marginTop: this.state.focused[0] ? '0px' : '8px'
                        }}
                      />
                    </fieldset>
                  </div>



                  <div
                    className='contentInputContainer'
                    style={{
                      paddingTop: this.state.focused[1] ? '0px' : '7px'
                    }}
                  >
                    <fieldset
                      className='contentFieldsetContainer'
                      style={{border: this.state.focused[1] ? '1px solid #4FCFDC' : '1px solid #707070'}}
                    >
                      <legend
                        className='contentLegendDesign'
                        style={{
                          display: this.state.focused[1] ? 'block' : 'none',
                          color: this.state.focused[1] ? '#4FCFDC' : 'black'
                        }}
                      >
                        Password
                      </legend>
                      <input
                        className='inputContentDesign'
                        type='password'
                        name='password'
                        ref = 'inputPassword'
                        placeholder={this.state.focused[1] ? '' : 'Password'}
                        onFocus={() => this.onFocus(1)}
                        onBlur={() => this.onBlur(1)}
                        onChange={(e)=>this.handelChange(1, e)}
                        style={{
                          width: '88%',
                          marginTop: this.state.focused[1] ? '0px' : '8px'
                        }}
                      />
                      <img
                        alt=''
                        src={this.state.isSee ? iconSeeHide : iconSee}
                        onClick={()=>this.handelType()}
                        style={{background: 'transparent', width: '22px', height: '22px'}}/>
                    </fieldset>
                  </div>

                  <Row
                    style={{
                      marginTop: '6px'
                    }}
                  >
                    <Col md={6}>
                      <input type="checkbox" name='remember_me' onChange={this.checkedChange}/>
                      <span style={{fontSize: '12px',}}>Remember Me</span>
                    </Col>
                    <Col md={6} align='right'>
                      <a href='/' style={{color: '#2500EE', fontSize: '12px'}}>Forgot Password ?</a>
                    </Col>
                  </Row>


                  <button
                    type='submit'
                    style={{
                      width: '100%',
                      height: '50px',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      border: 'none',
                      borderRadius: '30px',
                      color: 'white',
                      marginTop: '12px',
                      marginBottom: '10px',
                      backgroundColor: '#18E2F6',
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                    }}
                  >
                    Create Account
                  </button>
                </form>
              </div>
              <p style={{fontSize: '12px', marginTop: '4px'}}>
                Don't Have An Account  ?
                <span style={{color: '#91EBF5', paddingLeft: '6px'}}><a href='/register'>Sign Up</a></span>
              </p>
            </div>


          </div>
        </div>


      </div>
    );
  }
}

export default Login;
