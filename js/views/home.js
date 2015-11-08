import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import Cookies from 'js-cookie';

import LoginView from './login_page';


export default React.createClass({

  onGoToMain() {
    this.props.onLoginClick();
  },

  onGoToRegister() {
    this.props.onRegisterClick();
  }, 

  onLoginClick() {
    this.props.onLogin();
  },

  render() {
    return (
        <div> 
          <img src='images/flashcardlogo.png' className='gameLogo' />
          <div className='container'>
           <LoginView onLoginClick={this.onLoginClick}/> 
            <div className='registerLine'>
              <span className='signUp'>Don&#39;t have an account?</span>
              <button onClick={this.onGoToRegister} className='registerBtn'>Create One</button>
            </div>
          </div>
          <footer>&copy;FlashMob Games</footer>
        </div>
    );
  }

});

