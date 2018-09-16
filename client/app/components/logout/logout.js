import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  getFromStorage,
  getInStorage,
  setInStorage
} from '../../utils/storage';

class Logout extends Component {
  constructor(props) {
    super(props);



    this.state = {
      isLoading: true,
      token: '',
      
    };

  }

  onlogout(){
    this.setState({
      isLoading:true
    })
    const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
         const { token } = obj;
        // verify token
        fetch('/api/account/logout?token=' + token)
          .then(res => res.json())
          .then(json => {
            if (json.success) {
              this.setState({
                token:'',
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
  
  


  render() {
    const {
      isLoading,
      token,
      
    } = this.state;

   
    return (
      <div>
          <button onClick={this.onlogout}>logout</button>
      </div>


    );
  }
}

export default Logout;
