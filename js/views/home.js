import React from 'react';
import LoginView from './login_page';



export default React.createClass({

  onGoToRegister() {
    this.props.onRegisterClick();
  },
  

  render() {
    return (
      <div> 
        <img src='images/flashcardlogo.png' className='gameLogo' />
        <div className='container'>
          <LoginView />
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

