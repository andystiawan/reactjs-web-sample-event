import React, { Component } from 'react';
import API from '../../../services/consumeRest';

// --- import CSS & IMG--
import "./../../../assets/css/profile.css";
import iconUser from './../../../assets/img/IC-User.png';
import iconSee from './../../../assets/img/IC-See.png';
import iconSeeHide from './../../../assets/img/IC-See-Hide.png';

// --- import Component
import NavbarLoginAndRegister from './../../../components/headerDesign/NavbarLoginAndRegister';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSee: [false, false],
      name: ['', '', '', ''],
      focused: [false, false, false, false],
      dataPost: {
        fullname: '',
        username: '',
        phone: '',
        address: '',
        email: '',
        password: ''
      }
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.handelType = this.handelType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  handelType = (angka, e) => {
    const inputType = [];
    inputType[0] = this.refs.inputPassword0;
    inputType[1] = this.refs.inputPassword1;

    if (inputType[angka].type === 'password') {
      inputType[angka].type = 'text';
      if (this.state.isSee[angka] === false) {
        let seeHide = this.state.isSee.slice();
        seeHide[angka] = true;
        this.setState({isSee: seeHide});
      }
    } else {
      inputType[angka].type = 'password';
      if (this.state.isSee[angka] === true) {
        let see = this.state.isSee.slice();
        see[angka] = false;
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

    if (e.target.name === 'fullname') {
      newDataPost['fullname'] = e.target.value;
      this.setState({dataPost: newDataPost})
    } else if (e.target.name === 'email') {
      newDataPost['email'] = e.target.value;
      this.setState({dataPost: newDataPost})
    } else if (e.target.name === 'password') {
      newDataPost['password'] = e.target.value;
      this.setState({dataPost: newDataPost})
    }

  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.dataPost);

    API.postRegisterUser(this.state.dataPost).then((result) => {
      console.log(result);
      if (result.data.status === true) {
        alert("Register Berhasil");
      }
    });


    // var querystring = require('querystring');
    //
    // axios.post(url_api + patch_api_register, this.state.dataPost, {
    //     headers: { 'content-type': 'multipart/form-data' }
    //   }).then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    return(
      <div id='contentProfile'>

        <NavbarLoginAndRegister />

        <div align='right'>
          <div
            style={{
              width: '450px',
              height: '530px',
              backgroundColor: 'white',
              borderRadius: '40px',
              marginTop: '0px',
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
                  Sign Up
                </h5>
                <p
                  style={{
                    fontSize: '12px',
                    marginBottom: '16px'
                  }}
                >
                  Create a free account on Venzy and get started
                </p>

                <form>

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
                        Full Name
                      </legend>
                      <input
                        className='inputContentDesign'
                        type='text'
                        name='fullname'
                        placeholder={this.state.focused[0] ? '' : 'Full Name'}
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
                        Email Address
                      </legend>
                      <input
                        className='inputContentDesign'
                        type='email'
                        name='email'
                        placeholder={this.state.focused[1] ? '' : 'Email Address'}
                        onFocus={() => this.onFocus(1)}
                        onBlur={() => this.onBlur(1)}
                        onChange={(e)=>this.handelChange(1, e)}
                        style={{
                          marginTop: this.state.focused[1] ? '0px' : '8px'
                        }}
                      />
                    </fieldset>
                  </div>

                  <div
                    className='contentInputContainer'
                    style={{
                      paddingTop: this.state.focused[2] ? '0px' : '7px'
                    }}
                  >
                    <fieldset
                      className='contentFieldsetContainer'
                      style={{border: this.state.focused[2] ? '1px solid #4FCFDC' : '1px solid #707070'}}
                    >
                      <legend
                        className='contentLegendDesign'
                        style={{
                          display: this.state.focused[2] ? 'block' : 'none',
                          color: this.state.focused[2] ? '#4FCFDC' : 'black'
                        }}
                      >
                        Password
                      </legend>
                      <input
                        className='inputContentDesign'
                        type='password'
                        name='password'
                        ref = 'inputPassword0'
                        placeholder={this.state.focused[2] ? '' : 'Password'}
                        onFocus={() => this.onFocus(2)}
                        onBlur={() => this.onBlur(2)}
                        onChange={(e)=>this.handelChange(2, e)}
                        style={{
                          width: '88%',
                          marginTop: this.state.focused[2] ? '0px' : '8px'
                        }}
                      />
                      <img
                        alt=''
                        src={this.state.isSee[0] ? iconSeeHide : iconSee}
                        onClick={()=>this.handelType(0)}
                        style={{background: 'transparent', width: '22px', height: '22px'}}/>
                    </fieldset>
                  </div>

                  <div
                    className='contentInputContainer'
                    style={{
                      paddingTop: this.state.focused[3] ? '0px' : '7px'
                    }}
                  >
                    <fieldset
                      className='contentFieldsetContainer'
                      style={{border: this.state.focused[3] ? '1px solid #4FCFDC' : '1px solid #707070'}}
                    >
                      <legend
                        className='contentLegendDesign'
                        style={{
                          display: this.state.focused[3] ? 'block' : 'none',
                          color: this.state.focused[3] ? '#4FCFDC' : 'black'
                        }}
                      >
                        Retype Password
                      </legend>
                      <input
                        className='inputContentDesign'
                        type='password'
                        name='password'
                        ref = 'inputPassword1'
                        placeholder={this.state.focused[3] ? '' : 'Retype Password'}
                        onFocus={() => this.onFocus(3)}
                        onBlur={() => this.onBlur(3)}
                        onChange={(e)=>this.handelChange(3, e)}
                        style={{
                          width: '88%',
                          marginTop: this.state.focused[3] ? '0px' : '8px'
                        }}
                      />
                      <img
                        alt=''
                        src={this.state.isSee[1] ? iconSeeHide : iconSee}
                        onClick={()=>this.handelType(1)}
                        style={{background: 'transparent', width: '22px', height: '22px'}}/>
                    </fieldset>
                  </div>



                  <div
                    style={{
                      marginTop: '6px'
                    }}
                  >
                    <input type="checkbox" />

                    <span style={{fontSize: '12px'}}>
                      I have accepted the
                      <a
                        href='/'
                        style={{
                          color: '#2500EE',
                          textDecoration: 'underline'
                        }}
                      >
                        Term and Conditions
                      </a>
                    </span>
                  </div>

                  <button
                    onClick={this.onSubmit}
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
                Already Registered ?
                <span style={{color: '#91EBF5', paddingLeft: '6px'}}><a href='/login'>Sign In</a></span>
              </p>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Register;
