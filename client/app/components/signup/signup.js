import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  getFromStorage,
  getInStorage,
  setInStorage
} from '../../utils/storage';

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
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
 
} from 'react-router-dom'


class Signup extends Component {
  constructor(props) {
    super(props);


    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);

    this.state = {
      isLoading: true,
      signUpError: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: ''
    };

  }


  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    })
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    })
  }
  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    })
  }
  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    })
  }


  onSignUp(e) {
    //Grab State
    const {
        isLoading,
        signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword

    } = this.state;

    this.setState({
      isLoading: true
    });
    //Post request to backend
    fetch('/api/account/signup', {
     
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
            
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpPassword: ''
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          })

        }

      });
      e.preventDefault();
  };


  render() {
    const {
      
      
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError
    } = this.state;

   
      return (
        <Router>
            <div>
              
           
<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form ">
					<span className="login100-form-title p-b-26">
						For SignUp
					</span>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

					<div className="wrap-input100">
            <input
             className="input100"
              type="text"
               value={signUpFirstName}
                onChange={this.onTextboxChangeSignUpFirstName}
                  placeholder="First Name"/>
						<span className="focus-input100" ></span>
					</div>

          <div className="wrap-input100 " >
            <input
             className="input100"
              type="text"
               value={signUpLastName}
                onChange={this.onTextboxChangeSignUpLastName}
                
                 placeholder="Last Name"/>
						<span className="focus-input100" ></span>
					</div>

         <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c" >
         {/* data-validate = "Valid email is: a@b.c" */}
            <input
             className="input100"
              type="text"
               value={signUpEmail}
                onChange={this.onTextboxChangeSignUpEmail}
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
             value={signUpPassword}
             onChange={this.onTextboxChangeSignUpPassword}
             name="pass"
             placeholder="Enter Password"/>
						<span className="focus-input100" ></span>
					</div>


					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" onClick={this.onSignUp}>
								SignUp
							</button>
						</div>
              <div>
             
          <span className="error">
          {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)

            }
            </span>
           
                  </div>
        	<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" >
							<Link  className="login100-form-btn btnn" exact to="/">Back</Link>
              	
							</button>
						</div>
          </div>
					</div>
          </form>
			</div>
		</div>
	</div>
	
 

	<div id="dropDownSelect1"></div>
	

      </div>
      </Router>
       );

         }
   
  }


export default Signup;
