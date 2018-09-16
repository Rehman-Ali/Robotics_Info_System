import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  getFromStorage,
  getInStorage,
  setInStorage
} from '../../utils/storage';
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
 
} from 'react-router-dom'

import WebUI from '../UI_tempalte/index';
import Signup from '../signup/signup';
import '../../styles/css/login-util.css';
import 	'../../styles/css/login.css';
import '../../styles/vendor/bootstrap/css/bootstrap.min.css';

import '../../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../styles/fonts/iconic/css/material-design-iconic-font.min.css';

import '../../styles/vendor/animate/animate.css';

import '../../styles/vendor/css-hamburgers/hamburgers.min.css';

import '../../styles/vendor/animsition/css/animsition.min.css';

import '../../styles/vendor/select2/select2.min.css';
import '../../styles/vendor/daterangepicker/daterangepicker.css';
	

class Home extends Component {
  constructor(props) {
    super(props);


    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onSignIn = this.onSignIn.bind(this);


    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
    };

  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false

            });
          } else {
            this.setState({
              isLoading: false,
            })
          }
        });

    } else {
      this.setState({
        isLoading: false
      })
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    })
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    })
  }





  onSignIn() {
    //Grab State
    const {

      signInEmail,
      signInPassword,

    } = this.state;

    this.setState({
      isLoading: true
    });
    //Post request to backend
    fetch('/api/account/signin', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          })

        }

      });
  }

  onLogOutEvent() {
    this.setState({
      token: '',
      isLoading: false

    });
  }

  render() {
    const {
      isLoading,
      token,
      signInEmail,
      signInPassword,
      signInError,
    } = this.state;

    
    
    if (isLoading) {
      return (<div><p>is Loading...</p></div>);
    }
    if (!token) {
      return (
        <Router>
        
          <div>
           <div>
            
          <div className="limiter">
        <div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
            <input
             className="input100"
              type="text"
               value={signInEmail}
                onChange={this.onTextboxChangeSignInEmail}
                 name="email"
                 placeholder="Enter Your Email"/>
						<span className="focus-input100" ></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
            <input
             className="input100" 
             type="password" 
             value={signInPassword}
             onChange={this.onTextboxChangeSignInPassword}
             name="pass"
             placeholder="Enter Password"/>
						<span className="focus-input100" ></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" onClick={this.onSignIn}>
								Login
							</button>
						</div>
            <span className="error">
          {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)

            }
          </span>
          
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account?
						</span>

						<Link className="txt2" exact to="/signup">
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
	

              
            
          </div>
          
          <div>{
            // <Signup />
          }
          </div>
          </div>
          
        
        </Router>
      );
    }
    return (
      <section>
        <div>{
          <WebUI onLogOutEvent={this.onLogOutEvent.bind(this)} />

        }
        </div>
            </section>
    );
  }
}

export default Home;
