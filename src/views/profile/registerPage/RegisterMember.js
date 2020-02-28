import React, { Component } from 'react';
import API from '../../../services/consumeRest';
import { Row, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import './RegisterMember.css';

class RegisterMember extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showStatus: false,
      checkboxChecked: false,
      dataPost: {
        fullname: '',
        username: '',
        phone: '',
        address: '',
        email: '',
        password: '',
        konfimasiPassword: ''
      }
    };
  }

  handelChange = (e) => {
    let newDataPost = {...this.state.dataPost};

    if (e.target.name === 'fullname') {
      newDataPost['fullname'] = e.target.value;
      this.setState({dataPost: newDataPost});
    } else if (e.target.name === 'username') {
      newDataPost['username'] = e.target.value;
      this.setState({dataPost: newDataPost});
    }  else if (e.target.name === 'email') {
      newDataPost['email'] = e.target.value;
      this.setState({dataPost: newDataPost});
    } else if (e.target.name === 'phone') {
      newDataPost['phone'] = e.target.value;
      this.setState({dataPost: newDataPost});
    } else if (e.target.name === 'password') {
      newDataPost['password'] = e.target.value;
      this.setState({dataPost: newDataPost});
    } else if (e.target.name === 'konfimasiPassword') {
      newDataPost['konfimasiPassword'] = e.target.value;
      this.setState({dataPost: newDataPost});
    } else if (e.target.name === 'checkbox-status') {
      let checked = e.target.checked;
      this.setState({checkboxChecked: e.target.checked});
    }

  }


  onSubmit = (e) => {
    e.preventDefault();


    if (this.state.checkboxChecked) {
      API.postRegisterUser(this.state.dataPost).then((result) => {
        console.log(result);
        if (result.data.status === true) {
          alert("Register Berhasil")
          this.setState({showStatus: true});
        }
      });
    } else {
      alert("Ceklist setuju dengan kebijakan dan ketentuan Venzy.com")
    }

  }

  render() {

    if (this.state.showStatus) {
      return <Redirect to='/login' />
    }

    return(
      <div className="container-content">
        <Container className="container-register">
          <Row>
            <Col xl={4} sm={12} className="container-col-md">
              <div className="container-text-content">
                <p style={{marginBottom: '0px'}}>Let's</p>
                <p>Get Started</p>
              </div>
            </Col>
            <Col xl={8} sm={12}>
              <div className="container-form-content">
                <div className="container-form-text">
                  <p className="text-form-signup">Sign Up</p>
                </div>
                <form>

                  <div className="fields-form-signup">
                    <Row>
                      <Col md={4}>
                        <label className="form-label-text">Nama Lengkap</label>
                      </Col>
                      <Col md={8}>
                        <input
                          className="input-form-register"
                          type="text"
                          name="fullname"
                          placeholder="Masukkan Nama Lengkap"
                          onChange={this.handelChange}
                          value={this.state.dataPost.fullname}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className="fields-form-signup">
                    <Row>
                      <Col md={4}>
                        <label className="form-label-text">Username</label>
                      </Col>
                      <Col md={8}>
                        <input
                          className="input-form-register"
                          type="text"
                          name="username"
                          placeholder="Masukkan Username"
                          onChange={this.handelChange}
                          value={this.state.dataPost.username}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className="fields-form-signup">
                    <Row>
                      <Col md={4}>
                        <label className="form-label-text">Email</label>
                      </Col>
                      <Col md={8}>
                        <input
                          className="input-form-register"
                          type="text"
                          name="email"
                          placeholder="Masukkan Email"
                          onChange={this.handelChange}
                          value={this.state.dataPost.email}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className="fields-form-signup">
                    <Row>
                      <Col md={4}>
                        <label className="form-label-text">No. Handphone</label>
                      </Col>
                      <Col md={8}>
                        <input
                          className="input-form-register"
                          type="text"
                          name="phone"
                          placeholder="Masukkan Nomor Handphone"
                          onChange={this.handelChange}
                          value={this.state.dataPost.phone}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className="fields-form-signup">
                    <Row>
                      <Col md={4}>
                        <label className="form-label-text">Password</label>
                      </Col>
                      <Col md={8}>
                        <input
                          className="input-form-register"
                          type="password"
                          name="password"
                          placeholder="Masukkan Password"
                          onChange={this.handelChange}
                          value={this.state.dataPost.password}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className="fields-form-signup">
                    <Row>
                      <Col md={4}>
                        <label className="form-label-text">Konfirmasi Password</label>
                      </Col>
                      <Col md={8}>
                        <input
                          className="input-form-register"
                          type="password"
                          name="konfimasiPassword"
                          placeholder="Masukkan Konfirmasi Password"
                          onChange={this.handelChange}
                          value={this.state.dataPost.konfimasiPassword}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="fields-form-signup">
                    <Row>
                      <Col md={4}>
                      </Col>
                      <Col md={8}>
                        <input
                          name="checkbox-status"
                          type="checkbox"
                          onChange={this.handelChange}
                        />
                        <span style={{fontSize: '12px', color: '#008C9C'}}>
                          Saya setuju dengan kebijakan dan ketentuan Venzy.com
                        </span>
                      </Col>
                    </Row>
                  </div>

                  <button
                    onClick={this.onSubmit}
                    className="btn-form-signup"
                  >
                    Buat Akun
                  </button>
                  <p style={{fontSize: '12px', textAlign: 'center'}}>
                    Sudah punya akun?
                    <span><a href='/login'> Sign In</a></span>
                  </p>

                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default RegisterMember;
