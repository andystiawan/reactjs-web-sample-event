import React, { Component } from 'react';
import API from '../../../services/consumeRest';
import { Row, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import '..//registerPage/RegisterMember.css';

class LoginMember extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      dataPost: {
        email: '',
        password: '',
        remember_me: false
      }
    };
  }

  handelChange = (e) => {
    let newDataPost = {...this.state.dataPost};

    if (e.target.name === 'email') {
      newDataPost['email'] = e.target.value;
      this.setState({dataPost: newDataPost});
    } else if (e.target.name === 'password') {
      newDataPost['password'] = e.target.value;
      this.setState({dataPost: newDataPost});
    } else if (e.target.name === 'checkbox-status') {
      newDataPost['remember_me'] = e.target.checked;
      this.setState({dataPost: newDataPost});
    }

  }


  onSubmit = (e) => {
    e.preventDefault();

    API.postLoginUser(this.state.dataPost).then((result) => {
      if (result.data.status) {
        console.log(result.data.data)
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
              <div className="container-form-content-register">
                <div className="container-form-text">
                  <p className="text-form-signup">Sign In</p>
                </div>
                <form>

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
                      </Col>
                      <Col md={8}>
                        <input
                          name="checkbox-status"
                          type="checkbox"
                          onChange={this.handelChange}
                        />
                        <span style={{fontSize: '12px', color: '#008C9C'}}>
                          Remember Me
                        </span>
                      </Col>
                    </Row>
                  </div>

                  <button
                    onClick={this.onSubmit}
                    className="btn-form-signup"
                  >
                    Masuk
                  </button>
                  <p style={{fontSize: '12px', textAlign: 'center'}}>
                    Belum punya akun?
                    <span><a href='/register'> Sign Up</a></span>
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

export default LoginMember;
